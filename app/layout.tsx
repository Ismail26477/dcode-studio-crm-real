import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "D-Code Studio | All-in-One CRM to Scale Your Business",
  description:
    "Transform your business with our powerful SaaS CRM solution. Automate sales, manage customers, and grow faster with AI-powered insights.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <WhatsAppFloatingButton />
        <Analytics />
      </body>
    </html>
  )
}
