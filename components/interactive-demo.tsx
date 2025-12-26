"use client"

import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

interface InteractiveDemoProps {
  projectId: string
}

export function InteractiveDemo({ projectId }: InteractiveDemoProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-light">Interactive Demo</h2>

      <Card
        className="relative aspect-video bg-muted overflow-hidden group cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Play interactive demo for this project"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            // Demo interaction would go here
          }
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-primary ml-1" />
            </div>
            <p className="text-sm text-muted-foreground">Click to explore interactive prototype</p>
          </div>
        </div>

        {/* Placeholder for actual demo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </Card>

      <p className="text-sm text-muted-foreground">
        This is a lightweight simulation showcasing key interactions and user flows. Full product demos available upon
        request.
      </p>
    </div>
  )
}
