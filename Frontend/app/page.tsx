import { DashboardHeader } from "@/components/dashboard-header"
import { AlertsSidebar } from "@/components/alerts-sidebar"
import { MapView } from "@/components/map-view"

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <AlertsSidebar />
        <MapView />
      </div>
    </div>
  )
}
