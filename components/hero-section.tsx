"use client"

import { useRef } from "react"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { MagneticButton } from "./magnetic-button"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { x, y } = useMousePosition(containerRef)

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8fafc] to-white pt-20"
    >
      {/* Animated Background Elements */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translate(${x * 0.02}px, ${y * 0.02}px)`,
        }}
      >
        <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-[#4BA3FF]/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-[#0C1A4B]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-12 lg:flex-row lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#4BA3FF]/10 px-4 py-2 text-sm font-medium text-[#4BA3FF]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#4BA3FF]" />
              Trusted by 1000+ businesses
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#0C1A4B] sm:text-5xl lg:text-6xl text-balance">
              All-in-One CRM to{" "}
              <span className="relative">
                <span className="relative z-10 text-[#4BA3FF]">Scale Your Business</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M2 10C50 4 150 2 298 10"
                    stroke="#4BA3FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg text-[#0C1A4B]/60 lg:mx-0 text-pretty">
              Automate your sales pipeline, manage customer relationships, and unlock powerful AI-driven insights—all in
              one intuitive platform.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <MagneticButton className="group relative overflow-hidden rounded-full bg-[#0C1A4B] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#0C1A4B]/20 transition-all hover:shadow-2xl hover:shadow-[#4BA3FF]/30">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </MagneticButton>

              <MagneticButton className="group flex items-center gap-3 rounded-full border-2 border-[#0C1A4B]/10 bg-white px-6 py-4 text-base font-medium text-[#0C1A4B] transition-all hover:border-[#4BA3FF]/30 hover:bg-[#4BA3FF]/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4BA3FF]/10 text-[#4BA3FF] transition-all group-hover:bg-[#4BA3FF] group-hover:text-white">
                  <Play className="h-4 w-4 fill-current" />
                </div>
                View Demo
              </MagneticButton>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="mt-12 flex-1 lg:mt-0">
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${x * 0.01}deg) rotateX(${-y * 0.01}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="relative rounded-2xl bg-[#0C1A4B] p-1 shadow-2xl shadow-[#0C1A4B]/30">
                <div className="rounded-xl bg-white p-4">
                  {/* Mock Dashboard */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-[#f8fafc] p-4">
                      <div>
                        <p className="text-sm text-[#0C1A4B]/50">Total Revenue</p>
                        <p className="text-2xl font-bold text-[#0C1A4B]">₹124,563</p>
                      </div>
                      <div className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-600">+23.5%</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-[#4BA3FF]/10 p-4">
                        <p className="text-sm text-[#0C1A4B]/50">Active Leads</p>
                        <p className="text-xl font-bold text-[#0C1A4B]">2,847</p>
                      </div>
                      <div className="rounded-lg bg-[#0C1A4B]/5 p-4">
                        <p className="text-sm text-[#0C1A4B]/50">Conversions</p>
                        <p className="text-xl font-bold text-[#0C1A4B]">68%</p>
                      </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="h-32 rounded-lg bg-gradient-to-r from-[#4BA3FF]/20 to-[#0C1A4B]/10 p-4">
                      <div className="flex h-full items-end gap-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-[#4BA3FF] transition-all hover:bg-[#0C1A4B]"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -right-4 -top-4 rounded-xl bg-white p-3 shadow-lg"
                style={{
                  transform: `translate(${x * 0.03}px, ${y * 0.03}px)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#0C1A4B]/50">New Deal</p>
                    <p className="text-sm font-semibold text-[#0C1A4B]">₹5,200</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 rounded-xl bg-white p-3 shadow-lg"
                style={{
                  transform: `translate(${-x * 0.03}px, ${-y * 0.03}px)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#4BA3FF]/20 flex items-center justify-center">
                    <span className="text-[#4BA3FF] text-sm">🎯</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#0C1A4B]/50">Pipeline</p>
                    <p className="text-sm font-semibold text-[#0C1A4B]">89 leads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
