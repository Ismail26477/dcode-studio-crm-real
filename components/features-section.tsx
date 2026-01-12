"use client"

import { TiltCard } from "./tilt-card"
import { Users, TrendingUp, MessageCircle, BarChart3, Sparkles, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Lead Management",
    description: "Capture, organize, and nurture leads with intelligent scoring and automated follow-ups.",
  },
  {
    icon: TrendingUp,
    title: "Sales Pipeline",
    description: "Visualize your entire sales process with customizable stages and real-time tracking.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Call Integration",
    description: "Connect with customers on their preferred channels directly from the CRM.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Get actionable insights with comprehensive dashboards and custom reports.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Let AI analyze patterns and suggest the best actions to close more deals.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with GDPR, SOC2, and more.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#4BA3FF]/10 px-4 py-2 text-sm font-medium text-[#4BA3FF]">
            Features
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0C1A4B] sm:text-4xl text-balance">
            Everything you need to grow
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#0C1A4B]/60">
            Powerful tools designed to streamline your workflow and accelerate your business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <TiltCard key={index} className="group h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#0C1A4B]/5 bg-white p-8 transition-all duration-300 hover:border-[#4BA3FF]/20 hover:shadow-xl hover:shadow-[#4BA3FF]/10">
                {/* Glow effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#4BA3FF]/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4BA3FF]/10 text-[#4BA3FF] transition-all duration-300 group-hover:bg-[#4BA3FF] group-hover:text-white group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#0C1A4B]">{feature.title}</h3>

                  <p className="text-[#0C1A4B]/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
