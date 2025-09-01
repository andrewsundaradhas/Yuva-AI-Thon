import { Countdown } from "@/components/countdown"

export default function CountdownSection() {
  const headingId = "countdown-heading"
  return (
    <section id="countdown" aria-labelledby={headingId} className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <h2 id={headingId} className="text-2xl md:text-3xl font-semibold text-[#FFD600] text-pretty">
          Countdown to YUVA AI-Thon
        </h2>
        <div className="mt-6 md:mt-8">
          <Countdown titleId={headingId} />
        </div>
      </div>
    </section>
  )
}
