"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-background overflow-x-hidden">
            {/* Ambient background orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="orb orb-purple w-96 h-96 top-[-100px] left-[-100px]" />
                <div className="orb orb-blue w-96 h-96 top-1/3 right-[-80px]" />
                <div className="orb orb-cyan w-64 h-64 bottom-1/4 left-1/4" />
                <div className="grid-bg absolute inset-0 opacity-30" />
            </div>

            <Navbar />

            <div className="relative z-10">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Experience />
                <Achievements />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
