"use client"

import { useEffect, useRef } from "react"

type Star = { x: number; y: number; z: number; r: number; c: string }

export default function StarfieldCanvas({ opacity = 0.4 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const starsRef = useRef<Star[]>([])
  const reducedRef = useRef<boolean>(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    reducedRef.current = mql.matches

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let width = (canvas.width = Math.floor(canvas.clientWidth * DPR))
    let height = (canvas.height = Math.floor(canvas.clientHeight * DPR))

    const onResize = () => {
      width = canvas.width = Math.floor(canvas.clientWidth * DPR)
      height = canvas.height = Math.floor(canvas.clientHeight * DPR)
      init()
    }
    window.addEventListener("resize", onResize)

    const starColors = ["#FFFFFF", "#A8D8FF", "#00E5FF", "#FF3EA5"]
    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min
    }
    function init() {
      const COUNT = reducedRef.current ? 120 : Math.floor((width * height) / (14000 / DPR))
      starsRef.current = new Array(COUNT).fill(0).map(() => ({
        x: rand(0, width),
        y: rand(0, height),
        z: rand(0.2, 1.2),
        r: rand(0.5, 1.8) * DPR,
        c: starColors[Math.floor(Math.random() * starColors.length)],
      }))
    }
    init()

    let last = performance.now()
    const driftX = 0.005
    const driftY = 0.009

    const draw = (t: number) => {
      const dt = Math.min((t - last) / 16.6667, 2)
      last = t

      ctx.clearRect(0, 0, width, height)
      ctx.globalAlpha = opacity

      // Subtle nebula-like vignette for depth
      const grd = ctx.createRadialGradient(
        width * 0.6,
        height * 0.4,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8,
      )
      grd.addColorStop(0, "rgba(0,0,0,0)")
      grd.addColorStop(1, "rgba(0,0,0,0.6)")
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      ctx.globalCompositeOperation = "lighter"
      for (const s of starsRef.current) {
        s.x += driftX * dt * (0.8 + s.z * 0.4)
        s.y += driftY * dt * (0.8 + s.z * 0.4)
        if (s.x > width) s.x = 0
        if (s.y > height) s.y = 0
        ctx.beginPath()
        ctx.fillStyle = s.c
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalCompositeOperation = "source-over"

      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [opacity])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
}
