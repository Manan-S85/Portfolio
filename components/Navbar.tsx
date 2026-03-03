"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiCode, FiFileText, FiFolder, FiLayers, FiMail, FiUser } from "react-icons/fi";
import type { IconType } from "react-icons";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

// Icons used exclusively by the desktop right-side rail
const navIconMap: Record<string, IconType> = {
    About: FiUser,
    Skills: FiCode,
    "Tech Stack": FiLayers,
    Projects: FiFolder,
    Experience: FiBriefcase,
    Achievements: FiAward,
    Certifications: FiFileText,
    Contact: FiMail,
};

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [navExpanded, setNavExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>

            {/* ── Right-side navigation rail (desktop only) ── */}
            <div
                className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50"
                onMouseEnter={() => setNavExpanded(true)}
                onMouseLeave={() => setNavExpanded(false)}
            >
                <motion.div
                    animate={{ width: navExpanded ? 210 : 68 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="glass border border-border border-r-0 rounded-l-2xl py-4 overflow-hidden shadow-lg shadow-black/20"
                >
                    <div className="flex flex-col gap-1 px-3">
                        {navLinks.map((link) => {
                            const id = link.href.replace("#", "");
                            const isActive = activeSection === id;
                            const Icon = navIconMap[link.label];
                            return (
                                <button
                                    key={link.label}
                                    type="button"
                                    onClick={() => handleNavClick(link.href)}
                                    title={link.label}
                                    className={`flex items-center gap-3 w-full px-2.5 py-2.5 rounded-xl transition-all duration-200 ${
                                        isActive
                                            ? "text-[var(--color-primary)] bg-primary-600/10"
                                            : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
                                    }`}
                                >
                                    {Icon && <Icon size={18} className="shrink-0" />}
                                    <motion.span
                                        animate={{ opacity: navExpanded ? 1 : 0 }}
                                        transition={{
                                            duration: 0.18,
                                            delay: navExpanded ? 0.08 : 0,
                                        }}
                                        className="text-sm font-medium whitespace-nowrap overflow-hidden"
                                    >
                                        {link.label}
                                    </motion.span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

        </>
    );
}
