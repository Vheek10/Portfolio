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
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

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
	{
		id: 8,
		title: "EasyB Group",
		category: "web2",
		description:
			"EasyB Group is built for clients who need high-level executive services and serious logistics capability in one accountable team",
		tech: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
		status: "Live",
		live: "https://easybgroup.co.za/",
		github: "#",
		image: "/easyb.png",
		featured: true,
	},

	// ==== Web3 Projects ====
	{
		id: 9,
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
		id: 10,
		title: "DeFi Portfolio Tracker",
		category: "web3",
		description: "Multi-chain portfolio tracker with real-time P&L analytics.",
		image: "/project-placeholder.jpg",
		tech: ["Next.js", "Ethers.js", "TailwindCSS", "Multiple APIs"],
		github: "#",
		live: "#",
		featured: false, // ADDED THIS LINE
		status: "In Development",
	},

	{
		id: 11,
		title: "PolySight - Solana Prediction Market",
		category: "web3",
		description: "Decentralized prediction platform on Solana blockchain.",
		image: "/polysight.png",
		tech: ["Next.js", "Rust", "Solana", "TypeScript"],
		github: "https://github.com/Vheek10/Polysight",
		live: "https://polysight.vercel.app",
		featured: false, // This was also missing, but it looks like it might not be in your original
		status: "Live",
	},
];

// URL validation helper
const isValidUrl = (url: string) => {
	return url && url !== "#" && (url.startsWith("http") || url.startsWith("/"));
};

