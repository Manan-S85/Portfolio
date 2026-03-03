"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiAward } from "react-icons/fi";

interface Certification {
    title: string;
    org: string;
    date: string;
    url: string;
}

const certifications: Certification[] = [
    {
        title: "Blockchain Developer Certification",
        org: "IBM Career Education Program",
        date: "Apr 2025",
        url: "#",
    },
    {
        title: "MERN Full Stack Developer Certification",
        org: " Ethnus via Codemithra",
        date: "Mar 2025",
        url: "#",
    },
    {
        title: "Applied Machine Learning in Python",
        org: "Coursera",
        date: "Aug 2024",
        url: "#",
    },
    {
        title: "Database Management Systems",
        org: "Infosys springboard",
        date: "Jun 2024",
        url: "#",
    },
];

export default function Certifications() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="certifications" className="section-padding relative">
            {/* Section separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container-width" ref={ref}>
                {/* Header — matches rest of the portfolio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs font-mono font-medium tracking-widest uppercase text-primary-400 mb-3 block">
                        Credentials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Certifi<span className="text-gradient">cations</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-blue mx-auto rounded-full" />
                    <p className="text-slate-400 mt-5 max-w-xl mx-auto text-sm">
                        Professional credentials that validate my expertise in AI, cloud, and
                        full-stack engineering.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {certifications.map((cert, i) => (
                        <motion.article
                            key={cert.title}
                            initial={{ opacity: 0, y: 28 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -3, transition: { duration: 0.18 } }}
                            className="glass glass-hover rounded-2xl border border-border p-6 flex flex-col gap-4 cursor-default"
                        >
                            {/* Icon + title */}
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 p-2 rounded-lg bg-primary-600/10 border border-primary-600/20 shrink-0">
                                    <FiAward size={16} className="text-[var(--color-primary)]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-0.5">{cert.org}</p>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                                <FiCalendar size={11} />
                                <span>Issued {cert.date}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
