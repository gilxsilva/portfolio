"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Clock, Github, FileText } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function SixtySecondMode() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="gap-2 rounded-full"
        aria-label="Open 60-second summary"
      >
        <Clock className="h-4 w-4" />
        60-Second Version
      </Button>
    )
  }

  const topProjects = projects.slice(0, 3)
  const topSkills = ["React", "TypeScript", "User Research"]
  const topOutcomes = ["Acquired Startup", "500+ Daily Users", "10K+ Students Helped"]

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="w-full max-w-4xl p-8 md:p-12 relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 rounded-full"
            aria-label="Close 60-second summary"
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-4xl font-light tracking-tight">Gil Silva</h2>
              <p className="text-muted-foreground">Stanford Symbolic Systems & HCI · 2× Amazon SDE Intern</p>
            </div>

            {/* Top 3 Projects */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Top 3 Projects</h3>
              <div className="grid gap-3">
                {topProjects.map((project) => (
                  <div key={project.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top 3 Skills */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Top 3 Skills</h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <div key={skill} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Top 3 Outcomes */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Top 3 Outcomes</h3>
              <div className="grid gap-3">
                {topOutcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground/90">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>Resume (PDF)</span>
              </a>
              <a
                href="https://github.com/gilsilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
