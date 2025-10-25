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
} from "lucide-react";

export default function Home() {
	const featuredProjects = [
		{
			title: "DeFi Protocol",
			description:
				"A decentralized finance platform with yield farming and staking features.",
			tech: ["Solidity", "React", "Node.js"],
			status: "Live",
		},
		{
			title: "NFT Marketplace",
			description:
				"Multi-chain NFT marketplace with advanced trading features.",
			tech: ["Next.js", "Web3.js", "MongoDB"],
			status: "In Development",
		},
		{
			title: "DAO Governance",
			description:
				"Decentralized autonomous organization with voting and proposal system.",
			tech: ["Hardhat", "TypeScript", "The Graph"],
			status: "Live",
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
			number: "50+",
			label: "Projects Completed",
		},
		{
			icon: <Star className="w-6 h-6" />,
			number: "4+",
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
			title: "Smart Contracts",
			description: "Secure & efficient blockchain development",
			progress: 90,
		},
		{
			title: "UI/UX Design",
			description: "User-centered design solutions",
			progress: 85,
		},
		{
			title: "Full-Stack Dev",
			description: "End-to-end web application development",
			progress: 95,
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
					<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10" />

					<div className="relative z-10">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							Welcome to My Digital Space
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
							I create innovative Web3 solutions and stunning digital
							experiences that push the boundaries of what's possible on the
							web.
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
						<div className="text-sm text-gray-600 dark:text-gray-400">
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
						className="p-6 text-center group">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
							{highlight.icon}
						</div>
						<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
							{highlight.title}
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							{highlight.description}
						</p>
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
						<p className="text-gray-600 dark:text-gray-400">
							A glimpse into some of my recent work and innovations
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
								className="group">
								<div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-300 dark:group-hover:border-purple-600 h-full">
									<div className="flex justify-between items-start mb-3">
										<h3 className="text-lg font-bold text-gray-900 dark:text-white">
											{project.title}
										</h3>
										<span
											className={`px-2 py-1 rounded-full text-xs font-medium ${
												project.status === "Live"
													? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
													: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
											}`}>
											{project.status}
										</span>
									</div>

									<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, idx) => (
											<span
												key={idx}
												className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-xs text-gray-700 dark:text-gray-300">
												{tech}
											</span>
										))}
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
					<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
						Core Expertise
					</h3>
					<div className="space-y-4">
						{featuredSkills.map((skill, index) => (
							<motion.div
								key={skill.title}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.2 + index * 0.1 }}
								className="group">
								<div className="flex justify-between items-center mb-2">
									<span className="font-semibold text-gray-900 dark:text-white">
										{skill.title}
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										{skill.progress}%
									</span>
								</div>
								<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: `${skill.progress}%` }}
										transition={{ delay: 1.4 + index * 0.1, duration: 1 }}
										className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
									/>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
