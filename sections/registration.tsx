"use client"

import { Button } from "@/components/ui/button"

const GOOGLE_FORM_URL = "https://forms.gle/Epd6vNvYhANQiZ489"; // Replace with actual GForm URL when available

export default function RegistrationSection() {
  const openForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="register" className="relative px-0 py-20 sm:py-24">
      <div
        className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-12 text-center sm:px-10"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <h2
          className="text-pretty text-3xl font-bold tracking-wide"
          style={{ color: "#ffd600", textShadow: "0 0 10px rgba(255,214,0,0.35)" }}
        >
          Ready to Register?
        </h2>
        <p className="mt-4 text-base text-white/90">
          Secure your spot for YUVA AI-Thon at VIT Chennai on Sept 24–25, 2025.
        </p>
        <div className="mt-8">
          <Button
            onClick={openForm}
            className="group relative overflow-hidden rounded-xl border border-yellow-300/60 bg-white/5 px-6 py-3 text-base font-semibold"
            style={{
              color: "#ffd600",
              boxShadow: "0 0 24px rgba(255,214,0,0.35), inset 0 0 12px rgba(255,214,0,0.25)",
              backdropFilter: "blur(10px)",
              animation: "pulseGlow 2.4s ease-in-out infinite",
            }}
            aria-label="Open registration form"
          >
            <span className="relative z-10">Register Now</span>
            <span
              className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
              aria-hidden="true"
            />
          </Button>
        </div>
        <p className="mt-3 text-sm text-white/70">
          Registration closes a few days before the event. Watch this space for updates.
        </p>
      </div>
    </section>
  )
}
