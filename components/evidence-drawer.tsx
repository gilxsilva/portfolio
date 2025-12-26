"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ExternalLink, Video } from "lucide-react"

interface EvidenceDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  demoUrl?: string
  figmaUrl?: string
  githubUrl?: string
}

export function EvidenceDrawer({ open, onOpenChange, demoUrl, figmaUrl, githubUrl }: EvidenceDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Evidence & Resources</SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Project Links</h3>

            {demoUrl && (
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Video className="h-4 w-4" />
                  Demo Video
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
            )}

            {figmaUrl && (
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 24C11.314 24 14 21.314 14 18V12H8C4.686 12 2 14.686 2 18C2 21.314 4.686 24 8 24Z" fill="currentColor"/>
                    <path d="M2 12C2 8.686 4.686 6 8 6H14V18H8C4.686 18 2 15.314 2 12Z" fill="currentColor"/>
                    <path d="M2 6C2 2.686 4.686 0 8 0H14V12H8C4.686 12 2 9.314 2 6Z" fill="currentColor"/>
                    <path d="M14 0H20C23.314 0 26 2.686 26 6C26 9.314 23.314 12 20 12H14V0Z" fill="currentColor"/>
                    <path d="M26 18C26 21.314 23.314 24 20 24C16.686 24 14 21.314 14 18C14 14.686 16.686 12 20 12C23.314 12 26 14.686 26 18Z" fill="currentColor"/>
                  </svg>
                  Figma Designs
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
            )}

            {githubUrl && (
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub Repository
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
            )}
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              All project materials are available for review. Feel free to explore the design process, technical
              implementation, and user research documentation.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
