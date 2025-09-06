"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import ConfettiCanvas from "./confetti-canvas"
import LetterGlitch from "./LetterGlitch"

const EVENT_START_ISO = "2025-09-24T13:00:00"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

function Countdown({ onComplete, enableSound = false }: { onComplete?: () => void; enableSound?: boolean }) {
  const [msLeft, setMsLeft] = useState<number>(() => {
    const target = new Date(EVENT_START_ISO).getTime()
    return Math.max(0, target - Date.now())
  })
  const [celebrate, setCelebrate] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      const target = new Date(EVENT_START_ISO).getTime()
      const left = target - Date.now()
      setMsLeft(Math.max(0, left))
      if (left <= 0 && !firedRef.current) {
        firedRef.current = true
        setCelebrate(true)
        if (onComplete) onComplete()
        if (enableSound && audioRef.current) {
          audioRef.current.play().catch(() => {})
        }
        setTimeout(() => setCelebrate(false), 4200)
      }
    }, 1000)
    return () => clearInterval(id)
  }, [enableSound, onComplete])

  const t = useMemo(() => {
    const totalSec = Math.floor(msLeft / 1000)
    const days = Math.floor(totalSec / 86400)
    const hours = Math.floor((totalSec % 86400) / 3600)
    const mins = Math.floor((totalSec % 3600) / 60)
    const secs = totalSec % 60
    return { days, hours, mins, secs }
  }, [msLeft])

  const ariaLabel = useMemo(
    () => `${t.days} days, ${t.hours} hours, ${t.mins} minutes, and ${t.secs} seconds until the event starts.`,
    [t.days, t.hours, t.mins, t.secs],
  )

  return (
    <section id="countdown" aria-labelledby="countdown-title" className="relative py-16 md:py-24">
      {/* LetterGlitch background - only for countdown section */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#1a1a2e', '#16213e', '#0f0f23']}
          glitchSpeed={75}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 
            id="countdown-title" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#FFD600] via-[#FFA500] to-[#FFD600] bg-clip-text text-balance mb-4 animate-gradient-x"
          >
            Countdown to YUVA AI-Thon
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-4">
            September 24, 2025 • 1:00 PM
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FFD600] to-[#FFA500] rounded-full mb-3"></div>
        </div>

        <div
          className={`relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl p-8 md:p-12 overflow-hidden transform hover:scale-[1.01] transition-all duration-300`}
          style={{ 
            boxShadow: "0 0 0 1px rgba(255,214,0,0.1), 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)",
          }}
          role="timer"
          aria-live="polite"
          aria-atomic="false"
          aria-label={ariaLabel}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFD600] via-[#FFA500] to-[#FFD600] opacity-20 animate-gradient-x"></div>
          
          {/* Glow effect */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500 ${
              celebrate ? "animate-[pulseGlow_1.2s_ease-in-out_infinite] opacity-100" : "opacity-0"
            }`}
            style={{
              boxShadow: celebrate ? "0 0 60px 10px rgba(255,214,0,0.3), inset 0 0 30px rgba(255,214,0,0.3)" : undefined,
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Days", value: t.days },
              { label: "Hours", value: t.hours },
              { label: "Minutes", value: t.mins },
              { label: "Seconds", value: t.secs },
            ].map((item, index) => (
              <div
                key={item.label}
                className="group relative flex flex-col items-center justify-center"
                style={{
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-lg transform transition-all duration-300 group-hover:scale-105 group-hover:border-[#FFD600]/40"></div>
                
                {/* Content */}
                <div className="relative p-6 md:p-8 w-full h-full flex flex-col items-center justify-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-gradient-to-b from-[#FFD600] to-[#FFA500] bg-clip-text tabular-nums transform transition-transform duration-300 group-hover:scale-110">
                    {pad(item.value)}
                  </div>
                  <div className="mt-3 text-sm md:text-base font-medium text-white/90 tracking-wide uppercase transition-colors duration-300 group-hover:text-[#FFD600]">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 text-center">
            <p className="text-lg text-white/80 font-medium tracking-wide">
              Event starts on{" "}
              <span className="text-[#FFD600] font-semibold">September 24, 2025</span>
              {" "}at{" "}
              <span className="text-[#FFD600] font-semibold">1:00 PM</span>
              {" "}(local time)
            </p>
          </div>

          {celebrate && <ConfettiCanvas />}
          <audio ref={audioRef} src="/celebrate.mp3" preload="none" />

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFD600] rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFA500] rounded-full opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}

export { Countdown }
export default Countdown
