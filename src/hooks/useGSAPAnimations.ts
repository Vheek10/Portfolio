/** @format */

"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RefObject, useLayoutEffect } from "react";
import anime from "animejs";
import { pulse, press, modalOpen } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

type UseGSAPAnimationsOptions = {
	scopeRef: RefObject<HTMLElement | null>;
};

const prefersReducedMotion = () =>
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const animateCounter = (element: HTMLElement) => {
	const targetValue = Number.parseFloat(element.dataset.countTo ?? "0");
	const suffix = element.dataset.countSuffix ?? "";
	const prefix = element.dataset.countPrefix ?? "";
	const state = { value: 0 };

	gsap.to(state, {
		value: targetValue,
		duration: 2,
		ease: "power2.out",
		scrollTrigger: {
			trigger: element.closest("[data-gsap-counter-group]") ?? element,
			start: "top 85%",
			once: true,
		},
		onUpdate: () => {
			element.textContent = `${prefix}${Math.round(state.value)}${suffix}`;
		},
	});
};

// Split text into spans for character/word stagger animation
const splitTextIntoSpans = (
	element: HTMLElement,
	mode: "words" | "lines" = "words",
): HTMLSpanElement[] => {
	const text = element.innerText || "";
	const spans: HTMLSpanElement[] = [];

	if (mode === "words") {
		const words = text.split(/\s+/);
		element.innerHTML = words
			.map((word) => `<span class="gsap-text-word">${word}</span>`)
			.join(" ");
		spans.push(
			...Array.from(
				element.querySelectorAll<HTMLSpanElement>(".gsap-text-word"),
			),
		);
	} else if (mode === "lines") {
		const lines = text.split(/\n+/);
		element.innerHTML = lines
			.map((line) => `<span class="gsap-text-line">${line}</span>`)
			.join("<br/>");
		spans.push(
			...Array.from(
				element.querySelectorAll<HTMLSpanElement>(".gsap-text-line"),
			),
		);
	}

	return spans;
};

// Animate text with stagger effect
const animateTextStagger = (
	element: HTMLElement,
	mode: "words" | "lines" = "words",
	options: {
		duration?: number;
		delay?: number;
		ease?: string;
		stagger?: number;
	} = {},
) => {
	const {
		duration = 0.6,
		delay = 0,
		ease = "power3.out",
		stagger = 0.08,
	} = options;
	const spans = splitTextIntoSpans(element, mode);

	if (spans.length === 0) return;

	gsap.from(spans, {
		opacity: 0,
		y: 20,
		duration,
		delay,
		ease,
		stagger,
		scrollTrigger: {
			trigger: element,
			start: "top 85%",
			once: true,
		},
	});
};

