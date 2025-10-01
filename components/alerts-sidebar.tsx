"use client"

import { useState } from "react"
import { AlertCard } from "@/components/alert-card"
import { MapLayersControl } from "@/components/map-layers-control"
import { TimeMachine } from "@/components/time-machine"
import type { Alert } from "@/lib/types"

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "critical",
    title: "Illegal Activity Detected",
    subtitle: "Jharia Coalfields, Dhanbad",
    details: "Area: 2.5 Hectares | Confidence: 98%",
    timestamp: "Just now",
  },
  {
    id: "2",
    type: "verification",
    title: "Verification Needed: The Living Intelligence",
    subtitle: "Near Bokaro Steel City",
    timestamp: "5 minutes ago",
  },
  {
    id: "3",
    type: "verified",
    title: "Change Verified: Non-Mining",
    subtitle: "Seasonal agricultural change",
    timestamp: "2 hours ago",
  },
  {
    id: "4",
    type: "critical",
    title: "Illegal Activity Detected",
    subtitle: "Raniganj Coalfield, West Bengal",
    details: "Area: 1.8 Hectares | Confidence: 95%",
    timestamp: "3 hours ago",
  },
]

export function AlertsSidebar() {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null)

  return (
    <aside className="w-[30%] min-w-[380px] max-w-[480px] flex flex-col border-r border-border glass-panel overflow-hidden">
      {/* Live Alerts Feed */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Live Alerts Feed</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {mockAlerts.map((alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              isSelected={selectedAlert === alert.id}
              onClick={() => setSelectedAlert(alert.id)}
            />
          ))}
        </div>
      </div>

      {/* Map Layers Control */}
      <div className="border-t border-border relative z-20">
        <MapLayersControl />
      </div>

      {/* Time Machine */}
      <div className="border-t border-border relative z-20">
        <TimeMachine />
      </div>
    </aside>
  )
}
