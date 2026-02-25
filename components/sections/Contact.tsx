"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FiMail,
    FiSend,
    FiUser,
    FiMessageSquare,
    FiGithub,
    FiLinkedin,
} from "react-icons/fi";

const socials = [
    {
        icon: FiGithub,
        label: "GitHub",
        value: "github.com/Manan-S85",
        href: "https://github.com/Manan-S85",
    },
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/manansinh-sandhaliya",
        href: "https://www.linkedin.com/in/manansinh-sandhaliya-0b6569251",
    },
    {
        icon: FiMail,
        label: "Email",
        value: "sandhaliya1@gmail.com",
        href: "mailto:sandhaliya1@gmail.com",
    },
];

export default function Contact() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        setError("");

        const url = "/api/contact"; // proxy to server-side API to avoid CORS

        try {
            const body = {
                name: formState.name,
                email: formState.email,
                message: formState.message,
            };

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                throw new Error(`Submission failed: ${res.status}`);
            }

            setSent(true);
            setFormState({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again or email me directly.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-glow-gold opacity-10 blur-3xl pointer-events-none" />

            <div className="container-width" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs font-mono font-medium tracking-widest uppercase text-primary-600 mb-3 block">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-primary-600 mx-auto rounded-full" />
                    <p className="text-[var(--color-muted)] mt-5 max-w-xl mx-auto text-sm">
                        Whether you have an opportunity, a project idea, or just want to say hi — my inbox is
                        always open.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
                    {/* Left: Social + info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-5"
                    >
                        <div className="glass rounded-2xl p-6 border border-border">
                            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Open to Work</h3>
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                I&apos;m actively looking for Software Engineer (AI/ML & Full-Stack) roles where I can
                                build meaningful products. Let&apos;s create something great together.
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                                </span>
                                <span className="text-xs text-green-400 font-medium">Available for opportunities</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {socials.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-4 glass glass-hover rounded-xl p-4 border border-border group"
                                >
                                    <div className="p-2 rounded-lg bg-primary-600/10 text-primary-600 group-hover:bg-primary-600/20 transition-colors">
                                        <s.icon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[var(--color-muted)] font-mono">{s.label}</p>
                                        <p className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-text)] transition-colors">
                                            {s.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass rounded-2xl p-6 border border-border space-y-5"
                        >
                            <div>
                                <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 font-mono">
                                    <FiUser className="inline mr-1.5" size={11} />
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-primary-600/60 focus:ring-1 focus:ring-primary-600/30 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 font-mono">
                                    <FiMail className="inline mr-1.5" size={11} />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="your.email@example.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-primary-600/60 focus:ring-1 focus:ring-primary-600/30 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[var(--color-muted)] mb-2 font-mono">
                                    <FiMessageSquare className="inline mr-1.5" size={11} />
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="I'd love to discuss..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-primary-600/60 focus:ring-1 focus:ring-primary-600/30 transition-all resize-none"
                                />
                            </div>

                            {error && (
                                <p className="text-red-400 text-xs">{error}</p>
                            )}

                            {sent ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-4 text-emerald-400 text-sm font-medium"
                                >
                                    ✓ Message sent! I&apos;ll get back to you soon.
                                </motion.div>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-600 text-[var(--color-text)] font-semibold text-sm hover:opacity-90 hover:shadow-glow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    {sending ? (
                                            <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-[rgba(229,229,229,0.22)] border-t-[var(--color-text)] rounded-full"
                                        />
                                    ) : (
                                        <>
                                            <FiSend size={14} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
