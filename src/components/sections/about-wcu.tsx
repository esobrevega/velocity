"use client"

import { Fingerprint, Link, Puzzle, Users } from "lucide-react"
import { StatsCount } from "../stats-counting"
import Image from "next/image"
import { useEffect, useState } from "react"

export const AboutVteWCU = () => {
  const features = [
    {
      title: "Personalized Approach",
      desc: "Tailored solutions for your unique financial goals.",
      icon: <Users className="w-65 h-65" strokeWidth={1.2} />,
    },
    {
      title: "Expert Guidance",
      desc: "Up-to-date strategies from experienced professionals.",
      icon: <Puzzle className="w-65 h-65" strokeWidth={1.2} />,
    },
    {
      title: "Long-term Partnership",
      desc: "Support through every stage of your financial journey.",
      icon: <Link className="w-65 h-65" strokeWidth={1.4} />,
    },
    {
      title: "Transparent Process",
      desc: "Clear communication and full visibility at every step.",
      icon: <Fingerprint className="w-65 h-65" strokeWidth={1.2} />,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section id="about" className="relative min-h-screen py-16 sm:py-20 bg-[#f9f1e6]">
      <div className="mx-4 sm:mx-10 lg:mx-16 px-2 sm:px-6 lg:px-8 space-y-10">
        {/* Top Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/logo-vte.png"
            alt="VELOCITY TAX EXPRESS Logo"
            width={250}
            height={250}
            className="sm:w-40 lg:w-100 rounded-full border-4 border-[#867343] object-cover"
          />
        </div>

        {/* Header */}
        <div className="space-y-4 text-start mb-12 sm:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 rounded-full text-[#867343] text-xs sm:text-sm font-medium">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Why Choose Us
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-gray-900 leading-snug">
              Your Trusted{" "}
              <span className="block bg-gradient-to-r from-[#867343] to-[#a08c5c] bg-clip-text text-transparent">
                Tax & Financial Partners
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-black max-w-full lg:max-w-sm">
              VELOCITY TAX EXPRESS provides unparalleled personalized tax
              services. We ensure that all your financial decisions are made
              carefully and with your best interests in mind.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-10 lg:px-16">
        {features.map((feature, i) => {
          const isActive = i === activeIndex
          return (
            <div
              key={i}
              className={`relative p-5 sm:p-6 h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl bg-white shadow-lg transform transition-all duration-500 flex flex-col overflow-hidden ${isActive
                ? "translate-y-[-8px] sm:translate-y-[-12px] shadow-2xl"
                : "hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl"
                }`}
              style={{ zIndex: features.length - i }}
            >
              {/* Title */}
              <h3
                className={`text-base sm:text-xl lg:text-3xl font-thin transition-colors duration-300 ${isActive ? "text-white" : "text-gray-900"
                  }`}
              >
                {feature.title}
              </h3>

              <p
                className={` mb-auto text-xs sm:text-sm lg:text-sm mt-3 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700"
                  }`}
              >
                {feature.desc}
              </p>
              {/* Icon */}

              <div
                className={`w-65 h-65 mt-19 ml-25 flex items-center justify-center rounded-2xl mb-4 text-xl sm:text-2xl transition-colors duration-300 ${isActive
                  ? "bg-[#867343] text-white"
                  : "bg-white text-[#867343]"
                  }`}
              >
                {feature.icon}
              </div>


              {/* Background */}
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 z-[-1] ${isActive ? "bg-[#867343] opacity-100" : "bg-[#867343] opacity-0"
                  }`}
              ></div>
            </div>
          )
        })}
      </div>

      {/* Stats */}
      <div className="flex flex-col items-center mt-16 sm:mt-20">
        <StatsCount />
      </div>
    </section>
  )
}
