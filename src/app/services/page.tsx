/** @format */

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import ExpertAreaCard from "@/components/ExpertAreaCard";
import {
  Code,
  Palette,
  Shield,
  Zap,
  Users,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Cpu,
  Globe,
  Smartphone,
  Layout,
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web3 DApp Development",
      description:
        "End-to-end decentralized application development with smart contracts, blockchain integration, and user-friendly interfaces.",
      features: [
        "Smart Contract Development",
        "Blockchain Integration",
        "Wallet Connectivity",
        "Gas Optimization",
        "Multi-chain Support",
        "DeFi Protocol Development",
      ],
      popular: true,
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Web2 Frontend Development",
      description:
        "Modern, responsive web applications built with cutting-edge frontend technologies and best practices.",
      features: [
        "React & Next.js Development",
        "Responsive Web Design",
        "Performance Optimization",
        "SEO Optimization",
        "Progressive Web Apps",
        "API Integration",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that make complex applications intuitive and engaging for end-users.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design System",
        "Interaction Design",
        "Design System Creation",
        "User Testing",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Contract Development",
      description:
        "Secure and gas-optimized smart contracts with comprehensive testing and deployment services.",
      features: [
        "Custom Smart Contract Development",
        "Security Audits & Testing",
        "Gas Optimization",
        "Upgradeable Contracts",
        "Documentation & Testing",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "DeFi Protocol Development",
      description:
        "Building decentralized finance protocols including lending, borrowing, and yield farming platforms.",
      features: ["AMM Development", "Yield Farming", "Lending Protocols"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "DAO Development",
      description:
        "Decentralized Autonomous Organization setup with governance and voting mechanisms.",
      features: [
        "Governance Systems",
        "Voting Mechanisms",
        "Treasury Management",
      ],
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "NFT Marketplace Development",
      description:
        "Multi-chain NFT marketplaces with minting, trading, and royalty features.",
      features: ["NFT Minting", "Marketplace UI", "Royalty Systems"],
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Web3 Integration",
      description:
        "Integrating Web3 functionality into existing applications and platforms.",
      features: [
        "Wallet Integration",
        "Blockchain Data",
        "Smart Contract Calls",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Freelance Development",
      description:
        "Flexible freelance development services for projects of all sizes and durations.",
      features: [
        "Project-based Work",
        "Hourly Contracts",
        "Long-term Collaboration",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Development",
      description:
        "Responsive designs and mobile-optimized applications that work seamlessly across all devices.",
      features: [
        "Mobile Optimization",
        "Touch Interactions",
        "Progressive Web Apps",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your vision, requirements, and technical needs to create a detailed project plan.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes, prototypes, and design systems that align with your brand and user needs.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with regular updates, comprehensive testing, and security audits.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Smooth deployment with ongoing support and maintenance services.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      number: "20+",
      label: "Projects Completed",
    },
    {
      icon: <Star className="w-6 h-6" />,
      number: "15+",
      label: "Happy Clients",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "3+",
      label: "Years Experience",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      number: "100%",
      label: "Client Satisfaction",
    },
  ];

  const freelancingBenefits = [
    {
      title: "Flexible Engagement",
      description:
        "Choose from project-based, hourly, or long-term contracts that fit your needs.",
    },
    {
      title: "Quick Turnaround",
      description:
        "Rapid development cycles without compromising on quality or attention to detail.",
    },
    {
      title: "Direct Communication",
      description:
        "Work directly with me for clear communication and faster decision-making.",
    },
    {
      title: "Modern Tech Stack",
      description:
        "Latest technologies and best practices for scalable and maintainable solutions.",
    },
  ];

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
    <div className="space-y-8 md:space-y-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-6 sm:p-7 text-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />

          <div className="relative z-10">
            <h2 className="text-lg sm:text-lg md:text-lg font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4 md:mb-6">
              Development Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Full-stack development services specializing in Web3, Web2 frontend,
              and freelance projects. Transforming your ideas into secure,
              scalable, and user-friendly applications.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="text-center p-4 sm:p-5 md:p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3 sm:mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Core Services
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Comprehensive development solutions including Web3, Web2 frontend,
            and freelance services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <Card
                className={`h-full p-6 sm:p-8 transition-all duration-300 ${
                  service.popular
                    ? "ring-2 ring-purple-500 shadow-xl"
                    : "group-hover:shadow-lg group-hover:border-purple-600"
                }`}
              >
                <div className="flex flex-col h-full p-5 sm:p-6">
                  {/* Service Header */}
                  <div className="flex items-start gap-5 sm:gap-6 mb-5 sm:mb-6">
                    {/* Service Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {service.icon}
                    </div>

                    {/* Service Title & Description */}
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg mt-4"
                  >
                    Discuss Project
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Freelancing Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Card className="p-6 sm:p-8 md:p-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Freelance Development
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Flexible freelance services for projects of all sizes. Get dedicated
              development expertise without the overhead of a full-time hire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelancingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-600 h-full">
                  <h4 className="text-sm sm:text-base font-bold text-white mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* Additional Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <Card className="p-6 sm:p-8 md:p-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Specialized Services
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Additional development services to meet your specific project
              requirements and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="p-5 rounded-2xl bg-gray-800 border border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-600 h-full">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">
                        {service.description}
                      </p>
                      <div className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <Card className="p-6 sm:p-8 md:p-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-clash tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Development Process
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              A structured approach to ensure your project's success from
              concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                className="text-center group p-4 sm:p-6"
              >
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <ExpertAreaCard />
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        <Card className="p-6 sm:p-8 md:p-10 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full" />
          </div>

          <div className="relative z-10">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base text-purple-100 mb-6 max-w-2xl mx-auto">
              Whether it's a Web3 DApp, Web2 frontend, or freelance project,
              let's discuss your requirements and create something amazing
              together.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-purple-600 font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
              >
                Start Your Project
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>

              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-white text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-purple-600 flex items-center gap-2"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </div>
        </Card>
      </motion.section>
    </div>
  );
}