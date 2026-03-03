"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiBriefcase, FiClock, FiCopy, FiDownload, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";

// Neural network canvas animation
function NeuralCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
        const NODE_COUNT = 60;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Initialize nodes
        for (let i = 0; i < NODE_COUNT; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 2 + 1,
            });
        }

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update & draw nodes
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(212,175,55,0.44)";
                ctx.fill();
            });

            // Draw edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.18;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        const grad = ctx.createLinearGradient(
                            nodes[i].x, nodes[i].y,
                            nodes[j].x, nodes[j].y
                        );
                        grad.addColorStop(0, `rgba(212,175,55, ${alpha})`);
                        grad.addColorStop(1, `rgba(28,28,28, ${alpha})`);
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-40"
            style={{ mixBlendMode: "screen" }}
        />
    );
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MY_TZ = "Asia/Kolkata";

function tzOffsetMin(tz: string): number {
    try {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            timeZoneName: "shortOffset",
        }).formatToParts(new Date());
        const label = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT+0";
        const m = label.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
        if (!m) return 0;
        const sign = m[1] === "+" ? 1 : -1;
        return sign * (parseInt(m[2], 10) * 60 + parseInt(m[3] ?? "0", 10));
    } catch {
        return 0;
    }
}

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const [now, setNow] = useState<Date | null>(null);
    const [visitorTz, setVisitorTz] = useState("UTC");

    // Kick off the clock only on the client to avoid SSR mismatch
    useEffect(() => {
        setNow(new Date());
        setVisitorTz(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC");
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const myTime = useMemo(
        () =>
            now
                ? now.toLocaleTimeString("en-US", {
                      timeZone: MY_TZ,
                      hour12: true,
                      hour: "numeric",
                      minute: "2-digit",
                      second: "2-digit",
                  })
                : "",
        [now],
    );

    const tzLabel = useMemo(() => {
        if (!now) return "";
        const diff = tzOffsetMin(MY_TZ) - tzOffsetMin(visitorTz);
        if (diff === 0) return "You're in the same timezone as me";
        const abs = Math.abs(diff);
        const h = Math.floor(abs / 60);
        const min = abs % 60;
        const unit = min ? `${h}h ${min}m` : `${h} hr${h !== 1 ? "s" : ""}`;
        return diff > 0 ? `You are ${unit} behind me` : `You are ${unit} ahead of me`;
    }, [now, visitorTz]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("sandhaliya1@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Neural network background */}
            <NeuralCanvas />

            {/* Gradient mesh background */}
            <div className="absolute inset-0 bg-hero-gradient" />

            {/* Radial center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-gold opacity-18 rounded-full blur-3xl" />

            <div className="container-width relative z-10 py-32">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Profile photo — above the name */}
                    <motion.div variants={item} className="flex justify-center mt-12 mb-6">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary-600/30 shadow-[0_0_28px_rgba(212,175,55,0.18)] hover:scale-105 transition-transform duration-300">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/manan.jpeg"
                                alt="Manansinh Sandhaliya"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src =
                                        "/profile-placeholder.svg";
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Status badge */}
                    <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                        </span>
                        <span className="text-xs font-medium text-[var(--color-muted)] tracking-widest uppercase font-mono">
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={item}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight"
                    >
                        <span className="text-[var(--color-text)]">Manansinh</span>
                        <br />
                        <span className="text-gradient">Sandhaliya</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div variants={item} className="mb-6">
                        <span className="inline-block px-4 py-2 rounded-full border border-primary-600/40 bg-primary-600/10 text-[var(--color-text)] text-sm font-mono font-medium tracking-wide">
                            Software Engineer (AI/ML & Full-Stack) · CSE-AIML
                        </span>
                    </motion.div>

                    {/* ── Profile details: company, location, phone, email, timezone ── */}
                    <motion.div
                        variants={item}
                        className="mb-10 flex flex-col items-center gap-4"
                    >
                        {/* Company + Location badges */}
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border glass text-sm text-[var(--color-muted)]">
                                <FiBriefcase size={14} className="text-[var(--color-primary)]" />
                                AIML Intern @ Detagenix Pvt. Ltd.
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border glass text-sm text-[var(--color-muted)]">
                                <FiBriefcase size={14} className="text-[var(--color-primary)]" />
                                Open to Full Stack AI Engineering Roles
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border glass text-sm text-[var(--color-muted)]">
                                <FiMapPin size={14} className="text-[var(--color-primary)]" />
                                Gujarat, India
                            </span>
                        </div>

                        {/* Phone + Email */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a
                                href="tel:+919712945084"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-border text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-primary-600/30 transition-all"
                            >
                                <FiPhone size={15} className="text-[var(--color-primary)]" />
                                +91 9712945084
                            </a>
                            <button
                                type="button"
                                onClick={copyEmail}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-border text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-primary-600/30 transition-all"
                            >
                                <FiMail size={15} className="text-[var(--color-primary)]" />
                                sandhaliya1@gmail.com
                                <span className="flex items-center gap-1 text-[var(--color-muted)] ml-1">
                                    <FiCopy size={13} />
                                    {copied ? "Copied!" : "Copy"}
                                </span>
                            </button>
                        </div>

                        {/* Live timezone widget */}
                        {now && (
                            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-border text-sm text-[var(--color-muted)]">
                                <FiClock size={15} className="text-[var(--color-primary)] shrink-0" />
                                <span className="text-[var(--color-text)] font-mono">
                                    {myTime} IST
                                </span>
                                <span className="opacity-30">·</span>
                                <span>{tzLabel}</span>
                            </div>
                        )}
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={item}
                        className="text-xl sm:text-2xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                    >
                        Building{" "}
                        <span className="text-gradient-muted font-medium">intelligent systems</span>{" "}
                        that solve real-world problems.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => handleScrollTo("projects")}
                            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-600 text-[var(--color-text)] font-semibold text-sm hover:opacity-90 hover:shadow-glow-md transition-all duration-300 flex items-center gap-2"
                        >
                            View Projects
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                        </button>

                        <a
                            href="https://drive.google.com/file/d/1je7mbkFatiWlaDfbY3LIlIKD3YqfwRNy/view?usp=sharing"
                            download
                            className="px-7 py-3.5 rounded-xl glass border border-border-bright text-[var(--color-text)] font-semibold text-sm hover:border-primary-600/50 hover:shadow-glow-sm transition-all duration-300 flex items-center gap-2"
                        >
                            <FiDownload size={15} />
                            Download Resume
                        </a>

                        <button
                            onClick={() => handleScrollTo("contact")}
                            className="px-7 py-3.5 rounded-xl text-[var(--color-muted)] font-semibold text-sm hover:text-[var(--color-text)] hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                        >
                            <FiMail size={15} />
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={item}
                        className="flex items-center justify-center gap-4 mt-10"
                    >
                        <a
                            href="https://github.com/Manan-S85"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-white transition-colors p-2"
                            aria-label="GitHub"
                        >
                            <SiGithub size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/manansinh-sandhaliya-0b6569251"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-white transition-colors p-2"
                            aria-label="LinkedIn"
                        >
                            <SiLinkedin size={22} />
                        </a>
                        <a
                            href="mailto:sandhaliya1@gmail.com"
                            className="text-slate-500 hover:text-white transition-colors p-2"
                            aria-label="Email"
                        >
                            <FiMail size={22} />
                        </a>
                    </motion.div>

                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
                >
                    <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FiArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
