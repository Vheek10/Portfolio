/** @format */

"use client";

import { motion } from "framer-motion";
import ExpertAreaCard from "@/components/ExpertAreaCard";
import { Card } from "@/components/Card";
import {
	ArrowRight,
	Star,
	Award,
	Clock,
	Rocket,
	Users,
	TrendingUp,
	ExternalLink,
	Github,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
	const featuredProjects = [
		{
			title: "ELGVotes - Voting App",
			description:
				"An elegant full-stack voting application built with Next.js, TypeScript, TailwindCSS, and MongoDB. Features anonymous voting, admin dashboard, and real-time results.",
			tech: ["Next.js", "TailwindCSS", "MongoDB", "TypeScript"],
			status: "Live",
			liveUrl: "https://voting-appelg.vercel.app/",
			githubUrl: "https://github.com/Vheek10/ELGVotes",
			image: "/votingapp.png",
		},
		{
			title: "Trading Bot",
			description:
				"Automated cryptocurrency trading bot with real-time market analysis, multiple strategy support, and risk management features.",
			tech: ["Python", "Node.js", "Binance API", "WebSocket"],
			status: "Live",
			liveUrl: "https://trading-bot-navy-rho.vercel.app/",
			githubUrl: "https://github.com/Vheek10/trading-bot",
			image: "/tradingbot.png",
		},
		{
			title: "Disney+ Clone",
			description:
				"A responsive Disney+ streaming platform clone with movie/show browsing, user authentication, and video player functionality.",
			tech: ["React", "Firebase", "Styled Components", "Context API"],
			status: "Live",
			liveUrl: "https://disney-clone-master-phi.vercel.app/",
			githubUrl: "https://github.com/Vheek10/disney-clone",
			image: "/disneyclone.png",
		},
		{
			title: "TokenSwap - DeFi Exchange",
			description:
				"A PancakeSwap-inspired token swap interface with live token prices from CoinGecko, elegant dark UI, and swap settings panel.",
			tech: ["Next.js", "CoinGecko API", "TailwindCSS", "TypeScript"],
			status: "Live",
			liveUrl: "#",
			githubUrl: "https://github.com/Vheek10/TokenSwap",
			image: "/project-placeholder.jpg",
		},
		{
			title: "NFT Marketplace UI",
			description:
				"Modern NFT marketplace interface with collection browsing, item details, and wallet connectivity features.",
			tech: ["Next.js", "Web3.js", "TailwindCSS", "Ethers.js"],
			status: "Live",
			liveUrl: "#",
			githubUrl: "#",
			image: "/project-placeholder.jpg",
		},
		{
			title: "VaultVote - Web3 Governance",
			description:
				"A Web3 startup concept using zero-knowledge proofs for anonymous and verifiable community governance.",
			tech: ["Solidity", "Next.js", "TailwindCSS", "Web3.js"],
			status: "In Development",
			liveUrl: "#",
			githubUrl: "#",
			image: "/project-placeholder.jpg",
		},
	];

	const highlights = [
		{
			icon: <Rocket className="w-6 h-6" />,
			title: "Rapid Development",
			description:
				"Quick turnaround without compromising on quality or performance",
		},
		{
			icon: <Users className="w-6 h-6" />,
			title: "Client Focused",
			description:
				"Dedicated to understanding and exceeding client expectations",
		},
		{
			icon: <TrendingUp className="w-6 h-6" />,
			title: "Growth Mindset",
			description:
				"Continuously learning and adapting to new technologies and trends",
		},
	];

	const stats = [
		{
			icon: <Award className="w-6 h-6" />,
			number: "15+",
			label: "Projects Completed",
		},
		{
			icon: <Star className="w-6 h-6" />,
			number: "2+",
			label: "Years Experience",
		},
		{
			icon: <Clock className="w-6 h-6" />,
			number: "100%",
			label: "Client Satisfaction",
		},
	];

	const featuredSkills = [
		{
			title: "Frontend Development",
			description: "React, Next.js, TypeScript",
			progress: 90,
		},
		{
			title: "Blockchain & Web3",
			description: "Solidity, Smart Contracts, DApp Development",
			progress: 85,
		},
		{
			title: "Backend Development",
			description: "Node.js, MongoDB, REST APIs",
			progress: 80,
		},
		{
			title: "UI/UX Design",
			description: "Figma, Responsive Design, User Experience",
			progress: 75,
		},
	];

	return (
		<div className="space-y-8">
			{/* Welcome Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Card className="p-8 text-center relative overflow-hidden">
					{/* Background Gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />

					<div className="relative z-10">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							Welcome to My Digital Space
						</h1>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
							I create innovative Web3 solutions, trading applications, and
							stunning digital experiences that push the boundaries of what's
							possible on the web.
						</p>
						<motion.a
							href="/portfolio"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:shadow-2xl">
							Explore My Work
							<ArrowRight className="w-5 h-5" />
						</motion.a>
					</div>
				</Card>
			</motion.section>

			{/* Stats Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.6 }}
				className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{stats.map((stat, index) => (
					<Card
						key={stat.label}
						className="text-center p-6">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.3 + index * 0.1 }}
							className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3">
							{stat.icon}
						</motion.div>
						<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
							{stat.number}
						</div>
						<div className="text-sm text-gray-400">{stat.label}</div>
					</Card>
				))}
			</motion.section>

			{/* Highlights Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.6 }}
				className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{highlights.map((highlight, index) => (
					<Card
						key={highlight.title}
						className="p-6 text-center group">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
							{highlight.icon}
						</div>
						<h3 className="text-lg font-bold text-white mb-2">
							{highlight.title}
						</h3>
						<p className="text-gray-400 text-sm">{highlight.description}</p>
					</Card>
				))}
			</motion.section>

			{/* Featured Projects */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6, duration: 0.6 }}>
				<Card className="p-8">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							Featured Projects
						</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Showcasing my diverse range of projects from blockchain
							applications to trading bots and modern web applications
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
								className="group">
								{/* Card with no padding around image */}
								<div className="rounded-2xl bg-gray-800 border border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-600 h-full flex flex-col overflow-hidden">
									{/* Project Image - No padding, glued to top and sides */}
									<div className="relative w-full h-32 bg-gray-700 overflow-hidden">
										<Image
											src={project.image}
											alt={project.title}
											width={400}
											height={128}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
											onError={(e) => {
												// Fallback if image fails to load
												const target = e.target as HTMLImageElement;
												target.style.display = "none";
												// Show fallback background
												target.parentElement!.style.background =
													"linear-gradient(135deg, #8B5CF6, #3B82F6)";
												// Add text fallback
												const fallbackText = document.createElement("div");
												fallbackText.className =
													"w-full h-full flex items-center justify-center text-white font-bold text-lg";
												fallbackText.textContent = project.title.split(" ")[0];
												target.parentElement!.appendChild(fallbackText);
											}}
										/>
									</div>

									{/* Content with padding */}
									<div className="p-6 flex flex-col flex-grow">
										<div className="flex justify-between items-start mb-3">
											<h3 className="text-lg font-bold text-white line-clamp-1">
												{project.title}
											</h3>
											<span
												className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
													project.status === "Live"
														? "bg-green-900 text-green-200"
														: project.status === "In Development"
														? "bg-blue-900 text-blue-200"
														: "bg-gray-700 text-gray-200"
												}`}>
												{project.status}
											</span>
										</div>

										<p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2 mb-4">
											{project.tech.slice(0, 3).map((tech, idx) => (
												<span
													key={idx}
													className="px-2 py-1 bg-gray-700 border border-gray-600 rounded-full text-xs text-gray-300">
													{tech}
												</span>
											))}
											{project.tech.length > 3 && (
												<span className="px-2 py-1 bg-gray-700 border border-gray-600 rounded-full text-xs text-gray-300">
													+{project.tech.length - 3}
												</span>
											)}
										</div>

										{/* Project Links */}
										<div className="flex gap-3 mt-auto pt-4">
											{project.liveUrl && project.liveUrl !== "#" && (
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-1 px-3 py-2 text-xs bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex-1 justify-center">
													<ExternalLink className="w-3 h-3" />
													Live Demo
												</a>
											)}
											{project.githubUrl && project.githubUrl !== "#" && (
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-1 px-3 py-2 text-xs bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex-1 justify-center">
													<Github className="w-3 h-3" />
													Code
												</a>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* View All Projects CTA */}
					<div className="text-center mt-8">
						<motion.a
							href="/portfolio"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-400 font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white">
							View All Projects
							<ArrowRight className="w-4 h-4" />
						</motion.a>
					</div>
				</Card>
			</motion.section>

			{/* Skills Progress */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.0, duration: 0.6 }}>
				<Card className="p-6">
					<h3 className="text-xl font-bold text-white mb-6">Core Expertise</h3>
					<div className="space-y-4">
						{featuredSkills.map((skill, index) => (
							<motion.div
								key={skill.title}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.2 + index * 0.1 }}
								className="group">
								<div className="flex justify-between items-center mb-2">
									<span className="font-semibold text-white">
										{skill.title}
									</span>
									<span className="text-sm text-gray-400">
										{skill.progress}%
									</span>
								</div>
								<div className="w-full bg-gray-700 rounded-full h-2">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: `${skill.progress}%` }}
										transition={{ delay: 1.4 + index * 0.1, duration: 1 }}
										className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
									/>
								</div>
								<p className="text-sm text-gray-400 mt-1">
									{skill.description}
								</p>
							</motion.div>
						))}
					</div>
				</Card>
			</motion.section>

			{/* Tech Stack Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.6 }}>
				<ExpertAreaCard />
			</motion.section>
		</div>
	);
}
