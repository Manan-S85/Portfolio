"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
    title: string;
    description: string;
    longDesc: string;
    tech: string[];
    github: string;
    live?: string;
    badge?: string;
    badgeColor?: string;
    gradient: string;
    border: string;
}

const projects: Project[] = [
    {
        title: "AI-Powered CRM System",
        description: "Full-stack CRM with AI automation, smart lead scoring, and NLP-driven insights.",
        longDesc:
            "Led the architecture and development of an end-to-end AI-powered CRM platform. Features include intelligent lead scoring using ML models, automated follow-up sequences, NLP-based customer sentiment analysis, and a real-time analytics dashboard.",
        tech: ["Next.js", "FastAPI", "MongoDB", "Python", "Scikit-learn", "Docker"],
        github: "https://github.com/Manan-S85/AI_Powered_CRM",
        badge: "Project Lead",
        badgeColor: "bg-purple-500/10 border-purple-500/30 text-purple-300",
        gradient: "from-purple-900/20 to-violet-900/5",
        border: "border-purple-500/15",
    },
    {
        title: "DeceptiNet",
        description: "Multimodal Deception Detection fusing audio, video, and text signals with deep learning.",
        longDesc:
            "Built a cutting-edge multimodal deception detection system that analyzes micro-expressions, vocal patterns, and linguistic cues simultaneously. Employs a fusion architecture combining CNN, LSTM, and transformer-based text models.",
        tech: ["PyTorch", "OpenCV", "HuggingFace", "Python", "LSTM", "CNN"],
        github: "https://github.com/Manan-S85/DeceptiNet",
        badge: "Research",
        badgeColor: "bg-blue-500/10 border-blue-500/30 text-blue-300",
        gradient: "from-blue-900/20 to-blue-900/5",
        border: "border-blue-500/15",
    },
    {
        title: "MirAI 2.0 - Personal AI Assistant",
        description: "Multi-model AI assistant with modern UI and extensible architecture.",
        longDesc:
            "MirAI 2.0 is a modular AI assistant supporting multi-model LLM integration via OpenRouter. Built with scalable architecture and clean API orchestration, it enables dynamic model selection and streamlined interactions with a web-adaptable interface, emphasizing production-ready design.",
        tech: ["Python", "JavaScript", "Tkinter / Web UI", "REST APIs", "LLM Integration"],
        github: "https://github.com/Manan-S85/MirAI",
        badge: "Multi-Model LLM Platform",
        badgeColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
        gradient: "from-emerald-900/20 to-emerald-900/5",
        border: "border-emerald-500/15",
    },
    {
        title: "TechGen",
        description: "API-driven technical news aggregation platform delivering curated updates across technology domains.",
        longDesc:"TechGen is an API-driven web platform that aggregates real-time technology news from multiple sources. Designed with modular API integration and efficient data handling, it delivers structured content through a responsive and scalable frontend.",
        tech: ["React", "JavaScript", "REST APIs", "Node.js", "Express", "Vercel"],
        github: "https://github.com/Manan-S85/TechGen",
        badge: "API-Driven Platform",
        badgeColor: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
        gradient: "from-yellow-900/20 to-amber-900/5",
        border: "border-yellow-500/15",
    },
    {
        title: "MistakeLoop",
        description: "AI-powered career and interview preparation platform with contextual guidance.",
        longDesc:"MistakeLoop is a full-stack AI platform using LLM integration for career and interview guidance. Built with modular API workflows and structured prompting, it enables real-time interaction within a scalable web architecture.",
        tech: ["React", "Node.js", "REST APIs", "OpenRouter API", "JavaScript"],
        github: "https://github.com/Manan-S85/MistakeLoop",
        badge: "LLM-Powered Application",
        badgeColor: "bg-orange-500/10 border-orange-500/30 text-orange-300",
        gradient: "from-orange-900/20 to-orange-900/5",
        border: "border-orange-500/15",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`group relative glass rounded-2xl overflow-hidden border ${project.border} bg-gradient-to-br ${project.gradient} cursor-default flex flex-col`}
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-200">
                            {project.title}
                        </h3>
                        {project.badge && (
                            <span
                                className={`inline-block mt-2 text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
                            >
                                {project.badge}
                            </span>
                        )}
                    </div>
                    {/* Links */}
                    <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all"
                            aria-label={`${project.title} GitHub`}
                        >
                            <FiGithub size={17} />
                        </a>
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all"
                                aria-label={`${project.title} Live Demo`}
                            >
                                <FiExternalLink size={17} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-2 leading-relaxed">{project.description}</p>
                <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-5">{project.longDesc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                        <span key={t} className="tag">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="projects" className="section-padding relative">
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
                        What I&apos;ve Built
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-blue mx-auto rounded-full" />
                    <p className="text-slate-400 mt-5 max-w-xl mx-auto text-sm">
                        A selection of projects that demonstrate my ability to build and ship intelligent,
                        real-world applications.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/Manan-S85?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border-bright text-slate-300 hover:text-white hover:border-primary-600/50 text-sm font-medium transition-all duration-200 hover:shadow-glow-sm"
                    >
                        <FiGithub size={16} />
                        View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
