"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, CheckCircle, Star } from "lucide-react"
import { advServices } from "@/data/services"
import { Button } from "../ui/button"

// Tailwind-safe accent color map
const accentClasses: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-500", text: "text-blue-500" },
  purple: { bg: "bg-purple-500", text: "text-purple-500" },
  green: { bg: "bg-green-500", text: "text-green-500" },
  yellow: { bg: "bg-yellow-500", text: "text-yellow-500" },
  indigo: { bg: "bg-indigo-500", text: "text-indigo-500" },
}

export default function ServicesBento() {
  const [expanded, setExpanded] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cardsPerPage = 6
  const totalPages = Math.ceil(advServices.length / cardsPerPage)

  // Drag state
  const startX = useRef(0)
  const isDragging = useRef(false)

  // Auto-slide
  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000)
    return () => clearInterval(interval)
  }, [paused, totalPages])

  // Close expanded cards when page changes
  useEffect(() => {
    setExpanded([]) // collapse all cards when index changes
  }, [currentIndex])

  // Drag end safety (release outside container)
  useEffect(() => {
    const handleWindowUp = () => {
      isDragging.current = false
    }
    window.addEventListener("mouseup", handleWindowUp)
    window.addEventListener("touchend", handleWindowUp)
    return () => {
      window.removeEventListener("mouseup", handleWindowUp)
      window.removeEventListener("touchend", handleWindowUp)
    }
  }, [])

  const toggleCard = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((eid) => eid !== id) : [...prev, id]
    )
  }

  const getSpanClasses = (index: number) => {
    switch (index) {
      case 2:
      case 3:
        return "col-span-2 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true
    startX.current =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return
    const x =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
    const diff = startX.current - x
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % totalPages)
      } else {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
      }
      isDragging.current = false
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-200 to-white">
      <div className="max-w-full px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-row justify-between mb-6 px-10">
          <h2 className="text-5xl font-light text-start text-gray-900 mb-4">
            Tax Made Simple, Just for You
          </h2>
          <p className="text-lg text-end text-gray-600">
            Find the right solution for your tax and financial needs. <br />
            Every service comes with expert guidance and customized strategies.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
        >
          {/* Slides */}
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const pageServices = advServices.slice(
                pageIndex * cardsPerPage,
                (pageIndex + 1) * cardsPerPage
              )

              return (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="flex flex-col">
                    {/* Cards grid */}
                    <div className="grid grid-cols-4 grid-rows-[repeat(2,minmax(0,1fr))] gap-6">
                      {pageServices.map((service, index) => {
                        const spanClasses = getSpanClasses(index)
                        const isOpen = expanded.includes(service.id)
                        const isHovered = hoveredCard === service.id
                        const accent =
                          accentClasses[service.accentColor] ||
                          accentClasses.blue

                        return (
                          <div
                            key={service.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleCard(service.id)}
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className=
                            {`relative flex flex-col rounded-3xl shadow-xl bg-white overflow-hidden cursor-pointer transition-all duration-500 
                                ${spanClasses} 
                                ${isOpen ? "max-h-[1000px]" : "max-h-[350px]"}  
                            `}
                          >
                            {/* Popular Badge */}
                            {service.details.popular && !isOpen && (
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">
                                Popular
                              </div>
                            )}

                            {/* Image */}
                            <div
                              className={`absolute inset-0 transition-all duration-500 overflow-hidden ${isOpen ? "h-48" : "h-full"
                                }`}
                            >
                              <img
                                src={service.image}
                                alt={service.title}
                                className={`w-full h-full object-cover transition-transform duration-500 
                                  ${isHovered ? "scale-115" : "scale-100"}
                                  `}
                              />



                              {!isOpen && (
                                <div className="absolute bottom-0 left-0 right-0 min-h-2/5 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                                  <div className="w-full text-start p-6">
                                    <service.icon
                                      className={"h-12 w-12 text-white"}
                                    />
                                    <h3 className="text-2xl font-bold text-white mt-2">
                                      {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-200 mt-1">
                                      {service.shortDesc}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Expanded Content */}
                            <div
                              className={`relative z-10 flex-1 flex flex-col bg-white shadow-xl scrollbar-hide overflow-y-auto transition-all duration-700
    ${isOpen ? "translate-y-0 opacity-100 mt-32 p-6" : "translate-y-5 opacity-0 p-0"}`}
                            >
                              {/* Header */}
                              <div className="flex items-center justify-between mb-4">
                                <span className={`text-xs font-bold uppercase tracking-wide ${accent.text}`}>
                                  {service.category}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                              <p className="text-gray-700 text-sm mt-3">{service.details.description}</p>

                              {/* Grid */}
                              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">What’s included</h4>
                                  <ul className="space-y-1">
                                    {service.details.features.map((f, i) => (
                                      <li key={i} className="flex text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {f}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits</h4>
                                  <ul className="space-y-1">
                                    {service.details.benefits.map((b, i) => (
                                      <li key={i} className="flex text-sm">
                                        <Star className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" /> {b}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* CTA */}
                              <div className="mt-6 flex justify-end">
                                <Button
                                  onClick={() => {
                                    const el = document.querySelector("#contact");
                                    el?.scrollIntoView({ behavior: "smooth" });
                                  }}
                                  className={`px-5 py-2 rounded-lg text-white font-semibold ${accent.bg} hover:opacity-90`}>
                                  Get Started
                                </Button>
                              </div>
                            </div>


                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination (single, below all slides) */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full ${currentIndex === i ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          )}

          {/* Arrows (show on hover) */}
          <button
            aria-label="Previous Slide"
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
          >
            <ArrowLeft />
          </button>
          <button
            aria-label="Next Slide"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
