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

export default function Home() {
	const featuredProjects = [
		{
			title: "ElgVote - Voting DApp",
			description:
				"A decentralized voting application built on Ethereum blockchain with secure and transparent voting mechanism.",
			tech: ["Solidity", "Next.js", "Tailwind CSS", "Web3.js", "Hardhat"],
			status: "Live",
			liveUrl: "#",
			githubUrl: "#",
			image: "/projects/elgvote.png",
		},
		{
			title: "Crypto Trading Bot",
			description:
				"Automated cryptocurrency trading bot with real-time market analysis, multiple strategy support, and risk management.",
			tech: ["Python", "Node.js", "React", "MongoDB", "Binance API"],
			status: "Live",
			liveUrl: "#",
			githubUrl: "#",
			image: "/projects/trading-bot.png",
		},
		{
			title: "Portfolio Website",
			description:
				"Modern, responsive portfolio website with smooth animations and optimized performance.",
			tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
			status: "Live",
			liveUrl: "#",
			githubUrl: "#",
			image: "/projects/portfolio.png",
		},
		{
			title: "E-Commerce Platform",
			description:
				"Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
			tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
			status: "Completed",
			liveUrl: "#",
			githubUrl: "#",
			image: "/projects/ecommerce.png",
		},
		{
			title: "Task Management App",
			description:
				"Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
			tech: ["React", "Firebase", "Material-UI", "Redux"],
			status: "Live",
			liveUrl: "#",
			githubUrl: "#",
			image: "/projects/taskapp.png",
		},
		{
			title: "Weather Dashboard",
			description:
				"Real-time weather application with forecast, interactive maps, and location-based services.",
			tech: ["Vue.js", "OpenWeather API", "Chart.js", "Leaflet"],
			status: "Live",
			liveUrl: "#",
			githubUrl: "#",
			image: "/projects/weather.png",
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
			description: "React, Next.js, Vue.js, TypeScript",
			progress: 90,
		},
		{
			title: "Blockchain & Web3",
			description: "Solidity, Smart Contracts, DApp Development",
			progress: 85,
		},
		{
			title: "Backend Development",
			description: "Node.js, Python, MongoDB, REST APIs",
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
								<div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-600 h-full flex flex-col">
									{/* Project Image Placeholder */}
									<div className="w-full h-32 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg mb-4 flex items-center justify-center">
										<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
											{project.title.split(" ")[0]}
										</div>
									</div>

									<div className="flex justify-between items-start mb-3">
										<h3 className="text-lg font-bold text-white">
											{project.title}
										</h3>
										<span
											className={`px-2 py-1 rounded-full text-xs font-medium ${
												project.status === "Live"
													? "bg-green-900 text-green-200"
													: project.status === "In Development"
													? "bg-blue-900 text-blue-200"
													: "bg-gray-700 text-gray-200"
											}`}>
											{project.status}
										</span>
									</div>

									<p className="text-gray-400 text-sm mb-4 flex-grow">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech, idx) => (
											<span
												key={idx}
												className="px-2 py-1 bg-gray-700 border border-gray-600 rounded-full text-xs text-gray-300">
												{tech}
											</span>
										))}
									</div>

									{/* Project Links */}
									<div className="flex gap-3 mt-auto">
										{project.liveUrl && (
											<a
												href={project.liveUrl}
												className="flex items-center gap-1 px-3 py-1 text-xs bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
												<ExternalLink className="w-3 h-3" />
												Live Demo
											</a>
										)}
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
												<Github className="w-3 h-3" />
												Code
											</a>
										)}
									</div>
								</div>
							</motion.div>
						))}
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
