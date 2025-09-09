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
  const track = [...logos]

  return (
    <div className="relative overflow-hidden" aria-label="Sponsor logos grid">
      <div className="grid grid-cols-2 gap-8 min-w-full items-center">
        {track.map((item, i) => (
          <div key={`${item.id}-${i}`} className="flex justify-center">
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              decoding="async"
              loading="lazy"
              className="h-20 w-auto object-contain opacity-100"
            />
          </div>
        ))}
      </div>
    </div>

  )
}
