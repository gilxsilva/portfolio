"use client"

export function WipRibbon() {
  return (
    <div className="fixed top-0 right-0 z-50 pointer-events-none">
      <div className="relative w-40 h-40 overflow-hidden">
        <div className="absolute top-8 -right-12 w-48 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 rotate-45 shadow-lg pointer-events-auto">
          <span className="text-xs font-semibold tracking-wider uppercase">Work in Progress</span>
        </div>
      </div>
    </div>
  )
}
