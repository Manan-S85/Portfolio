"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
    {
        role: "Project Lead & AI/ML Intern – AI-Powered CRM System",
        type: "Detagenix Pvt Ltd",
        period: "Jan 2026 – Present",
        location: "Remote",
        color: "border-purple-500/30",
        dot: "bg-purple-500",
        glow: "shadow-purple-500/20",
        highlights: [
            "Led end-to-end architecture and technical direction of a full-stack AI-powered CRM system across frontend, backend, and ML components.",
            "Designed and implemented a modular FastAPI backend with structured REST APIs and service-layer abstraction.",
            "Engineered relational database schemas and optimized data models for scalable lead and workflow management.",
            "Developed and integrated a Random Forest–based lead scoring model with feature engineering and real-time inference pipelines.",
            "Implemented LLM-driven smart email generation using structured prompt design and API orchestration.",
            "Coordinated cross-module integration between Next.js frontend, backend services, and ML pipelines for production readiness.",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="experience" className="section-padding relative">
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
                        Career
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Experience <span className="text-gradient">&amp; Work</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-blue mx-auto rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="relative"
                    >
                        {/* Timeline vertical line */}
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600/60 via-blue-500/40 to-transparent hidden sm:block" />

                        <div className="space-y-8">
                            {experiences.map((exp) => (
                                <motion.div
                                    key={exp.role}
                                    variants={itemVariants}
                                    className="relative sm:pl-16"
                                >
                                    {/* Timeline dot */}
                                    <div className={`absolute left-3.5 top-5 w-3 h-3 rounded-full ${exp.dot} border-2 border-background shadow-lg ${exp.glow} hidden sm:block`} />

                                    {/* Card */}
                                    <div className={`glass glass-hover rounded-2xl p-6 border ${exp.color}`}>
                                        {/* Top */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <FiBriefcase size={14} className="text-primary-400" />
                                                    <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                                                </div>
                                                <p className="text-sm text-primary-400 font-mono">{exp.type}</p>
                                            </div>
                                            <div className="flex flex-col sm:items-end gap-1">
                                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                    <FiCalendar size={11} />
                                                    {exp.period}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                    <FiMapPin size={11} />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2">
                                            {exp.highlights.map((h, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                                                    <span className="text-primary-500 mt-1 flex-shrink-0">▸</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
