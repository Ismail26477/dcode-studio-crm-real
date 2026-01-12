"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const videos = [
    {
      id: 1,
      title: "Product Demo",
      description: "Get a quick walkthrough of our CRM's key features",
      thumbnail: "/crm-dashboard-demo.jpg",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Sales Pipeline Management",
      description: "Learn how to manage your sales pipeline effectively",
      thumbnail: "/sales-pipeline-management.jpg",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "WhatsApp Integration Guide",
      description: "Connect with customers through WhatsApp directly from CRM",
      thumbnail: "/whatsapp-integration-guide.jpg",
      videoId: "dQw4w9WgXcQ",
    },
  ]

  return (
    <section id="videos" className="relative py-16 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#4BA3FF]/10 px-4 py-2 text-sm font-medium text-[#4BA3FF]">
            Video Resources
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0C1A4B] sm:text-4xl text-balance">Learn from our experts</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#0C1A4B]/60">
            Watch tutorials, demos, and best practices to get the most out of your CRM.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="group">
              {/* Video Thumbnail */}
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-black">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 group-hover:bg-black/50">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4BA3FF] text-white transition-all duration-300 hover:bg-[#4BA3FF]/90 hover:scale-110"
                    aria-label={`Play ${video.title} video`}
                  >
                    <Play className="h-7 w-7 fill-white" />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <h3 className="mb-2 text-lg font-semibold text-[#0C1A4B]">{video.title}</h3>
              <p className="text-[#0C1A4B]/60">{video.description}</p>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                aria-label="Close video"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* YouTube Embed */}
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CRM Tutorial Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
