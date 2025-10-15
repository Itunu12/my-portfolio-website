"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    FileCode2,
    Palette,
    Braces,
    Globe,
    Code2,
    Smartphone,
    GitBranch,
    Database,
    ExternalLink,
    Github,
} from "lucide-react";

const skills = [
    { name: "HTML5", level: 95, icon: FileCode2 },
    { name: "CSS3", level: 90, icon: Palette },
    { name: "JavaScript", level: 88, icon: Braces },
    { name: "React", level: 85, icon: Code2 },
    { name: "Tailwind CSS", level: 90, icon: Globe },
    { name: "TypeScript", level: 80, icon: Braces },
    { name: "Supabase", level: 75, icon: Database },
    { name: "Responsive Design", level: 95, icon: Smartphone },
    { name: "GitHub", level: 90, icon: GitBranch },
];

const projects = [
    {
        title: "E-Commerce Website",
        description:
            "Modern responsive e-commerce site with authentication, product management, and Supabase integration for backend data handling.",
        image: "/modern-ecommerce-interface.png",
        technologies: ["React", "Tailwind CSS", "Supabase", "JavaScript"],
        liveUrl: "https://fluent-pay-landing-page.vercel.app",
        githubUrl:
            "https://github.com/Itunu12/fluent-pay-landing-page.vercel.app",
    },
    {
        title: "Portfolio Dashboard",
        description:
            "Interactive portfolio dashboard built with Next.js and TypeScript, featuring dynamic animations and clean data architecture.",
        image: "/task-management-dashboard.png",
        technologies: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Landing Page",
        description:
            "High-converting landing page built with React and Tailwind CSS, optimized for performance and accessibility.",
        image: "/modern-portfolio-website.png",
        technologies: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export function WebDevSection() {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <section id="web-dev" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-work-sans)]">
                        Web Development
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Building fast, scalable, and visually engaging web
                        applications with modern technologies like React,
                        Tailwind CSS, and Supabase — from responsive UI to
                        connected backend functionality.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-card rounded-lg p-2 shadow-lg">
                        <Button
                            variant={
                                activeTab === "skills" ? "default" : "ghost"
                            }
                            onClick={() => setActiveTab("skills")}
                            className="px-6 py-2 mr-2"
                        >
                            Skills & Technologies
                        </Button>
                        <Button
                            variant={
                                activeTab === "projects" ? "default" : "ghost"
                            }
                            onClick={() => setActiveTab("projects")}
                            className="px-6 py-2"
                        >
                            Featured Projects
                        </Button>
                    </div>
                </div>

                {activeTab === "skills" && (
                    <div className="animate-fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {skills.map((skill) => {
                                const IconComponent = skill.icon;
                                return (
                                    <Card
                                        key={skill.name}
                                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                                                    <IconComponent className="w-6 h-6 text-primary" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-card-foreground font-[family-name:var(--font-work-sans)]">
                                                    {skill.name}
                                                </h3>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-3 mb-2">
                                                <div
                                                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <p className="text-sm text-muted-foreground text-right">
                                                {skill.level}%
                                            </p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-work-sans)]">
                                Technologies I Work With
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                                {[
                                    "React",
                                    "Next.js",
                                    "TypeScript",
                                    "JavaScript",
                                    "Supabase",
                                    "Tailwind CSS",
                                    "HTML5",
                                    "CSS3",
                                    "Framer Motion",
                                    "GSAP",
                                    "Git",
                                    "GitHub",
                                    "Vercel",
                                    "Netlify",
                                    "Figma",
                                ].map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="px-4 py-2 text-sm"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "projects" && (
                    <div className="animate-fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <Card
                                    key={project.title}
                                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={
                                                project.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-bold text-card-foreground font-[family-name:var(--font-work-sans)]">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="text-xs"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                asChild
                                                className="flex-1"
                                            >
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 bg-transparent"
                                                asChild
                                            >
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
