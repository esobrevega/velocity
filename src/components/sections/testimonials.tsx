"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Anonymous",
    date: "Apr 10, 2024",
    tags: "",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Alex",
    comment:
      "They were great and we were late. Thanks so much for putting up with us.",
  },
  {
    name: "Corona",
    tags: "Quality, Customer Service, Offerings, Timeliness",
    date: "Apr 14, 2024",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Sophia",
    comment: "Very helpful and knowledgeable.",
  },
  {
    name: "Maria",
    tags: "Quality, Customer Service, Timeliness",
    date: "Feb 08, 2023",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Emma",
    comment: "Meeting you was great. Thanks for all your help!",
  },
]

const trustedBrands = [
  { company: "Marie Silver Assisting Living Facility", location: "Surprise, AZ" },
  { company: "Our Home on Rosewood LLC", location: "Phoenix, AZ" },
  { company: "Avalon Cares LLC of AZ", location: "Glendale, AZ" },
  { company: "Source One Hospice & Palliative Care LLC", location: "Scottsdale, AZ" },
  { company: "Access AZ Hospice & Palliative Care, LLC", location: "Scottsdale, AZ" },
  { company: "Fisher Family LLC", location: "Phoenix, AZ" },
  { company: "Monarch Luxury Hair, LLC", location: "Tucson, AZ" },
  { company: "Blessed Hands Braiding, LLC", location: "Tucson, AZ" },
  { company: "Wax Queen of AZ, LLC", location: "Tucson, AZ" },
  { company: "LMZI Flooring LLC", location: "Glendale, AZ" },
]

export const TestimonialsVte = () => {

  const loopBrands = [...trustedBrands, ...trustedBrands]

  return (
    <section id="testimonials" className="relative py-20 bg-[#f9f1e6]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-3">
        {/* Section title */}
        <h2 className="text-7xl font-thin text-black text-center mb-12">
          What Our Clients Say
        </h2>

        {/* Testimony layout */}
        <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-6 mx-10 space-y-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-sm p-6 pt-12 hover:shadow-lg transition-all break-inside-avoid"
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="relative -mt-20">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-3 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Tags */}
              <p className="text-xs text-center text-gray-500 mb-4">{t.tags}</p>

              {/* Comment */}
              <p className="text-gray-700 text-base leading-relaxed text-center mb-4">
                “{t.comment}”
              </p>

              {/* Name + Date */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Brands Section */}
        <div className="mt-20 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-5xl font-thin text-gray-800 mb-10"
          >
            These Brands Trust Our Flexible Services. You Can Too!
          </motion.h3>

          <div className="relative w-full">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex space-x-8 text-gray-700 font-medium text-sm sm:text-base w-max"
            >
              {loopBrands.map((brand, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white/70 border border-gray-200 rounded-xl py-3 px-6 shadow-sm hover:shadow-md transition-all text-left"
                >
                  <p className="font-semibold text-gray-900">{brand.company}</p>
                  <p className="text-sm text-gray-500">{brand.location}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
