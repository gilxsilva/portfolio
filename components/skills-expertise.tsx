"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { projects } from "@/lib/projects-data"

const skills = [
  { name: "React", relatedProjects: ["kyro", "dayo", "collegeplan"] },
  { name: "TypeScript", relatedProjects: ["kyro", "dayo", "collegeplan"] },
  { name: "User Research", relatedProjects: ["kyro", "finding-our-voice", "maternal-health"] },
  { name: "AI/ML", relatedProjects: ["kyro", "dayo", "collegeplan"] },
  { name: "Accessibility", relatedProjects: ["finding-our-voice", "maternal-health", "dayo"] },
  { name: "Figma", relatedProjects: ["kyro", "dayo", "finding-our-voice"] },
  { name: "Mobile", relatedProjects: ["kyro", "finding-our-voice", "maternal-health"] },
  { name: "Next.js", relatedProjects: ["dayo", "collegeplan"] },
  { name: "System Design", relatedProjects: ["kyro", "maternal-health"] },
]

export function SkillsExpertise() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const relatedProjects = hoveredSkill
    ? projects.filter((p) => skills.find((s) => s.name === hoveredSkill)?.relatedProjects.includes(p.id))
    : []

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">Hover over skills to see related projects</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills Grid */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <button
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onFocus={() => setHoveredSkill(skill.name)}
                  onBlur={() => setHoveredSkill(null)}
                  className="focus:outline-none focus:ring-2 focus:ring-ring rounded-full"
                  aria-label={`View projects using ${skill.name}`}
                >
                  <Badge
                    variant={hoveredSkill === skill.name ? "default" : "secondary"}
                    className="text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    {skill.name}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          {/* Related Projects Panel */}
          <Card className="p-6 min-h-[300px]">
            {hoveredSkill ? (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Projects using {hoveredSkill}</h3>
                <div className="space-y-4">
                  {relatedProjects.map((project) => (
                    <a
                      key={project.id}
                      href={`/project/${project.id}`}
                      className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <p className="font-medium mb-1">{project.title}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Hover over a skill to see related projects
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
