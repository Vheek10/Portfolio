/** @format */

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GeometricBackground = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		// Basic Three.js setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		const renderer = new THREE.WebGLRenderer({ alpha: true });

		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);

		// Critical: position behind content
		renderer.domElement.style.position = "fixed";
		renderer.domElement.style.top = "0";
		renderer.domElement.style.left = "0";
		renderer.domElement.style.zIndex = "-10";
		renderer.domElement.style.pointerEvents = "none";

		mountRef.current.appendChild(renderer.domElement);

		// Create some simple geometries
		const geometries = [
			new THREE.IcosahedronGeometry(1, 0),
			new THREE.OctahedronGeometry(1, 0),
			new THREE.TorusGeometry(1, 0.4, 12, 24),
		];

		const material = new THREE.MeshBasicMaterial({
			color: 0x8b5cf6,
			wireframe: true,
			transparent: true,
			opacity: 0.1,
		});

		const meshes = geometries.map((geometry) => {
			const mesh = new THREE.Mesh(geometry, material);
			mesh.position.x = (Math.random() - 0.5) * 10;
			mesh.position.y = (Math.random() - 0.5) * 10;
			mesh.position.z = (Math.random() - 0.5) * 10;
			scene.add(mesh);
			return mesh;
		});

		camera.position.z = 5;

		// Animation
		const animate = () => {
			requestAnimationFrame(animate);

			meshes.forEach((mesh, index) => {
				mesh.rotation.x += 0.01;
				mesh.rotation.y += 0.01;
			});

			renderer.render(scene, camera);
		};

		animate();

		// Handle resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			if (mountRef.current && renderer.domElement) {
				mountRef.current.removeChild(renderer.domElement);
			}
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
