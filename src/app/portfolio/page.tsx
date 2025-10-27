/** @format */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import {
	ExternalLink,
	Github,
	ArrowRight,
	Filter,
	Eye,
	Code,
	Zap,
	Users,
	TrendingUp,
} from "lucide-react";
import { useState } from "react";

const projects = [
	// ==== Web2 Projects ====
	{
		id: 1,
		title: "ELGVotes - Award Voting App",
		category: "web2",
		description:
			"An elegant full-stack voting application built with Next.js, TypeScript, TailwindCSS, and MongoDB. Features anonymous voting, admin dashboard, analytics, and exportable results.",
		image: "/assets/img/projects/elgvotes.jpg",
		tech: ["Next.js", "TailwindCSS", "MongoDB", "TypeScript"],
		github: "https://github.com/Vheek10/ELGVotes",
		live: "#",
		featured: true,
		status: "Live",
		highlights: ["Full-stack", "Real-time Results", "Admin Dashboard"],
	},
	{
		id: 2,
		title: "CoinMarketCap Clone",
		category: "web2",
		description:
			"A dynamic crypto analytics platform that replicates CoinMarketCap's design and functionality using the CoinGecko API with real-time charts and stats.",
		image: "/assets/img/projects/coinmarketcap.jpg",
		tech: ["Next.js", "CoinGecko API", "Recharts", "TailwindCSS"],
		github: "https://github.com/Vheek10/CoinMarketCap-Clone",
		live: "#",
		status: "Live",
		highlights: ["Real-time Data", "Charts", "Responsive Design"],
	},
	{
		id: 3,
		title: "Weather Forecast App",
		category: "web2",
		description:
			"A sleek, responsive weather app built with Next.js and TailwindCSS, featuring live weather data, temperature trends, and theme switching.",
		image: "/assets/img/projects/weather.jpg",
		tech: ["Next.js", "OpenWeather API", "TailwindCSS"],
		github: "https://github.com/Vheek10/Weather-App",
		live: "#",
		status: "Live",
		highlights: ["Live Data", "Theme Switching", "Mobile First"],
	},

	// ==== Web3 Projects ====
	{
		id: 4,
		title: "TokenSwap - DeFi Exchange UI",
		category: "web3",
		description:
			"A PancakeSwap-inspired token swap interface with live token prices from CoinGecko, elegant dark UI, and swap settings panel.",
		image: "/assets/img/projects/tokenswap.jpg",
		tech: ["Next.js", "CoinGecko API", "TailwindCSS", "TypeScript"],
		github: "https://github.com/Vheek10/TokenSwap",
		live: "#",
		featured: true,
		status: "Live",
		highlights: ["DeFi UI", "Live Prices", "Dark Theme"],
	},
	{
		id: 5,
		title: "VaultVote - Decentralized Governance",
		category: "web3",
		description:
			"A Web3 startup concept using zero-knowledge proofs for anonymous and verifiable community governance.",
		image: "/assets/img/projects/vaultvote.jpg",
		tech: ["Solidity", "Next.js", "TailwindCSS", "Web3.js"],
		github: "#",
		live: "#",
		status: "In Development",
		highlights: ["ZK Proofs", "Anonymous Voting", "Governance"],
	},
	{
		id: 6,
		title: "NFT Marketplace UI",
		category: "web3",
		description:
			"Modern NFT marketplace interface with collection browsing, item details, and wallet connectivity features.",
		image: "/assets/img/projects/nft-marketplace.jpg",
		tech: ["Next.js", "Web3.js", "TailwindCSS", "Ethers.js"],
		github: "#",
		live: "#",
		status: "Live",
		highlights: ["NFT Display", "Wallet Connect", "Collection View"],
	},
];

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("all");

	const filters = [
		{ id: "all", label: "All Projects" },
		{ id: "web2", label: "Web2 Projects" },
		{ id: "web3", label: "Web3 Projects" },
		{ id: "featured", label: "Featured" },
	];

	const stats = [
		{
			icon: <Eye className="w-6 h-6" />,
			number: "10K+",
			label: "Users Reached",
		},
		{
			icon: <Code className="w-6 h-6" />,
			number: "15+",
			label: "Projects Completed",
		},
		{
			icon: <Zap className="w-6 h-6" />,
			number: "100%",
			label: "Client Satisfaction",
		},
		{
			icon: <TrendingUp className="w-6 h-6" />,
			number: "2+",
			label: "Years Experience",
		},
	];

	const filteredProjects = projects.filter((project) => {
		if (activeFilter === "all") return true;
		if (activeFilter === "featured") return project.featured;
		return project.category === activeFilter;
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<div className="space-y-8">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Card className="p-8 text-center relative overflow-hidden">
					{/* Background Gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10" />

					<div className="relative z-10">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							My Portfolio
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
							Explore my latest projects across Web2 and Web3 — built with
							precision, creativity, and a passion for modern design.
						</p>
					</div>
				</Card>
			</motion.section>

			{/* Stats Section */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				animate="visible">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							variants={itemVariants}>
							<Card className="text-center p-6">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3">
									{stat.icon}
								</div>
								<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
									{stat.number}
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									{stat.label}
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Filter Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.6 }}>
				<Card className="p-6">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<div className="flex items-center gap-2">
							<Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
							<span className="font-semibold text-gray-900 dark:text-white">
								Filter by:
							</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{filters.map((filter) => (
								<button
									key={filter.id}
									onClick={() => setActiveFilter(filter.id)}
									className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
										activeFilter === filter.id
											? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
											: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
									}`}>
									{filter.label}
								</button>
							))}
						</div>
					</div>
				</Card>
			</motion.section>

			{/* Projects Grid */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredProjects.map((project, index) => (
					<motion.div
						key={project.id}
						variants={itemVariants}
						layout
						className="group">
						<Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-purple-300 dark:group-hover:border-purple-600">
							{/* Project Image */}
							<div className="relative overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500 h-48">
								<div className="w-full h-full flex items-center justify-center text-white">
									<div className="text-center p-4">
										<Code className="w-12 h-12 mx-auto mb-2 opacity-80" />
										<span className="text-sm font-medium">{project.title}</span>
									</div>
								</div>

								{/* Status Badge */}
								<div className="absolute top-4 left-4">
									<span
										className={`px-3 py-1 rounded-full text-xs font-medium ${
											project.status === "Live"
												? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
												: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
										}`}>
										{project.status}
									</span>
								</div>

								{/* Featured Badge */}
								{project.featured && (
									<div className="absolute top-4 right-4">
										<span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
											Featured
										</span>
									</div>
								)}

								{/* Overlay with Links */}
								<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
									<div className="flex gap-4">
										{project.live !== "#" && (
											<motion.a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
												className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:text-white">
												<ExternalLink className="w-5 h-5" />
											</motion.a>
										)}
										{project.github !== "#" && (
											<motion.a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
												className="w-12 h-12 rounded-full bg-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:text-white">
												<Github className="w-5 h-5" />
											</motion.a>
										)}
									</div>
								</div>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
									{project.title}
								</h3>

								<p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
									{project.description}
								</p>

								{/* Highlights */}
								{project.highlights && (
									<div className="flex flex-wrap gap-2 mb-4">
										{project.highlights.map((highlight, idx) => (
											<span
												key={idx}
												className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
												{highlight}
											</span>
										))}
									</div>
								)}

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, idx) => (
										<span
											key={idx}
											className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300">
											{tech}
										</span>
									))}
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3">
									{project.live !== "#" && (
										<motion.a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg">
											<ExternalLink className="w-4 h-4" />
											Live Demo
										</motion.a>
									)}
									{project.github !== "#" && (
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all duration-300 ${
												project.live !== "#"
													? "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:bg-purple-500/5"
													: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"
											}`}>
											<Github className="w-4 h-4" />
											View Code
										</motion.a>
									)}
								</div>
							</div>
						</Card>
					</motion.div>
				))}
			</motion.section>

			{/* Empty State */}
			{filteredProjects.length === 0 && (
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<Card className="p-12 text-center">
						<div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
							<Filter className="w-10 h-10 text-gray-400" />
						</div>
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
							No projects found
						</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-6">
							No projects match the selected filter. Try choosing a different
							category.
						</p>
						<button
							onClick={() => setActiveFilter("all")}
							className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:shadow-lg">
							Show All Projects
						</button>
					</Card>
				</motion.section>
			)}

			{/* CTA Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.6 }}>
				<Card className="p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full" />
						<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full" />
					</div>

					<div className="relative z-10">
						<h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
						<p className="text-purple-100 mb-6 max-w-2xl mx-auto">
							Interested in working together? Let's discuss your next Web3 or
							Web2 project and bring your ideas to life with cutting-edge
							technology.
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-2xl bg-white text-purple-600 font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-2">
								Start a Project
								<ArrowRight className="w-5 h-5" />
							</motion.a>

							<motion.a
								href="/services"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white hover:text-purple-600 flex items-center gap-2">
								View Services
								<ExternalLink className="w-5 h-5" />
							</motion.a>
						</div>
					</div>
				</Card>
			</motion.section>
		</div>
	);
}
