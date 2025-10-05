"use client"

import { useState } from "react"
import { EvidenceModal } from "@/components/evidence-modal"

interface HotspotArea {
  id: string
  name: string
  coordinates: { lat: number; lng: number }[]
  type: "legal" | "illegal" | "potential"
}

const mockHotspots: HotspotArea[] = [
  {
    id: "1",
    name: "Jharia Coalfields",
    coordinates: [
      { lat: 23.75, lng: 86.4 },
      { lat: 23.75, lng: 86.45 },
      { lat: 23.72, lng: 86.45 },
      { lat: 23.72, lng: 86.4 },
    ],
    type: "illegal",
  },
  {
    id: "2",
    name: "Legal Mining Area A",
    coordinates: [
      { lat: 23.8, lng: 86.35 },
      { lat: 23.8, lng: 86.38 },
      { lat: 23.78, lng: 86.38 },
      { lat: 23.78, lng: 86.35 },
    ],
    type: "legal",
  },
  {
    id: "3",
    name: "Potential Change Area",
    coordinates: [
      { lat: 23.7, lng: 86.5 },
      { lat: 23.7, lng: 86.55 },
      { lat: 23.65, lng: 86.55 },
      { lat: 23.65, lng: 86.5 },
    ],
    type: "potential",
  },
]

export function MapView() {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null)
  const [showEvidence, setShowEvidence] = useState(false)

  const handleHotspotClick = (id: string) => {
    setSelectedHotspot(id)
    if (mockHotspots.find((h) => h.id === id)?.type === "illegal") {
      setShowEvidence(true)
    }
  }

  return (
    <div className="flex-1 relative bg-[#0a0e1a]">
      {/* Map Container - Using a dark styled map representation */}
      <div className="absolute inset-0">
        {/* Simulated map background with grid */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-muted"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Map Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl max-h-4xl">
            {/* Simulated map areas */}
            <svg viewBox="0 0 800 600" className="w-full h-full">
              {/* Legal boundaries - dashed blue */}
              <polygon
                points="200,150 300,150 300,220 200,220"
                fill="none"
                stroke="oklch(0.6 0.15 240)"
                strokeWidth="2"
                strokeDasharray="8 4"
                className="opacity-70"
              />

              {/* Potential change area - faint yellow */}
              <polygon
                points="450,300 600,300 600,450 450,450"
                fill="oklch(0.75 0.15 85 / 0.15)"
                stroke="oklch(0.75 0.15 85 / 0.4)"
                strokeWidth="2"
                className="cursor-pointer hover:fill-[oklch(0.75_0.15_85_/_0.25)] transition-all"
                onClick={() => handleHotspotClick("3")}
              />

              {/* Illegal mining area - solid red with pulsating glow */}
              <g className="cursor-pointer" onClick={() => handleHotspotClick("1")}>
                <polygon
                  points="500,350 560,350 560,410 500,410"
                  fill="oklch(0.55 0.22 15 / 0.3)"
                  stroke="oklch(0.55 0.22 15)"
                  strokeWidth="3"
                  className="pulse-glow"
                />
                <circle cx="530" cy="380" r="4" fill="oklch(0.55 0.22 15)" className="animate-ping" />
              </g>

              {/* Another illegal area */}
              <g className="cursor-pointer" onClick={() => handleHotspotClick("1")}>
                <polygon
                  points="350,200 400,200 400,250 350,250"
                  fill="oklch(0.55 0.22 15 / 0.3)"
                  stroke="oklch(0.55 0.22 15)"
                  strokeWidth="3"
                  className="pulse-glow"
                />
                <circle cx="375" cy="225" r="4" fill="oklch(0.55 0.22 15)" className="animate-ping" />
              </g>

              {/* Map labels */}
              <text x="530" y="440" fill="oklch(0.98 0 0)" fontSize="12" textAnchor="middle" className="font-mono">
                Jharia Coalfields
              </text>
              <text x="250" y="280" fill="oklch(0.6 0.15 240)" fontSize="12" textAnchor="middle" className="font-mono">
                Legal Area A
              </text>
            </svg>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
          <button className="w-10 h-10 bg-card border border-border rounded-md flex items-center justify-center hover:bg-accent transition-colors">
            <span className="text-lg font-bold">+</span>
          </button>
          <button className="w-10 h-10 bg-card border border-border rounded-md flex items-center justify-center hover:bg-accent transition-colors">
            <span className="text-lg font-bold">−</span>
          </button>
        </div>

        {/* Legend */}
        <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 space-y-2">
          <h3 className="text-sm font-semibold text-foreground mb-3">Legend</h3>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-dashed" style={{ borderColor: "oklch(0.6 0.15 240)" }} />
            <span className="text-xs text-muted-foreground">Legal Boundaries</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-critical border-2 border-critical" />
            <span className="text-xs text-muted-foreground">Illegal Activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-warning/30 border-2 border-warning" />
            <span className="text-xs text-muted-foreground">Potential Change</span>
          </div>
        </div>
      </div>

      {/* Evidence Modal */}
      {showEvidence && <EvidenceModal onClose={() => setShowEvidence(false)} />}
    </div>
  )
}
