import { notFound } from "next/navigation"
import { ExhibitPage } from "@/components/exhibit-page"
import { projects } from "@/lib/projects-data"
import { use } from "react"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <ExhibitPage project={project} />
}
