/** @format */

import "./globals.css";
import Header from "@/components/Header";
import { ProfileCard } from "@/components/ProfileCard";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import GeometricBackground from "@/components/GeometricBackground";

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
			className={`${poppins.variable} dark scroll-smooth`}
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
        ${poppins.className}
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

				{/* Header component */}
				<Header />

				{/* Main content with sidebar layout */}
				<main
					id="main-content"
					className="relative z-10 pt-28 min-h-screen">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
							{/* Sidebar - Profile Card Only */}
							<div className="lg:col-span-1">
								<ProfileCard />
							</div>

							{/* Main Content Area */}
							<div className="lg:col-span-3">{children}</div>
						</div>
					</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
