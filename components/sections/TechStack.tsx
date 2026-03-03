"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCloud, FiCode } from "react-icons/fi";
import {
    SiCss3,
    SiDocker,
    SiExpress,
    SiFastapi,
    SiFlask,
    SiGit,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiKaggle,
    SiKeras,
    SiLatex,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiNpm,
    SiOpencv,
    SiPython,
    SiPytorch,
    SiReact,
    SiRedis,
    SiSelenium,
    SiStreamlit,
    SiTailwindcss,
    SiTensorflow,
    SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";


interface TechItem {
    name: string;
    icon: IconType;
}

const techItems: TechItem[] = [
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "FastAPI", icon: SiFastapi },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Redis", icon: SiRedis },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "AWS", icon: FiCloud },
    { name: "Keras", icon: SiKeras },
    { name: "Flask", icon: SiFlask },
    { name: "LangChain", icon: FiCode },
    { name: "RAG Systems", icon: FiCode },
    { name: "npm", icon: SiNpm },
    { name: "OpenCV", icon: SiOpencv },
    { name: "VS Code", icon: FiCode },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "Selenium", icon: SiSelenium },
    { name: "LaTeX", icon: SiLatex },
    { name: "Kaggle", icon: SiKaggle },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function TechStack() {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="techstack" className="section-padding relative">
            {/* Subtle section separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container-width" ref={ref}>
                {/* Header — same style as other sections */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs font-mono font-medium tracking-widest uppercase text-primary-400 mb-3 block">
                        What I Build With
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-blue mx-auto rounded-full" />
                    <p className="text-slate-400 mt-5 max-w-xl mx-auto text-sm">
                        A visual overview of the tools and technologies I use to ship intelligent,
                        scalable software.
                    </p>
                </motion.div>

                {/* Icon grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4"
                >
                    {techItems.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={tech.name}
                                variants={cardVariants}
                                whileHover={{
                                    y: -4,
                                    scale: 1.06,
                                    transition: { duration: 0.18 },
                                }}
                                className="group relative flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl glass border border-border cursor-default hover:border-primary-600/30 hover:shadow-glow-sm transition-colors duration-300"
                            >
                                {/* Icon */}
                                <Icon
                                    size={28}
                                    className="text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors duration-300"
                                />
                                {/* Label */}
                                <span className="text-[10px] font-mono text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors text-center leading-tight">
                                    {tech.name}
                                </span>

                                {/* Tooltip on hover */}
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-surface border border-border text-[10px] text-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg"
                                >
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
