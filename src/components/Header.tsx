/** @format */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FolderGit2, Mail } from "lucide-react";

const Header = () => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Ensure we only render after mounting to avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	const menus = [
		{
			title: "Home",
			href: "/",
			icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />,
		},
		{
			title: "About",
			href: "/about",
			icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />,
		},
		{
			title: "Services",
			href: "/services",
			icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />,
		},
		{
			title: "Portfolio",
			href: "/portfolio",
			icon: <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />,
		},
		{
			title: "Contact",
			href: "/contact",
			icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
		},
	];

	// Don't render until mounted to avoid hydration issues
	if (!mounted) {
		return (
			<header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl z-50 backdrop-blur-xl bg-gray-900/40 border border-gray-800 rounded-2xl shadow-sm">
				<nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
					{/* Logo skeleton */}
					<div className="w-32 h-8 sm:w-40 sm:h-10 bg-gray-600 rounded animate-pulse" />
					{/* Menu items skeleton */}
					<div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600 rounded-full animate-pulse" />
				</nav>
			</header>
		);
	}

	return (
		<header
			className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl z-50 backdrop-blur-xl bg-gray-900/40 border border-gray-800 rounded-2xl shadow-sm transition-all duration-300"
			style={{ WebkitTapHighlightColor: "transparent" }}>
			<nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
				{/* Logo - Vheek Design */}
				<Link
					href="/"
					className="group flex items-center space-x-2 z-50 relative overflow-hidden"
					aria-label="Home">
					{/* Logo glow effect */}
					<div className="absolute inset-0 rounded-lg bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

					{/* Vheek Logo */}
					<div className="relative">
						<div className="text-xl sm:text-2xl font-bold font-clash bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
							&lt;Vheek /&gt;
						</div>

						{/* Subtle pulse animation */}
						<div className="absolute -inset-2 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse rounded-lg" />
					</div>

					{/* Animated brackets */}
					<div className="absolute -left-1 -top-1 w-1 h-1 sm:w-2 sm:h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-bounce" />
					<div className="absolute -right-1 -bottom-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-bounce" />
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
					{menus.map((menu) => (
						<li key={menu.title}>
							<Link
								href={menu.href}
								className={`group relative flex items-center gap-2 text-sm lg:text-[15px] xl:text-[16px] font-semibold font-clash tracking-wide rounded-lg px-3 lg:px-4 py-2 transition-all duration-300 ${
									pathname === menu.href
										? "text-purple-400 bg-purple-900/30 shadow-lg shadow-purple-500/20"
										: "text-gray-100 hover:text-purple-400"
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
								<div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-purple-500/30 transition-all duration-500" />
							</Link>
						</li>
					))}
				</ul>

				{/* Right Section */}
				<div className="flex items-center space-x-2 sm:space-x-4">
					{/* Let's Chat Button - Single Line */}
					<Link
						href="/contact"
						className="hidden sm:inline-flex items-center gap-2 relative px-4 lg:px-6 py-2 lg:py-3 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 font-medium font-clash active:scale-95 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/25 text-sm lg:text-base"
						style={{ transformOrigin: "center" }}>
						{/* Shine sweep effect */}
						<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />

						{/* Glow background */}
						<div className="absolute inset-0 rounded-xl bg-purple-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

						{/* Icon animation */}
						<span className="relative z-10 flex items-center gap-2">
							<Mail className="w-3 h-3 lg:w-4 lg:h-4 transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							<span className="leading-none transition-all duration-300 group-hover:translate-x-1">
								Let's Chat
							</span>
						</span>

						{/* Floating particles */}
						<div className="absolute inset-0 overflow-hidden rounded-xl">
							<div className="absolute -top-1 -left-1 w-1 h-1 lg:w-2 lg:h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-bounce" />
							<div className="absolute -bottom-1 -right-1 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-bounce" />
						</div>
					</Link>

					{/* Mobile Menu Toggle - Enhanced */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="md:hidden p-2 rounded-full hover:bg-gray-800/60 transition-all duration-300 active:scale-95 z-50 group relative overflow-hidden"
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
									className="w-5 h-5 sm:w-6 sm:h-6 text-gray-100 transition-all duration-300 group-hover:stroke-purple-500">
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
									className="w-5 h-5 sm:w-6 sm:h-6 text-gray-100 transition-all duration-300 group-hover:stroke-purple-500">
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
				<div className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-gray-900/70 shadow-lg border border-gray-700 rounded-2xl transition-all duration-300 animate-in slide-in-from-top mx-2">
					<ul className="flex flex-col py-4 space-y-1">
						{menus.map((menu) => (
							<li key={menu.title}>
								<Link
									href={menu.href}
									onClick={() => setMenuOpen(false)}
									className={`group relative flex items-center gap-3 text-sm font-semibold font-clash tracking-wide px-4 py-3 transition-all duration-300 mx-2 ${
										pathname === menu.href
											? "text-purple-400 bg-purple-900/30 shadow-lg shadow-purple-500/20"
											: "text-gray-100 hover:bg-gray-800/60 hover:text-purple-400"
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
										<div className="absolute right-4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
									)}
								</Link>
							</li>
						))}

						{/* Mobile Let's Chat - Single Line */}
						<li className="pt-2 px-2">
							<Link
								href="/contact"
								onClick={() => setMenuOpen(false)}
								className="group relative inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 font-medium font-clash active:scale-95 w-full overflow-hidden shadow-lg text-sm">
								{/* Shine effect */}
								<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />

								<span className="relative z-10 flex items-center gap-2">
									<Mail className="w-4 h-4 transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1" />
									<span>Let's Chat</span>
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
