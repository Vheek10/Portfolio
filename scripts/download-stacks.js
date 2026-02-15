#!/usr/bin/env node
/**
 * download-stacks.js
 * Downloads external tech stack icons used in the project into `public/icons`.
 * Usage: `node scripts/download-stacks.js`
 *
 * @format
 */

const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const { URL } = require("url");

const destDir = path.join(__dirname, "..", "public", "icons");

const icons = [
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
		file: "figma.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		file: "javascript.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		file: "typescript.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		file: "react.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		file: "nextjs.svg",
	},
	{
		url: "https://cryptologos.cc/logos/solidity-sol-solid-logo.svg?v=024",
		file: "solidity.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
		file: "ethereum.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		file: "git.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		file: "nodejs.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
		file: "tailwindcss.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		file: "mongodb.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		file: "postgresql.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
		file: "docker.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
		file: "rust.svg",
	},
	{
		url: "https://cryptologos.cc/logos/move-token-move.svg?v=024",
		file: "move.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
		file: "kubernetes.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
		file: "terraform.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
		file: "aws.svg",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
		file: "github-actions.svg",
	},
];

function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
}

function download(url, dest) {
	return new Promise((resolve, reject) => {
		try {
			const parsed = new URL(url);
			const lib = parsed.protocol === "https:" ? https : http;
			const req = lib.get(
				parsed,
				{ headers: { "User-Agent": "Node.js" } },
				(res) => {
					if (
						res.statusCode >= 300 &&
						res.statusCode < 400 &&
						res.headers.location
					) {
						// Follow redirect
						return download(res.headers.location, dest)
							.then(resolve)
							.catch(reject);
					}
					if (res.statusCode !== 200) {
						return reject(
							new Error(`Failed to download ${url} - Status ${res.statusCode}`),
						);
					}
					const fileStream = fs.createWriteStream(dest);
					res.pipe(fileStream);
					fileStream.on("finish", () => fileStream.close(resolve));
					fileStream.on("error", (err) => {
						fs.unlink(dest, () => reject(err));
					});
				},
			);
			req.on("error", reject);
		} catch (err) {
			reject(err);
		}
	});
}

async function run() {
	ensureDir(destDir);

	const results = [];

	for (const icon of icons) {
		const destPath = path.join(destDir, icon.file);
		try {
			// Skip if file already exists
			if (fs.existsSync(destPath)) {
				console.log(`Skipped (exists): ${icon.file}`);
				results.push({ file: icon.file, status: "skipped" });
				continue;
			}
			console.log(`Downloading: ${icon.url} -> ${icon.file}`);
			// eslint-disable-next-line no-await-in-loop
			await download(icon.url, destPath);
			console.log(`Saved: ${destPath}`);
			results.push({ file: icon.file, status: "saved" });
		} catch (err) {
			console.error(`Error downloading ${icon.url}:`, err.message || err);
			// If the original URL looks like an SVG, try a PNG fallback (replace .svg with .png)
			if (/\.svg(\?|$)/i.test(icon.url)) {
				const altUrl = icon.url.replace(/\.svg(\?|$)/i, ".png$1");
				const altFile = icon.file.replace(/\.svg$/i, ".png");
				const altDest = path.join(destDir, altFile);
				try {
					console.log(`Attempting PNG fallback: ${altUrl} -> ${altFile}`);
					// eslint-disable-next-line no-await-in-loop
					await download(altUrl, altDest);
					console.log(`Saved PNG fallback: ${altDest}`);
					results.push({ file: altFile, status: "saved-fallback" });
					continue;
				} catch (err2) {
					console.error(
						`PNG fallback failed for ${icon.url}:`,
						err2.message || err2,
					);
					results.push({
						file: icon.file,
						status: "error",
						error: err2.message || String(err2),
					});
					continue;
				}
			}
			results.push({
				file: icon.file,
				status: "error",
				error: err.message || String(err),
			});
		}
	}

	console.log("\nSummary:");
	results.forEach((r) =>
		console.log(`${r.file}: ${r.status}${r.error ? " - " + r.error : ""}`),
	);
}

run().catch((err) => {
	console.error("Fatal error:", err);
	process.exit(1);
});

// Extra attempt: ensure Rust and Move have raster fallbacks (PNG then JPG)
// This runs if those specific files weren't saved as SVGs.
async function ensureRasterFallbacks() {
	const targets = [
		{ base: "rust", want: "rust" },
		{ base: "move", want: "move" },
	];

	for (const t of targets) {
		const svgPath = path.join(destDir, `${t.base}.svg`);
		const pngPath = path.join(destDir, `${t.base}.png`);
		const jpgPath = path.join(destDir, `${t.base}.jpg`);

		// If PNG or JPG already exists, skip
		if (fs.existsSync(pngPath) || fs.existsSync(jpgPath)) {
			console.log(`Raster exists for ${t.base}, skipping fallback.`);
			continue;
		}

		// Find original icon entry
		const entry = icons.find((i) => i.file.startsWith(t.base));
		if (!entry) continue;

		// Try PNG then JPG
		const tryUrls = [];
		if (/\.svg(\?|$)/i.test(entry.url)) {
			tryUrls.push(entry.url.replace(/\.svg(\?|$)/i, ".png$1"));
			tryUrls.push(entry.url.replace(/\.svg(\?|$)/i, ".jpg$1"));
		}

		// Also try common CDN raw png variants (devicon png path) for rust
		if (t.base === "rust") {
			tryUrls.push(
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.png",
			);
			tryUrls.push(
				"https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.png",
			);
		}

		for (const u of tryUrls) {
			try {
				console.log(`Attempting raster fallback for ${t.base}: ${u}`);
				await download(u, pngPath);
				console.log(`Saved raster fallback: ${pngPath}`);
				break;
			} catch (err) {
				// if writing to pngPath failed, try next; if url ends with .jpg, save to jpgPath
				if (/\.jpg(\?|$)/i.test(u) && !fs.existsSync(jpgPath)) {
					try {
						await download(u, jpgPath);
						console.log(`Saved raster fallback: ${jpgPath}`);
						break;
					} catch (err2) {
						console.error(
							`Fallback jpg failed for ${t.base}:`,
							err2.message || err2,
						);
					}
				}
				console.error(
					`Fallback failed for ${t.base} at ${u}:`,
					err.message || err,
				);
			}
		}
	}
}

// Run raster fallback attempts after main run
ensureRasterFallbacks().catch((err) =>
	console.error("Raster fallback fatal:", err),
);
