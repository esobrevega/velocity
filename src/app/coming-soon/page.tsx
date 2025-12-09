"use client"

import { motion } from "framer-motion"
import { Clock, Mail, Instagram, Facebook, Home } from "lucide-react"
import Link from "next/link"

export default function ComingSoon() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f9f1e6] to-[#f3e5d0] text-gray-800 text-center px-6">
      {/* Logo or Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-extralight tracking-wide mb-4"
      >
        Velocity Tax Express
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg sm:text-xl max-w-lg mb-8"
      >
        We’re preparing something great for you.  
        Stay tuned — we’ll be launching soon!
      </motion.p>

      {/* Countdown or status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200 shadow-sm"
      >
        <Clock className="w-5 h-5 text-gray-700" />
        <span className="text-sm sm:text-base font-medium">Coming Soon</span>
      </motion.div>

      {/* Return to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white rounded-full font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg"
        >
          <Home size={18} />
          Return to Home
        </Link>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-gray-700 hover:text-black transition"
        >
          <Facebook size={22} />
        </a>
        <a
          href="https://www.instagram.com/velocitytaxexpress/"
          target="_blank"
          className="text-gray-700 hover:text-black transition"
        >
          <Instagram size={22} />
        </a>
      </motion.div>

      {/* Footer */}
      <p className="text-xs sm:text-sm text-gray-500 mt-10">
        © 2021 Velocity Tax Express. All rights reserved.
      </p>
    </section>
  )
}
