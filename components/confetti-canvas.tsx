"use client"

import { useEffect, useRef } from "react"

export default function ConfettiCanvas({ durationMs = 3500 }: { durationMs?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let width = (canvas.width = Math.floor(canvas.clientWidth * DPR))
    let height = (canvas.height = Math.floor(canvas.clientHeight * DPR))

    const onResize = () => {
      width = canvas.width = Math.floor(canvas.clientWidth * DPR)
      height = canvas.height = Math.floor(canvas.clientHeight * DPR)
    }
    window.addEventListener("resize", onResize)

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const COLORS = ["#FFD600", "#00E5FF", "#FF3EA5", "#FFFFFF"]
    const COUNT = reduced ? 60 : 160

    const parts = Array.from({ length: COUNT }).map(() => {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 3 + 2
      return {
        x: width / 2,
        y: height / 3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        g: 0.06 + Math.random() * 0.04,
        s: Math.random() * 3 + 2,
        r: Math.random() * 360,
        c: COLORS[(Math.random() * COLORS.length) | 0],
        life: durationMs,
      }
    })

    const start = performance.now()
    const draw = (t: number) => {
      const elapsed = t - start
      if (elapsed > durationMs) return
      ctx.clearRect(0, 0, width, height)
      for (const p of parts) {
        p.vy += p.g
        p.x += p.vx
        p.y += p.vy
        p.r += 6
        p.life -= 16.7

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.r * Math.PI) / 180)
        ctx.fillStyle = p.c
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6)
        ctx.restore()
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [durationMs])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-40 h-full w-full" aria-hidden="true" />
}
