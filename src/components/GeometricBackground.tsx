/** @format */

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GeometricBackground = () => {
	const mountRef = useRef<HTMLDivElement>(null);
	const frameRef = useRef<number>();
	const sceneRef = useRef<THREE.Scene>();
	const cameraRef = useRef<THREE.PerspectiveCamera>();
	const rendererRef = useRef<THREE.WebGLRenderer>();
	const meshesRef = useRef<THREE.Mesh[]>([]);

	useEffect(() => {
		if (!mountRef.current) return;

		// Scene setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
			powerPreference: "high-performance",
		});

		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		mountRef.current.appendChild(renderer.domElement);

		// Store references for cleanup
		sceneRef.current = scene;
		cameraRef.current = camera;
		rendererRef.current = renderer;

		// Professional geometric shapes
		const createGeometry = (type: string, size: number, detail: number = 0) => {
			switch (type) {
				case "icosahedron":
					return new THREE.IcosahedronGeometry(size, detail);
				case "octahedron":
					return new THREE.OctahedronGeometry(size, detail);
				case "tetrahedron":
					return new THREE.TetrahedronGeometry(size, detail);
				case "dodecahedron":
					return new THREE.DodecahedronGeometry(size, detail);
				case "torus":
					return new THREE.TorusGeometry(size, size * 0.3, 12, 24);
				case "cone":
					return new THREE.ConeGeometry(size, size * 1.5, 8);
				default:
					return new THREE.IcosahedronGeometry(size, detail);
			}
		};

		// Professional color palette
		const colors = [
			0x8b5cf6, // Purple
			0x6366f1, // Indigo
			0x3b82f6, // Blue
			0x06b6d4, // Cyan
			0x10b981, // Emerald
		];

		// Create materials with different styles
		const materials = [
			// Wireframe material
			new THREE.MeshPhongMaterial({
				color: colors[0],
				transparent: true,
				opacity: 0.15,
				wireframe: true,
				shininess: 100,
			}),
			// Solid material with low opacity
			new THREE.MeshPhongMaterial({
				color: colors[1],
				transparent: true,
				opacity: 0.08,
				shininess: 80,
			}),
			// Another wireframe in different color
			new THREE.MeshPhongMaterial({
				color: colors[2],
				transparent: true,
				opacity: 0.12,
				wireframe: true,
				shininess: 100,
			}),
			// Solid material
			new THREE.MeshPhongMaterial({
				color: colors[3],
				transparent: true,
				opacity: 0.06,
				shininess: 80,
			}),
		];

		// Geometry types and sizes for variety
		const geometryConfigs = [
			{ type: "icosahedron", size: 1.2, detail: 0 },
			{ type: "octahedron", size: 1.0, detail: 0 },
			{ type: "tetrahedron", size: 0.8, detail: 0 },
			{ type: "dodecahedron", size: 1.1, detail: 0 },
			{ type: "torus", size: 0.7, detail: 0 },
			{ type: "cone", size: 0.6, detail: 0 },
			{ type: "icosahedron", size: 0.9, detail: 1 },
			{ type: "octahedron", size: 1.3, detail: 0 },
		];

		// Create floating geometries
		const meshes: THREE.Mesh[] = [];

		for (let i = 0; i < 12; i++) {
			const config = geometryConfigs[i % geometryConfigs.length];
			const material = materials[i % materials.length];
			const geometry = createGeometry(config.type, config.size, config.detail);

			const mesh = new THREE.Mesh(geometry, material);

			// Random positions in a sphere
			const radius = 15;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);

			mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
			mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
			mesh.position.z = radius * Math.cos(phi);

			// Random rotations
			mesh.rotation.x = Math.random() * Math.PI;
			mesh.rotation.y = Math.random() * Math.PI;
			mesh.rotation.z = Math.random() * Math.PI;

			// Animation properties
			(mesh as any).velocity = new THREE.Vector3(
				(Math.random() - 0.5) * 0.001,
				(Math.random() - 0.5) * 0.001,
				(Math.random() - 0.5) * 0.001,
			);

			(mesh as any).rotationSpeed = new THREE.Vector3(
				(Math.random() - 0.5) * 0.001,
				(Math.random() - 0.5) * 0.001,
				(Math.random() - 0.5) * 0.001,
			);

			(mesh as any).pulseSpeed = Math.random() * 0.002 + 0.001;
			(mesh as any).pulsePhase = Math.random() * Math.PI * 2;
			(mesh as any).originalScale = 0.8 + Math.random() * 0.4;

			scene.add(mesh);
			meshes.push(mesh);
		}

		meshesRef.current = meshes;

		// Lighting setup
		const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
		scene.add(ambientLight);

		const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.3);
		directionalLight1.position.set(1, 1, 1);
		scene.add(directionalLight1);

		const directionalLight2 = new THREE.DirectionalLight(0x8b5cf6, 0.2);
		directionalLight2.position.set(-1, -1, -1);
		scene.add(directionalLight2);

		camera.position.z = 8;

		// Mouse interaction for subtle parallax
		const mouse = new THREE.Vector2();
		const targetRotation = new THREE.Vector2();

		const handleMouseMove = (event: MouseEvent) => {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Animation loop
		const animate = () => {
			frameRef.current = requestAnimationFrame(animate);

			if (!cameraRef.current || !sceneRef.current || !rendererRef.current)
				return;

			const camera = cameraRef.current;
			const scene = sceneRef.current;
			const renderer = rendererRef.current;

			// Smooth mouse rotation
			targetRotation.x = mouse.x * 0.2;
			targetRotation.y = mouse.y * 0.2;

			camera.position.x += (targetRotation.x - camera.position.x) * 0.02;
			camera.position.y += (targetRotation.y - camera.position.y) * 0.02;
			camera.lookAt(scene.position);

			// Animate meshes
			const time = Date.now() * 0.001;

			meshesRef.current.forEach((mesh) => {
				// Position movement
				mesh.position.x += (mesh as any).velocity.x;
				mesh.position.y += (mesh as any).velocity.y;
				mesh.position.z += (mesh as any).velocity.z;

				// Rotation
				mesh.rotation.x += (mesh as any).rotationSpeed.x;
				mesh.rotation.y += (mesh as any).rotationSpeed.y;
				mesh.rotation.z += (mesh as any).rotationSpeed.z;

				// Pulsing scale
				const pulse =
					Math.sin(time * (mesh as any).pulseSpeed + (mesh as any).pulsePhase) *
					0.1;
				const scale = (mesh as any).originalScale * (1 + pulse);
				mesh.scale.setScalar(scale);

				// Boundary check - wrap around
				const boundary = 20;
				if (Math.abs(mesh.position.x) > boundary)
					mesh.position.x = -mesh.position.x * 0.9;
				if (Math.abs(mesh.position.y) > boundary)
					mesh.position.y = -mesh.position.y * 0.9;
				if (Math.abs(mesh.position.z) > boundary)
					mesh.position.z = -mesh.position.z * 0.9;
			});

			renderer.render(scene, camera);
		};

		animate();

		// Handle resize
		const handleResize = () => {
			if (!cameraRef.current || !rendererRef.current) return;

			cameraRef.current.aspect = window.innerWidth / window.innerHeight;
			cameraRef.current.updateProjectionMatrix();
			rendererRef.current.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}

			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);

			if (mountRef.current && rendererRef.current?.domElement) {
				mountRef.current.removeChild(rendererRef.current.domElement);
			}

			// Dispose of all resources
			rendererRef.current?.dispose();

			meshesRef.current.forEach((mesh) => {
				sceneRef.current?.remove(mesh);
				(mesh.geometry as THREE.BufferGeometry).dispose();
				(mesh.material as THREE.Material).dispose();
			});

			materials.forEach((material) => material.dispose());
		};
	}, []);

	return (
		<div
			ref={mountRef}
			className="fixed inset-0 -z-10 pointer-events-none"
			style={{ opacity: 0.7 }}
		/>
	);
};

export default GeometricBackground;
