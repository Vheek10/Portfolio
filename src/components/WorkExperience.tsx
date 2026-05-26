/** @format */

"use client";

import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import React from "react";

const experiences = [
	{
		role: "Lead Developer",
		company: "ValueContentAfrica",
		location: "Remote",
		dates: "2025 – Present",
		bullets: [
			"Leading end-to-end development of a creator empowerment platform",
			"Architecting scalable systems using modern web technologies and real-time features",
			"Building microservices and analytics dashboard for content creators across Africa",
		],
	},
	{
		role: "Software Engineer",
		company: "AllyMedia",
		location: "Remote",
		dates: "",
		bullets: [
			"Developed and maintained full-stack web applications",
			"Collaborated with design and marketing teams to deliver high-quality digital products",
			"Improved application performance and user experience",
		],
	},
	{
		role: "Full Stack Developer",
		company: "Cordify",
		location: "Remote",
		dates: "",
		bullets: [
			"Built and optimized web applications from frontend to backend",
			"Worked on client projects delivering robust and scalable solutions",
			"Implemented modern development practices and clean architecture",
		],
	},
	{
		role: "Smart Contract Engineer",
		company: "Stratadeed",
		location: "Remote",
		dates: "",
		bullets: [
			"Designed and developed smart contracts for blockchain-based solutions",
			"Implemented secure and gas-efficient Solidity contracts",
			"Conducted testing, auditing, and integration with frontend applications",
		],
	},
];

export default function WorkExperience() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<Card
				className="p-6 sm:p-8"
				data-gsap-reveal>
				<div className="max-w-5xl mx-auto">
					<h3 className="text-xl md:text-2xl font-bold font-clash tracking-tight text-white mb-6">
						Work Experience
					</h3>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{experiences.map((exp, idx) => (
							<div
								key={idx}
								className="flex gap-4">
								<div className="flex-shrink-0 w-3">
									<div className="w-3 h-3 rounded-full bg-purple-500 mt-2" />
									<div className="w-px bg-gray-700 h-full mt-2 ml-1" />
								</div>
								<div>
									<div className="flex items-baseline gap-3">
										<h4 className="font-semibold text-white">{exp.role}</h4>
										<span className="text-sm text-gray-400">
											{exp.company} — <em>{exp.location}</em>
										</span>
									</div>
									{exp.dates && (
										<div className="text-sm text-gray-500 mb-2">
											{exp.dates}
										</div>
									)}
									<ul className="list-disc list-inside text-gray-300 space-y-1">
										{exp.bullets.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</Card>
		</motion.section>
	);
}
