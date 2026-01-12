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
	TrendingUp,
} from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

// Define Project interface
interface Project {
	id: number;
	title: string;
	category: string;
	description: string;
	image: string;
	tech: string[];
	github: string;
	live: string;
	featured: boolean;
	status: string;
}

const projects: Project[] = [
	// ==== Web2 Projects ====
	{
		id: 1,
		title: "Forex Growth Hub",
		category: "web2",
		description:
			"Comprehensive forex trading platform with real-time market data and trading tools.",
		image: "/forex.png",
		tech: ["Next.js", "TailwindCSS", "TypeScript", "Chart.js"],
		github: "https://github.com/Vheek10/forex-growth-hub",
		live: "https://forex-growth-hub.vercel.app",
		featured: true,
		status: "Live",
	},

	{
		id: 2,
		title: "Value Content Africa",
		category: "web2",
		description:
			"Pan-African initiative focused on value-driven content and social impact.",
		image: "/valuecontent.png",
		tech: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
		github: "https://github.com/Vheek10/Value-Content-Africa",
		live: "https://value-content-africa.vercel.app",
		featured: true,
		status: "Live",
	},

	{
		id: 3,
		title: "ELGVotes - Voting App",
		category: "web2",
		description:
			"Full-stack voting application with admin dashboard and real-time results.",
		image: "/votingapp.png",
		tech: ["Next.js", "TailwindCSS", "MongoDB", "TypeScript"],
		github: "https://github.com/Vheek10/Voting-App",
		live: "https://voting-app-rnq4.vercel.app",
		featured: true,
		status: "Live",
	},

	{
		id: 4,
		title: "Disney+ Clone",
		category: "web2",
		description:
			"Streaming platform clone with movie browsing and user authentication.",
		image: "/disneyclone.png",
		tech: ["React", "Firebase", "Styled Components", "Context API"],
		github: "https://github.com/Vheek10/disney-clone-master",
		live: "https://disney-clone-master-phi.vercel.app/",
		featured: true,
		status: "Live",
	},

	{
		id: 5,
		title: "Trading Bot",
		category: "web2",
		description:
			"Automated trading bot with real-time market analysis and risk management.",
		image: "/tradingbot.png",
		tech: ["Python", "Node.js", "Tradingview API", "WebSocket"],
		github: "https://github.com/Vheek10/trading-bot",
		live: "https://trading-bot-navy-rho.vercel.app",
		featured: true,
		status: "Live",
	},

	{
		id: 6,
		title: "Joeyung Portfolio",
		category: "web2",
		description:
			"Modern portfolio website with responsive design and smooth animations.",
		image: "/joeyung.png",
		tech: ["ReactJs", "TailwindCSS", "Framer Motion", "TypeScript"],
		github: "https://github.com/Vheek10/joeyung",
		live: "https://joeyung.vercel.app",
		featured: true,
		status: "Live",
	},

	{
		id: 7,
		title: "ResumeAI - AI Resume Builder",
		category: "web2",
		description:
			"AI-powered resume builder with templates, content suggestions, and ATS optimization.",
		image: "/resumeai.png",
		tech: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript", "Firebase"],
		github: "https://github.com/Vheek10/ai-resume-craft",
		live: "https://ai-resume-nine-ecru.vercel.app/",
		featured: true,
		status: "Live",
	},

	// ==== Web3 Projects ====
	{
		id: 8,
		title: "StrataDeed - OnChain Real Estate",
		category: "web3",
		description: "Decentralized real estate agency with property tokenization.",
		image: "/stratadeed.png",
		tech: ["Next.js", "Solidity", "Ethereum", "IPFS"],
		github: "https://github.com/Vheek10/StrataDeed",
		live: "https://strata-deed.vercel.app/",
		featured: false,
		status: "Live",
	},

	{
		id: 9,
		title: "DeFi Portfolio Tracker",
		category: "web3",
		description: "Multi-chain portfolio tracker with real-time P&L analytics.",
		image: "/project-placeholder.jpg",
		tech: ["Next.js", "Ethers.js", "TailwindCSS", "Multiple APIs"],
		github: "#",
		live: "#",
		status: "In Development",
	},

	{
		id: 10,
		title: "PolySight - Solana Prediction Market",
		category: "web3",
		description: "Decentralized prediction platform on Solana blockchain.",
		image: "/polysight.png",
		tech: ["Next.js", "Rust", "Solana", "TypeScript"],
		github: "https://github.com/Vheek10/Polysight",
		live: "https://polysight.vercel.app",
		status: "Live",
	},
];

