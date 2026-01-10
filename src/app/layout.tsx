/** @format */

import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
	ssr: true,
});
import Footer from "@/components/Footer";
import GeometricBackground from "@/components/GeometricBackground";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

// Optimize manrope for body text
const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
	display: "swap",
});

// Clash Display for headings and accents
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
	viewport: "width=device-width, initial-scale=1",
	themeColor: "#111827",
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
			// Add dark class here to prevent flash
			className={`${manrope.variable} ${clashDisplay.variable} dark scroll-smooth`}
			// Force dark mode for the entire document
			style={{ colorScheme: "dark" }}>
			<head>
				{/* Add this script to prevent flash */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                // Check if dark mode is preferred
                const isDarkMode = localStorage.theme === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
                
                // Set dark mode immediately
                if (isDarkMode) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
					}}
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
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
				className={`
        ${manrope.className}
        bg-gray-950 
        text-gray-100 
        min-h-screen
        antialiased
        overflow-x-hidden
        relative
      `}>
				{/* Geometric 3D Background - Ensure it's behind everything */}
				<GeometricBackground />

				{/* Skip to main content for accessibility */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-purple-700 transform hover:scale-105">
					Skip to main content
				</a>

				{/* Header component - NOT sticky */}
				<Header />

				{/* Main content with responsive layout */}
				<main
					id="main-content"
					className="relative z-10 pt-16 md:pt-20 min-h-screen">
					<div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
						<div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
							{/* Sidebar - Profile Card Only - STICKY on desktop only */}
							<div className="lg:w-80 lg:flex-shrink-0">
								<div className="lg:sticky lg:top-6">
									<ProfileCard />
								</div>
							</div>

							{/* Main Content Area - Add negative margin to align with header right edge */}
							<div className="flex-1 min-w-0 w-full lg:-mr-8">{children}</div>
						</div>
					</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
