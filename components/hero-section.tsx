"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    const scrollToWebDev = () => {
        document
            .getElementById("web-dev")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary rounded-full animate-float [animation-delay:1s]"></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary rounded-full animate-float [animation-delay:2s]"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-work-sans)]">
                        Itunu Adeola Kazeem
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 font-[family-name:var(--font-open-sans)]">
                        Frontend Developer (React & Supabase)
                    </p>
                    <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Building responsive and interactive web applications
                        with modern tools like React, Tailwind CSS, and Supabase
                        — transforming ideas into functional, user-friendly
                        products.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
                            onClick={scrollToWebDev}
                        >
                            View My Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-background px-8 py-3 text-lg bg-transparent"
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-white/70" />
            </div>
        </section>
    );
}
