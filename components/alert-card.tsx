"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Alert } from "@/lib/types"
import { cn } from "@/lib/utils"

interface AlertCardProps {
  alert: Alert
  isSelected: boolean
  onClick: () => void
}

export function AlertCard({ alert, isSelected, onClick }: AlertCardProps) {
  const glowClass =
    alert.type === "critical" ? "glow-critical" : alert.type === "verification" ? "glow-warning" : "glow-success"

  const borderColorClass =
    alert.type === "critical"
      ? "border-l-critical"
      : alert.type === "verification"
        ? "border-l-warning"
        : "border-l-success"

  return (
    <Card
      className={cn(
        "p-4 border-l-4 cursor-pointer transition-all hover:bg-accent/50",
        borderColorClass,
        glowClass,
        isSelected && "bg-accent/30 ring-2 ring-ring",
      )}
      onClick={onClick}
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-foreground leading-tight">{alert.title}</h3>
        <p className="text-sm text-muted-foreground">{alert.subtitle}</p>
        {alert.details && <p className="text-xs text-muted-foreground font-mono">{alert.details}</p>}

        {alert.type === "verification" && (
          <div className="pt-2 space-y-2">
            <p className="text-xs text-foreground">Is this mining activity?</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1 bg-success hover:bg-success/80 text-foreground"
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle verification
                }}
              >
                <Check className="h-4 w-4 mr-1" />
                Yes (Mining)
              </Button>
              <Button
                size="sm"
                variant="destructive"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle rejection
                }}
              >
                <X className="h-4 w-4 mr-1" />
                No (Not Mining)
              </Button>
            </div>
          </div>
        )}

        <p className="text-xs text-muted-foreground pt-1">{alert.timestamp}</p>
      </div>
    </Card>
  )
}
