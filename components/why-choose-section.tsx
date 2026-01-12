"use client"

import { useRef } from "react"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { Check, Zap, Clock, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "10x Faster Setup",
    description: "Get started in minutes, not weeks. No complex configurations required.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help you succeed.",
  },
  {
    icon: HeartHandshake,
    title: "99.9% Uptime",
    description: "Enterprise-grade reliability you can count on.",
  },
]

const checkpoints = ["No credit card required", "Free demo", "Cancel anytime", "Unlimited users on all plans"]

export function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { x, y } = useMousePosition(containerRef)

  return (
    <section ref={containerRef} className="relative overflow-hidden py-16">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translate(${x * 0.01}px, ${y * 0.01}px)`,
        }}
      >
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4BA3FF]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#0C1A4B]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-[#4BA3FF]/10 px-4 py-2 text-sm font-medium text-[#4BA3FF]">
              Why D-Code Studio
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#0C1A4B] sm:text-4xl text-balance">
              Built for teams who want to win
            </h2>
            <p className="mb-8 text-lg text-[#0C1A4B]/60 leading-relaxed">
              Join thousands of growing businesses that trust D-Code Studio to power their customer relationships and
              drive revenue growth.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {checkpoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4BA3FF]/10">
                    <Check className="h-4 w-4 text-[#4BA3FF]" />
                  </div>
                  <span className="text-[#0C1A4B]/70">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#0C1A4B]/5 bg-white p-6 transition-all duration-300 hover:border-[#4BA3FF]/20 hover:shadow-lg hover:-translate-y-1"
                style={{
                  transform: `perspective(1000px) rotateY(${x * 0.005}deg) rotateX(${-y * 0.005}deg)`,
                  transition: "transform 0.2s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4BA3FF]/10 text-[#4BA3FF] transition-all group-hover:bg-[#4BA3FF] group-hover:text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-[#0C1A4B]">{benefit.title}</h3>
                    <p className="text-[#0C1A4B]/60">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
