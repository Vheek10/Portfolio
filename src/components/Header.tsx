/** @format */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
	Home,
	User,
	Briefcase,
	FolderGit2,
	Newspaper,
	Mail,
	Sun,
	Moon,
} from "lucide-react";

const Header = () => {
	const pathname = usePathname();
	const [darkMode, setDarkMode] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Ensure we only render after mounting to avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
		const storedDarkMode = localStorage.getItem("darkMode");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		const shouldBeDark =
			storedDarkMode === "true" || (!storedDarkMode && prefersDark);
		setDarkMode(shouldBeDark);

		if (shouldBeDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleDarkMode = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		localStorage.setItem("darkMode", String(newMode));

		if (newMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	const menus = [
		{ title: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
		{ title: "About", href: "/about", icon: <User className="w-5 h-5" /> },
		{
			title: "Services",
			href: "/services",
			icon: <Briefcase className="w-5 h-5" />,
		},
		{
			title: "Portfolio",
			href: "/portfolio",
			icon: <FolderGit2 className="w-5 h-5" />,
		},
		{ title: "Blog", href: "/blog", icon: <Newspaper className="w-5 h-5" /> },
		{ title: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
	];

	// Don't render until mounted to avoid hydration issues
	if (!mounted) {
		return (
			<header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
				<nav className="flex justify-between items-center px-6 py-3">
					{/* Logo skeleton */}
					<div className="w-24 h-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
					{/* Dark mode toggle skeleton */}
					<div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
				</nav>
			</header>
		);
	}

	return (
		<header
			className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm transition-all duration-300"
			style={{ WebkitTapHighlightColor: "transparent" }}>
			<nav className="flex justify-between items-center px-6 py-3">
				{/* Logo */}
				<Link
					href="/"
					className="group flex items-center space-x-2 z-50 relative overflow-hidden"
					aria-label="Home">
					{/* Logo glow effect */}
					<div className="absolute inset-0 rounded-lg bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

					<Image
						src="/assets/img/logo/color.svg"
						alt="Logo"
						width={110}
						height={36}
						className="object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:drop-shadow-lg"
					/>

					{/* Subtle pulse animation */}
					<div className="absolute -inset-2 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse rounded-lg" />
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
					{menus.map((menu) => (
						<li key={menu.title}>
							<Link
								href={menu.href}
								className={`group relative flex items-center gap-2 text-[15px] lg:text-[16px] font-semibold tracking-wide rounded-lg px-3 py-2 transition-all duration-300 ${
									pathname === menu.href
										? "text-purple-600 dark:text-purple-400 bg-purple-100/40 dark:bg-purple-900/30 shadow-lg shadow-purple-500/20"
										: "text-gray-900 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-400"
								}`}>
								{/* Hover background effect */}
								<div
									className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 ${
										pathname === menu.href ? "opacity-100" : ""
									}`}
								/>

								{/* Icon container with enhanced hover */}
								<span
									className="relative inline-flex items-center justify-center rounded-md p-1 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-indigo-500/20 group-hover:shadow-md group-hover:shadow-purple-500/20"
									aria-hidden>
									<span className="transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
										{menu.icon}
									</span>
								</span>

								{/* Text with glow effect */}
								<span className="relative transition-all duration-300 group-hover:drop-shadow-sm group-hover:translate-x-0.5">
									{menu.title}
								</span>

								{/* Active indicator with animation */}
								{pathname === menu.href && (
									<>
										<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
										<span className="absolute -inset-2 rounded-lg bg-purple-500/5 animate-pulse -z-10" />
									</>
								)}

								{/* Hover border animation */}
								<div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-purple-300/30 dark:group-hover:border-purple-500/30 transition-all duration-500" />
							</Link>
						</li>
					))}
				</ul>

				{/* Right Section */}
				<div className="flex items-center space-x-3 sm:space-x-4">
					{/* Dark Mode Toggle - Enhanced */}
					<button
						onClick={toggleDarkMode}
						className="group relative p-2 rounded-full transition-all duration-300 hover:bg-gray-200/70 dark:hover:bg-gray-800/60 active:scale-95 z-50 overflow-hidden"
						aria-label="Toggle dark mode">
						{/* Background glow */}
						<div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

						{/* Animated rings */}
						<div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-yellow-400/20 dark:group-hover:border-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100" />

						<span className="relative inline-flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
							{darkMode ? (
								<>
									<Sun className="w-6 h-6 text-yellow-400 drop-shadow-sm" />
									{/* Sun rays effect */}
									<div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-sm opacity-0 group-hover:opacity-100 animate-pulse" />
								</>
							) : (
								<>
									<Moon className="w-6 h-6 text-gray-800 dark:text-gray-200 drop-shadow-sm" />
									{/* Moon glow effect */}
									<div className="absolute inset-0 rounded-full bg-purple-400/20 blur-sm opacity-0 group-hover:opacity-100 animate-pulse" />
								</>
							)}
						</span>
					</button>

					{/* Let's Talk Button - Enhanced */}
					<Link
						href="/contact"
						className="hidden sm:inline-flex items-center gap-2 relative px-6 py-3 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 font-medium active:scale-95 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
						style={{ transformOrigin: "center" }}>
						{/* Shine sweep effect */}
						<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />

						{/* Glow background */}
						<div className="absolute inset-0 rounded-xl bg-purple-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

						{/* Icon animation */}
						<span className="relative z-10 flex items-center gap-2">
							<span className="leading-none transition-all duration-300 group-hover:translate-x-1">
								Let's Talk
							</span>
							<Mail className="w-4 h-4 transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</span>

						{/* Floating particles */}
						<div className="absolute inset-0 overflow-hidden rounded-xl">
							<div className="absolute -top-1 -left-1 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-bounce" />
							<div className="absolute -bottom-1 -right-1 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-bounce" />
						</div>
					</Link>

					{/* Mobile Menu Toggle - Enhanced */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="md:hidden p-2 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-all duration-300 active:scale-95 z-50 group relative overflow-hidden"
						aria-label="Toggle menu">
						{/* Background effect */}
						<div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

						<span className="relative inline-flex transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-180">
							{menuOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 text-gray-900 dark:text-gray-100 transition-all duration-300 group-hover:stroke-purple-500">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 text-gray-900 dark:text-gray-100 transition-all duration-300 group-hover:stroke-purple-500">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							)}
						</span>
					</button>
				</div>
			</nav>

			{/* Mobile Menu - Enhanced */}
			{menuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300 animate-in slide-in-from-top mx-2">
					<ul className="flex flex-col py-4 space-y-2">
						{menus.map((menu) => (
							<li key={menu.title}>
								<Link
									href={menu.href}
									onClick={() => setMenuOpen(false)}
									className={`group relative flex items-center gap-3 text-base font-semibold tracking-wide px-6 py-3 transition-all duration-300 mx-2 ${
										pathname === menu.href
											? "text-purple-600 dark:text-purple-400 bg-purple-100/40 dark:bg-purple-900/30 shadow-lg shadow-purple-500/20"
											: "text-gray-900 dark:text-gray-100 hover:bg-gray-200/60 dark:hover:bg-gray-800/60 hover:text-purple-500 dark:hover:text-purple-400"
									}`}>
									{/* Hover background */}
									<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

									<span className="relative inline-flex items-center justify-center rounded-lg p-1 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-indigo-500/20 group-hover:scale-110 group-hover:-translate-y-0.5">
										{menu.icon}
									</span>
									<span className="relative transition-all duration-300 group-hover:translate-x-2 group-hover:drop-shadow-sm">
										{menu.title}
									</span>

									{/* Active indicator for mobile */}
									{pathname === menu.href && (
										<div className="absolute right-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
									)}
								</Link>
							</li>
						))}

						{/* Mobile Let's Talk - Enhanced */}
						<li className="pt-2 px-2">
							<Link
								href="/contact"
								onClick={() => setMenuOpen(false)}
								className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 font-medium active:scale-95 w-full overflow-hidden shadow-lg">
								{/* Shine effect */}
								<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />

								<span className="relative z-10 flex items-center gap-2">
									<span>Let's Talk</span>
									<Mail className="w-4 h-4 transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1" />
								</span>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
