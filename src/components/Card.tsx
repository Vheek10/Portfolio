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
			whileHover={hoverable ? { scale: 1.01, y: -1 } : {}}
			whileTap={hoverable ? { scale: 0.99 } : {}}
			onClick={onClick}
			className={`
				rounded-2xl sm:rounded-3xl
				bg-gray-900/40 backdrop-blur-md
				border border-gray-700
				shadow-sm hover:shadow-md
				transition-all duration-200
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
		<div className={`p-3 sm:p-4 md:p-5 pb-2 sm:pb-3 md:pb-4 ${className}`}>
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
		<div className={`p-3 sm:p-4 md:p-5 pt-0 ${className}`}>{children}</div>
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
		<div className={`p-3 sm:p-4 md:p-5 pt-0 ${className}`}>{children}</div>
	);
};
