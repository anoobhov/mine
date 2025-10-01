export type AlertType = "critical" | "verification" | "verified"

export interface Alert {
  id: string
  type: AlertType
  title: string
  subtitle: string
  details?: string
  timestamp: string
  area?: string
  confidence?: number
}

export interface MapLayer {
  id: string
  label: string
  enabled: boolean
}

export interface EvidenceData {
  caseId: string
  opticalImage: string
  sarImage: string
  opticalDate: string
  sarDate: string
  source: string
  aiModel: string
  timestamp: string
  dataHash: string
  status: string
}
