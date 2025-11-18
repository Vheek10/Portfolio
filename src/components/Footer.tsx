/** @format */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
	const getCurrentYear = () => new Date().getFullYear();

	const quotes = [
		"Mastery is constant progression, not perfection.",
		"Excellence: the gradual result of always striving.",
		"Small daily improvements lead to stunning results.",
		"Skill through focus, mastery through persistence.",
		"The expert was once a beginner.",
		"Excellence is a habit, not an act.",
	];

	const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentQuoteIndex((prev) =>
				prev === quotes.length - 1 ? 0 : prev + 1,
			);
		}, 7000);

		return () => clearInterval(interval);
	}, []);

	return (
		<footer className="py-4 px-4 bg-gray-900/30">
			<div className="max-w-3xl mx-auto text-center">
				{/* Animated Quote */}
				<div className="mb-3 min-h-[40px] flex items-center justify-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentQuoteIndex}
							initial={{ opacity: 0, x: 10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -10 }}
							transition={{ duration: 0.4 }}
							className="px-3">
							<p className="text-xs sm:text-sm text-gray-400 italic">
								"{quotes[currentQuoteIndex]}"
							</p>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Copyright */}
				<div className="flex items-center justify-center gap-2 text-xs text-gray-500">
					<div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
					<span className="font-medium text-gray-400">
						© {getCurrentYear()} @Vheek
					</span>
					<div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
