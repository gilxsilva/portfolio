import { Badge } from "@/components/ui/badge"

type ImpactLevel = "Low" | "Medium" | "High"

interface ImpactMeterProps {
  impact: {
    people: { level: ImpactLevel; evidence: string }
    scale: { level: ImpactLevel; evidence: string }
    craft: { level: ImpactLevel; evidence: string }
  }
  compact?: boolean
}

export function ImpactMeter({ impact, compact = false }: ImpactMeterProps) {
  const getLevelWidth = (level: ImpactLevel) => {
    switch (level) {
      case "Low":
        return "33%"
      case "Medium":
        return "66%"
      case "High":
        return "100%"
    }
  }

  const getLevelColor = (level: ImpactLevel) => {
    switch (level) {
      case "Low":
        return "bg-muted-foreground/40"
      case "Medium":
        return "bg-accent/80"
      case "High":
        return "bg-primary"
    }
  }

  const metrics = [
    {
      label: "People",
      level: impact.people.level,
      evidence: impact.people.evidence,
      color: getLevelColor(impact.people.level),
      width: getLevelWidth(impact.people.level),
    },
    {
      label: "Scale",
      level: impact.scale.level,
      evidence: impact.scale.evidence,
      color: getLevelColor(impact.scale.level),
      width: getLevelWidth(impact.scale.level),
    },
    {
      label: "Craft",
      level: impact.craft.level,
      evidence: impact.craft.evidence,
      color: getLevelColor(impact.craft.level),
      width: getLevelWidth(impact.craft.level),
    },
  ]

  return (
    <div className={`space-y-${compact ? "3" : "4"}`}>
      {!compact && <p className="text-sm font-medium text-muted-foreground">Impact</p>}
      <div className="space-y-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground font-medium">{metric.label}</span>
              <span className="text-foreground font-medium">{metric.level}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: metric.width }}
              />
            </div>
            <Badge variant="outline" className="text-xs font-normal">
              {metric.evidence}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
