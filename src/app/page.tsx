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
import { useRef, useState, useEffect } from "react";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

export default function Home() {
	const pageRef = useRef<HTMLDivElement>(null);
	useGSAPAnimations({ scopeRef: pageRef });

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

	const [currentPage, setCurrentPage] = useState(0);
	const [selectedProject, setSelectedProject] = useState<
		(typeof featuredProjects)[0] | null
	>(null);
	const [itemsPerPage, setItemsPerPage] = useState<number>(2);

	useEffect(() => {
		const updateItemsPerPage = () => {
			const w = window.innerWidth;
			setItemsPerPage(w < 768 ? 1 : 2);
		};
		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);
		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const totalPages = Math.max(
		1,
		Math.ceil(featuredProjects.length / itemsPerPage),
	);
	// Clamp current page if itemsPerPage changed
	useEffect(() => {
		setCurrentPage((p) => Math.min(p, totalPages - 1));
	}, [itemsPerPage, totalPages]);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedProjects = featuredProjects.slice(startIndex, endIndex);

	const handlePrevPage = () => {
		setCurrentPage((prev) => Math.max(0, prev - 1));
		setSelectedProject(null);
	};

	const handleNextPage = () => {
		setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
		setSelectedProject(null);
	};

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
		<div
			ref={pageRef}
			className="section-gap space-y-8 md:space-y-10">
			{/* Welcome Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.85 }}>
				<Card className="p-5 sm:p-7 text-center relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
					<div className="relative z-10">
						<h2
							data-gsap-hero-title
							className="text-2xl sm:text-3xl lg:text-4xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							{"Welcome to My Digital Space".split(" ").map((word, index) => (
								<span
									key={`${word}-${index}`}
									data-gsap-hero-word
									className="inline-block mr-2 last:mr-0">
									{word}
								</span>
							))}
						</h2>
						<p
							data-gsap-hero-subtext
							className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
							I create innovative Web3 solutions, trading applications, and
							stunning digital experiences that push the boundaries of what's
							possible on the web.
						</p>
						<motion.a
							href="/portfolio"
							data-gsap-hero-cta
							data-anime-hover
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:shadow-2xl">
							Explore My Work
							<ArrowRight
								className="w-5 h-5"
								data-anime-icon
							/>
						</motion.a>
					</div>
				</Card>
			</motion.section>

			{/* Stats Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.85 }}
				className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{stats.map((stat, index) => (
					<Card
						key={stat.label}
						data-gsap-reveal
						className="text-center p-4 sm:p-5">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.3 + index * 0.1 }}
							className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3">
							{stat.icon}
						</motion.div>
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
						<div className="text-sm font-accent tracking-wider uppercase text-gray-400">
							{stat.label}
						</div>
					</Card>
				))}
			</motion.section>

			{/* Featured Projects Section with Pagination */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.75, duration: 0.85 }}>
				<Card className="p-5 sm:p-7">
					<div className="text-center mb-8">
						<motion.h3
							data-gsap-text-stagger="words"
							className="text-lg md:text-xl font-bold font-clash tracking-tight text-white mb-6 text-center">
							Featured Projects
						</motion.h3>
					</div>

					<div className="relative">
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
								<motion.div
									key={project.title}
									data-gsap-reveal
									data-gsap-parallax-card
									onClick={() => setSelectedProject(project)}
									className="group flex cursor-pointer h-full">
									<Card className="overflow-hidden flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:border-purple-600/80 group-hover:scale-[1.02] w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50">
										<div className="relative overflow-hidden h-72 sm:h-72 md:h-96 bg-gray-800 flex-shrink-0">
											<Image
												src={project.image}
												alt={project.title}
												fill
												loading="lazy"
												data-gsap-parallax-image
												className="object-cover transition-transform duration-300 group-hover:scale-105"
											/>
											<div className="absolute top-4 left-4">
												<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-200">
													{project.status}
												</span>
											</div>

											{/* Mobile overlay: show title + live link only on small screens */}
											<div className="absolute left-4 right-4 bottom-4 p-2 rounded-md bg-black/60 flex items-center justify-between sm:hidden">
												<span className="text-sm font-semibold text-white truncate">
													{project.title}
												</span>
												{project.liveUrl && project.liveUrl !== "#" && (
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
														onClick={(e) => e.stopPropagation()}
														className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded bg-purple-600 text-xs text-white font-medium">
														Live
													</a>
												)}
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
																data-anime-click
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
										<div className="hidden sm:flex p-4 sm:p-6 flex flex-col flex-grow">
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
															data-anime-click
															target="_blank"
															rel="noopener noreferrer"
															onClick={(e) => e.stopPropagation()}
															whileHover={{
																scale: 1.2,
																rotate: idx === 0 ? 5 : -5,
															}}
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
							))}
						</motion.div>
					</div>

					{totalPages > 1 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.3 }}
							className="flex flex-col items-center gap-4 sm:gap-6 mt-4">
							<div className="flex items-center justify-center gap-3 sm:gap-6">
								<motion.button
									onClick={handlePrevPage}
									disabled={currentPage === 0}
									whileHover={{ scale: currentPage > 0 ? 1.15 : 1 }}
									whileTap={{ scale: 0.85 }}
									className={`flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full transition-all duration-300 shadow-lg ${currentPage === 0 ? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50" : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-2xl hover:from-purple-500 hover:to-purple-600"}`}
									aria-label="Previous page">
									<ChevronLeft className="w-6 h-6" />
								</motion.button>

								<div className="flex items-center gap-3">
									{Array.from({ length: totalPages }).map((_, index) => (
										<motion.button
											key={index}
											onClick={() => setCurrentPage(index)}
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 0.9 }}
											className={`rounded-full transition-all duration-300 ${index === currentPage ? "bg-gradient-to-r from-purple-600 to-blue-600 w-8 h-3" : "bg-gray-600 w-3 h-3 hover:bg-gray-500"}`}
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
									className={`flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full transition-all duration-300 shadow-lg ${currentPage === totalPages - 1 ? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50" : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-2xl hover:from-purple-500 hover:to-purple-600"}`}
									aria-label="Next page">
									<ChevronRight className="w-6 h-6" />
								</motion.button>
							</div>

							<p className="text-xs sm:text-sm text-gray-400">
								Page {currentPage + 1} of {totalPages}
							</p>
						</motion.div>
					)}

					<div className="text-center mt-10">
						<motion.a
							href="/portfolio"
							data-anime-hover
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-400 font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-500">
							View All Projects
							<ArrowRight
								className="w-4 h-4"
								data-anime-icon
							/>
						</motion.a>
					</div>
				</Card>
			</motion.section>

			{/* Skills Progress */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.15, duration: 0.85 }}>
				<Card
					className="p-5"
					data-gsap-reveal>
					<motion.h3
						data-gsap-text-stagger="words"
						className="text-lg sm:text-xl font-bold font-clash tracking-tight text-white mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-2">
						Core Expertise
					</motion.h3>
					<div className="space-y-4">
						{featuredSkills.map((skill, index) => (
							<motion.div
								key={skill.title}
								data-gsap-progress-item
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
										data-gsap-progress-bar
										data-progress={skill.progress}
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

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.35, duration: 0.85 }}>
				<ExpertAreaCard />
			</motion.section>
		</div>
	);
}
