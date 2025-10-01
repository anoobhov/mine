"use client"

import { Bell, Settings, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          <SatelliteEyeLogo />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-foreground">KHAAN-NETRA 2.0</h1>
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by District, Coordinates, or Lease ID..."
            className="w-full pl-10 bg-secondary border-border"
          />
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-critical animate-pulse" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
          <AvatarFallback>KN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

function SatelliteEyeLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Eye */}
      <ellipse cx="20" cy="20" rx="12" ry="8" stroke="currentColor" strokeWidth="1.5" className="text-success" />
      <circle cx="20" cy="20" r="4" fill="currentColor" className="text-success" />
      <circle cx="20" cy="20" r="2" fill="currentColor" className="text-foreground" />

      {/* Satellite orbit */}
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        className="text-muted-foreground opacity-50"
      />

      {/* Satellite */}
      <g transform="translate(32, 12)">
        <rect x="-2" y="-1.5" width="4" height="3" fill="currentColor" className="text-warning" />
        <line x1="-4" y1="0" x2="-2" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-warning" />
        <line x1="2" y1="0" x2="4" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-warning" />
      </g>
    </svg>
  )
}
