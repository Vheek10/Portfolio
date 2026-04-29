/** @format */

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SiteLoadingOverlay() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setIsLoading(false);
		};

		if (document.readyState === "complete") {
			handleLoad();
			return;
		}

		window.addEventListener("load", handleLoad);
		return () => window.removeEventListener("load", handleLoad);
	}, []);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] backdrop-blur-xl">
					<motion.div
						initial={{ scale: 0.95, opacity: 0.7 }}
						animate={{ scale: [0.95, 1.02, 0.95], opacity: 1 }}
						transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
						className="relative flex items-center justify-center text-center">
						<div className="relative flex items-center justify-center">
							<div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
							<div className="absolute inset-0 rounded-full bg-blue-500/15 blur-3xl animate-pulse [animation-delay:0.6s]" />
							<div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-purple-400/30 bg-gray-950/60 shadow-2xl shadow-purple-500/20">
								<motion.span
									animate={{ rotate: 360 }}
									transition={{
										duration: 4.5,
										repeat: Infinity,
										ease: "linear",
									}}
									className="absolute inset-3 rounded-full border border-dashed border-purple-400/50"
								/>
								<motion.div
									animate={{ y: [0, -4, 0] }}
									transition={{
										duration: 1.8,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="text-2xl sm:text-3xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 whitespace-nowrap leading-none">
									<span>&lt;Vheek /&gt;</span>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
