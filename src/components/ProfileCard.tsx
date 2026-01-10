/** @format */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./Card";
import {
	Github,
	Twitter,
	MessageCircle,
	Mail,
	Copy,
	Check,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const ProfileCard = () => {
	const [copied, setCopied] = useState(false);
	const [currentRole, setCurrentRole] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(150);

	const roles = useRef([
		"Web3 Developer",
		"Full Stack Developer",
		"UI/UX Designer",
		"Smart Contract Engineer",
	]);

	useEffect(() => {
		const handleTyping = () => {
			const i = loopNum % roles.current.length;
			const fullText = roles.current[i];

			setCurrentRole(
				isDeleting
					? fullText.substring(0, currentRole.length - 1)
					: fullText.substring(0, currentRole.length + 1),
			);

			setTypingSpeed(isDeleting ? 75 : 150);

			if (!isDeleting && currentRole === fullText) {
				setTimeout(() => setIsDeleting(true), 2000);
			} else if (isDeleting && currentRole === "") {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
			}
		};

		const timer = setTimeout(handleTyping, typingSpeed);
		return () => clearTimeout(timer);
	}, [currentRole, isDeleting, loopNum, typingSpeed]);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText("jeremiahvictorgp@gmail.com");
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy email: ", err);
		}
	};

	const socialItems = [
		{
			id: 1,
			url: "https://github.com/Vheek10",
			name: "Github",
			icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
		},
		{
			id: 2,
			url: "https://x.com/Vheek_io",
			name: "Twitter",
			icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
		},
		{
			id: 3,
			url: "https://wa.link/cgcp1w",
			name: "WhatsApp",
			icon: (
				<svg
					className="w-4 h-4 sm:w-5 sm:h-5"
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
				</svg>
			),
		},
	];

	return (
		<Card
			className="text-center profile-card w-full mx-auto lg:-ml-8"
			hoverable={false}>
			<CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
				{/* Profile Image - Improved mobile scaling */}
				<div className="image text-center -mx-3 sm:-mx-4 md:-mx-6 lg:-mx-8 -mt-3 sm:-mt-4 md:-mt-6 lg:-mt-8 mb-3 sm:mb-4 md:mb-6">
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="inline-block w-full scale-105 sm:scale-100 md:scale-100"
						style={{
							transform: "scale(1.05)",
						}}>
						<Image
							src="/profile.jpg"
							alt="Victor Gp"
							width={280}
							height={280}
							className="rounded-2xl border-2 border-gray-800 shadow-lg w-full h-auto"
							priority
						/>
					</motion.div>
				</div>

				{/* Name and Title */}
				<div className="text mb-4 sm:mb-6 md:mb-8">
					<motion.h3
						className="text-lg sm:text-xl md:text-2xl font-bold font-clash tracking-tight text-white mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-2"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}>
						Victor Gp
					</motion.h3>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-400 leading-relaxed min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
						<div className="space-y-1 sm:space-y-2">
							<p className="text-xs sm:text-sm md:text-base">
								A{" "}
								<span className="font-semibold text-purple-400 min-h-[1.25rem] sm:min-h-[1.5rem] inline-block">
									{currentRole}
									<span className="inline-block w-0.5 sm:w-1 h-4 sm:h-5 bg-purple-400 ml-0.5 sm:ml-1 animate-pulse"></span>
								</span>{" "}
								🖥️
							</p>
							<p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto px-2 sm:px-0">
								Crafting digital experiences where innovation meets execution.
								Transforming complex ideas into seamless, user-centric
								applications that bridge the gap between design and technology.
							</p>
						</div>
					</motion.div>
				</div>

				{/* Action Buttons */}
				<motion.div
					className="common-button-groups flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}>
					{/* Start Chat Button */}
					<motion.a
						href="https://wa.link/cgcp1w"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="btn-call flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex-1 text-xs sm:text-sm">
						<svg
							className="icon flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
							viewBox="0 0 24 24"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
						</svg>
						Start Chat
					</motion.a>

					{/* Copy Email Button */}
					<motion.button
						onClick={copyEmail}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className={`btn-copy flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 text-gray-300 font-medium rounded-xl transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5 flex-1 text-xs sm:text-sm ${
							copied ? "bg-green-500/10 border-green-500 text-green-400" : ""
						}`}>
						{copied ? (
							<Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
						) : (
							<Copy className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
						)}
						{copied ? "Copied!" : "Copy Email"}
					</motion.button>
				</motion.div>

				{/* Social Media Icons */}
				<motion.div
					className="social-media-icon"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}>
					<ul className="list-unstyled flex justify-center space-x-2 sm:space-x-3">
						{socialItems.map((item, index) => (
							<motion.li
								key={item.id}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.5 + index * 0.1 }}>
								<motion.a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.15, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:shadow-lg text-xs"
									aria-label={item.name}>
									{item.icon}
								</motion.a>
							</motion.li>
						))}
					</ul>
				</motion.div>
			</CardContent>
		</Card>
	);
};
