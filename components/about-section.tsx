import { Card, CardContent } from "@/components/ui/card"
import { User, Heart, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 font-[family-name:var(--font-work-sans)]">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate front-end web developer and virtual assistant dedicated to creating exceptional digital experiences
            and providing comprehensive business support.
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
                With years of experience in web development and virtual assistance, I bring professionalism and
                expertise to every project.
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
                I love what I do and it shows in the quality of my work. Every project is an opportunity to create
                something amazing.
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
                I focus on delivering measurable results that help businesses grow and succeed in the digital landscape.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
