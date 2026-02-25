"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
    {
        category: "AI / ML",
        emoji: "🧠",
        gradient: "from-purple-500/10 to-violet-900/5",
        border: "border-purple-500/20",
        accent: "bg-purple-500/10 border-purple-500/30 text-purple-300",
        dot: "bg-purple-400",
        skills: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "Vision Transformer",
            "DenseNet",
            "Random Forest",
            "OpenCV",
            "HuggingFace",
        ],
    },
    {
        category: "Backend",
        emoji: "⚡",
        gradient: "from-blue-500/10 to-blue-900/5",
        border: "border-blue-500/20",
        accent: "bg-blue-500/10 border-blue-500/30 text-blue-300",
        dot: "bg-blue-400",
        skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
        category: "Frontend",
        emoji: "🎨",
        gradient: "from-cyan-500/10 to-cyan-900/5",
        border: "border-cyan-500/20",
        accent: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
        dot: "bg-cyan-400",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
    },
    {
        category: "DevOps",
        emoji: "🛠️",
        gradient: "from-orange-500/10 to-orange-900/5",
        border: "border-orange-500/20",
        accent: "bg-orange-500/10 border-orange-500/30 text-orange-300",
        dot: "bg-orange-400",
        skills: ["Git", "GitHub", "Vercel", "GitHub Actions"],
    },
    {
        category: "Databases",
        emoji: "🗄️",
        gradient: "from-emerald-500/10 to-emerald-900/5",
        border: "border-emerald-500/20",
        accent: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
        dot: "bg-emerald-400",
        skills: ["MongoDB", "MySQL", "Redis", "Mongoose"],
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

export default function Skills() {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="skills" className="section-padding relative">
            {/* Subtle section separator */}
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
                        What I Work With
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-blue mx-auto rounded-full" />
                    <p className="text-slate-400 mt-5 max-w-xl mx-auto text-sm">
                        A curated set of technologies I use to build intelligent, scalable, and
                        beautiful software.
                    </p>
                </motion.div>

                {/* Skill cards grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {skillCategories.map((cat) => (
                        <motion.div
                            key={cat.category}
                            variants={cardVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className={`glass glass-hover rounded-2xl p-6 border ${cat.border} bg-gradient-to-br ${cat.gradient} cursor-default`}
                        >
                            {/* Card header */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{cat.emoji}</span>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">{cat.category}</h3>
                                    <span className="text-xs text-slate-500">{cat.skills.length} technologies</span>
                                </div>
                                <div className={`ml-auto w-2 h-2 rounded-full ${cat.dot} shadow-sm`} />
                            </div>

                            {/* Skill tags */}
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${cat.accent} transition-all duration-150 cursor-default`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
