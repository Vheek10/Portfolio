/** @format */

"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "./Card";
import { motion } from "framer-motion";

interface TechItem {
	id: number;
	icon: string;
	name: string;
}

const ExpertAreaCard = () => {
	// Updated expert items with local icons from public/icons folder and online SVGs for specific items
	const expertItems: TechItem[] = [
		// UI Tools
		{
			id: 1,
			icon: "/icons/figma.svg",
			name: "Figma",
		},
		{
			id: 2,
			icon: "/icons/adobe-xd.svg",
			name: "AdobeXD",
		},

		// Programming Languages
		{
			id: 3,
			icon: "/icons/javascript.svg",
			name: "JavaScript",
		},
		{
			id: 4,
			icon: "/icons/typescript.svg",
			name: "TypeScript",
		},

		// Frameworks
		{
			id: 5,
			icon: "/icons/react.svg",
			name: "React",
		},
		{
			id: 6,
			icon: "/icons/nextjs.svg",
			name: "Next.js",
		},

		// Web3 Libraries
		{
			id: 7,
			icon: "/icons/ethers.svg",
			name: "Ethers.js",
		},
		{
			id: 8,
			icon: "/icons/web3js.svg",
			name: "Web3.js",
		},

		// Blockchain
		{
			id: 9,
			icon: "/icons/solidity.svg",
			name: "Solidity",
		},
		{
			id: 10,
			icon: "/icons/ethereum.svg",
			name: "Ethereum",
		},

		// Development Tools
		{
			id: 11,
			icon: "/icons/hardhat.svg",
			name: "Hardhat",
		},
		{
			id: 12,
			icon: "/icons/foundry.svg",
			name: "Foundry",
		},

		// Version Control & Runtime
		{
			id: 13,
			icon: "/icons/git.svg",
			name: "Git",
		},
		{
			id: 14,
			icon: "/icons/nodejs.svg",
			name: "Node.js",
		},

		// Additional Technologies
		{
			id: 15,
			icon: "/icons/tailwindcss.png", // Using PNG for Tailwind
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

	// Tech item component with better error handling
	const TechItem = ({ item }: { item: TechItem }) => {
		const [imgError, setImgError] = React.useState(false);

		const handleError = () => {
			console.log(`Failed to load icon for ${item.name}: ${item.icon}`);
			setImgError(true);
		};

		// Check if the icon is from an external source (for CORS handling)
		const isExternalIcon = item.icon.startsWith("http");

		return (
			<motion.div
				key={item.id}
				className="expertise-item flex-shrink-0 w-20 text-center group"
				whileHover={{ scale: 1.1, y: -2 }}
				transition={{ duration: 0.2 }}>
				<div className="image text-center mb-2">
					<div className="w-14 h-14 mx-auto rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:shadow-lg group-hover:border-transparent">
						{!imgError ? (
							<img
								src={item.icon}
								alt={item.name}
								className="w-7 h-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
								onError={handleError}
								loading="lazy"
								crossOrigin={isExternalIcon ? "anonymous" : undefined}
							/>
						) : (
							<div className="w-7 h-7 flex items-center justify-center text-xs font-bold text-white bg-purple-600 rounded">
								{item.name.charAt(0)}
							</div>
						)}
					</div>
				</div>
				<div className="text">
					<h4 className="title text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-purple-400">
						{item.name}
					</h4>
				</div>
			</motion.div>
		);
	};

	// Scrolling row component
	const ScrollingRow = ({
		items,
		scrollRef,
		className = "",
	}: {
		items: TechItem[];
		scrollRef: React.RefObject<HTMLDivElement | null>;
		className?: string;
	}) => (
		<div
			className={`expertise-row overflow-hidden stealth-scrollbar ${className}`}
			ref={scrollRef}>
			<div className="flex space-x-8 min-w-max py-4">
				{items.map((item) => (
					<TechItem
						key={item.id}
						item={item}
					/>
				))}
			</div>
		</div>
	);

	return (
		<Card className="expertise-card">
			<CardContent className="p-6">
				<motion.h3
					className="text-lg md:text-xl font-bold font-clash tracking-tight text-white mb-6 text-center"
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
						className="border-b border-gray-800 pb-2"
					/>

					{/* Bottom Scrolling Row */}
					<ScrollingRow
						items={bottomRowItems}
						scrollRef={bottomScrollRef}
					/>
				</div>

				{/* Legend */}
				<motion.div
					className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-400"
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
