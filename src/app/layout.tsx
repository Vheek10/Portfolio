/** @format */

import "./globals.css";
import Header from "@/components/Header";
import { ProfileCard } from "@/components/ProfileCard";
import { Poppins } from "next/font/google";

// Optimize font loading with next/font
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	display: "swap",
	variable: "--font-poppins",
});

export const metadata = {
	title: "Jeremiah Victor - Creative Full-Stack Developer & 3D Web Designer",
	description:
		"Portfolio of Jeremiah Victor, a creative full-stack developer and 3D web designer specializing in modern web applications and immersive digital experiences.",
	keywords:
		"full-stack developer, 3D web design, web development, React, Next.js, portfolio",
	authors: [{ name: "Jeremiah Victor" }],
	viewport: "width=device-width, initial-scale=1",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#111827" },
	],
	robots: "index, follow",
	openGraph: {
		title: "Jeremiah Victor - Creative Full-Stack Developer",
		description:
			"Portfolio of Jeremiah Victor, a creative full-stack developer and 3D web designer.",
		type: "website",
		locale: "en_US",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${poppins.variable} scroll-smooth`}>
			<head>
				{/* Preload critical resources */}
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>

				{/* Favicon and app icons */}
				<link
					rel="icon"
					href="/favicon.ico"
					sizes="any"
				/>
				<link
					rel="icon"
					href="/assets/img/logo/color.svg"
					type="image/svg+xml"
				/>
				<link
					rel="apple-touch-icon"
					href="/apple-touch-icon.png"
				/>
			</head>
			<body
				className={`
        ${poppins.className}
        bg-white dark:bg-gray-950 
        text-gray-900 dark:text-gray-100 
        transition-colors duration-300
        min-h-screen
        antialiased
        overflow-x-hidden
      `}>
				{/* Background gradient elements for visual depth */}
				<div className="fixed inset-0 -z-10 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

					{/* Subtle background elements */}
					<div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl" />
					<div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-indigo-300/5 rounded-full blur-3xl" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/5 rounded-full blur-3xl" />
				</div>

				{/* Skip to main content for accessibility */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-purple-700 transform hover:scale-105">
					Skip to main content
				</a>

				{/* Header component */}
				<Header />

				{/* Main content with sidebar layout */}
				<main
					id="main-content"
					className="relative z-10 pt-24 min-h-screen">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
							{/* Sidebar - Profile Card Only */}
							<div className="lg:col-span-1">
								<ProfileCard />
								{/* CTA Section Removed from Layout - Now only on Home Page */}
							</div>

							{/* Main Content Area */}
							<div className="lg:col-span-3">{children}</div>
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
