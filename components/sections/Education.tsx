"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className="section-padding relative">
            {/* Soft decorative orb behind the card */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-56 h-56 bg-glow-gold opacity-6 rounded-full blur-3xl pointer-events-none" />

            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-primary-600 mb-6">
                        Education
                    </h3>

                    <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 140, damping: 12 }}
                        className="relative glass border border-border rounded-3xl p-6 flex items-center gap-6 shadow-sm"
                    >
                        {/* Left: logo tile */}
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-600 to-primary-600/90 flex items-center justify-center text-[var(--color-bg)] font-bold text-lg shadow-md border border-border-bright">
                                VIT
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="flex-1 text-left">
                            <p className="text-2xl font-semibold text-[var(--color-text)] leading-snug">Vellore Institute of Technology (VIT)</p>
                            <p className="text-sm text-[var(--color-muted)] mt-1">Bachelor of Technology — Computer Science Engineering (Specialization in AIML)</p>

                            <div className="mt-3 flex items-center gap-4">
                                <p className="text-xs text-[var(--color-muted)]">2022 — 2026</p>

                                <div className="inline-flex items-center gap-3 bg-[var(--color-primary)]/10 border border-primary-600/20 rounded-full px-3 py-1">
                                    <span className="text-xs font-medium text-[var(--color-primary)]">CGPA</span>
                                    <span className="text-sm font-semibold text-[var(--color-text)]">8.60 / 10</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: subtle badge */}
                        <div className="flex-shrink-0">
                            <div className="inline-flex items-center gap-2 bg-surface/60 border border-border rounded-full px-3 py-1">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block" />
                                <span className="text-xs text-[var(--color-muted)] font-medium">University</span>
                            </div>
                        </div>

                        {/* Decorative outline for extra polish */}
                        <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent bg-[linear-gradient(transparent,transparent)]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
