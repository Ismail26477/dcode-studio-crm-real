"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface Position {
  x: number
  y: number
}

export function useMousePosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      setPosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [ref])

  return position
}
