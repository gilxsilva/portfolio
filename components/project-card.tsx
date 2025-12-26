"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Play } from "lucide-react"
import { ImpactMeter } from "@/components/impact-meter"
import { MiniDemo } from "@/components/mini-demo"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  quickView?: boolean
}

export function ProjectCard({ project, quickView = false }: ProjectCardProps) {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <>
      <Link href={`/project/${project.id}`}>
        <Card className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-500 h-full">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                onClick={(e) => {
                  e.preventDefault()
                  setShowDemo(true)
                }}
                className="rounded-full gap-2 bg-primary/90 hover:bg-primary backdrop-blur-sm"
              >
                <Play className="h-4 w-4" />
                Try 10s demo
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-light tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {quickView ? (
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Impact meter - only show in full view */}
            {!quickView && <ImpactMeter impact={project.impact} compact />}
          </div>
        </Card>
      </Link>

      <MiniDemo projectId={project.id} open={showDemo} onOpenChange={setShowDemo} />
    </>
  )
}
