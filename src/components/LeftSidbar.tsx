/** @format */

"use client";

import { usePathname } from "next/navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { motion } from "framer-motion";

export const LeftSidebar = () => {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	return (
		<div className="lg:col-span-1 space-y-8">
			<ProfileCard />
			{isHomePage && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.6 }}>
					<div className="p-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl relative overflow-hidden">
						{/* Background Pattern */}
						<div className="absolute inset-0 opacity-10">
							<div className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-full" />
							<div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white rounded-full" />
						</div>

						<div className="relative z-10">
							<h3 className="text-xl font-bold mb-3">Ready to Build?</h3>
							<p className="text-purple-100 text-sm mb-4 leading-relaxed">
								Let's collaborate on your next Web3 project.
							</p>

							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-purple-600 font-semibold transition-all duration-300 hover:shadow-2xl text-sm w-full">
								Start Project
							</motion.a>
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
};
