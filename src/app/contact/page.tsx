/** @format */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

// Initialize EmailJS with your credentials
emailjs.init("auR9dWwQWFJdldZ9H");

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		budget: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState("");

	const budgetOptions = [
		{ value: "", label: "Select budget range" },
		{ value: "$100 - $500", label: "$100 - $500" },
		{ value: "$500 - $1,000", label: "$500 - $1,000" },
		{ value: "$1,000 - $2,500", label: "$1,000 - $2,500" },
		{ value: "$2,500 - $5,000", label: "$2,500 - $5,000" },
		{ value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
		{ value: "$10,000+", label: "$10,000+" },
		{ value: "Not sure", label: "Not sure / Let's discuss" },
	];

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError("");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		try {
			// Send email using EmailJS with your credentials
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				subject: formData.subject,
				budget: formData.budget,
				message: formData.message,
				to_email: "jeremiahvictorgp@gmail.com",
				reply_to: formData.email,
			};

			const result = await emailjs.send(
				"service_usczodq",
				"template_akepjxb",
				templateParams,
			);

			console.log("Email sent successfully:", result);

			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormData({
				name: "",
				email: "",
				subject: "",
				budget: "",
				message: "",
			});

			// Reset success message after 5 seconds
			setTimeout(() => setIsSubmitted(false), 5000);
		} catch (error) {
			console.error("Error sending email:", error);
			setError(
				"Failed to send message. Please try again or contact me directly at jeremiahvictorgp@gmail.com",
			);
			setIsSubmitting(false);
		}
	};

	return (
		<div className="space-y-8">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Card className="p-8 text-center relative overflow-hidden">
					{/* Background Gradient - Dark theme only */}
					<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />

					<div className="relative z-10">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							Let's Work Together
						</h1>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
							Have a project in mind? Let's discuss how we can bring your ideas
							to life with cutting-edge Web3 and Web2 solutions.
						</p>
					</div>
				</Card>
			</motion.section>

			{/* Contact Form - Now full width */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}>
				<Card className="p-8">
					{isSubmitted ? (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							className="text-center py-12">
							<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-900 flex items-center justify-center">
								<CheckCircle className="w-10 h-10 text-green-400" />
							</div>
							<h3 className="text-2xl font-bold text-white mb-2">
								Message Sent!
							</h3>
							<p className="text-gray-400 mb-6">
								Thank you for reaching out. I'll get back to you within 24
								hours.
							</p>
							<button
								onClick={() => setIsSubmitted(false)}
								className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:shadow-lg">
								Send Another Message
							</button>
						</motion.div>
					) : (
						<div className="h-full flex flex-col">
							<div className="text-center mb-8">
								<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
									Send a Message
								</h2>
								<p className="text-gray-400 max-w-2xl mx-auto">
									Fill out the form below with your project details and I'll get
									back to you as soon as possible to discuss how we can bring
									your vision to life.
								</p>
							</div>

							{error && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="mb-6 p-4 rounded-xl bg-red-900 border border-red-700 text-red-200 text-sm">
									{error}
								</motion.div>
							)}

							<form
								onSubmit={handleSubmit}
								className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Name Field */}
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-300 mb-2">
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
											placeholder="Your full name"
										/>
									</div>

									{/* Email Field */}
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-300 mb-2">
											Email Address *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
											placeholder="your.email@example.com"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Subject Field */}
									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-300 mb-2">
											Project Type *
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
											placeholder="e.g., Web3 DApp, Trading Bot, Website"
										/>
									</div>

									{/* Budget Field */}
									<div>
										<label
											htmlFor="budget"
											className="block text-sm font-medium text-gray-300 mb-2">
											Estimated Budget
										</label>
										<select
											id="budget"
											name="budget"
											value={formData.budget}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
											{budgetOptions.map((option) => (
												<option
													key={option.value}
													value={option.value}
													className="bg-gray-800">
													{option.label}
												</option>
											))}
										</select>
									</div>
								</div>

								{/* Message Field */}
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-300 mb-2">
										Project Details *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={8}
										className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
										placeholder="Tell me about your project vision, goals, timeline, technical requirements, and any specific features you have in mind..."
									/>
								</div>

								{/* Submit Button */}
								<motion.button
									type="submit"
									disabled={isSubmitting}
									whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
									whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
									className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
									{isSubmitting ? (
										<>
											<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
											Sending...
										</>
									) : (
										<>
											<Send className="w-5 h-5" />
											Send Message
										</>
									)}
								</motion.button>

								<p className="text-center text-sm text-gray-400">
									* Required fields. I typically respond within 24 hours.
								</p>
							</form>
						</div>
					)}
				</Card>
			</motion.div>

			{/* FAQ Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.6 }}>
				<Card className="p-8">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<div className="p-4 rounded-xl bg-gray-800 border border-gray-700">
								<h3 className="font-semibold text-white mb-2">
									What's your typical response time?
								</h3>
								<p className="text-gray-400 text-sm">
									I typically respond to all inquiries within 24 hours. For
									urgent matters, WhatsApp is the fastest way to reach me.
								</p>
							</div>

							<div className="p-4 rounded-xl bg-gray-800 border border-gray-700">
								<h3 className="font-semibold text-white mb-2">
									Do you work with international clients?
								</h3>
								<p className="text-gray-400 text-sm">
									Yes! I work with clients from all over the world. My remote
									setup allows me to collaborate effectively across different
									time zones.
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<div className="p-4 rounded-xl bg-gray-800 border border-gray-700">
								<h3 className="font-semibold text-white mb-2">
									What information should I include in my project inquiry?
								</h3>
								<p className="text-gray-400 text-sm">
									Please include: project overview, goals, timeline, budget
									range, and any specific technologies or features you have in
									mind.
								</p>
							</div>

							<div className="p-4 rounded-xl bg-gray-800 border border-gray-700">
								<h3 className="font-semibold text-white mb-2">
									Do you offer ongoing support after project completion?
								</h3>
								<p className="text-gray-400 text-sm">
									Yes, I offer various support and maintenance packages to
									ensure your project continues to run smoothly after
									deployment.
								</p>
							</div>
						</div>
					</div>
				</Card>
			</motion.section>
		</div>
	);
}