// URL validation helper
const isValidUrl = (url: string) => {
	return url && url !== "#" && (url.startsWith("http") || url.startsWith("/"));
};

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("all");
	const [isHovered, setIsHovered] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	const filters = [
		{ id: "all", label: "All Projects" },
		{ id: "web2", label: "Web2 Projects" },
		{ id: "web3", label: "Web3 Projects" },
		{ id: "featured", label: "Featured" },
		{ id: "live", label: "Live Projects" },
		{ id: "development", label: "In Development" },
	];

	const stats = [
		{
			icon: <Eye className="w-6 h-6" />,
			number: "10K+",
			label: "Users Reached",
		},
		{
			icon: <Code className="w-6 h-6" />,
			number: "20+",
			label: "Projects Completed",
		},
		{
			icon: <Zap className="w-6 h-6" />,
			number: "100%",
			label: "Client Satisfaction",
		},
		{
			icon: <TrendingUp className="w-6 h-6" />,
			number: "3+",
			label: "Years Experience",
		},
	];

	const filteredProjects = projects.filter((p) => {
		if (activeFilter === "all") return true;
		if (activeFilter === "featured") return p.featured;
		if (activeFilter === "live") return p.status === "Live";
		if (activeFilter === "development") return p.status === "In Development";
		return p.category === activeFilter;
	});

	// Duplicate projects for seamless animation
	const duplicatedProjects = [...filteredProjects, ...filteredProjects];

	// Filter change handler
	const handleFilterChange = (filterId: string) => {
		setActiveFilter(filterId);
		if (scrollRef.current) {
			scrollRef.current.style.animationPlayState = "running";
		}
	};

	// Handle mouse events for pause animation
	const handleMouseEnter = () => {
		setIsHovered(true);
		if (scrollRef.current) {
			scrollRef.current.style.animationPlayState = "paused";
		}
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		if (scrollRef.current) {
			scrollRef.current.style.animationPlayState = "running";
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const ProjectCard = ({ project }: { project: Project }) => {
		const [imageError, setImageError] = useState(false);

		return (
			<motion.div
				variants={itemVariants}
				layout
				className="group flex">
				<Card className="overflow-hidden flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:border-purple-600 w-full">
					<div className="relative overflow-hidden h-64 bg-gray-800 flex-shrink-0">
						<Image
							src={imageError ? "/project-placeholder.jpg" : project.image}
							alt={project.title}
							fill
							loading="lazy"
							className="object-cover transition-transform duration-300 group-hover:scale-105"
							onError={() => setImageError(true)}
						/>
						<div className="absolute top-4 left-4">
							<span
								className={`px-3 py-1 rounded-full text-xs font-medium ${
									project.status === "Live"
										? "bg-green-900 text-green-200"
										: "bg-blue-900 text-blue-200"
								}`}>
								{project.status}
							</span>
						</div>
						{project.featured && (
							<div className="absolute top-4 right-4">
								<span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-900 text-yellow-200">
									Featured
								</span>
							</div>
						)}
						<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
							<div className="flex gap-4">
								{[
									{
										url: project.live,
										icon: <ExternalLink className="w-5 h-5" />,
										title: "Live Demo",
									},
									{
										url: project.github,
										icon: <Github className="w-5 h-5" />,
										title: "View Code",
									},
								]
									.filter((link) => isValidUrl(link.url))
									.map((link, idx: number) => (
										<motion.a
											key={idx}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className="w-12 h-12 rounded-full bg-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:text-white"
											title={link.title}
											aria-label={link.title}>
											{link.icon}
										</motion.a>
									))}
							</div>
						</div>
					</div>
					<div className="p-6 flex flex-col flex-grow">
						<motion.h4
							className="text-sm sm:text-base font-bold font-clash tracking-tight text-white text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}>
							{project.title}
						</motion.h4>
						<p className="text-gray-400 text-sm mb-4 text-center line-clamp-2 flex-grow">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-1 mb-4 justify-center">
							{project.tech.slice(0, 3).map((tech: string, idx: number) => (
								<span
									key={idx}
									className="px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300">
									{tech}
								</span>
							))}
							{project.tech.length > 3 && (
								<span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300">
									+{project.tech.length - 3}
								</span>
							)}
						</div>
						<div className="flex justify-center gap-3 mt-auto pt-4">
							{[
								{
									url: project.live,
									icon: <ExternalLink className="w-5 h-5" />,
									title: "Live Demo",
									bg: "bg-purple-600",
									hoverBg: "hover:bg-purple-700",
								},
								{
									url: project.github,
									icon: <Github className="w-5 h-5" />,
									title: "View Code",
									bg: "bg-gray-600",
									hoverBg: "hover:bg-gray-700",
								},
							]
								.filter((link) => isValidUrl(link.url))
								.map((link, idx: number) => (
									<motion.a
										key={idx}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.2, rotate: idx === 0 ? 5 : -5 }}
										whileTap={{ scale: 0.9 }}
										className={`flex items-center justify-center w-12 h-12 rounded-full ${link.bg} text-white ${link.hoverBg} transition-all duration-300 shadow-lg`}
										title={link.title}
										aria-label={link.title}>
										{link.icon}
									</motion.a>
								))}
						</div>
					</div>
				</Card>
			</motion.div>
		);
	};

	return (
		<div className="space-y-8 md:space-y-10">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Card className="p-6 sm:p-7 text-center relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
					<div className="relative z-10">
						<h2 className="text-lg md:text-lg lg:text-3xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							My Portfolio
						</h2>
						<p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
							Explore my latest projects across Web2 and Web3 — built with
							modern technologies and clean design.
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
					{stats.map((stat) => (
						<motion.div
							key={stat.label}
							variants={itemVariants}>
							<Card className="text-center p-5">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3">
									{stat.icon}
								</div>
								<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
									{stat.number}
								</div>
								<div className="text-sm text-gray-400">{stat.label}</div>
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
				<Card className="p-6 sm:p-7">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<div className="flex items-center gap-2">
							<Filter className="w-5 h-5 text-gray-400" />
							<span className="font-semibold text-white">
								Projects ({filteredProjects.length}/{projects.length})
							</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{filters.map((f) => (
								<button
									key={f.id}
									onClick={() => handleFilterChange(f.id)}
									aria-label={`Filter projects by ${f.label}`}
									aria-pressed={activeFilter === f.id}
									className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
										activeFilter === f.id
											? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
											: "bg-gray-800 text-gray-300 hover:bg-gray-700"
									}`}>
									{f.label}
								</button>
							))}
						</div>
					</div>
				</Card>
			</motion.section>

			{/* Projects Section with CSS Animation */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6, duration: 0.6 }}>
				<Card className="p-5 sm:p-7 overflow-hidden">
					<div className="text-center mb-6">
						<motion.h3 className="text-lg md:text-xl font-bold font-clash tracking-tight text-white mb-6 text-center">
							{activeFilter === "all"
								? "All Projects"
								: `${
										activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)
								  } Projects`}
						</motion.h3>
						<p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
							{activeFilter === "all"
								? "Browse through my complete collection of Web2 and Web3 projects"
								: activeFilter === "web2"
								? "Traditional web applications built with modern technologies"
								: activeFilter === "web3"
								? "Decentralized applications leveraging blockchain technology"
								: activeFilter === "featured"
								? "Highlighted projects showcasing my best work"
								: activeFilter === "live"
								? "Projects currently deployed and accessible online"
								: "Projects currently under development"}
						</p>
					</div>

					{/* Infinite auto-scrolling carousel - pure CSS */}
					<div className="relative w-full overflow-hidden py-4">
						{/* Container with mask for fading edges */}
						<div className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-gray-900 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-gray-900 after:to-transparent after:z-10">
							{/* Scroll container with animation */}
							<div
								ref={scrollRef}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								className="flex gap-6 w-max animate-infinite-scroll"
								style={{
									animationDuration:
										filteredProjects.length > 3 ? "40s" : "60s",
									animationPlayState: isHovered ? "paused" : "running",
								}}>
								{/* Render duplicated projects for seamless animation */}
								{duplicatedProjects.map((project, index) => (
									<motion.div
										key={`${project.id}-${index}`}
										className="min-w-[300px] sm:min-w-[400px] lg:min-w-[450px] flex-shrink-0"
										whileHover={{ scale: 1.04 }}
										transition={{ duration: 0.3 }}>
										<div className="rounded-2xl bg-gray-800 border border-gray-700 h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-purple-600/60">
											{/* Image */}
											<div className="relative w-full h-64 bg-gray-700 overflow-hidden">
												<Image
													src={project.image}
													alt={project.title}
													fill
													className="object-cover transition-transform duration-700 group-hover:scale-110"
													sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
												/>
												{/* Status badge */}
												<div className="absolute top-4 left-4">
													<span
														className={`px-3 py-1 rounded-full text-xs font-medium ${
															project.status === "Live"
																? "bg-green-900/30 text-green-300 border border-green-800/50"
																: "bg-blue-900/30 text-blue-300 border border-blue-800/50"
														}`}>
														{project.status}
													</span>
												</div>
												{project.featured && (
													<div className="absolute top-4 right-4">
														<span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-900/30 text-yellow-300 border border-yellow-800/50">
															Featured
														</span>
													</div>
												)}
											</div>

											{/* Content */}
											<div className="p-6 flex flex-col items-center flex-grow">
												<motion.h4
													className="text-sm sm:text-base font-bold text-center mb-4 font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
													whileHover={{ scale: 1.03 }}>
													{project.title}
												</motion.h4>

												<p className="text-gray-400 text-sm text-center line-clamp-2 mb-4">
													{project.description}
												</p>

												{/* Tech stack */}
												<div className="flex flex-wrap gap-2 justify-center mb-4">
													{project.tech
														.slice(0, 3)
														.map((tech: string, idx: number) => (
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
													{project.live && isValidUrl(project.live) && (
														<motion.a
															href={project.live}
															target="_blank"
															rel="noopener noreferrer"
															whileHover={{ scale: 1.25, rotate: 8 }}
															whileTap={{ scale: 0.9 }}
															className="flex items-center justify-center w-11 h-11 rounded-full bg-purple-600/90 text-white hover:bg-purple-700 transition-colors shadow-md"
															title="Live Demo">
															<ExternalLink className="w-5 h-5" />
														</motion.a>
													)}

													{project.github && isValidUrl(project.github) && (
														<motion.a
															href={project.github}
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
								))}
							</div>
						</div>
					</div>
				</Card>
			</motion.section>

			{/* CTA Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.6 }}>
				<Card className="p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
					<div className="absolute inset-0 opacity-10">
						<div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full" />
						<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full" />
					</div>
					<div className="relative z-10">
						<h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
						<p className="text-purple-100 mb-6 max-w-2xl mx-auto">
							Let's discuss your next Web3 or Web2 project and bring your ideas
							to life.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-2xl bg-white text-purple-600 font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
								aria-label="Start a new project">
								Start a Project
								<ArrowRight className="w-5 h-5" />
							</motion.a>
						</div>
					</div>
				</Card>
			</motion.section>
		</div>
	);
}
