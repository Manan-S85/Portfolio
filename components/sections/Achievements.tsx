"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiTrendingUp, FiStar, FiZap } from "react-icons/fi";

const achievements = [
    {
        icon: FiZap,
        title: "Amazon ML Summer School 2025",
        subtitle: "Selected Participant",
        description:
            "Selected for Amazon ML Summer School 2025, a competitive program focused on advanced machine learning concepts and large-scale ML systems. Received an official letter of acknowledgment recognizing participation and academic merit.",
        tags: ["Machine Learning", "Advanced ML Systems", "Model Optimization", "Amazon"],
        color: "from-orange-500/15 to-amber-600/5",
        border: "border-orange-500/20",
        iconBg: "bg-orange-500/10",
        iconColor: "text-orange-400",
    },
    {
        icon: FiTrendingUp,
        title: "Flipkart GRID 7.0 (2025)",
        subtitle: "National Semi-Finalist",
        description:
            "Advanced to the National Semi-Finals of Flipkart GRID 7.0, a nationwide engineering and technology competition. Recognized for technical problem-solving, system design, and performance in competitive evaluation rounds.",
        tags: ["Competitive Programming", "System Design", "Problem Solving", "National Level"],
        color: "from-emerald-500/15 to-emerald-600/5",
        border: "border-emerald-500/20",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
    },
    {
        icon: FiAward,
        title: "Robotics & Coding Competition",
        subtitle: "2nd Place",
        description:
            "Secured 2nd place in the Robotics & Coding Competition organized by our university, demonstrating strong skills in robotics, algorithm design, and problem-solving under competitive conditions.",
        tags: ["Robotics", "Algorithms", "Problem Solving", "Competitive"],
        color: "from-blue-500/15 to-blue-600/5",
        border: "border-blue-500/20",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

export default function Achievements() {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="achievements" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container-width" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs font-mono font-medium tracking-widest uppercase text-primary-400 mb-3 block">
                        Milestones
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Achievements &amp; <span className="text-gradient">Highlights</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-blue mx-auto rounded-full" />
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                    {achievements.map((a) => (
                        <motion.div
                            key={a.title}
                            variants={cardVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className={`glass glass-hover rounded-2xl p-6 border ${a.border} bg-gradient-to-br ${a.color}`}
                        >
                            {/* Icon + title */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`p-2.5 rounded-xl ${a.iconBg} ${a.iconColor} flex-shrink-0`}>
                                    <a.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-white">{a.title}</h3>
                                    <p className="text-xs text-primary-400 font-mono mt-0.5">{a.subtitle}</p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-400 leading-relaxed mb-4">{a.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {a.tags.map((t) => (
                                    <span key={t} className="tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
