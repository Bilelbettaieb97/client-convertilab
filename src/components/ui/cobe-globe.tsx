"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface Marker {
  id: string
  location: [number, number]
  label: string
}

interface GlobeProps {
  markers?: Marker[]
  className?: string
  markerColor?: [number, number, number]
  baseColor?: [number, number, number]
  glowColor?: [number, number, number]
  dark?: number
  mapBrightness?: number
  markerSize?: number
  speed?: number
  phi?: number
  theta?: number
  diffuse?: number
  mapSamples?: number
  scale?: number
  autoRotate?: boolean
}

export function Globe({
  markers = [],
  className = "",
  markerColor = [0.6, 0.2, 0.9],
  baseColor = [1, 1, 1],
  glowColor = [0.96, 0.85, 0.95],
  dark = 0,
  mapBrightness = 8,
  markerSize = 0.06,
  speed = 0.003,
  phi: initialPhi = 0,
  theta = 0.35,
  diffuse = 1.5,
  mapSamples = 16000,
  scale = 1,
  autoRotate = true,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current.x
      const deltaY = e.clientY - pointerInteracting.current.y
      dragOffset.current = { phi: deltaX / 200, theta: deltaY / 600 }
    }
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId = 0
    let phi = initialPhi

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: initialPhi,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        scale,
        markers: markers.map((m) => ({
          location: m.location,
          size: markerSize,
        })),
      })

      function animate() {
        if (!globe) return
        if (!isPausedRef.current && autoRotate) {
          phi += speed
        }
        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: theta + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }

      animate()
      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1"
      }, 100)
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, markerColor, baseColor, glowColor, dark, mapBrightness, markerSize, speed, theta, diffuse, mapSamples])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          touchAction: "none",
        }}
      />
    </div>
  )
}
