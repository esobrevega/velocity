"use client"

import { useState } from "react"
import { CheckCircle, Star } from "lucide-react"
import { advServices } from "@/data/services"

export default function ServicesPlans() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section className="py-24 bg-[#3D341F]">
      <div className="max-w-8xl mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="flex flex-row text-start items-center justify-between mb-6 p-10">
          <h2 className="text-7xl font-thin text-[#FBE4E4] mb-4">
            Tax Made Simple, Just for You
          </h2>
          <p className="text-xl max-w-xs text-[#FBE4E4]">
            Find the right solution for your tax and financial needs.
            Every service comes with expert guidance and customized strategies.
          </p>
        </div>

        {/* Marquee wrapper */}
        <div className="overflow-hidden relative group">
          <div className="flex w-max gap-8 animate-marquee">
            {[...advServices, ...advServices].map((service, idx) => {
              const isOpen = expanded === service.id
              return (
                <div
                  key={`${service.id}-${idx}`}
                  onClick={() =>
                    setExpanded(isOpen ? null : service.id)
                  }
                  className="relative flex flex-col rounded-2xl shadow-lg border border-gray-100/10 bg-white overflow-hidden cursor-pointer transition min-h-[600px] w-[400px] flex-shrink-0"
                >
                  {/* Popular Badge */}
                  {service.details.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">
                      Popular
                    </div>
                  )}

                  {/* Image */}
                  <div
                    className={`absolute inset-0 w-full transition-all duration-500 ease-in-out ${isOpen ? "h-40" : "h-full"
                      }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {!isOpen && (
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
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

                  {/* Content */}
                  <div
                    className={`absolute bottom-0 left-0 w-full bg-white transition-all duration-500 ease-in-out transform ${isOpen
                      ? "translate-y-0 opacity-100 p-6"
                      : "translate-y-full opacity-0 p-0"
                      }`}
                    style={{ minHeight: "calc(100% - 10rem)" }}
                  >
                    <span
                      className={`text-sm font-bold uppercase`}
                    >
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {service.shortDesc}
                    </p>
                    <p className="text-gray-700 text-sm mt-3">
                      {service.details.description}
                    </p>

                    {/* Features */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        What’s included:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Star
                              className="w-4 h-4 text-yellow-500 mr-2"
                              fill="currentcolor"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>


                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
