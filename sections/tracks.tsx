"use client"

import { useEffect, useRef, useState } from "react"
import TrackCard from "@/components/track-card"
import FloatingParticles from "@/components/floating-particles"
import { Rocket, Car, Lightbulb, HeartPulse, Globe } from "lucide-react"

export default function TracksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    // Intersection Observer for entrance animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Parallax effect for cards
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
    
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id="tracks" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <FloatingParticles />
      
      <h2
        className={`text-pretty text-3xl font-bold tracking-wide transition-all duration-1000 ${
          isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
        }`}
        style={{ color: "#ffd600", textShadow: "0 0 10px rgba(255,214,0,0.35)" }}
      >
        Tracks
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Increased gap for better hover scaling animation space */}
        <div
          data-parallax="card"
          data-speed="8"
          className={`group relative overflow-hidden rounded-2xl border border-[#ffd600]/30 bg-white/[0.03] p-0 transition-all duration-300 will-change-transform ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-12'
          }`}
          style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08] animate-icon-pulse">
            <Rocket size={120} color="#ffd600" />
          </div>
          <div className="rounded-2xl p-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(255,214,0,0.3)]">
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
          className={`group relative overflow-hidden rounded-2xl border border-[#00e5ff]/30 bg-white/[0.03] p-0 transition-all duration-300 will-change-transform ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-12'
          }`}
          style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08] animate-icon-pulse">
            <Car size={120} color="#00e5ff" />
          </div>
          <div className="rounded-2xl p-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]">
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
          className={`group relative overflow-hidden rounded-2xl border border-[#ffd600]/30 bg-white/[0.03] p-0 transition-all duration-300 will-change-transform ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-12'
          }`}
          style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08] animate-icon-pulse">
            <Lightbulb size={120} color="#ffd600" />
          </div>
          <div className="rounded-2xl p-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(255,214,0,0.3)]">
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
          className={`group relative overflow-hidden rounded-2xl border border-[#00e5ff]/30 bg-white/[0.03] p-0 transition-all duration-300 will-change-transform ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-12'
          }`}
          style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08] animate-icon-pulse">
            <HeartPulse size={120} color="#00e5ff" />
          </div>
          <div className="rounded-2xl p-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]">
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
          className={`group relative overflow-hidden rounded-2xl border border-[#00e5ff]/30 bg-white/[0.03] p-0 transition-all duration-300 will-change-transform ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-12'
          }`}
          style={{ animationDelay: isVisible ? '0.5s' : '0s' }}
        >
          <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08] animate-icon-pulse">
            <Globe size={120} color="#00e5ff" />
          </div>
          <div className="rounded-2xl p-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]">
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
