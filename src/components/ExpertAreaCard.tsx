/** @format */

"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "./Card";
import { motion } from "framer-motion";
import Image from "next/image";

const ExpertAreaCard = () => {
	// Updated expert items with online logo URLs
	const expertItems = [
		// UI Tools
		{
			id: 1,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
			name: "Figma",
		},
		{
			id: 2,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
			name: "AdobeXD",
		},

		// Programming Languages
		{
			id: 3,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			name: "JavaScript",
		},
		{
			id: 4,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			name: "TypeScript",
		},

		// Frameworks
		{
			id: 5,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			name: "React",
		},
		{
			id: 6,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			name: "Next.js",
		},

		// Web3 Libraries
		{
			id: 7,
			icon: "https://etherscan.io/images/brandassets/etherscan-logo-circle.svg",
			name: "Ethers.js",
		},
		{
			id: 8,
			icon: "https://web3js.readthedocs.io/en/v1.10.0/_static/web3js.jpg",
			name: "Web3.js",
		},

		// Blockchain
		{
			id: 9,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
			name: "Solidity",
		},
		{
			id: 10,
			icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
			name: "Ethereum",
		},

		// Development Tools
		{
			id: 11,
			icon: "https://hardhat.org/_next/static/media/hardhat-logo.5c80f9de.svg",
			name: "Hardhat",
		},
		{
			id: 12,
			icon: "https://raw.githubusercontent.com/foundry-rs/foundry/master/static/logo.svg",
			name: "Foundry",
		},

		// Version Control & Runtime
		{
			id: 13,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			name: "Git",
		},
		{
			id: 14,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			name: "Node.js",
		},

		// Additional Technologies
		{
			id: 15,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
			name: "Tailwind",
		},
		{
			id: 16,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			name: "MongoDB",
		},
		{
			id: 17,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
			name: "PostgreSQL",
		},
		{
			id: 18,
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
			name: "Docker",
		},
	];

	// Split into two rows
	const topRowItems = expertItems.slice(0, 9); // First 9 items for top row
	const bottomRowItems = expertItems.slice(9); // Remaining items for bottom row

	const topScrollRef = useRef<HTMLDivElement>(null);
	const bottomScrollRef = useRef<HTMLDivElement>(null);
	const scrollSpeed = 1;

	useEffect(() => {
		const startScrolling = (
			slider: HTMLDivElement | null,
			reverse: boolean = false,
		) => {
			if (!slider) return;

			let scrollPosition = 0;
			let scrollingForward = !reverse;

			const smoothScroll = () => {
				if (scrollingForward) {
					scrollPosition += scrollSpeed;
					if (scrollPosition >= slider.scrollWidth - slider.clientWidth) {
						scrollingForward = false;
					}
				} else {
					scrollPosition -= scrollSpeed;
					if (scrollPosition <= 0) {
						scrollingForward = true;
					}
				}
				slider.scrollLeft = scrollPosition;
			};

			const interval = setInterval(smoothScroll, 16);
			return () => clearInterval(interval);
		};

		const topCleanup = startScrolling(topScrollRef.current);
		const bottomCleanup = startScrolling(bottomScrollRef.current, true); // Reverse direction for bottom row

		return () => {
			topCleanup?.();
			bottomCleanup?.();
		};
	}, []);

	const ScrollingRow = ({
		items,
		scrollRef,
		className = "",
	}: {
		items: typeof expertItems;
		scrollRef: React.RefObject<HTMLDivElement>;
		className?: string;
	}) => (
		<div
			className={`expertise-row overflow-hidden stealth-scrollbar ${className}`}
			ref={scrollRef}>
			<div className="flex space-x-8 min-w-max py-4">
				{items.map((item) => (
					<motion.div
						key={item.id}
						className="expertise-item flex-shrink-0 w-20 text-center group"
						whileHover={{ scale: 1.1, y: -2 }}
						transition={{ duration: 0.2 }}>
						<div className="image text-center mb-2">
							<div className="w-14 h-14 mx-auto rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:shadow-lg group-hover:border-transparent">
								<img
									src={item.icon}
									alt={item.name}
									className="w-7 h-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
									onError={(e) => {
										// Fallback for broken images
										const target = e.target as HTMLImageElement;
										target.src = `https://via.placeholder.com/28/8B5CF6/FFFFFF?text=${item.name.charAt(
											0,
										)}`;
									}}
								/>
							</div>
						</div>
						<div className="text">
							<h4 className="title text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
								{item.name}
							</h4>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);

	return (
		<Card className="expertise-card">
			<CardContent className="p-6">
				<motion.h3
					className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					Tech Stack & Tools
				</motion.h3>

				<div className="space-y-2">
					{/* Top Scrolling Row */}
					<ScrollingRow
						items={topRowItems}
						scrollRef={topScrollRef}
						className="border-b border-gray-100 dark:border-gray-800 pb-2"
					/>

					{/* Bottom Scrolling Row */}
					<ScrollingRow
						items={bottomRowItems}
						scrollRef={bottomScrollRef}
					/>
				</div>

				{/* Legend */}
				<motion.div
					className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}>
					<div className="flex items-center gap-1">
						<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
						<span>UI/Design</span>
					</div>
					<div className="flex items-center gap-1">
						<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
						<span>Frontend</span>
					</div>
					<div className="flex items-center gap-1">
						<div className="w-2 h-2 bg-green-500 rounded-full"></div>
						<span>Blockchain</span>
					</div>
					<div className="flex items-center gap-1">
						<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
						<span>Backend</span>
					</div>
				</motion.div>
			</CardContent>
		</Card>
	);
};

export default ExpertAreaCard;
