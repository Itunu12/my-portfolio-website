import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Briefcase, Mail, Calendar } from "lucide-react"

const services = [
  {
    icon: Mail,
    title: "Email Management",
    description: "Professional email handling, organization, and response management to keep your inbox under control.",
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description: "Efficient calendar management, appointment scheduling, and meeting coordination.",
  },
  {
    icon: Briefcase,
    title: "Administrative Tasks",
    description: "Data entry, document preparation, research, and general administrative support.",
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Professional customer service, chat support, and client communication management.",
  },
]

const stats = [
  { number: "50+", label: "Clients Served" },
  { number: "500+", label: "Tasks Completed" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24h", label: "Response Time" },
]

export function VASection() {
  return (
    <section id="va" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-work-sans)]">
            Virtual Assistant Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Providing comprehensive virtual assistance to help businesses streamline operations and focus on growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-work-sans)]">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Why Choose Me */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center font-[family-name:var(--font-work-sans)]">
              Why Choose My VA Services?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Reliable & Professional</h4>
                    <p className="text-muted-foreground text-sm">
                      Consistent quality and professional communication in all interactions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Time Zone Flexibility</h4>
                    <p className="text-muted-foreground text-sm">
                      Available across different time zones to meet your business needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Personalized Service</h4>
                    <p className="text-muted-foreground text-sm">
                      Tailored solutions that fit your specific business requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Diverse Expertise</h4>
                    <p className="text-muted-foreground text-sm">
                      Wide range of skills to handle various administrative and support tasks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
