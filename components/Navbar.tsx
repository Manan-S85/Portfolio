"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Active section detection
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "glass border-b border-border shadow-lg shadow-black/20"
                        : "bg-transparent"
                    }`}
            >
                <div className="container-width flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                            <div className="relative flex items-center gap-3">
                                    <motion.div
                                        aria-hidden
                                        className="flex items-center justify-center w-9 h-9 rounded-md bg-surface border border-border text-sm font-semibold text-[var(--color-primary)] shadow-sm transition-colors"
                                        animate={{ y: [0, -6, 0], rotate: [0, -4, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    >
                                        MS
                                    </motion.div>

                                    <motion.span
                                        className="font-semibold text-[var(--color-text)] hidden sm:flex items-center gap-2 tracking-tight"
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", delay: 0.12 }}
                                    >
                                        Manansinh
                                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block" />
                                    </motion.span>

                                    {/* Decorative floating orbs */}
                                    <motion.span
                                        aria-hidden
                                        className="pointer-events-none absolute -left-6 top-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-30 blur-sm"
                                        style={{ transform: "translateY(-50%)" }}
                                        animate={{ y: [0, -18, 0], x: [0, 6, 0], opacity: [0.25, 0.6, 0.25] }}
                                        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: 0.2 }}
                                    />
                                </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, idx) => {
                            const id = link.href.replace("#", "");
                            const isActive = activeSection === id;
                            return (
                                <motion.button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 link-underline ${isActive
                                            ? "text-[var(--color-primary)]"
                                            : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                                        }`}
                                    animate={{ y: [0, -6 - idx, 0], rotate: [0, -2 + idx * 0.2, 0] }}
                                    transition={{ duration: 4 + idx * 0.25, repeat: Infinity, repeatType: "mirror", delay: idx * 0.12, ease: "easeInOut" }}
                                >
                                    {link.label}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://github.com/Manan-S85"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors p-2 rounded-md hover:bg-white/5"
                            aria-label="GitHub"
                        >
                            <SiGithub size={18} />
                        </a>
                        {/* Hire Me button removed per request */}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-[var(--color-muted)] hover:text-[var(--color-text)] p-2 rounded-md hover:bg-white/5"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 glass border-b border-border p-4"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-4 py-3 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-white/5 transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </button>
                            ))}
                            {/* Hire Me button removed from mobile menu */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
