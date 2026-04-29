/** @format */

"use client";

import anime from "animejs/lib/anime.es.js";

export const pulse = (el: HTMLElement) => {
	return anime({
		targets: el,
		scale: [1, 1.03, 1],
		duration: 700,
		easing: "easeInOutSine",
	});
};

export const press = (el: HTMLElement) => {
	return anime({
		targets: el,
		scale: 0.96,
		duration: 180,
		easing: "easeOutQuad",
	});
};

export const modalOpen = (overlay: HTMLElement, content: HTMLElement) => {
	const tl = anime.timeline({ easing: "easeOutCubic", duration: 360 });

	tl.add({
		targets: overlay,
		opacity: [0, 1],
		duration: 280,
	}).add(
		{
			targets: content,
			scale: [0.96, 1],
			opacity: [0, 1],
			duration: 420,
			easing: "easeOutBack",
		},
		"-=160",
	);

	return tl;
};
