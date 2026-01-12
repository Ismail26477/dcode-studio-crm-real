"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloatingButton() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (format: country code + number, e.g., 1234567890)
    const phoneNumber = "7020503794"
    const message = "Hello! I'm interested in learning more about D-Code Studio's CRM solution."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
