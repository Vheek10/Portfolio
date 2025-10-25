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
		"Web3 Fullstack Developer",
		"Frontend Developer",
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
			await navigator.clipboard.writeText("victor@victorgp.dev");
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
			icon: <Github className="w-5 h-5" />,
		},
		{
			id: 2,
			url: "https://x.com/Vheek.io",
			name: "Twitter",
			icon: <Twitter className="w-5 h-5" />,
		},
		{
			id: 3,
			url: "https://t.me/victorgp",
			name: "Telegram",
			icon: <MessageCircle className="w-5 h-5" />,
		},
	];

	return (
		<Card
			className="text-center profile-card"
			hoverable={false}>
			<CardContent className="p-10">
				{/* Profile Image */}
				<div className="image text-center mb-10">
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="inline-block">
						<Image
							src="/assets/img/profile.jpg"
							alt="Victor Gp"
							width={200}
							height={200}
							className="rounded-2xl mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
						/>
					</motion.div>
				</div>

				{/* Name and Title */}
				<div className="text mb-10">
					<motion.h3
						className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}>
						Victor Gp <span className="wave">👋</span>
					</motion.h3>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-600 dark:text-gray-400 leading-relaxed min-h-[4.5rem] flex items-center justify-center">
						<p className="text-lg">
							A{" "}
							<span className="font-semibold text-purple-600 dark:text-purple-400 min-h-[1.5rem] inline-block">
								{currentRole}
								<span className="inline-block w-1 h-6 bg-purple-600 dark:bg-purple-400 ml-1 animate-pulse"></span>
							</span>{" "}
							🖥️
							<br />
							<span className="text-sm md:text-base">
								where function meets fire and design meets decentralization.
							</span>
						</p>
					</motion.div>
				</div>

				{/* Action Buttons */}
				<motion.div
					className="common-button-groups flex flex-col sm:flex-row gap-5 mb-10"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}>
					{/* Start Chat Button */}
					<motion.a
						href="https://t.me/victorgp"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="btn-call flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex-1">
						<svg
							className="icon"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
								fill="currentColor"
							/>
						</svg>
						Start Chat
					</motion.a>

					{/* Copy Email Button */}
					<motion.button
						onClick={copyEmail}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className={`btn-copy flex items-center justify-center gap-2 px-7 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5 flex-1 ${
							copied
								? "bg-green-500/10 border-green-500 text-green-600 dark:text-green-400"
								: ""
						}`}>
						{copied ? (
							<Check className="w-5 h-5" />
						) : (
							<Copy className="w-5 h-5" />
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
					<ul className="list-unstyled flex justify-center space-x-5">
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
									whileHover={{ scale: 1.2, y: -2 }}
									whileTap={{ scale: 0.9 }}
									className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:shadow-lg"
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