export function useGSAPAnimations({ scopeRef }: UseGSAPAnimationsOptions) {
	useLayoutEffect(() => {
		const scope = scopeRef.current;

		if (!scope || prefersReducedMotion()) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();
			const hoverCleanups: Array<() => void> = [];

			// Hero text reveal: words fade in with a gentle upward motion.
			const heroTitle = scope.querySelector<HTMLElement>(
				"[data-gsap-hero-title]",
			);
			if (heroTitle) {
				const heroWords = heroTitle.querySelectorAll<HTMLElement>(
					"[data-gsap-hero-word]",
				);

				if (heroWords.length > 0) {
					gsap.from(heroWords, {
						opacity: 0,
						y: 24,
						duration: 1.05,
						stagger: 0.1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: heroTitle,
							start: "top 85%",
							once: true,
						},
					});
				}
			}

			// Hero subtext and CTA: keep the motion soft and premium.
			const heroSubtext = scope.querySelector<HTMLElement>(
				"[data-gsap-hero-subtext]",
			);
			if (heroSubtext) {
				gsap.from(heroSubtext, {
					opacity: 0,
					y: 18,
					duration: 0.95,
					delay: 0.25,
					ease: "power3.out",
					scrollTrigger: {
						trigger: heroSubtext,
						start: "top 85%",
						once: true,
					},
				});
			}

			const heroCta = scope.querySelector<HTMLElement>("[data-gsap-hero-cta]");
			if (heroCta) {
				gsap.from(heroCta, {
					opacity: 0,
					scale: 0.96,
					y: 10,
					duration: 0.95,
					delay: 0.35,
					ease: "expo.out",
					scrollTrigger: {
						trigger: heroCta,
						start: "top 85%",
						once: true,
					},
				});
			}

			// Generic text stagger: for section headings and other text elements.
			const textStaggerElements = scope.querySelectorAll<HTMLElement>(
				"[data-gsap-text-stagger]",
			);
			textStaggerElements.forEach((element) => {
				const mode =
					(element.dataset.gsapTextStagger as "words" | "lines") || "words";
				const duration = Number.parseFloat(
					element.dataset.gsapDuration || "0.8",
				);
				const stagger = Number.parseFloat(element.dataset.gsapStagger || "0.1");

				animateTextStagger(element, mode, {
					duration,
					stagger,
					ease: "power3.out",
				});
			});

			// Floating accents: tiny y-axis motion only, so it stays cheap.
			const floatingAccents =
				scope.querySelectorAll<HTMLElement>("[data-gsap-float]");
			if (floatingAccents.length > 0) {
				mm.add("(min-width: 768px)", () => {
					gsap.to(floatingAccents, {
						y: -12,
						duration: 6,
						ease: "sine.inOut",
						repeat: -1,
						yoyo: true,
						stagger: 0.55,
					});
				});

				mm.add("(max-width: 767px)", () => {
					gsap.to(floatingAccents, {
						y: -6,
						duration: 5.2,
						ease: "sine.inOut",
						repeat: -1,
						yoyo: true,
						stagger: 0.42,
					});
				});
			}

			// Shared reveal blocks: cards and sections slide in with opacity only.
			const revealBlocks = Array.from(
				scope.querySelectorAll<HTMLElement>("[data-gsap-reveal]"),
			);
			if (revealBlocks.length > 0) {
				ScrollTrigger.batch(revealBlocks, {
					start: "top 85%",
					onEnter: (batch) => {
						gsap.fromTo(
							batch,
							{
								opacity: 0,
								y: 24,
								scale: 0.985,
							},
							{
								opacity: 1,
								y: 0,
								scale: 1,
								duration: 1.05,
								ease: "power3.out",
								stagger: 0.1,
							},
						);
					},
					once: true,
				});
			}

			// Counters: convert the text into a scroll-triggered numeric tween.
			const counters = scope.querySelectorAll<HTMLElement>("[data-gsap-count]");
			counters.forEach((counter) => animateCounter(counter));

			// Skill bars: fill from 0 to the declared percentage on first reveal.
			const progressBars = scope.querySelectorAll<HTMLElement>(
				"[data-gsap-progress-bar]",
			);
			progressBars.forEach((bar) => {
				const target = Number.parseInt(bar.dataset.progress ?? "0", 10);

				gsap.fromTo(
					bar,
					{ width: "0%" },
					{
						width: `${target}%`,
						duration: 1.4,
						ease: "power3.out",
						scrollTrigger: {
							trigger: bar.closest("[data-gsap-progress-item]") ?? bar,
							start: "top 85%",
							once: true,
						},
					},
				);
			});

			// Tech stack icons: staggered reveal with a slight rotation for polish.
			const techItems = scope.querySelectorAll<HTMLElement>(
				"[data-gsap-tech-item], .expertise-item",
			);
			if (techItems.length > 0) {
				ScrollTrigger.batch(Array.from(techItems), {
					start: "top 88%",
					onEnter: (batch) => {
						gsap.fromTo(
							batch,
							{
								opacity: 0,
								y: 18,
								scale: 0.94,
								rotation: -4,
							},
							{
								opacity: 1,
								y: 0,
								scale: 1,
								rotation: 0,
								duration: 0.95,
								ease: "power3.out",
								stagger: 0.08,
							},
						);
					},
					once: true,
				});
			}

			// Project hover parallax: tiny translate values for a premium, subtle feel.
			const projectCards = scope.querySelectorAll<HTMLElement>(
				"[data-gsap-parallax-card]",
			);
			projectCards.forEach((card) => {
				const image = card.querySelector<HTMLElement>(
					"[data-gsap-parallax-image]",
				);
				if (!image) {
					return;
				}

				const xTo = gsap.quickTo(image, "x", {
					duration: 0.5,
					ease: "power3.out",
				});
				const yTo = gsap.quickTo(image, "y", {
					duration: 0.5,
					ease: "power3.out",
				});

				const handleMove = (event: MouseEvent) => {
					const rect = card.getBoundingClientRect();
					const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
					const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
					xTo(x);
					yTo(y);
				};

				const handleLeave = () => {
					xTo(0);
					yTo(0);
				};

				card.addEventListener("mousemove", handleMove);
				card.addEventListener("mouseleave", handleLeave);

				hoverCleanups.push(() => {
					card.removeEventListener("mousemove", handleMove);
					card.removeEventListener("mouseleave", handleLeave);
				});
			});

			// Anime.js micro-interactions: hover pulse and click press for marked elements.
			const animeHoverEls = Array.from(
				scope.querySelectorAll<HTMLElement>("[data-anime-hover]"),
			);

			animeHoverEls.forEach((el) => {
				let activeAnim: ReturnType<typeof anime> | null = null;
				const onEnter = () => {
					activeAnim = pulse(el as HTMLElement);
				};
				const onLeave = () => {
					if (activeAnim) {
						activeAnim.pause();
					}
					anime({
						targets: el,
						scale: 1,
						duration: 300,
						easing: "easeOutQuad",
					});
				};

				el.addEventListener("mouseenter", onEnter);
				el.addEventListener("mouseleave", onLeave);

				hoverCleanups.push(() => {
					el.removeEventListener("mouseenter", onEnter);
					el.removeEventListener("mouseleave", onLeave);
					if (activeAnim) activeAnim.pause();
				});
			});

			// Click / press micro-animation
			const animeClickEls = Array.from(
				scope.querySelectorAll<HTMLElement>("[data-anime-click]"),
			);

			animeClickEls.forEach((el) => {
				const onDown = () => press(el as HTMLElement);
				const onUp = () =>
					anime({
						targets: el,
						scale: 1,
						duration: 220,
						easing: "easeOutQuad",
					});

				el.addEventListener("pointerdown", onDown);
				el.addEventListener("pointerup", onUp);
				el.addEventListener("pointercancel", onUp);

				hoverCleanups.push(() => {
					el.removeEventListener("pointerdown", onDown);
					el.removeEventListener("pointerup", onUp);
					el.removeEventListener("pointercancel", onUp);
				});
			});

			// Modal open observer: animate newly added modal overlays/contents
			const modalObserver = new MutationObserver((mutations) => {
				mutations.forEach((m) => {
					m.addedNodes.forEach((node) => {
						if (!(node instanceof HTMLElement)) return;
						if (node.matches && node.matches("[data-anime-modal]")) {
							const content = node.querySelector<HTMLElement>(
								"[data-anime-modal-content]",
							);
							if (content) {
								modalOpen(node as HTMLElement, content);
							}
						}
					});
				});
			});

			modalObserver.observe(scope, { childList: true, subtree: true });
			hoverCleanups.push(() => modalObserver.disconnect());

			return () => {
				hoverCleanups.forEach((cleanup) => cleanup());
				mm.revert();
			};
		}, scope);

		return () => {
			ctx.revert();
		};
	}, [scopeRef]);
}
