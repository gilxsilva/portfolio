"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function ProjectGallery() {
  const [quickView, setQuickView] = useState(false)

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Exhibit Gallery</h2>
            <p className="text-muted-foreground text-lg">Featured projects across HCI, education, and social impact</p>
          </div>

          <Button
            variant={quickView ? "default" : "outline"}
            onClick={() => setQuickView(!quickView)}
            className="rounded-full group"
          >
            <Clock className="mr-2 h-4 w-4" />
            {quickView ? "Full View" : "60-Second Version"}
          </Button>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} quickView={quickView} />
          ))}
        </div>
      </div>
    </section>
  )
}
