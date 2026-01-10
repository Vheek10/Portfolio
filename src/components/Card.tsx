/** @format */
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
	hoverable?: boolean;
	onClick?: () => void;
}

export const Card = ({
	children,
	className = "",
	hoverable = true,
	onClick,
}: CardProps) => {
	return (
		<motion.div
			whileHover={hoverable ? { scale: 1.02, y: -2 } : {}}
			whileTap={hoverable ? { scale: 0.98 } : {}}
			onClick={onClick}
			className={`
        rounded-2xl sm:rounded-3xl 
        bg-gray-900/40 backdrop-blur-xl 
        border border-gray-700
        shadow-sm hover:shadow-xl 
        transition-all duration-300
        overflow-hidden
        w-full
        ${className}
      `}>
			{children}
		</motion.div>
	);
};

export const CardHeader = ({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={`p-4 sm:p-5 md:p-6 pb-2 sm:pb-3 md:pb-4 ${className}`}>
			{children}
		</div>
	);
};

export const CardContent = ({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={`p-4 sm:p-5 md:p-6 pt-0 ${className}`}>{children}</div>
	);
};

export const CardFooter = ({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={`p-4 sm:p-5 md:p-6 pt-0 ${className}`}>{children}</div>
	);
};
