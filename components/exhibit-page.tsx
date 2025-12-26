"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImpactMeter } from "@/components/impact-meter"
import { EvidenceDrawer } from "@/components/evidence-drawer"
import { DecisionLog } from "@/components/decision-log"
import { InteractiveDemo } from "@/components/interactive-demo"
import { ArrowLeft, ExternalLink, Award, TrendingUp } from "lucide-react"
import type { Project } from "@/lib/types"

interface ExhibitPageProps {
  project: Project
}

export function ExhibitPage({ project }: ExhibitPageProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2" aria-label="Back to gallery">
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="gap-2"
            aria-label={drawerOpen ? "Close evidence drawer" : "Open evidence and links drawer"}
          >
            {drawerOpen ? "Close" : "Evidence & Links"}
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-muted">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Title section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-light tracking-tight">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.subtitle}</p>
              </div>

              <p className="text-lg leading-relaxed text-foreground/90">{project.fullDescription}</p>
            </div>

            {/* Interactive Demo */}
            <InteractiveDemo projectId={project.id} />

            {/* Decision Log */}
            <DecisionLog decisions={project.decisionLog} />

            {/* User Quote */}
            <Card className="p-8 bg-muted/50 border-l-4 border-l-primary">
              <blockquote className="space-y-4">
                <p className="text-lg italic leading-relaxed">"{project.userQuote.text}"</p>
                <footer className="text-sm text-muted-foreground">— {project.userQuote.author}</footer>
              </blockquote>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Meter */}
            <Card className="p-6">
              <ImpactMeter impact={project.impact} />
            </Card>

            {/* Metrics */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <TrendingUp className="h-4 w-4 text-primary" />
                Key Metrics
              </div>
              <ul className="space-y-3">
                {project.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{metric}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Awards */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Award className="h-4 w-4 text-primary" />
                Recognition
              </div>
              <ul className="space-y-3">
                {project.awards.map((award, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{award}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Evidence Drawer */}
      <EvidenceDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        demoUrl={project.demoUrl}
        figmaUrl={project.figmaUrl}
        githubUrl={project.githubUrl}
      />
    </div>
  )
}
