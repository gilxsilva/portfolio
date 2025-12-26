import { notFound } from "next/navigation"
import { ExhibitPage } from "@/components/exhibit-page"
import { projects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return <ExhibitPage project={project} />
}
