"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, CheckCircle, Star } from "lucide-react"
import { advServices } from "@/data/services"
import { Button } from "../ui/button"

export default function ServicesBento() {
  const [expanded, setExpanded] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cardsPerPage = 10
  const totalPages = Math.ceil(advServices.length / cardsPerPage)

  // Drag state
  const startX = useRef(0)
  const isDragging = useRef(false)

  // Auto-slide
  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 7000)
    return () => clearInterval(interval)
  }, [paused, totalPages])

  // Collapse expanded cards when page changes
  useEffect(() => {
    setExpanded([])
  }, [currentIndex])

  // Drag end safety
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
      case 7:
        return "lg:col-span-2 lg:row-span-1"
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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f9f1e6]">
      <div className="max-w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 lg:mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 text-center lg:text-left">
            Tax Made Simple, Just for You
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center lg:text-right max-w-xl">
            Find the right solution for your tax and financial needs. <br className="hidden sm:block" />
            Every service comes with expert guidance and customized strategies.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative group overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
        >
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
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
                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      {pageServices.map((service, index) => {
                        const spanClasses = getSpanClasses(index)
                        const isOpen = expanded.includes(service.key)
                        const isHovered = hoveredCard === service.key

                        return (
                          <div
                            key={service.key}
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleCard(service.key)}
                            onMouseEnter={() => setHoveredCard(service.key)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`relative flex flex-col rounded-2xl lg:rounded-3xl shadow-md lg:shadow-xl bg-white overflow-hidden cursor-pointer transition-all duration-500 
                                ${spanClasses} 
                                ${isOpen ? "max-h-[1000px]" : "min-h-[300px] sm:min-h-[350px]"}  
                            `}
                          >
                            {/* Badge */}
                            {service.details.popular && !isOpen && (
                              <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-20">
                                Featured
                              </div>
                            )}

                            {/* Image */}
                            <div
                              className={`absolute inset-0 transition-all duration-500 overflow-hidden ${isOpen ? "h-40 sm:h-48" : "h-full"}`}
                            >
                              <img
                                src={service.image}
                                alt={service.title}
                                className={`w-full h-full object-cover transition-transform duration-500 
                                  ${isHovered ? "scale-110" : "scale-100"}
                                  `}
                              />

                              {/* Default view */}
                              {!isOpen && (
                                <div className="absolute bottom-0 left-0 right-0 min-h-1/3 sm:min-h-2/5 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                                  <div className="w-full text-start p-4 sm:p-6">
                                    <service.icon className={"h-8 w-8 sm:h-12 sm:w-12 text-white"} />
                                    <h3 className="text-lg sm:text-2xl font-bold text-white mt-2">
                                      {service.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-200 mt-1">
                                      {service.shortDesc}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Expanded Content */}
                            <div
                              className={`relative z-10 flex-1 flex flex-col bg-white shadow-inner scrollbar-hide overflow-y-auto transition-all duration-700
                                  ${isOpen ? "translate-y-0 opacity-100 mt-24 sm:mt-32 p-4 sm:p-6"
                                  : "translate-y-5 opacity-0 p-0"}`}
                            >
                              <span className="text-xs font-bold uppercase tracking-wide mb-2">
                                {service.category}
                              </span>
                              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                              <p className="text-gray-700 text-sm mt-3">{service.details.description}</p>

                              {/* Features + Benefits Grid */}
                              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                              <div className="mt-5 flex justify-end">
                                <Button
                                  onClick={() => {
                                    const el = document.querySelector("#contact")
                                    el?.scrollIntoView({ behavior: "smooth" })
                                  }}
                                  className="px-4 sm:px-5 py-2 rounded-lg text-white font-semibold hover:opacity-90"
                                >
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === i ? "bg-gray-800" : "bg-gray-300"}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          )}

          {/* Arrows */}
          <button
            aria-label="Previous Slide"
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
            }
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
          >
            <ArrowLeft />
          </button>
          <button
            aria-label="Next Slide"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
