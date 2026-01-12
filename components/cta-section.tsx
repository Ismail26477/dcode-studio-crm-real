"use client"

import { useRef } from "react"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { x, y } = useMousePosition(containerRef)

  const handleContactClick = () => {
    const phoneNumber = "917020503794"
    const message = encodeURIComponent(
      "Hello D-Code Studio! I'm interested in learning more about your CRM solutions. Please contact me at your earliest convenience.",
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl bg-[#0C1A4B] p-12 md:p-20"
          style={{
            transform: `perspective(1000px) rotateY(${x * 0.003}deg) rotateX(${-y * 0.003}deg)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#4BA3FF]/20 blur-3xl"
              style={{
                transform: `translate(${x * 0.05}px, ${y * 0.05}px)`,
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#4BA3FF]/10 blur-3xl"
              style={{
                transform: `translate(${-x * 0.05}px, ${-y * 0.05}px)`,
              }}
            />
          </div>

          <div className="relative text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4" />
              Start your free trial today
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl text-balance">
              Ready to transform your business?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
              Join 1000+ companies already using D-Code Studio to close more deals and build lasting customer
              relationships.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0C1A4B] shadow-xl transition-all hover:shadow-2xl hover:shadow-[#4BA3FF]/30 cursor-pointer hover:scale-105"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border-2 border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/10">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
