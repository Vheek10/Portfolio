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
	ChevronLeft,
	ChevronRight,
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
		{
			title: "EasyB Group",
			description:
				"EasyB Group is built for clients who need high-level executive services and serious logistics capability in one accountable team",
			tech: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
			status: "Live",
			liveUrl: "https://easybgroup.co.za/",
			githubUrl: "#",
			image: "/easyb.png",
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
		{
			title: "DevOps Engineering",
			description: "CI/CD, Kubernetes, Terraform, AWS, GitHub Actions",
			progress: 80,
		},
	];

	// Add hover state
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedProject, setSelectedProject] = useState<
		(typeof featuredProjects)[0] | null
	>(null);
	const itemsPerPage = 2;

	// Pagination logic
	const totalPages = Math.ceil(featuredProjects.length / itemsPerPage);
	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedProjects = featuredProjects.slice(startIndex, endIndex);

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
							stunning digital experiences that push the boundaries of
							what&apos;s possible on the web.
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
				{highlights.map((highlight) => (
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

			{/* Featured Projects Section with Pagination */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6, duration: 0.6 }}>
				<Card className="p-5 sm:p-7">
					<div className="text-center mb-8">
						<motion.h3 className="text-lg md:text-xl font-bold font-clash tracking-tight text-white mb-6 text-center">
							Featured Projects
						</motion.h3>
						<p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
							Showcasing my diverse range of projects from blockchain
							applications to trading bots and modern web applications
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
							className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 max-w-6xl mx-auto cursor-grab active:cursor-grabbing">
							{paginatedProjects.map((project) => (
								<motion.div
									key={project.title}
									onClick={() => setSelectedProject(project)}
									className="group flex cursor-pointer h-full">
									<Card className="overflow-hidden flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:border-purple-600/80 group-hover:scale-[1.02] w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50">
										<div className="relative overflow-hidden h-80 sm:h-96 bg-gray-800 flex-shrink-0">
											<Image
												src={project.image}
												alt={project.title}
												fill
												loading="lazy"
												className="object-cover transition-transform duration-300 group-hover:scale-105"
											/>
											<div className="absolute top-4 left-4">
												<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-200">
													{project.status}
												</span>
											</div>
											<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
												<div className="flex gap-4">
													{[
														{
															url: project.liveUrl,
															icon: <ExternalLink className="w-5 h-5" />,
															title: "Live Demo",
														},
														{
															url: project.githubUrl,
															icon: <Github className="w-5 h-5" />,
															title: "View Code",
														},
													]
														.filter((link) => link.url && link.url !== "#")
														.map((link, idx: number) => (
															<motion.a
																key={idx}
																href={link.url}
																target="_blank"
																rel="noopener noreferrer"
																onClick={(e) => e.stopPropagation()}
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
												className="text-sm sm:text-base font-bold font-clash tracking-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.3 }}>
												{project.title}
											</motion.h4>
											<div className="flex flex-wrap gap-1 mb-4 justify-center">
												{project.tech
													.slice(0, 3)
													.map((tech: string, idx: number) => (
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
														url: project.liveUrl,
														icon: <ExternalLink className="w-5 h-5" />,
														title: "Live Demo",
														bg: "bg-purple-600",
														hoverBg: "hover:bg-purple-700",
													},
													{
														url: project.githubUrl,
														icon: <Github className="w-5 h-5" />,
														title: "View Code",
														bg: "bg-gray-600",
														hoverBg: "hover:bg-gray-700",
													},
												]
													.filter((link) => link.url && link.url !== "#")
													.map((link, idx: number) => (
														<motion.a
															key={idx}
															href={link.url}
															target="_blank"
															rel="noopener noreferrer"
															onClick={(e) => e.stopPropagation()}
															whileHover={{
																scale: 1.2,
																rotate: idx === 0 ? 5 : -5,
															}}
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
							))}
						</motion.div>
					</div>

					{/* Pagination Controls */}
					{totalPages > 1 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.3 }}
							className="flex flex-col items-center gap-6 mt-4">
							{/* Navigation Buttons */}
							<div className="flex items-center justify-center gap-6">
								<motion.button
									onClick={handlePrevPage}
									disabled={currentPage === 0}
									whileHover={{ scale: currentPage > 0 ? 1.15 : 1 }}
									whileTap={{ scale: 0.85 }}
									className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 shadow-lg ${
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
									className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 shadow-lg ${
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
						<div className="sticky top-0 p-6 border-b border-gray-700 bg-gray-900 flex items-center justify-between">
							<div>
								<h3 className="text-2xl font-bold font-clash text-white mb-2">
									{selectedProject.title}
								</h3>
								<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-200">
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
						<div className="p-6">
							{/* Image */}
							<div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
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
							<div className="flex gap-4">
								{selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
									<motion.a
										href={selectedProject.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex-1 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2">
										<ExternalLink className="w-5 h-5" />
										View Live
									</motion.a>
								)}
								{selectedProject.githubUrl &&
									selectedProject.githubUrl !== "#" && (
										<motion.a
											href={selectedProject.githubUrl}
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
