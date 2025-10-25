/** @format */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import {
	Mail,
	MapPin,
	Phone,
	Send,
	Clock,
	CheckCircle,
	Github,
	Twitter,
	MessageCircle,
	Linkedin,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const contactInfo = [
		{
			icon: <Mail className="w-6 h-6" />,
			title: "Email",
			value: "jeremiahvictorgp@gmail.com",
			description: "Send me an email anytime",
			link: "mailto:jeremiahvictorgp@gmail.com",
		},
		{
			icon: <MapPin className="w-6 h-6" />,
			title: "Location",
			value: "Remote Worldwide",
			description: "Available for remote work globally",
			link: "#",
		},
		{
			icon: <Phone className="w-6 h-6" />,
			title: "Telegram",
			value: "@vheek10",
			description: "Fast response on Telegram",
			link: "https://t.me/vheek10",
		},
		{
			icon: <Clock className="w-6 h-6" />,
			title: "Response Time",
			value: "< 24 hours",
			description: "Typically respond within a day",
			link: "#",
		},
	];

	const socialLinks = [
		{
			icon: <Github className="w-5 h-5" />,
			name: "GitHub",
			url: "https://github.com/Vheek10",
			description: "Check out my code",
		},
		{
			icon: <Twitter className="w-5 h-5" />,
			name: "Twitter",
			url: "https://twitter.com/Vheek_io",
			description: "Follow for updates",
		},
		{
			icon: <MessageCircle className="w-5 h-5" />,
			name: "Telegram",
			url: "https://t.me/vheek10",
			description: "Chat directly",
		},
		{
			icon: <Linkedin className="w-5 h-5" />,
			name: "LinkedIn",
			url: "https://linkedin.com/in/victorgp",
			description: "Professional network",
		},
	];

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsSubmitting(false);
		setIsSubmitted(true);
		setFormData({ name: "", email: "", subject: "", message: "" });

		// Reset success message after 5 seconds
		setTimeout(() => setIsSubmitted(false), 5000);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<div className="space-y-8">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Card className="p-8 text-center relative overflow-hidden">
					{/* Background Gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10" />

					<div className="relative z-10">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
							Let's Work Together
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
							Have a project in mind? Let's discuss how we can bring your ideas
							to life with cutting-edge Web3 and Web2 solutions.
						</p>
					</div>
				</Card>
			</motion.section>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Contact Information */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="lg:col-span-1 space-y-6">
					{/* Contact Info Cards */}
					{contactInfo.map((info, index) => (
						<motion.div
							key={info.title}
							variants={itemVariants}>
							<Card className="p-6 group hover:shadow-lg transition-all duration-300">
								<a
									href={info.link}
									className="block"
									onClick={(e) => info.link === "#" && e.preventDefault()}>
									<div className="flex items-start gap-4">
										<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white group-hover:scale-110 transition-transform duration-300">
											{info.icon}
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-gray-900 dark:text-white mb-1">
												{info.title}
											</h3>
											<p className="text-gray-900 dark:text-white font-medium">
												{info.value}
											</p>
											<p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
												{info.description}
											</p>
										</div>
									</div>
								</a>
							</Card>
						</motion.div>
					))}

					{/* Social Links */}
					<motion.div variants={itemVariants}>
						<Card className="p-6">
							<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
								Follow & Connect
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:border-transparent hover:shadow-lg group">
										<div className="mb-2 group-hover:scale-110 transition-transform duration-300">
											{social.icon}
										</div>
										<span className="text-sm font-medium">{social.name}</span>
										<span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80 mt-1">
											{social.description}
										</span>
									</motion.a>
								))}
							</div>
						</Card>
					</motion.div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="lg:col-span-2">
					<Card className="p-8">
						{isSubmitted ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								className="text-center py-12">
								<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
									<CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
									Message Sent!
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-6">
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
							<>
								<div className="text-center mb-8">
									<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
										Send a Message
									</h2>
									<p className="text-gray-600 dark:text-gray-400">
										Fill out the form below and I'll get back to you as soon as
										possible.
									</p>
								</div>

								<form
									onSubmit={handleSubmit}
									className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{/* Name Field */}
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Full Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
												placeholder="Your full name"
											/>
										</div>

										{/* Email Field */}
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Email Address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
												placeholder="your.email@example.com"
											/>
										</div>
									</div>

									{/* Subject Field */}
									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Subject *
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
											placeholder="What's this about?"
										/>
									</div>

									{/* Message Field */}
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											rows={6}
											className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
											placeholder="Tell me about your project, timeline, and budget..."
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

									<p className="text-center text-sm text-gray-500 dark:text-gray-400">
										* Required fields. I typically respond within 24 hours.
									</p>
								</form>
							</>
						)}
					</Card>
				</motion.div>
			</div>

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
							<div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
								<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
									What's your typical response time?
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm">
									I typically respond to all inquiries within 24 hours. For
									urgent matters, Telegram is the fastest way to reach me.
								</p>
							</div>

							<div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
								<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
									Do you work with international clients?
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm">
									Yes! I work with clients from all over the world. My remote
									setup allows me to collaborate effectively across different
									time zones.
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
								<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
									What information should I include in my project inquiry?
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm">
									Please include: project overview, goals, timeline, budget
									range, and any specific technologies or features you have in
									mind.
								</p>
							</div>

							<div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
								<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
									Do you offer ongoing support after project completion?
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm">
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
