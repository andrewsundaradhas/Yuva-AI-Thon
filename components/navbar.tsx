"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "about", label: "About" },
  { id: "tracks", label: "Tracks" },
  { id: "prizes", label: "Prizes" },
  { id: "timeline", label: "Timeline" },
  { id: "register", label: "Register" },
  { id: "contact", label: "Contact" },
  { id: "follow", label: "Follow Us", isSpecial: true },
]

export function Navbar() {
  const [active, setActive] = useState<string>("about")
  const [open, setOpen] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        { threshold: 0.6 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // position the moving underline bar
  useLayoutEffect(() => {
    const list = listRef.current
    const bar = barRef.current
    if (!list || !bar) return
    const el = list.querySelector<HTMLAnchorElement>(`a[data-link-id="${active}"]`)
    if (!el) return
    const parentRect = list.getBoundingClientRect()
    const rect = el.getBoundingClientRect()
    bar.style.transform = `translateX(${rect.left - parentRect.left + 8}px)`
    bar.style.width = `${rect.width - 16}px`
  }, [active])

  useEffect(() => {
    const onResize = () => {
      // recompute on resize
      const list = listRef.current
      const bar = barRef.current
      if (!list || !bar) return
      const el = list.querySelector<HTMLAnchorElement>(`a[data-link-id="${active}"]`)
      if (!el) return
      const parentRect = list.getBoundingClientRect()
      const rect = el.getBoundingClientRect()
      bar.style.transform = `translateX(${rect.left - parentRect.left + 8}px)`
      bar.style.width = `${rect.width - 16}px`
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [active])

  return (
    <nav
      className={cn("sticky top-0 z-40 w-full border-b border-white/10 bg-black/30 backdrop-blur-md")}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logos + title */}
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/logos/yuva.jpg" alt="YUVA logo" className="h-24 w-[104px] object-contain opacity-100" />
          <img src="/logos/yi.png" alt="Yi (Young Indians) logo" className="h-12 w-[76px] object-contain opacity-100" />
          <span
            className="ml-2 hidden text-sm font-semibold tracking-wide md:inline"
            style={{ color: "#ffd600", textShadow: "0 0 8px rgba(255,214,0,0.35)" }}
          >
            YUVA AI-Thon
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:block">
          <div className="relative">
            <ul ref={listRef} className="relative flex items-center text-2xl gap-3">
              {/* moving underline */}
              <span
                ref={barRef}
                className="pointer-events-none absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#ffd600] transition-[transform,width] duration-300 ease-out"
                style={{ width: 0 }}
                aria-hidden="true"
              />
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    data-link-id={s.id}
                    href={`#${s.id}`}
                    className={cn(
                      "relative block rounded-md px-3 py-2 text-base transition-all duration-300",
                      active === s.id 
                        ? "text-white font-medium" 
                        : s.isSpecial 
                          ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:shadow-[0_0_15px_rgba(255,214,0,0.5)] hover:scale-105"
                          : "text-white/75 hover:text-white hover:bg-white/5"
                    )}
                    style={s.isSpecial ? {
                      boxShadow: '0 0 10px rgba(255, 214, 0, 0.3)'
                    } : {}}
                  >
                    {s.label}
                    {s.isSpecial && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-md border border-white/15 px-4 py-2.5 text-sm min-h-[42px] min-w-[80px] touch-manipulation"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{ 
            color: "#ffd600",
            boxShadow: "0 0 12px rgba(255,214,0,0.25)",
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none'
          }}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Collapsible mobile nav */}
      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-sm",
          open ? "max-h-screen py-4 border-t border-white/10" : "max-h-0"
        )}
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain'
        }}
      >
        <nav aria-label="Mobile navigation">
          <ul className="space-y-2 px-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 active:scale-95",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                    active === s.id 
                      ? s.isSpecial
                        ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-black"
                        : "bg-white/10 text-yellow-400"
                      : s.isSpecial
                        ? "bg-gradient-to-r from-yellow-500/90 to-amber-500/90 text-black hover:shadow-[0_0_15px_rgba(255,214,0,0.3)]"
                        : "text-white/90 hover:bg-white/5 active:bg-white/10"
                  )}
                  style={{
                    WebkitTapHighlightColor: 'rgba(255, 214, 0, 0.2)',
                    touchAction: 'manipulation',
                    ...(s.isSpecial ? { boxShadow: '0 0 10px rgba(255, 214, 0, 0.3)' } : {})
                  }}
                >
                  <div className="flex items-center justify-between">
                    {s.label}
                    {s.isSpecial && (
                      <span className="flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                      </span>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  )
}
