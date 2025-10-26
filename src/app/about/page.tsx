/** @format */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import ExpertAreaCard from "@/components/ExpertAreaCard";
import {
	Target,
	Heart,
	Zap,
	Globe,
	Code,
	Palette,
	Database,
	Cloud,
} from "lucide-react";

export default function About() {
	const stats = [
		{
			icon: <Target className="w-6 h-6" />,
			number: "15+",
			label: "Projects Delivered",
		},
		{
			icon: <Heart className="w-6 h-6" />,
			number: "10+",
			label: "Happy Clients",
		},
		{
			icon: <Zap className="w-6 h-6" />,
			number: "2+",
			label: "Years Experience",
		},
		{
			icon: <Globe className="w-6 h-6" />,
			number: "2+",
			label: "Countries Served",
		},
	];

	const services = [
		{
			icon: <Code className="w-8 h-8" />,
			title: "Web3 Development",
			description:
				"Building decentralized applications with smart contracts, blockchain integration, and secure Web3 protocols.",
			features: [
				"Smart Contracts",
				"DApp Development",
				"Blockchain Integration",
			],
		},
		{
			icon: <Palette className="w-8 h-8" />,
			title: "UI/UX Design",
			description:
				"Creating intuitive and beautiful user interfaces that provide exceptional user experiences across all devices.",
			features: ["User Research", "Wireframing", "Prototyping"],
		},
		{
			icon: <Database className="w-8 h-8" />,
			title: "Full-Stack Development",
			description:
				"End-to-end web application development with modern technologies and scalable architecture.",
			features: ["Frontend & Backend", "API Development", "Database Design"],
		},
		{
			icon: <Cloud className="w-8 h-8" />,
			title: "DevOps & Deployment",
			description:
				"Streamlining deployment processes and ensuring reliable, scalable infrastructure for your applications.",
			features: [
				"CI/CD Pipelines",
				"Cloud Infrastructure",
				"Performance Optimization",
			],
		},
	];

	const values = [
		{
			title: "Quality First",
			description:
				"I believe in delivering exceptional quality in every project, paying attention to every detail from code to user experience.",
		},
		{
			title: "Continuous Learning",
			description:
				"The tech landscape evolves rapidly. I stay updated with the latest technologies and best practices.",
		},
		{
			title: "Client Collaboration",
			description:
				"I work closely with clients to understand their vision and transform it into reality through transparent communication.",
		},
		{
			title: "Innovation Driven",
			description:
				"I love exploring new technologies and approaches to solve complex problems in creative ways.",
		},
	];

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
							About Me
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
							Passionate Web3 developer and digital creator with a focus on
							building innovative solutions that bridge the gap between
							cutting-edge technology and exceptional user experiences.
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

			{/* Services Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.6 }}>
				<Card className="p-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							What I Offer
						</h2>
						<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							Comprehensive digital solutions tailored to your business needs,
							from concept to deployment and beyond.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
								className="group">
								<div className="flex flex-col h-full p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-300 dark:group-hover:border-purple-600">
									<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-4">
										{service.icon}
									</div>

									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
										{service.title}
									</h3>

									<p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
										{service.description}
									</p>

									<div className="space-y-2">
										{service.features.map((feature, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
												<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
												{feature}
											</div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</Card>
			</motion.section>

			{/* Values Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.6 }}>
				<Card className="p-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							My Values
						</h2>
						<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							The principles that guide my work and ensure successful
							collaborations with every client.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
								className="group text-center">
								<div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-300 dark:group-hover:border-purple-600">
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
										{value.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
										{value.description}
									</p>
								</div>
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
