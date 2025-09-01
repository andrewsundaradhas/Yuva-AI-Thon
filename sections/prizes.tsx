import { Trophy, ScrollText } from "lucide-react"
import SponsorCarousel from "@/components/sponsor-carousel"

export default function PrizesSection() {
  return (
    <section id="prizes" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <Trophy
              className="shrink-0"
              size={28}
              color="#ffd600"
              style={{ filter: "drop-shadow(0 0 8px rgba(255,214,0,0.5))" }}
            />
            <h2
              className="text-pretty text-3xl font-bold tracking-wide"
              style={{ color: "#ffd600", textShadow: "0 0 10px rgba(255,214,0,0.35)" }}
            >
              Exciting Prize Pool & Internships for Winners
            </h2>
            <ScrollText
              className="hidden shrink-0 md:block"
              size={24}
              color="#00e5ff"
              style={{ filter: "drop-shadow(0 0 8px rgba(0,229,255,0.5))" }}
            />
          </div>

          <p className="mt-4 text-base leading-relaxed text-white/90">
            Win big with a standout performance! Top teams unlock prizes, mentorship, and internship opportunities with
            our partners. Celebrate innovation with a burst of neon confetti at the finale showcase.
          </p>

          <p
            className="mt-3 inline-block rounded-full px-3 py-1 text-sm"
            style={{
              color: "#ffd600",
              border: "1px solid rgba(255,214,0,0.6)",
              boxShadow: "0 0 18px rgba(255,214,0,0.35), inset 0 0 8px rgba(255,214,0,0.2)",
              backdropFilter: "blur(8px)",
            }}
          >
            Prizes announced on stage. Bring your best!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/95">Our Sponsors & Partners</h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <SponsorCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
