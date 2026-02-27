"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { SiVercel, SiNextdotjs } from "react-icons/si";

const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { icon: FiGithub, href: "https://github.com/Manan-S85", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/manansinh-sandhaliya-0b6569251", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:sandhaliya1@gmail.com", label: "Email" },
];

export default function Footer() {
    const handleScroll = (href: string) => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-border bg-surface/50">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/40 to-transparent" />

            <div className="container-width py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600 to-accent-blue flex items-center justify-center text-white font-bold text-xs">
                                MS
                            </div>
                            <span className="font-semibold text-white">
                                Manansinh<span className="text-gradient">.</span>
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                            Building intelligent systems that solve real-world problems.
                        </p>
                    </motion.div>

                    {/* Nav links */}
                    <motion.nav
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-x-6 gap-y-2"
                    >
                        {footerLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleScroll(link.href)}
                                className="text-xs text-slate-500 hover:text-white transition-colors link-underline"
                            >
                                {link.label}
                            </button>
                        ))}
                    </motion.nav>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
                            >
                                <s.icon size={16} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} Manansinh Sandhaliya. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
