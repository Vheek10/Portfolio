/** @format */

"use client";

import gsap from "gsap";
import { ReactNode, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
	children: ReactNode;
};

const prefersReducedMotion = () =>
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const PageTransition = ({ children }: PageTransitionProps) => {
	const pathname = usePathname();
	const transitionRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!transitionRef.current || prefersReducedMotion()) {
			return;
		}

		const ctx = gsap.context(() => {
			gsap.fromTo(
				transitionRef.current,
				{
					opacity: 0,
					y: 14,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.55,
					ease: "power3.out",
				},
			);
		}, transitionRef);

		return () => ctx.revert();
	}, [pathname]);

	return (
		<div
			ref={transitionRef}
			className="will-change-transform"
			style={{ transformOrigin: "center top" }}>
			{children}
		</div>
	);
};

export default PageTransition;
