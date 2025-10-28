/** @format */

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GeometricBackground = () => {
	const mountRef = useRef<HTMLDivElement>(null);
	const frameRef = useRef<number>();

	useEffect(() => {
		if (!mountRef.current) return;

		// Enhanced Three.js setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});

		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Positioning
		renderer.domElement.style.position = "fixed";
		renderer.domElement.style.top = "0";
		renderer.domElement.style.left = "0";
		renderer.domElement.style.zIndex = "-10";
		renderer.domElement.style.pointerEvents = "none";

		mountRef.current.appendChild(renderer.domElement);

		// Enhanced geometries with more variety
		const geometries = [
			new THREE.IcosahedronGeometry(1.2, 0),
			new THREE.OctahedronGeometry(1, 0),
			new THREE.TorusGeometry(1, 0.3, 12, 24),
			new THREE.TetrahedronGeometry(0.8, 0),
			new THREE.DodecahedronGeometry(0.9, 0),
			new THREE.SphereGeometry(0.7, 12, 8),
			new THREE.ConeGeometry(0.8, 1.5, 8),
		];

		// Gradient colors from purple to blue
		const colors = [
			0x8b5cf6, // Purple
			0x7c3aed, // Deeper purple
			0x6d28d9, // Dark purple
			0x5b21b6, // Very dark purple
			0x4c1d95, // Deep purple
			0x3730a3, // Indigo
			0x312e81, // Dark indigo
		];

		// Create multiple materials for variety
		const materials = colors.map(
			(color) =>
				new THREE.MeshBasicMaterial({
					color: color,
					wireframe: true,
					transparent: true,
					opacity: 0.15,
				}),
		);

		const meshes: THREE.Mesh[] = [];
		const numMeshes = 15;

		for (let i = 0; i < numMeshes; i++) {
			const geometry =
				geometries[Math.floor(Math.random() * geometries.length)];
			const material = materials[Math.floor(Math.random() * materials.length)];
			const mesh = new THREE.Mesh(geometry, material);

			// Spread meshes in 3D space
			mesh.position.x = (Math.random() - 0.5) * 20;
			mesh.position.y = (Math.random() - 0.5) * 20;
			mesh.position.z = (Math.random() - 0.5) * 20;

			// Random initial rotation
			mesh.rotation.x = Math.random() * Math.PI;
			mesh.rotation.y = Math.random() * Math.PI;

			// Store custom properties for animation
			(mesh as any).velocity = {
				rotation: {
					x: (Math.random() - 0.5) * 0.02,
					y: (Math.random() - 0.5) * 0.02,
					z: (Math.random() - 0.5) * 0.02,
				},
				position: {
					x: (Math.random() - 0.5) * 0.005,
					y: (Math.random() - 0.5) * 0.005,
					z: (Math.random() - 0.5) * 0.005,
				},
			};

			scene.add(mesh);
			meshes.push(mesh);
		}

		// Add some floating particles
		const particleGeometry = new THREE.BufferGeometry();
		const particleCount = 50;
		const posArray = new Float32Array(particleCount * 3);

		for (let i = 0; i < particleCount * 3; i++) {
			posArray[i] = (Math.random() - 0.5) * 30;
		}

		particleGeometry.setAttribute(
			"position",
			new THREE.BufferAttribute(posArray, 3),
		);

		const particleMaterial = new THREE.PointsMaterial({
			size: 0.1,
			color: 0x8b5cf6,
			transparent: true,
			opacity: 0.3,
		});

		const particles = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(particles);

		camera.position.z = 8;

		// Mouse interaction
		const mouse = new THREE.Vector2();
		const target = new THREE.Vector2();
		const windowHalf = new THREE.Vector2(
			window.innerWidth / 2,
			window.innerHeight / 2,
		);

		const handleMouseMove = (event: MouseEvent) => {
			mouse.x = (event.clientX - windowHalf.x) / windowHalf.x;
			mouse.y = (event.clientY - windowHalf.y) / windowHalf.y;
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Enhanced animation with parallax and smooth movements
		const clock = new THREE.Clock();

		const animate = () => {
			frameRef.current = requestAnimationFrame(animate);

			const time = clock.getElapsedTime();

			// Smooth mouse follow
			target.x = mouse.x * 0.5;
			target.y = mouse.y * 0.5;

			camera.position.x += (target.x - camera.position.x) * 0.05;
			camera.position.y += (-target.y - camera.position.y) * 0.05;
			camera.lookAt(scene.position);

			// Animate meshes with varied movements
			meshes.forEach((mesh, index) => {
				const velocity = (mesh as any).velocity;

				// Rotation
				mesh.rotation.x += velocity.rotation.x;
				mesh.rotation.y += velocity.rotation.y;
				mesh.rotation.z += velocity.rotation.z;

				// Floating movement with time-based variation
				mesh.position.x += Math.sin(time * 0.5 + index) * 0.002;
				mesh.position.y += Math.cos(time * 0.3 + index) * 0.002;
				mesh.position.z += Math.sin(time * 0.7 + index) * 0.002;

				// Gentle boundary checking
				if (Math.abs(mesh.position.x) > 12) velocity.position.x *= -1;
				if (Math.abs(mesh.position.y) > 12) velocity.position.y *= -1;
				if (Math.abs(mesh.position.z) > 12) velocity.position.z *= -1;

				// Pulsing opacity
				const material = mesh.material as THREE.MeshBasicMaterial;
				material.opacity = 0.1 + Math.sin(time * 0.5 + index) * 0.05;
			});

			// Animate particles
			particles.rotation.y = time * 0.05;

			renderer.render(scene, camera);
		};

		animate();

		// Handle resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);

			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}

			if (mountRef.current && renderer.domElement) {
				mountRef.current.removeChild(renderer.domElement);
			}

			// Clean up geometries and materials
			geometries.forEach((geometry) => geometry.dispose());
			materials.forEach((material) => material.dispose());
			particleGeometry.dispose();
			particleMaterial.dispose();

			renderer.dispose();
		};
	}, []);

	return (
		<div
			ref={mountRef}
			className="fixed inset-0 pointer-events-none"
		/>
	);
};

export default GeometricBackground;
