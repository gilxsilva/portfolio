"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react"

interface Decision {
  title: string
  description: string
  outcome: string
}

interface DecisionLogProps {
  decisions: Decision[]
}

export function DecisionLog({ decisions }: DecisionLogProps) {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-light">Decision Log</h2>
      </div>
      <p className="text-muted-foreground">Key design and technical decisions that shaped this project</p>

      <div className="space-y-3">
        {decisions.map((decision, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:border-primary/50">
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full p-6 text-left flex items-start justify-between gap-4"
              aria-expanded={expanded === index}
              aria-label={`${expanded === index ? "Collapse" : "Expand"} decision: ${decision.title}`}
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="font-medium">{decision.title}</h3>
                </div>
              </div>
              {expanded === index ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>

            {expanded === index && (
              <div className="px-6 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                <div className="pl-11 space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Context</p>
                    <p className="text-sm leading-relaxed">{decision.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Outcome</p>
                    <p className="text-sm leading-relaxed text-primary/90">{decision.outcome}</p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
