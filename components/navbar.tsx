"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { MagneticButton } from "./magnetic-button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Solutions", href: "#solutions" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0">
            <Image src="/robot-logo.png" alt="D-Code Studio Robot Logo" width={40} height={40} className="h-16 w-22" />
            <span className="text-lg font-semibold text-[#0C1A4B]">D-Code Studio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-medium text-[#0C1A4B]/70 transition-colors hover:text-[#0C1A4B] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#4BA3FF] after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MagneticButton className="group relative overflow-hidden rounded-full bg-[#0C1A4B] px-4 py-2 text-xs font-medium text-white transition-all hover:bg-[#1a2d5c] hover:shadow-lg hover:shadow-[#4BA3FF]/25">
              <span className="relative z-10">Book Free Demo</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#4BA3FF] to-[#0C1A4B] transition-transform duration-300 group-hover:translate-x-0" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-[#0C1A4B] md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-[#0C1A4B]/10 bg-white pb-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-[#0C1A4B]/70 transition-colors hover:bg-[#0C1A4B]/5 hover:text-[#0C1A4B]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-4">
              <button className="w-full rounded-full bg-[#0C1A4B] px-6 py-3 text-sm font-medium text-white">
                Book Free Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