export default function Portfolio() {
	const pageRef = useRef<HTMLDivElement>(null);
	useGSAPAnimations({ scopeRef: pageRef });

	const [activeFilter, setActiveFilter] = useState("all");
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const itemsPerPage = 2;

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
			number: "30+",
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

	// Pagination logic
	const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

	// Filter change handler
	const handleFilterChange = (filterId: string) => {
		setActiveFilter(filterId);
		setCurrentPage(0); // Reset to first page
	};

	// Pagination handlers with swipe support
	const handlePrevPage = () => {
		setCurrentPage((prev) => Math.max(0, prev - 1));
		setSelectedProject(null);
	};

	const handleNextPage = () => {
		setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
		setSelectedProject(null);
	};

	// Swipe detection
	const handleDragEnd = (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: { offset: { x: number } },
	) => {
		const swipeThreshold = 50;
		const swipe = info.offset.x;

		if (swipe > swipeThreshold) {
			handlePrevPage();
		} else if (swipe < -swipeThreshold) {
			handleNextPage();
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
				data-gsap-reveal
				data-gsap-parallax-card
				onClick={() => setSelectedProject(project)}
				className="group flex cursor-pointer h-full">
				<Card className="overflow-hidden flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:border-purple-600/80 group-hover:scale-[1.02] w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 pointer-events-auto">
					<div className="relative overflow-hidden h-56 sm:h-72 md:h-96 bg-gray-800 flex-shrink-0">
						<Image
							src={imageError ? "/project-placeholder.jpg" : project.image}
							alt={project.title}
							fill
							loading="lazy"
							data-gsap-parallax-image
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
											onClick={(e) => e.stopPropagation()}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:text-white"
											title={link.title}
											aria-label={link.title}>
											{link.icon}
										</motion.a>
									))}
							</div>
						</div>
					</div>
					<div className="p-4 sm:p-6 flex flex-col flex-grow">
						<motion.h4
							className="text-sm sm:text-base font-bold font-clash tracking-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}>
							{project.title}
						</motion.h4>
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
										onClick={(e) => e.stopPropagation()}
										whileHover={{ scale: 1.2, rotate: idx === 0 ? 5 : -5 }}
										whileTap={{ scale: 0.9 }}
										className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${link.bg} text-white ${link.hoverBg} transition-all duration-300 shadow-lg`}
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
		<div
			ref={pageRef}
			className="space-y-8 md:space-y-10">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Card
					className="p-6 sm:p-7 text-center relative overflow-hidden"
					data-gsap-reveal>
					<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
					<div className="relative z-10">
						<h2
							data-gsap-text-stagger="words"
							className="text-2xl sm:text-3xl lg:text-4xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
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
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
					{stats.map((stat) => (
						<motion.div
							key={stat.label}
							variants={itemVariants}>
							<Card
								className="text-center p-4 sm:p-5"
								data-gsap-reveal>
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3">
									{stat.icon}
								</div>
								<div
									className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
									data-gsap-counter-group>
									<span
										data-gsap-count
										data-count-to={Number.parseFloat(stat.number)}
										data-count-suffix={stat.number.replace(/[\d.]/g, "")}
										data-count-prefix="">
										0
									</span>
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
				<Card
					className="p-6 sm:p-7"
					data-gsap-reveal>
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<div className="flex items-center gap-2">
							<Filter className="w-5 h-5 text-gray-400" />
							<span className="font-semibold text-white text-sm sm:text-base">
								Projects ({filteredProjects.length}/{projects.length})
							</span>
						</div>
						<div className="flex flex-wrap gap-2 overflow-x-auto pb-1 sm:overflow-visible">
							{filters.map((f) => (
								<button
									key={f.id}
									onClick={() => handleFilterChange(f.id)}
									aria-label={`Filter projects by ${f.label}`}
									aria-pressed={activeFilter === f.id}
									className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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

			{/* Projects Section with Pagination */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6, duration: 0.6 }}>
				<Card
					className="p-5 sm:p-7"
					data-gsap-reveal>
					<div className="text-center mb-8">
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

					{/* Projects Grid - 2 Cards Layout with Swipe Support */}
					<div className="relative">
						{/* Swipe Hint for Mobile */}
						<div className="md:hidden text-center mb-4">
							<p className="text-xs text-gray-500 flex items-center justify-center gap-2">
								<span className="inline-block">
									Swipe left/right or use arrows
								</span>
							</p>
						</div>

						<motion.div
							key={currentPage}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.2}
							onDragEnd={handleDragEnd}
							dragTransition={{ power: 0.2, restDelta: 5 }}
							className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 max-w-6xl mx-auto cursor-grab active:cursor-grabbing">
							{paginatedProjects.map((project) => (
								<ProjectCard
									key={project.id}
									project={project}
								/>
							))}
						</motion.div>
					</div>

					{/* Pagination Controls */}
					{totalPages > 1 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.3 }}
							className="flex flex-col items-center gap-4 sm:gap-6 mt-4">
							{/* Navigation Buttons */}
							<div className="flex items-center justify-center gap-3 sm:gap-6">
								<motion.button
									onClick={handlePrevPage}
									disabled={currentPage === 0}
									whileHover={{ scale: currentPage > 0 ? 1.15 : 1 }}
									whileTap={{ scale: 0.85 }}
									className={`flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full transition-all duration-300 shadow-lg ${
										currentPage === 0
											? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50"
											: "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-2xl hover:from-purple-500 hover:to-purple-600"
									}`}
									aria-label="Previous page">
									<ChevronLeft className="w-6 h-6" />
								</motion.button>

								{/* Page Indicators */}
								<div className="flex items-center gap-3">
									{Array.from({ length: totalPages }).map((_, index) => (
										<motion.button
											key={index}
											onClick={() => setCurrentPage(index)}
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 0.9 }}
											className={`rounded-full transition-all duration-300 ${
												index === currentPage
													? "bg-gradient-to-r from-purple-600 to-blue-600 w-8 h-3"
													: "bg-gray-600 w-3 h-3 hover:bg-gray-500"
											}`}
											aria-label={`Go to page ${index + 1}`}
											aria-current={index === currentPage ? "page" : undefined}
										/>
									))}
								</div>

								<motion.button
									onClick={handleNextPage}
									disabled={currentPage === totalPages - 1}
									whileHover={{
										scale: currentPage < totalPages - 1 ? 1.15 : 1,
									}}
									whileTap={{ scale: 0.85 }}
									className={`flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full transition-all duration-300 shadow-lg ${
										currentPage === totalPages - 1
											? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50"
											: "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-2xl hover:from-purple-500 hover:to-purple-600"
									}`}
									aria-label="Next page">
									<ChevronRight className="w-6 h-6" />
								</motion.button>
							</div>

							{/* Page Info */}
							<p className="text-xs sm:text-sm text-gray-400">
								Page {currentPage + 1} of {totalPages}
							</p>
						</motion.div>
					)}

					{/* Empty State */}
					{paginatedProjects.length === 0 && (
						<div className="text-center py-12">
							<p className="text-gray-400 text-lg">
								No projects found in this category.
							</p>
						</div>
					)}
				</Card>
			</motion.section>

			{/* CTA Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.6 }}>
				<Card className="p-5 sm:p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
					<div className="absolute inset-0 opacity-10">
						<div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full" />
						<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full" />
					</div>
					<div className="relative z-10">
						<h3 className="text-xl sm:text-2xl font-bold mb-4">
							Have a Project in Mind?
						</h3>
						<p className="text-purple-100 mb-6 max-w-2xl mx-auto">
							Let&apos;s discuss your next Web3 or Web2 project and bring your
							ideas to life.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-purple-600 font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
								aria-label="Start a new project">
								Start a Project
								<ArrowRight className="w-5 h-5" />
							</motion.a>
						</div>
					</div>
				</Card>
			</motion.section>

			{/* Project Description Modal */}
			{selectedProject && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setSelectedProject(null)}
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
						{/* Modal Header */}
						<div className="sticky top-0 p-4 sm:p-6 border-b border-gray-700 bg-gray-900 flex items-center justify-between gap-3">
							<div>
								<h3 className="text-xl sm:text-2xl font-bold font-clash text-white mb-2">
									{selectedProject.title}
								</h3>
								<span
									className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
										selectedProject.status === "Live"
											? "bg-green-900 text-green-200"
											: "bg-blue-900 text-blue-200"
									}`}>
									{selectedProject.status}
								</span>
							</div>
							<motion.button
								onClick={() => setSelectedProject(null)}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="text-gray-400 hover:text-white transition-colors">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</motion.button>
						</div>

						{/* Modal Content */}
						<div className="p-4 sm:p-6">
							{/* Image */}
							<div className="relative w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden">
								<Image
									src={selectedProject.image}
									alt={selectedProject.title}
									fill
									className="object-cover"
								/>
							</div>

							{/* Description */}
							<div className="mb-6">
								<h4 className="text-lg font-semibold text-purple-400 mb-2">
									About this project
								</h4>
								<p className="text-gray-300 leading-relaxed text-base">
									{selectedProject.description}
								</p>
							</div>

							{/* Tech Stack */}
							<div className="mb-6">
								<h4 className="text-lg font-semibold text-purple-400 mb-3">
									Technologies Used
								</h4>
								<div className="flex flex-wrap gap-2">
									{selectedProject.tech.map((tech: string, idx: number) => (
										<span
											key={idx}
											className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								{selectedProject.live && isValidUrl(selectedProject.live) && (
									<motion.a
										href={selectedProject.live}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex-1 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2">
										<ExternalLink className="w-5 h-5" />
										View Live
									</motion.a>
								)}
								{selectedProject.github &&
									isValidUrl(selectedProject.github) && (
										<motion.a
											href={selectedProject.github}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="flex-1 px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2">
											<Github className="w-5 h-5" />
											View Code
										</motion.a>
									)}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}
