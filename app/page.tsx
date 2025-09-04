"use client"

import { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { GalaxyCanvas } from "@/components/galaxy-canvas"
import StarfieldCanvas from "@/components/starfield-canvas"
import Countdown from "@/components/countdown"
import AboutSection from "@/sections/about"
import TracksSection from "@/sections/tracks"
import PrizesSection from "@/sections/prizes"
import TimelineSection from "@/sections/timeline"
import VenueSection from "@/sections/venue"
import RegistrationSection from "@/sections/registration"
import ContactSection from "@/sections/contact"
import dynamic from 'next/dynamic';
import Footer from "@/sections/footer"

// Dynamically import FollowUs component to prevent circular dependencies
const FollowUs = dynamic(() => import('@/sections/follow-us'), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center">Loading social links...</div>
});
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Events from "@/sections/Events"

// Color system (5 total):
// 1) Primary: neon yellow #ffd600
// 2) Neutral: black #000000
// 3) Neutral: near-black #0a0a0a
// 4) Accent: cyan #00e5ff
// 5) Accent: orange #ff6a00

export default function HomePage() {
  // phases: "landing" (galaxy only), "core" (post-zoom hero), "site" (main content)
  const [phase, setPhase] = useState<"landing" | "core" | "site">("landing")
  const [entered, setEntered] = useState(false)
  const siteRef = useRef<HTMLDivElement>(null)

  const handleZoomComplete = () => {
    setPhase("core")
  }

  const handleContinue = () => {
    setPhase("site")
    setEntered(true)
  }

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Galaxy background */}
      {phase !== "site" && (
        <GalaxyCanvas mode="landing" onZoomComplete={handleZoomComplete} className="fixed inset-0 z-0" />
      )}

      {phase === "landing" && null}

      {/* Core overlay (post-zoom): reveal hero + Continue ONLY */}
      {phase === "core" && (
        <section className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 text-center">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <h2
              className={cn(
                "text-balance font-sans text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight",
                "animate-[flicker_2.2s_ease-in-out_infinite]",
                "px-2 sm:px-4"
              )}
              style={{ 
                color: "#ffd600", 
                textShadow: "0 0 18px rgba(255,214,0,0.6)",
                WebkitTextSizeAdjust: '100%',
                textSizeAdjust: '100%'
              }}
            >
              Yuva presents Yuva AI-Thon
            </h2>
            <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl px-2">
              National Hackathon, VIT Chennai
              <span className="block sm:inline">Sep 24–25, 2025</span>
            </p>
            <div className="mt-8 sm:mt-10 px-2">
              <Button
                onClick={handleContinue}
                className={cn(
                  "group relative overflow-hidden rounded-xl border-2 border-yellow-300/60",
                  "bg-white/5 px-6 py-3 sm:px-8 sm:py-3.5 text-base sm:text-lg font-semibold",
                  "active:scale-95 transform transition-transform duration-150 ease-out",
                  "touch-manipulation select-none"
                )}
                style={{
                  color: "#ffd600",
                  boxShadow: "0 0 24px rgba(255,214,0,0.35), inset 0 0 12px rgba(255,214,0,0.25)",
                  backdropFilter: "blur(10px)",
                  WebkitTapHighlightColor: 'rgba(255, 214, 0, 0.2)',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
                aria-label="Continue to main site"
              >
                <span className="relative z-10 block">Continue</span>
                <span
                  className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
          <style>
            {`
              @keyframes flicker {
                0%,
                19.999%,
                22%,
                62.999%,
                64%,
                64.999%,
                70%,
                100% {
                  opacity: 1;
                }
                20%,
                21.999%,
                63%,
                63.999%,
                65%,
                69.999% {
                  opacity: 0.6;
                }
              }
              @keyframes pulseGlow {
                0%,
                100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.8;
                }
              }
            `}
          </style>
        </section>
      )}

      {/* Main site */}
      {phase === "site" && (
        <>
          {/* Subtle animated starfield/nebula background; galaxy is unmounted */}
          <StarfieldCanvas opacity={0.35} />
          <Navbar />
          <div ref={siteRef} className="relative z-10">
            {/* Countdown BEFORE About */}
            <Countdown />
            <AboutSection />
            <TracksSection />
            <RegistrationSection />
            <TimelineSection />
            <PrizesSection />
            <VenueSection />
            <Events />
            <ContactSection />
            <FollowUs />
            <Footer />
          </div>
        </>
      )}
    </main>
  )
}
