"use client"

import { X, Download, Satellite, Cpu, Clock, Fingerprint, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface EvidenceModalProps {
  onClose: () => void
}

export function EvidenceModal({ onClose }: EvidenceModalProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-foreground">
              Evidence Locker: Case #JH-DHN-2025-09-30-001
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 mt-4">
          {/* Left Panel: SAR vs Optical */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              The Unblinking Eye - SAR vs Optical
            </h3>

            {/* Before Image - Optical */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Optical View (Before)</span>
                <span className="text-xs text-muted-foreground font-mono">15 Aug 2025</span>
              </div>
              <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden border border-border">
                <img
                  src="/aerial-view-of-green-forested-area-with-dense-vege.jpg"
                  alt="Optical view before"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-success/80 text-foreground px-2 py-1 rounded text-xs font-semibold">
                  OPTICAL
                </div>
              </div>
            </div>

            {/* After Image - SAR */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">SAR Coherence View (After)</span>
                <span className="text-xs text-muted-foreground font-mono">30 Sep 2025</span>
              </div>
              <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden border border-border">
                <img src="/grayscale-sar-radar-satellite-image-showing-ground.jpg" alt="SAR view after" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 bg-warning/80 text-foreground px-2 py-1 rounded text-xs font-semibold">
                  SAR COHERENCE
                </div>
                <div className="absolute bottom-2 right-2 bg-critical/80 text-foreground px-2 py-1 rounded text-xs font-semibold">
                  DISTURBANCE DETECTED
                </div>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                SAR (Synthetic Aperture Radar) penetrates cloud cover and darkness, revealing ground changes invisible
                to optical sensors. The dark patches indicate significant ground disturbance consistent with illegal
                mining operations.
              </p>
            </div>
          </div>

          {/* Right Panel: Verifiable Data Chain */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Verifiable Data Chain</h3>

            <div className="space-y-4">
              {/* Source Imagery */}
              <div className="flex gap-3 p-3 bg-secondary/50 rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Satellite className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">Source Imagery</p>
                  <p className="text-xs text-muted-foreground font-mono break-all">
                    Sentinel-1, ID: S1A_IW_GRDH_1SDV_20250930T001234_...
                  </p>
                </div>
              </div>

              {/* AI Model */}
              <div className="flex gap-3 p-3 bg-secondary/50 rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">AI Model</p>
                  <p className="text-xs text-muted-foreground font-mono">KhaanNetra-RF-v2.1</p>
                  <p className="text-xs text-muted-foreground mt-1">Confidence: 98.3%</p>
                </div>
              </div>

              {/* Timestamp */}
              <div className="flex gap-3 p-3 bg-secondary/50 rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">Timestamp</p>
                  <p className="text-xs text-muted-foreground font-mono">2025-09-30 11:15:02 UTC</p>
                </div>
              </div>

              {/* Data Hash */}
              <div className="flex gap-3 p-3 bg-secondary/50 rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Fingerprint className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">Data Hash (SHA-256)</p>
                  <p className="text-xs text-muted-foreground font-mono break-all">
                    a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex gap-3 p-3 bg-success/10 rounded-lg border border-success/30">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-success" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-success">Status: Verified & Sealed</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    All data cryptographically verified and tamper-proof
                  </p>
                </div>
              </div>
            </div>

            {/* Analysis Summary */}
            <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Analysis Summary</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-critical">•</span>
                  <span>Detected area: 2.5 hectares of ground disturbance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-critical">•</span>
                  <span>Location: Outside legal mining boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-critical">•</span>
                  <span>Change detection: Significant coherence loss indicating excavation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-critical">•</span>
                  <span>Classification: High confidence illegal mining activity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="h-4 w-4 mr-2" />
            Generate & Download PDF Report
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
