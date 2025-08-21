import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award, Code, Users } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    institution: "Olabisi Onabanjo University",
    location: "Ogun State, Nigeria",
    period: "2021 - 2025",
    description: "Comprehensive engineering program focusing on mechanical systems, thermodynamics, materials science, and design principles. Developed strong analytical thinking, problem-solving skills, and attention to detail that translate perfectly to web development.",
    icon: GraduationCap,
    highlights: ["Engineering Design", "Problem Solving", "Project Management", "Technical Documentation"]
  },
  {
    degree: "Front-End Web Development Certification",
    institution: "Coding Bootcamp",
    location: "Online",
    period: "2023",
    description: "Intensive hands-on program specializing in modern front-end technologies. Mastered React, JavaScript, HTML5, CSS3, and responsive design principles through practical projects and real-world applications.",
    icon: Code,
    highlights: ["React Development", "Responsive Design", "JavaScript ES6+", "Modern CSS"]
  },
  {
    degree: "Virtual Assistant Professional Certificate",
    institution: "ALX Africa",
    location: "Online",
    period: "2024",
    description: "Professional certification program covering business administration, digital communication, project coordination, and client relationship management. Enhanced organizational and multitasking abilities essential for freelance work.",
    icon: Users,
    highlights: ["Client Management", "Digital Communication", "Project Coordination", "Business Administration"]
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 font-[family-name:var(--font-work-sans)]">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My diverse educational background combines engineering fundamentals with modern web development skills and professional business practices, creating a unique perspective for front-end development.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {education.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-card hidden md:block"></div>

                    <Card className="md:ml-16 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/30 hover:border-l-primary">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-start mb-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-card-foreground mb-2 font-[family-name:var(--font-work-sans)]">
                                  {item.degree}
                                </h3>
                                <div className="flex items-center text-muted-foreground mb-2">
                                  <GraduationCap className="w-4 h-4 mr-2" />
                                  <span className="font-medium">{item.institution}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground mb-2">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center text-primary font-medium mt-2 lg:mt-0 bg-primary/10 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                        
                        <div className="border-t border-border pt-4">
                          <h4 className="text-sm font-semibold text-card-foreground mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-primary" />
                            Key Skills & Highlights
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}