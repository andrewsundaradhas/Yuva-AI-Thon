"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      cardRef.current?.classList.remove("opacity-0", "translate-y-3")
      return
    }
    const el = cardRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-3")
          el.classList.add("opacity-100", "translate-y-0")
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" className="relative mx-auto max-w-4xl px-4 py-20 sm:py-24">
      {/* Cosmic particles background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#00e5ff]/70 blur-[1px] animate-float-slow" />
        <div className="absolute right-[12%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#ff6a00]/70 blur-[1px] animate-float-slower" />
        <div className="absolute left-[35%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-white/60 blur-[1px] animate-float-slower" />
        <div className="absolute right-[28%] bottom-[30%] h-2 w-2 rounded-full bg-[#ffd600]/70 blur-[1px] animate-float-slow" />
      </div>

      <div
        ref={cardRef}
        className={cn(
          "rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10",
          "opacity-0 translate-y-3 transition-all duration-700 ease-out",
        )}
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(255,255,255,0.04), inset 0 0 24px rgba(255,255,255,0.03)",
        }}
      >
        <h2
          className="text-pretty text-3xl font-bold tracking-wide"
          style={{ color: "#ffd600", textShadow: "0 0 10px rgba(255,214,0,0.35)" }}
        >
          About the Event
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/90">
          YUVA AI-Thon is a high-energy 24-hour hackathon happening on September 24–25, 2025 at VIT Chennai. It brings
          together 500+ innovators to ideate, prototype, and present bold, real-world-impact projects.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/85">
          Hosted by YUVA and Yi with SWC, expect dynamic mentoring, lightning workshops, and a galaxy of opportunities —
          culminating in exciting prizes and internship pathways for standout teams.
        </p>
      </div>
    </section>
  )
}
