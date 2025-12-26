export type ImpactLevel = "Low" | "Medium" | "High"

export interface ImpactMetric {
  level: ImpactLevel
  evidence: string
}

export interface Impact {
  people: ImpactMetric
  scale: ImpactMetric
  craft: ImpactMetric
}

export interface Decision {
  title: string
  description: string
  outcome: string
}

export interface UserQuote {
  text: string
  author: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  impact: Impact
  tags: string[]
  image: string
  demoUrl?: string
  figmaUrl?: string
  githubUrl?: string
  awards: string[]
  metrics: string[]
  userQuote: UserQuote
  decisionLog: Decision[]
}
