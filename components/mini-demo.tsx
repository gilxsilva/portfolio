"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

interface MiniDemoProps {
  projectId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MiniDemo({ projectId, open, onOpenChange }: MiniDemoProps) {
  const [energy, setEnergy] = useState([50])

  // Simple demo content based on project
  const getDemoContent = () => {
    switch (projectId) {
      case "kyro":
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">How's your energy right now?</label>
              <Slider value={energy} onValueChange={setEnergy} max={100} step={1} />
              <p className="text-xs text-muted-foreground text-center">
                {energy[0] < 30 ? "Low energy" : energy[0] < 70 ? "Moderate energy" : "High energy"}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted space-y-2">
              <p className="text-sm font-medium">Suggested schedule adjustments:</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                {energy[0] < 30 ? (
                  <>
                    <p>• Move team meeting to tomorrow morning</p>
                    <p>• Keep focused work time as-is</p>
                    <p>• Reschedule creative brainstorm for after lunch</p>
                  </>
                ) : (
                  <>
                    <p>• Perfect time for deep work</p>
                    <p>• Schedule looks good as-is</p>
                    <p>• Consider tackling that complex task now</p>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      case "dayo":
        return (
          <div className="space-y-4">
            <div className="p-4 rounded-lg border-2 border-dashed border-border text-center">
              <p className="text-sm text-muted-foreground">Upload syllabus (PDF, Word, or image)</p>
              <Button size="sm" className="mt-2">
                Choose File
              </Button>
            </div>
            <div className="p-4 rounded-lg bg-muted space-y-2">
              <p className="text-sm font-medium">Preview: Detected 12 assignments</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>✓ Problem Set 1 - Jan 15</p>
                <p>✓ Midterm Exam - Feb 12</p>
                <p>✓ Final Project - Mar 20</p>
                <p className="text-primary">+ 9 more events</p>
              </div>
            </div>
          </div>
        )
      default:
        return <p className="text-muted-foreground">Interactive demo coming soon...</p>
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>10-Second Demo</DialogTitle>
        </DialogHeader>
        <div className="py-4">{getDemoContent()}</div>
      </DialogContent>
    </Dialog>
  )
}
