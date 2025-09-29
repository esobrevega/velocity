"use client"

import { Handshake, ShieldCheck, Star, Users } from "lucide-react"
import { StatsCount } from "../stats-counting"
import Image from "next/image"
import { useEffect, useState } from "react"

export const AboutVteWCU = () => {
  const features = [
    {
      title: "Personalized Approach",
      desc: "Tailored solutions for your unique financial goals.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Expert Guidance",
      desc: "Up-to-date strategies from experienced professionals.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Long-term Partnership",
      desc: "Support through every stage of your financial journey.",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      title: "Transparent Process",
      desc: "Clear communication and full visibility at every step.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  // cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section id="about" className="relative min-h-screen py-20 bg-[#f9f1e6]">
      <div className="mx-6 sm:mx-10 lg:mx-16 px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/logo-vte.png"
            alt="VELOCITY TAX EXPRESS Logo"
            width={150}
            height={150}
            className="w-40 sm:w-52 lg:w-150 rounded-full border-4 border-[#867343] object-cover"
          />
        </div>

        {/* Header */}
        <div className="space-y-4 text-start mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-[#867343] text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-0">
              Your Trusted{" "}
              <span className="block bg-gradient-to-r from-[#867343] to-[#a08c5c] bg-clip-text text-transparent">
                Tax & Financial Partners
              </span>
            </h2>
            <p className="text-base sm:text-lg text-black max-w-md lg:max-w-sm">
              VELOCITY TAX EXPRESS provides unparalleled personalized tax
              services. We ensure that all your financial decisions are made
              carefully and with your best interests in mind.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 sm:px-10 lg:px-16">
        {features.map((feature, i) => {
          const isActive = i === activeIndex
          return (
            <div
              key={i}
              className={`relative p-6 h-[400px] rounded-2xl bg-white shadow-lg transform transition-all duration-500 flex flex-col ${
                isActive
                  ? "translate-y-[-12px] shadow-2xl"
                  : "hover:-translate-y-3 hover:shadow-2xl"
              }`}
              style={{ zIndex: features.length - i }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-2xl mb-4 text-2xl transition-colors duration-300 ${
                  isActive
                    ? "bg-[#867343] text-white"
                    : "bg-white text-[#867343] group-hover:text-[#867343]"
                }`}
              >
                {feature.icon}
              </div>

              {/* Title at the bottom */}
              <h3
                className={`mt-auto text-lg sm:text-3xl font-semibold transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>

              <p
                className={`text-sm sm:text-lg mt-4 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-700"
                }`}
              >
                {feature.desc}
              </p>

              {/* Card background inversion */}
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 z-[-1] ${
                  isActive ? "bg-[#867343] opacity-100" : "bg-[#867343] opacity-0"
                }`}
              ></div>
            </div>
          )
        })}
      </div>

      {/* Stats */}
      <div className="flex flex-col items-center mt-20">
        <StatsCount />
      </div>
    </section>
  )
}
