"use client"

import { useState, useRef, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Sales Manager",
    company: "TechVision Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    content:
      "This CRM has transformed how we manage our sales pipeline. We've increased our conversion rate by 40% in just 3 months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    company: "Creative Minds Agency",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content:
      "The WhatsApp integration is a game-changer. Our team now spends less time switching between tools and more time closing deals.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Operations Director",
    company: "Growth Ventures Ltd",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    content:
      "D-Code's support team is exceptional. They help us customize the CRM to fit our unique workflow perfectly.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Desai",
    role: "Marketing Director",
    company: "Digital Wave Marketing",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    content:
      "The analytics dashboard gives us real-time insights into our customer behavior. It's become invaluable for our strategy.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "CEO",
    company: "Enterprise Solutions Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    content:
      "Implementing D-Code CRM was the best decision for scaling our business. The automation features save us hours every week.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sneha Gupta",
    role: "Customer Success Lead",
    company: "StartUp Ventures",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    content:
      "The user interface is intuitive and our team was up and running within days. Best investment we've made this year!",
    rating: 5,
  },
  {
    id: 7,
    name: "Arjun Nair",
    role: "Sales Director",
    company: "Premium Business Group",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    content:
      "Customer retention improved by 35% since we started using D-Code. The system is built for growth and results.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      return () => container.removeEventListener("scroll", checkScroll)
    }
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const autoScroll = setInterval(() => {
      if (container) {
        const scrollAmount = 400
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          })
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          })
        }
        setTimeout(checkScroll, 300)
      }
    }, 4000)

    return () => clearInterval(autoScroll)
  }, [])

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 400
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section id="testimonials" className="relative py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#4BA3FF]/10 px-4 py-2 text-sm font-medium text-[#4BA3FF]">
            Success Stories
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0C1A4B] sm:text-4xl text-balance">
            What our customers are saying
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#0C1A4B]/60">
            Join over 1,000 businesses that are transforming their sales processes with our CRM platform.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative flex-shrink-0 w-full sm:w-96 overflow-hidden rounded-3xl border border-[#0C1A4B]/10 bg-gradient-to-br from-[#4BA3FF]/5 to-white p-8 transition-all duration-300 hover:border-[#4BA3FF]/30 hover:shadow-lg hover:shadow-[#4BA3FF]/10"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mb-6 text-[#0C1A4B]/70 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-4 border-t border-[#0C1A4B]/10 pt-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#0C1A4B]">{testimonial.name}</h4>
                    <p className="text-sm text-[#0C1A4B]/60">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-[#0C1A4B]/10 rounded-full p-2 shadow-md hover:bg-[#4BA3FF] hover:text-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-[#0C1A4B]/10 rounded-full p-2 shadow-md hover:bg-[#4BA3FF] hover:text-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
