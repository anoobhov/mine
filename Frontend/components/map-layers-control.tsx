"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ChevronDown } from "lucide-react"
import type { MapLayer } from "@/lib/types"

const initialLayers: MapLayer[] = [
  { id: "legal-boundaries", label: "Legal Lease Boundaries", enabled: true },
  { id: "confirmed-hotspots", label: "Confirmed Hotspots (Illegal)", enabled: true },
  { id: "potential-areas", label: "Potential Change Areas (Intelligent Gaze Filter)", enabled: false },
  { id: "district-boundaries", label: "District Boundaries", enabled: false },
]

export function MapLayersControl() {
  const [layers, setLayers] = useState<MapLayer[]>(initialLayers)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleLayer = (id: string) => {
    setLayers((prev) => prev.map((layer) => (layer.id === id ? { ...layer, enabled: !layer.enabled } : layer)))
  }

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full p-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
      >
        <h2 className="text-lg font-semibold text-foreground">Map Layers</h2>
        <ChevronDown
          className={`w-5 h-5 text-foreground transition-transform duration-300 ${isCollapsed ? "-rotate-180" : ""}`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isCollapsed ? "max-h-0 opacity-0" : "max-h-[400px] opacity-100"
        } overflow-hidden`}
      >
        <div className="px-4 pb-4 space-y-3">
          {layers.map((layer) => (
            <div key={layer.id} className="flex items-center justify-between">
              <Label htmlFor={layer.id} className="text-sm text-foreground cursor-pointer flex-1">
                {layer.label}
              </Label>
              <Switch id={layer.id} checked={layer.enabled} onCheckedChange={() => toggleLayer(layer.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
