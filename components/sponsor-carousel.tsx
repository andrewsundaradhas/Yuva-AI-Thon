"use client"

import { useMemo } from "react"

export default function SponsorCarousel() {
  const logos = useMemo(
    () => [
      { id: "nk", alt: "NK Interior Designs Pvt. Ltd.", src: "/sponsors/nk-interior.jpg" },
      { id: "bianco", alt: "Bianco Infra", src: "/sponsors/bianco-infra.jpg" },
      { id: "yi", alt: "Young Indians (Yi)", src: "/logos/yi.png" },
      { id: "ethindia", alt: "ETHINDIA LOGO", src: "/sponsors/ethindia-logo.png" },
      { id: "devfolio", alt: "DEVFOLIO LOGO", src: "/sponsors/devfolio-logo.png" },
    ],
    [],
  )

  // duplicate list for seamless, infinite loop
  const track = [...logos, ...logos]

  return (
    <div className="relative overflow-hidden" aria-label="Sponsor logos auto-scrolling">
      {/* use global .marquee keyframes from globals.css for the belt */}
      <div className="marquee flex min-w-[200%] items-center gap-12 md:gap-16">
        {track.map((item, i) => (
          <img
            key={`${item.id}-${i}`}
            src={item.src || "/placeholder.svg"}
            alt={item.alt}
            decoding="async"
            loading="lazy"
            className="h-28 w-auto md:h-32 object-contain opacity-100 [filter:drop-shadow(0_0_10px_rgba(255,214,0,0.18))]"
          />
        ))}
      </div>
    </div>
  )
}
