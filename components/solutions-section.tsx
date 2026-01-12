"use client"

import { TiltCard } from "./tilt-card"
import { Target, Megaphone, Headphones, Building2 } from "lucide-react"

const solutions = [
  {
    icon: Target,
    title: "For Sales Teams",
    description: "Close deals faster with automated workflows, lead scoring, and real-time pipeline visibility.",
    color: "#4BA3FF",
  },
  {
    icon: Megaphone,
    title: "For Marketing Teams",
    description: "Launch targeted campaigns, track engagement, and seamlessly hand off qualified leads.",
    color: "#10b981",
  },
  {
    icon: Headphones,
    title: "For Customer Support",
    description: "Deliver exceptional service with unified customer history and smart ticket routing.",
    color: "#f59e0b",
  },
  {
    icon: Building2,
    title: "For Enterprises",
    description: "Scale confidently with advanced security, custom integrations, and dedicated support.",
    color: "#8b5cf6",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-16 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#4BA3FF]/10 px-4 py-2 text-sm font-medium text-[#4BA3FF]">
            Solutions
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0C1A4B] sm:text-4xl text-balance">Tailored for every team</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#0C1A4B]/60">
            Whether you&apos;re a startup or an enterprise, we have the right solution for your needs.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <TiltCard key={index} className="group h-full" intensity={10}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#0C1A4B]/5 bg-white p-8 transition-all duration-300 hover:shadow-xl">
                {/* Colored top border */}
                <div
                  className="absolute left-0 right-0 top-0 h-1 transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: solution.color }}
                />

                <div className="flex items-start gap-6">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <solution.icon className="h-8 w-8" style={{ color: solution.color }} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-[#0C1A4B]">{solution.title}</h3>
                    <p className="text-[#0C1A4B]/60 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
