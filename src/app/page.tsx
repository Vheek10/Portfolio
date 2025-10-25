/** @format */

"use client";

import { motion } from "framer-motion";
import { ProfileCard } from "@/components/ProfileCard";
import { Card } from "@/components/Card";
import {
	ArrowRight,
	Code,
	Palette,
	Smartphone,
	Server,
	Zap,
	ExternalLink,
	Star,
	Award,
	Clock,
} from "lucide-react";

export default function Home() {
	const stats = [
		{
			icon: <Award className="w-6 h-6" />,
			number: "50+",
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
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
			{/* Main Content Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column - Profile Card */}
					<div className="lg:col-span-1">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}>
							<ProfileCard />
						</motion.div>
					</div>

					{/* Right Column - Content */}
					<div className="lg:col-span-2">
						{/* Stats Cards */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
						</motion.div>

						{/* Skills Progress */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="mb-8">
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
											transition={{ delay: 0.5 + index * 0.1 }}
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
													transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
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
						</motion.div>

						{/* CTA Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}>
							<Card className="p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
								{/* Background Pattern */}
								<div className="absolute inset-0 opacity-10">
									<div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full" />
									<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full" />
								</div>

								<div className="relative z-10">
									<h3 className="text-2xl font-bold mb-4">
										Ready to Build Something Amazing?
									</h3>
									<p className="text-purple-100 mb-6">
										Let's collaborate on your next Web3 project with
										cutting-edge technology and stunning design.
									</p>

									<motion.a
										href="/contact"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-purple-600 font-semibold transition-all duration-300 hover:shadow-2xl">
										Start Project
										<ArrowRight className="w-5 h-5" />
									</motion.a>
								</div>
							</Card>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
