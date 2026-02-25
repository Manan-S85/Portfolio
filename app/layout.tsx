import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Manansinh Sandhaliya | AI & Full Stack Engineer",
    description:
        "Portfolio of Manansinh Sandhaliya — AI & Full Stack Engineer specializing in intelligent systems, machine learning, and modern web applications.",
    keywords: [
        "Manansinh Sandhaliya",
        "AI Engineer",
        "Full Stack Developer",
        "Machine Learning",
        "Next.js",
        "React",
        "Python",
        "TensorFlow",
        "PyTorch",
    ],
    authors: [{ name: "Manansinh Sandhaliya" }],
    creator: "Manansinh Sandhaliya",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://manansinh.dev",
        title: "Manansinh Sandhaliya | AI & Full Stack Engineer",
        description:
            "Building intelligent systems that solve real-world problems.",
        siteName: "Manansinh Sandhaliya Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Manansinh Sandhaliya | AI & Full Stack Engineer",
        description: "Building intelligent systems that solve real-world problems.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-background text-slate-200 font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
