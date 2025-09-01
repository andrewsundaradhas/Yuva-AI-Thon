"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import ConfettiCanvas from "./confetti-canvas"

const EVENT_START_ISO = "2025-09-24T00:00:00"

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
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="countdown-title" className="text-2xl md:text-3xl font-semibold text-[#FFD600] text-balance mb-6">
          Countdown to YUVA AI-Thon
        </h2>
        <div
          className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 overflow-hidden`}
          style={{ boxShadow: "0 0 0 1px rgba(255,214,0,0.1), 0 8px 30px rgba(0,0,0,0.45)" }}
          role="timer"
          aria-live="polite"
          aria-atomic="false"
          aria-label={ariaLabel}
        >
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl ${celebrate ? "animate-[pulseGlow_1.2s_ease-in-out_infinite]" : ""}`}
            style={{
              boxShadow: celebrate ? "0 0 0 2px rgba(255,214,0,0.6), 0 0 40px rgba(255,214,0,0.45)" : undefined,
            }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Days", value: t.days },
              { label: "Hours", value: t.hours },
              { label: "Minutes", value: t.mins },
              { label: "Seconds", value: t.secs },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/10 py-6 md:py-8 hover:shadow-[0_0_24px_rgba(255,214,0,.2)] transition-shadow"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FFD600] tabular-nums">
                  {pad(item.value)}
                </div>
                <div className="mt-2 text-sm md:text-base text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70 text-pretty">Event starts on September 24, 2025 at 00:00 (local time).</p>
          {celebrate && <ConfettiCanvas />}
          <audio ref={audioRef} src="/celebrate.mp3" preload="none" />
        </div>
      </div>
    </section>
  )
}

export { Countdown }
export default Countdown
