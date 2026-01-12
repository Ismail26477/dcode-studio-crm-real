"use client"

import { Award, Users, Zap } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#4BA3FF]/10 px-4 py-2 text-sm font-medium text-[#4BA3FF]">
            About Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0C1A4B] sm:text-4xl text-balance">
            Empowering Businesses Across India
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#0C1A4B]/60">
            We're on a mission to democratize CRM technology and help businesses of all sizes scale faster.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#0C1A4B]">Our Story</h3>
            <p className="mb-4 text-[#0C1A4B]/60 leading-relaxed">
              Founded in 2023, D-Code Studio was born from a simple vision: to make world-class CRM tools accessible to
              every business in India, regardless of size or budget. We started in Bangalore and quickly grew to serve
              1000+ businesses across the country.
            </p>
            <p className="text-[#0C1A4B]/60 leading-relaxed">
              Today, our team of passionate engineers and product experts work tirelessly to deliver intuitive, powerful
              solutions that help our customers succeed in an increasingly competitive market.
            </p>

            <div className="mt-8 flex gap-4">
              <MagneticButton className="group relative overflow-hidden rounded-full bg-[#0C1A4B] px-8 py-3 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#4BA3FF]/30">
                <span className="relative z-10">Get Started</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#0C1A4B]/10 bg-gradient-to-br from-[#4BA3FF]/5 to-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4BA3FF]/20">
                <Users className="h-6 w-6 text-[#4BA3FF]" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-[#0C1A4B]">1000+</h4>
              <p className="text-[#0C1A4B]/60">Businesses trust us to power their growth</p>
            </div>

            <div className="rounded-2xl border border-[#0C1A4B]/10 bg-gradient-to-br from-green-50 to-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-[#0C1A4B]">Industry Leading</h4>
              <p className="text-[#0C1A4B]/60">Recognized for innovation and customer satisfaction</p>
            </div>

            <div className="rounded-2xl border border-[#0C1A4B]/10 bg-gradient-to-br from-purple-50 to-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-[#0C1A4B]">24/7 Support</h4>
              <p className="text-[#0C1A4B]/60">Dedicated team ready to help you succeed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
