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
import { useState } from "react";

export default function Home() {
	const featuredProjects = [
		{
			title: "StrataDeed - OnChain Real Estate",
			description:
				"Decentralized real estate agency with property tokenization.",
			tech: ["Next.js", "Solidity", "Ethereum", "IPFS"],
			status: "Live",
			liveUrl: "https://strata-deed.vercel.app/",
			githubUrl: "https://github.com/Vheek10/StrataDeed",
			image: "/stratadeed.png",
		},
		{
			title: "Value Content Africa",
			description:
				"A pan-African initiative focused on value-driven content, technological innovation, and sustainable social impact across the continent. Redefining Africa's story through authentic narratives.",
			tech: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
			status: "Live",
			liveUrl: "https://value-content-africa.vercel.app",
			githubUrl: "https://github.com/Vheek10/Value-Content-Africa",
			image: "/valuecontent.png",
		},
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
			title: "Joeyung Portfolio",
			description:
				"A sleek, modern portfolio website showcasing creative work and projects. Features responsive design, smooth animations, and clean UI/UX.",
			tech: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
			status: "Live",
			liveUrl: "https://joeyung.vercel.app",
			githubUrl: "https://github.com/Vheek10/joeyung",
			image: "/joeyung.png",
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
			number: "20+",
			label: "Projects Completed",
		},
		{
			icon: <Star className="w-6 h-6" />,
			number: "3+",
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
			description: "React, Next.js, TypeScript, Tailwindcss",
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

	// Add hover state
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="section-gap space-y-8 md:space-y-10">
			{/* Welcome Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Card className="p-5 sm:p-7 text-center relative overflow-hidden">
					{/* Background Gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />

					<div className="relative z-10">
						<h2 className="text-lg md:text-lg lg:text-3xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							Welcome to My Digital Space
						</h2>
						<p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
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
						className="text-center p-4 sm:p-5">
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
						<div className="text-sm font-accent tracking-wider uppercase text-gray-400">
							{stat.label}
						</div>
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
						className="p-4 sm:p-5 text-center group">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
							{highlight.icon}
						</div>
						<h4 className="text-base font-bold text-white mb-2">
							{highlight.title}
						</h4>
						<p className="text-gray-400 text-sm">{highlight.description}</p>
					</Card>
				))}
			</motion.section>

			{/* Featured Projects with CSS Auto-scroll */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6, duration: 0.6 }}>
				<Card className="p-5 sm:p-7 overflow-hidden">
					<div className="text-center mb-6">
						<motion.h3 className="text-lg md:text-xl font-bold font-clash tracking-tight text-white mb-6 text-center">
							Featured Projects
						</motion.h3>
						<p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
							Showcasing my diverse range of projects from blockchain
							applications to trading bots and modern web applications
						</p>
					</div>

					{/* Infinite auto-scrolling carousel with hover pause */}
					<div
						className="relative w-full overflow-hidden py-4"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onTouchStart={() => setIsHovered(true)}
						onTouchEnd={() => setIsHovered(false)}>
						{/* Container with mask for fading edges */}
						<div className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-gray-900 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-gray-900 after:to-transparent after:z-10">
							<div
								className={`flex gap-6 w-max animate-infinite-scroll ${
									isHovered ? "paused" : ""
								}`}>
								{/* First set + duplicate for seamless loop */}
								{[...featuredProjects, ...featuredProjects].map(
									(project, index) => (
										<motion.div
											key={`${project.title}-${index}`}
											className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] flex-shrink-0"
											whileHover={{ scale: 1.04 }}
											transition={{ duration: 0.3 }}>
											<div className="rounded-2xl bg-gray-800 border border-gray-700 h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-purple-600/60">
												{/* Image */}
												<div className="relative w-full h-80 bg-gray-700 overflow-hidden">
													<Image
														src={project.image}
														alt={project.title}
														fill
														className="object-cover transition-transform duration-700 group-hover:scale-110"
														sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
													/>
													{/* Status badge */}
													<div className="absolute top-4 left-4">
														<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-300 border border-green-800/50">
															{project.status}
														</span>
													</div>
												</div>

												{/* Content */}
												<div className="p-6 flex flex-col items-center flex-grow">
													<motion.h4
														className="text-sm sm:text-base font-bold text-center mb-6 font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
														whileHover={{ scale: 1.03 }}>
														{project.title}
													</motion.h4>

													{/* Tech stack */}
													<div className="flex flex-wrap gap-2 justify-center mb-4">
														{project.tech.slice(0, 3).map((tech, idx) => (
															<span
																key={idx}
																className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300">
																{tech}
															</span>
														))}
														{project.tech.length > 3 && (
															<span className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300">
																+{project.tech.length - 3}
															</span>
														)}
													</div>

													<div className="flex gap-5 mt-auto">
														{project.liveUrl && project.liveUrl !== "#" && (
															<motion.a
																href={project.liveUrl}
																target="_blank"
																rel="noopener noreferrer"
																whileHover={{ scale: 1.25, rotate: 8 }}
																whileTap={{ scale: 0.9 }}
																className="flex items-center justify-center w-11 h-11 rounded-full bg-purple-600/90 text-white hover:bg-purple-700 transition-colors shadow-md"
																title="Live Demo">
																<ExternalLink className="w-5 h-5" />
															</motion.a>
														)}

														{project.githubUrl && project.githubUrl !== "#" && (
															<motion.a
																href={project.githubUrl}
																target="_blank"
																rel="noopener noreferrer"
																whileHover={{ scale: 1.25, rotate: -8 }}
																whileTap={{ scale: 0.9 }}
																className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors shadow-md"
																title="View Code">
																<Github className="w-5 h-5" />
															</motion.a>
														)}
													</div>
												</div>
											</div>
										</motion.div>
									),
								)}
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="text-center mt-10">
						<motion.a
							href="/portfolio"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-400 font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-500">
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
				<Card className="p-5">
					<motion.h3 className="text-lg sm:text-xl font-bold font-clash tracking-tight text-white mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-2">
						Core Expertise
					</motion.h3>
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
