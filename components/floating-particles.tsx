"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  animationDelay: number
  animationDuration: number
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Check for reduced motion preference
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const colors = ["#ffd600", "#00e5ff", "#ff6a00"]
    const newParticles: Particle[] = []

    // Generate 12 particles
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2, // 2-6px
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: Math.random() * 8, // 0-8s delay
        animationDuration: Math.random() * 4 + 6, // 6-10s duration
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: 0.3,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
            filter: `blur(${particle.size > 4 ? 1 : 0}px)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
          }}
        />
      ))}
    </div>
  )
}
