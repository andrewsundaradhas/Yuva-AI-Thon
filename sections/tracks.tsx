"use client"

import { useEffect } from "react"
import TrackCard from "@/components/track-card"
import { Rocket, Car, Lightbulb, HeartPulse, Globe } from "lucide-react"

export default function TracksSection() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax='card']"))
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const vh = window.innerHeight
        for (const el of els) {
          const rect = el.getBoundingClientRect()
          const center = rect.top + rect.height / 2
          const dist = (center - vh / 2) / vh // -0.5..0.5
          const speed = Number(el.dataset.speed || "8")
          el.style.transform = `translateY(${-(dist * speed)}px)`
        }
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="tracks" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <h2
        className="text-pretty text-3xl font-bold tracking-wide"
        style={{ color: "#ffd600", textShadow: "0 0 10px rgba(255,214,0,0.35)" }}
      >
        Tracks
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-parallax="card"
          data-speed="8"
          className="group relative overflow-hidden rounded-2xl border border-[#ffd600]/30 bg-white/[0.03] p-0 transition-transform duration-300 will-change-transform"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08]">
            <Rocket size={120} color="#ffd600" />
          </div>
          <div className="rounded-2xl p-0 transition-shadow duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(255,214,0,0.2)]">
            <TrackCard
              title="Next-Gen Entrepreneurship"
              description="Build ventures that scale—tools, platforms, and ideas that power tomorrow’s founders."
              icon={<Rocket size={28} color="#ff6a00" />}
              glowColor="#ff6a00"
            />
          </div>
        </div>

        <div
          data-parallax="card"
          data-speed="6"
          className="group relative overflow-hidden rounded-2xl border border-[#00e5ff]/30 bg-white/[0.03] p-0 transition-transform duration-300 will-change-transform"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08]">
            <Car size={120} color="#00e5ff" />
          </div>
          <div className="rounded-2xl p-0 transition-shadow duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.22)]">
            <TrackCard
              title="Safe Streets & Smarter Mobility"
              description="Design safer transit, smarter routing, and resilient urban systems."
              icon={<Car size={28} color="#00e5ff" />}
              glowColor="#00e5ff"
            />
          </div>
        </div>

        <div
          data-parallax="card"
          data-speed="7"
          className="group relative overflow-hidden rounded-2xl border border-[#ffd600]/30 bg-white/[0.03] p-0 transition-transform duration-300 will-change-transform"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08]">
            <Lightbulb size={120} color="#ffd600" />
          </div>
          <div className="rounded-2xl p-0 transition-shadow duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(255,214,0,0.2)]">
            <TrackCard
              title="Innovation for All"
              description="Inclusive tech for education, accessibility, and opportunity—impact at scale."
              icon={<Lightbulb size={28} color="#ffd600" />}
              glowColor="#ffd600"
            />
          </div>
        </div>

        <div
          data-parallax="card"
          data-speed="9"
          className="group relative overflow-hidden rounded-2xl border border-[#00e5ff]/30 bg-white/[0.03] p-0 transition-transform duration-300 will-change-transform"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08]">
            <HeartPulse size={120} color="#00e5ff" />
          </div>
          <div className="rounded-2xl p-0 transition-shadow duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.22)]">
            <TrackCard
              title="HealthTech & Wellbeing"
              description="AI triage, wearables, and wellness—solutions that improve quality of life."
              icon={<HeartPulse size={28} color="#00e5ff" />}
              glowColor="#00e5ff"
            />
          </div>
        </div>

        <div
          data-parallax="card"
          data-speed="5"
          className="group relative overflow-hidden rounded-2xl border border-[#00e5ff]/30 bg-white/[0.03] p-0 transition-transform duration-300 will-change-transform"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08]">
            <Globe size={120} color="#00e5ff" />
          </div>
          <div className="rounded-2xl p-0 transition-shadow duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.22)]">
            <TrackCard
              title="Tech for Climate Action"
              description="Mitigate, adapt, and protect with data-driven sustainability solutions."
              icon={<Globe size={28} color="#00e5ff" />}
              glowColor="#00e5ff"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
