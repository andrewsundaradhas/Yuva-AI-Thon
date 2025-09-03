// ... existing code ...
// <CHANGE> performance: swap arc+shadow for pre-rendered glow sprites, time-based animation, faster velocities, adaptive quality
"use client"

import { useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type GalaxyCanvasProps = {
  mode?: "landing" | "background"
  onZoomComplete?: () => void
  className?: string
}

type Particle = {
  angle: number
  radius: number
  speed: number // radians per second
  size: number  // radius in pixels
  armOffset: number
  colorIndex: 0 | 1
  phase: number      // for twinkle
  radialVel: number  // px per second (in/out drift)
}

export function GalaxyCanvas({ mode = "landing", onZoomComplete, className }: GalaxyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  // entry flow refs
  const zoomingRef = useRef(false)
  const zoomTRef = useRef(0) // 0..1
  const completedRef = useRef(false)
  const interactedRef = useRef(false)
  const autoTimerRef = useRef<number | null>(null)
  const onZoomRef = useRef<(() => void) | undefined>(onZoomComplete)

  // perf helpers
  const lastTsRef = useRef<number>(0)
  const fpsWindowRef = useRef<number[]>([])
  const twinkleToggleRef = useRef<boolean>(false)

  // keep latest callback without retriggering the main effect
  useEffect(() => {
    onZoomRef.current = onZoomComplete
  }, [onZoomComplete])

  const colors = [
    { r: 0, g: 229, b: 255 }, // cyan
    { r: 255, g: 106, b: 0 }, // orange
  ]

  // create optimized soft glow sprite for a given color
  function createStarSprite(r: number, g: number, b: number, baseSize = 24) {
    const off = document.createElement("canvas")
    // Use smaller base size for better performance
    const size = Math.min(baseSize, 24)
    off.width = size
    off.height = size
    const ctx = off.getContext("2d", { willReadFrequently: false })!
    const cx = size / 2
    const cy = size / 2
    
    // Simplified gradient with fewer color stops
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cx)
    grad.addColorStop(0.0, `rgba(${r},${g},${b},1)`)
    grad.addColorStop(0.5, `rgba(${r},${g},${b},0.4)`)
    grad.addColorStop(1.0, `rgba(${r},${g},${b},0)`)
    
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(cx, cy, cx, 0, Math.PI * 2)
    ctx.fill()
    return off
  }

  const spawnParticles = useCallback(
    (width: number, height: number) => {
      const area = width * height
      const dpr = Math.min(1.5, window.devicePixelRatio || 1) // Reduced max DPR for performance
      const isMobile = typeof navigator !== "undefined" && /Mobi|Android/i.test(navigator.userAgent)
      // adaptive counts based on area and device - reduced particle count
      let target =
        mode === "landing"
          ? Math.min(4000, Math.floor(area / (dpr > 1 ? 280 : 240)))
          : Math.min(2500, Math.floor(area / (dpr > 1 ? 450 : 380)))
      if (isMobile) target = Math.floor(target * 0.6) // Further reduce for mobile

      const cx = width / 2
      const cy = height / 2
      const maxR = Math.min(cx, cy) * 0.95

      const particles: Particle[] = []
      const arms = 4

      for (let i = 0; i < target; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.pow(Math.random(), 0.5) * maxR
        const armOffset = ((i % arms) / arms) * Math.PI * 2

        // faster, livelier swirl (radians per second)
        const speed = 0.15 + Math.random() * 0.35 // 0.15..0.5 rad/s
        const size = Math.random() * 1.6 + 0.6 // drawImage scaled later
        const colorIndex = (Math.random() < 0.5 ? 0 : 1) as 0 | 1
        const phase = Math.random() * Math.PI * 2 // for twinkle
        const radialVel = (Math.random() - 0.5) * 12 // px/s slight in-out drift

        particles.push({ angle, radius, speed, size, armOffset, colorIndex, phase, radialVel })
      }
      return { particles, cx, cy, maxR }
    },
    [mode],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Optimize rendering settings
    ctx.imageSmoothingEnabled = true
    // Use lower quality when zoomed out for better performance
    ctx.imageSmoothingQuality = zoomingRef.current ? "high" : "medium"

    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    // Pre-render star sprites - use smaller size and cache them
    const starSprites = [
      createStarSprite(colors[0].r, colors[0].g, colors[0].b, 24),
      createStarSprite(colors[1].r, colors[1].g, colors[1].b, 24),
    ]
    
    // Pre-warm the animation by running a few frames in advance
    const warmupFrames = 3
    for (let i = 0; i < warmupFrames; i++) {
      particles.forEach(p => {
        p.angle += p.speed * 0.016 // 60fps frame time
        p.radius += p.radialVel * 0.016
        if (p.radius < 12) p.radius = maxR
        else if (p.radius > maxR) p.radius = 12
      })
    }

    let { particles, cx, cy, maxR } = spawnParticles(canvas.width / dpr, canvas.height / dpr)

    // time-based animation with throttling
    lastTsRef.current = performance.now()
    fpsWindowRef.current = []
    let lastRenderTime = 0
    const targetFPS = 60
    const frameTime = 1000 / targetFPS

    const animate = (ts: number) => {
      rafRef.current = requestAnimationFrame(animate)
      
      // Throttle frame rate
      const now = performance.now()
      const elapsed = now - lastRenderTime
      if (elapsed < frameTime) return
      lastRenderTime = now - (elapsed % frameTime)
      
      const last = lastTsRef.current
      lastTsRef.current = ts
      let dt = (ts - last) / 1000
      if (!isFinite(dt) || dt <= 0) dt = 1 / 60
      // clamp dt to avoid huge jumps on tab switch
      dt = Math.min(dt, 1 / 20)

      // fps tracking (simple rolling window)
      const fps = 1 / dt
      const win = fpsWindowRef.current
      win.push(fps)
      if (win.length > 30) win.shift()
      const avgFps = win.reduce((a, b) => a + b, 0) / win.length

      // adaptive quality: if sustained < 45 FPS, trim particles by 15% (once per second)
      if (avgFps < 45 && particles.length > 2000) {
        const keep = Math.floor(particles.length * 0.85)
        particles.length = keep
      }

      // Optimized background trail - only clear when necessary
      if (mode === 'landing') {
        // Lighter trail for landing
        ctx.fillStyle = 'rgba(0,0,0,0.12)'
        ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)
      } else {
        // For background mode, clear less frequently for better performance
        if (Math.random() > 0.7) { // Only clear ~30% of frames
          ctx.fillStyle = 'rgba(0,0,0,0.25)'
          ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)
        }
      }

      // galaxy base rotation (radians per second)
      const baseRot = mode === "landing" ? 0.06 : 0.035

      ctx.save()
      ctx.translate(cx, cy)

      // zoom scale
      const z = zoomingRef.current ? 1 + easeInCubic(zoomTRef.current) * 2.2 : 1
      ctx.scale(z, z)

      // continuous rotation
      const totalRot = baseRot * (ts / 1000)
      ctx.rotate(totalRot)

      // Only use additive blending when zoomed in for better performance
      const prevComposite = ctx.globalCompositeOperation
      if (zoomingRef.current && zoomTRef.current > 0.3) {
        ctx.globalCompositeOperation = "lighter"
      } else {
        ctx.globalCompositeOperation = prevComposite
      }

      // draw particles using pre-rendered sprites
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // angular swirl + slight spiral
        p.angle += p.speed * dt
        p.radius += p.radialVel * dt
        if (p.radius < 12) p.radius = maxR
        else if (p.radius > maxR) p.radius = 12

        const theta = p.angle + p.armOffset + p.radius * 0.0009
        const x = Math.cos(theta) * p.radius
        const y = Math.sin(theta) * p.radius * 0.65

        // lively twinkle via phase oscillator
        p.phase += dt * 3.0
        const tw = 0.35
        const baseFade = mode === "landing" ? 0.95 : 0.7
        const alpha = baseFade * (0.55 + Math.sin(p.phase + i * 0.15) * tw)

        const sprite = starSprites[p.colorIndex]
        // avoid per-draw string creation; only set alpha
        ctx.globalAlpha = alpha
        const s = p.size
        ctx.drawImage(sprite, x - s, y - s, s * 2, s * 2)
      }

      // restore composite before overlays
      ctx.globalCompositeOperation = prevComposite
      ctx.restore()

      // light star twinkle overlay (every other frame to reduce cost)
      twinkleToggleRef.current = !twinkleToggleRef.current
      if (twinkleToggleRef.current) {
        twinkle(ctx, canvas.width / dpr, canvas.height / dpr, mode)
      }

      // dim as zoom completes
      if (zoomingRef.current || completedRef.current) {
        const prog = zoomTRef.current
        const k = Math.max(0, (prog - 0.75) / 0.25)
        const dimAlpha = Math.min(0.65, k * 0.65)
        if (dimAlpha > 0) {
          ctx.fillStyle = `rgba(0,0,0,${dimAlpha})`
          ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)
        }
      }

      // progress zoom with time-based increment (~0.9s total)
      if (zoomingRef.current) {
        const next = Math.min(1, zoomTRef.current + dt / 0.9)
        zoomTRef.current = next
        if (next >= 1 && !completedRef.current) {
          completedRef.current = true
          zoomingRef.current = false
          onZoomRef.current?.()
        }
      }
    }
    rafRef.current = requestAnimationFrame(animate)

    const onResize = () => {
      resize()
      const dims = { w: canvas.width / dpr, h: canvas.height / dpr }
      const s = spawnParticles(dims.w, dims.h)
      particles = s.particles
      cx = s.cx
      cy = s.cy
      maxR = s.maxR
    }
    window.addEventListener("resize", onResize)

    const startZoom = () => {
      if (mode !== "landing") return
      if (interactedRef.current) return
      interactedRef.current = true
      zoomTRef.current = 0
      completedRef.current = false
      zoomingRef.current = true
    }
    const onWheel = () => startZoom()
    const onClick = () => startZoom()
    const onTouch = () => startZoom()

    if (mode === "landing") {
      window.addEventListener("wheel", onWheel, { passive: true })
      window.addEventListener("click", onClick)
      window.addEventListener("touchstart", onTouch, { passive: true })
      // auto-zoom after ~2.0s if no interaction (slightly faster to feel responsive)
      autoTimerRef.current = window.setTimeout(() => {
        startZoom()
      }, 2000)
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      window.removeEventListener("resize", onResize)
      if (mode === "landing") {
        window.removeEventListener("wheel", onWheel)
        window.removeEventListener("click", onClick)
        window.removeEventListener("touchstart", onTouch)
        if (autoTimerRef.current != null) {
          clearTimeout(autoTimerRef.current)
          autoTimerRef.current = null
        }
      }
    }
    // keep effect stable; onZoomComplete tracked via onZoomRef
  }, [mode, spawnParticles])

  return <canvas ref={canvasRef} className={cn("block w-full h-full", className)} aria-hidden />
}

function easeInCubic(x: number) {
  return x * x * x
}

function twinkle(ctx: CanvasRenderingContext2D, w: number, h: number, mode: "landing" | "background") {
  // Reduced cost and drawn every other frame for perf
  const density = mode === "landing" ? 28 : 18
  const alpha = mode === "landing" ? 0.12 : 0.08
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.fillStyle = "white"
  for (let i = 0; i < density; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    ctx.fillRect(x, y, 1, 1)
  }
  ctx.restore()
}
// ... existing code ...
