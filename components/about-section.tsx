import { Card, CardContent } from "@/components/ui/card";
import { User, Heart, Target } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 font-[family-name:var(--font-work-sans)]">
                        About Me
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        I'm a passionate frontend web developer who enjoys
                        turning ideas into interactive, responsive, and
                        user-friendly web applications. I specialize in building
                        modern interfaces using React, Tailwind CSS, and
                        integrating powerful backend features with Supabase.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <CardContent className="p-8 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                <User className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                                Professional
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                With hands-on experience in modern web
                                technologies, I approach every project with
                                attention to detail, clean code, and a strong
                                focus on performance and usability.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <CardContent className="p-8 text-center">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                                <Heart className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                                Passionate
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I love building beautiful, functional web
                                interfaces. Every project is an opportunity to
                                learn, experiment, and create something that
                                delivers real value to users.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <CardContent className="p-8 text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                                <Target className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                                Results-Driven
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I focus on creating scalable, maintainable
                                solutions that not only look great but also
                                perform efficiently and meet business goals.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
