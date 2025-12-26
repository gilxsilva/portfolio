"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, FileText, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  const [mode, setMode] = useState<"recruiter" | "story" | null>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-[1.1]">
            Gil Silva
          </h1>
          <p className="text-sm md:text-base text-muted-foreground tracking-wider uppercase">
            Stanford Symbolic Systems & HCI · 2× Amazon SDE Intern
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-balance leading-relaxed max-w-4xl mx-auto">
            I build systems that make people feel more capable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            onClick={() => {
              setMode("recruiter")
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300"
          >
            <span className="flex flex-col items-center gap-1">
              <span className="font-medium">Recruiter Mode</span>
              <span className="text-xs opacity-75">Metrics, stack, outcomes, links</span>
            </span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              setMode("story")
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group rounded-full px-8 py-6 text-lg border-2 hover:bg-secondary/50 transition-all duration-300"
          >
            <span className="flex flex-col items-center gap-1">
              <span className="font-medium">Story Mode</span>
              <span className="text-xs opacity-75">Narrative, design decisions, impact</span>
            </span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </a>
          <a
            href="mailto:contact@gilsilva.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/gilsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/gilsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground/70">↓ Explore</p>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
