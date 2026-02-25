"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiZap, FiDatabase, FiAward } from "react-icons/fi";

const highlights = [
    {
        icon: FiZap,
        title: "AI/ML Research & Engineering",
        description:
            "Researched hybrid CNN–Transformer architectures for medical image classification, focusing on generalization and robust evaluation. Developed multimodal models integrating visual, text, and audio features, and explored fusion strategies and continuous learning for practical deployment.",
        color: "from-purple-500/20 to-violet-600/10",
        border: "border-purple-500/20",
        iconColor: "text-purple-400",
    },
    {
        icon: FiCode,
        title: "Full Stack Development",
        description:
            "Architected and deployed end-to-end web applications across AI and media domains, including an AI-powered CRM, TechGen, MistakeLoop, and Cinemax. Focused on modular backend design, API integration, and scalable full-stack architecture.",
        color: "from-blue-500/20 to-blue-600/10",
        border: "border-blue-500/20",
        iconColor: "text-blue-400",
    },
    {
        icon: FiDatabase,
        title: "Blockchain & Web3",
        description:
            "Engineered EduChain — a blockchain-based certificate verification platform eliminating academic fraud through immutable on-chain credential storage.",
        color: "from-cyan-500/20 to-cyan-600/10",
        border: "border-cyan-500/20",
        iconColor: "text-cyan-400",
    },
    {
        icon: FiAward,
        title: "Hackathon & Innovation",
        description:
            "Participated in the Shell AI Hackathon, developing AI-driven fuel blend prediction models, and placed in the Top 100 teams at the Zelestra Hackathon. Focused on solving real-world industry challenges through applied machine learning.",
        color: "from-emerald-500/20 to-emerald-600/10",
        border: "border-emerald-500/20",
        iconColor: "text-emerald-400",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="about" className="section-padding relative">
            <div className="container-width" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs font-mono font-medium tracking-widest uppercase text-primary-400 mb-3 block">
                        Who I Am
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Summary text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="glass rounded-2xl p-8 border border-border h-full">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Building the Future of{" "}
                                <span className="text-gradient">Intelligent Systems</span>
                            </h3>
                            <div className="space-y-4 text-slate-400 leading-relaxed">
                                <p>
                                    I’m Manansinh Sandhaliya, a CSE-AIML engineer focused on building AI-powered products and scalable software systems. My work spans machine learning model development, backend architecture, and full-stack implementation — turning research-driven ideas into production-ready applications.
                                </p>
                                <p>
                                    My work spans the full spectrum — from architecting scalable web
                                    applications to training deep learning models for medical imaging. I
                                    believe the most impactful software lives at the intersection of
                                    intelligence and user experience.
                                </p>
                                <p>
                                    When I&apos;m not coding, I&apos;m exploring the latest in transformer
                                    architectures, decentralized systems, and the rapidly evolving AI
                                    landscape.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                                {[
                                    { value: "18+", label: "Projects" },
                                    { value: "2+", label: "Hackathons" },
                                    { value: "∞", label: "Curiosity" },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                                        <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlight cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((h) => (
                            <motion.div
                                key={h.title}
                                variants={itemVariants}
                                className={`glass-hover rounded-xl p-5 border ${h.border} bg-gradient-to-br ${h.color} cursor-default`}
                            >
                                <div className={`mb-3 ${h.iconColor}`}>
                                    <h.icon size={22} />
                                </div>
                                <h4 className="text-sm font-semibold text-white mb-2">{h.title}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">{h.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
