import { HeroSection } from "@/components/hero-section"
import { ProjectGallery } from "@/components/project-gallery"
import { SkillsExpertise } from "@/components/skills-expertise"
import { ThemeToggle } from "@/components/theme-toggle"
import { SixtySecondMode } from "@/components/sixty-second-mode"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <SixtySecondMode />
        <ThemeToggle />
      </div>

      <HeroSection />
      <ProjectGallery />
      <SkillsExpertise />
    </main>
  )
}
