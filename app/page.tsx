import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { SolutionsSection } from "@/components/solutions-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VideoSection } from "@/components/video-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <SolutionsSection />
      <AboutSection />
      <TestimonialsSection />
      <VideoSection />
      <CTASection />
      <Footer />
    </main>
  )
}
