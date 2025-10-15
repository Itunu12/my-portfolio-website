import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WebDevSection } from "@/components/web-dev-section"
import { EducationSection } from "@/components/education-section"
import { VASection } from "@/components/va-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WebDevSection />
      <EducationSection />
      {/* <VASection /> */}
      <ContactSection />
    </main>
  )
}
