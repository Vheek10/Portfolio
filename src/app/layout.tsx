/** @format */

import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
	ssr: true,
});
import Footer from "@/components/Footer";
import GeometricBackground from "@/components/GeometricBackground";
import localFont from "next/font/local";

// Clash Display local font for entire project
const clashDisplay = localFont({
	src: [
		{
			path: "../../public/fonts/ClashDisplay-Variable.woff2",
			weight: "200 700",
		},
	],
	variable: "--font-clash",
	display: "swap",
});

export const metadata = {
	title: "Jeremiah Victor - Creative Full-Stack Developer & 3D Web Designer",
	description:
		"Portfolio of Jeremiah Victor, a creative full-stack developer and 3D web designer specializing in modern web applications and immersive digital experiences.",
	keywords:
		"full-stack developer, 3D web design, web development, React, Next.js, portfolio",
	authors: [{ name: "Jeremiah Victor" }],
	metadataBase: new URL("https://www.vheek.xyz"),
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		google: "googlec55af1cd3e71996a",
	},
	openGraph: {
		title: "Jeremiah Victor - Creative Full-Stack Developer",
		description:
			"Portfolio of Jeremiah Victor, a creative full-stack developer and 3D web designer.",
		type: "website",
		locale: "en_US",
		url: "https://www.vheek.xyz",
		siteName: "Jeremiah Victor Portfolio",
	},
};

export const viewport = {
	themeColor: "#020617",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${clashDisplay.variable} dark bg-[#020617] scroll-smooth`}
			style={{ colorScheme: "dark", backgroundColor: "#020617" }}>
			<head>
				<link
					rel="icon"
					href="/profile.jpg?v=3"
					sizes="any"
				/>
				<link
					rel="apple-touch-icon"
					href="/profile.jpg?v=3"
				/>
			</head>

			<body
				className={`min-h-screen antialiased overflow-x-hidden relative text-gray-100 ${clashDisplay.className}`}
				style={{ backgroundColor: "#020617" }}>
				{/* Geometric 3D Background */}
				<GeometricBackground />

				{/* Skip to main content */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-purple-700 transform hover:scale-105">
					Skip to main content
				</a>

				{/* Header */}
				<Header />

				{/* Main content */}
				<main
					id="main-content"
					className="relative z-10 pt-16 md:pt-20 min-h-screen">
					<div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
						<div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
							{/* Sidebar */}
							<div className="lg:w-80 lg:flex-shrink-0">
								<div className="lg:sticky lg:top-6">
									<ProfileCard />
								</div>
							</div>

							{/* Main content area */}
							<div className="flex-1 min-w-0 w-full lg:-mr-8">{children}</div>
						</div>
					</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
