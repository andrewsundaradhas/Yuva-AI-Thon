"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { useState, useRef } from "react"

export default function TrackCard({
  title,
  description,
  icon,
  glowColor = "#00e5ff",
}: {
  title: string
  description: string
  icon: ReactNode
  glowColor?: string // hex
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    const tiltX = (y / rect.height) * -10 // Reduced intensity
    const tiltY = (x / rect.width) * 10
    
    cardRef.current.style.setProperty('--tilt-x', `${tiltX}deg`)
    cardRef.current.style.setProperty('--tilt-y', `${tiltY}deg`)
    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    setIsHovered(false)
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 animate-magnetic-tilt",
        "hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer hover:z-10",
      )}
      style={{
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
        backdropFilter: "blur(10px)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 28px ${hexToRgba(glowColor, 0.35)} inset`,
        }}
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <div
          className="grid h-12 w-12 place-items-center rounded-xl"
          style={{
            background: "rgba(255,255,255,0.05)",
            boxShadow: `0 0 18px ${hexToRgba(glowColor, 0.45)}`,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          aria-hidden="true"
        >
          <div className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold" style={{ color: "#ffd600" }}>
          {title}
        </h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/85">{description}</p>

      {/* Ripple underline on hover */}
      <div
        className="mt-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </div>
  )
}

function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace("#", "")
  const bigint = Number.parseInt(h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
