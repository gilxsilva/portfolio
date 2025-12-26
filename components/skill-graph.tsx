"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { id: "react", name: "React", projects: ["kyro", "dayo", "collegeplan", "maternal-health"] },
  { id: "typescript", name: "TypeScript", projects: ["kyro", "dayo", "collegeplan", "maternal-health"] },
  { id: "python", name: "Python", projects: ["collegeplan", "maternal-health"] },
  { id: "figma", name: "Figma", projects: ["kyro", "dayo", "collegeplan", "finding-our-voice", "maternal-health"] },
  { id: "user-research", name: "User Research", projects: ["kyro", "dayo", "finding-our-voice", "maternal-health"] },
  { id: "ai-ml", name: "AI/ML", projects: ["kyro", "collegeplan"] },
  { id: "accessibility", name: "Accessibility", projects: ["finding-our-voice", "maternal-health"] },
  { id: "mobile", name: "Mobile Dev", projects: ["kyro", "maternal-health"] },
]

const projectNames: Record<string, string> = {
  kyro: "Kyro",
  dayo: "Dayo",
  collegeplan: "CollegePlan",
  "finding-our-voice": "Finding Our Voice",
  "maternal-health": "Maternal Health",
}

export function SkillGraph() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="px-6 py-24 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">Hover over skills to see related projects</p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border/50">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-6">Technical & Design Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant={hoveredSkill === skill.id ? "default" : "outline"}
                    className="px-4 py-2 text-sm cursor-pointer transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Projects mapped to hovered skill */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-6">{hoveredSkill ? "Related Projects" : "All Projects"}</h3>
              <div className="space-y-3">
                {hoveredSkill ? (
                  skills
                    .find((s) => s.id === hoveredSkill)
                    ?.projects.map((projectId) => (
                      <div
                        key={projectId}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 animate-in fade-in-0 slide-in-from-left-2 duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm">{projectNames[projectId]}</span>
                      </div>
                    ))
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hover over a skill to see which projects utilized that expertise. Each project represents a unique
                    intersection of technical implementation and human-centered design.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
