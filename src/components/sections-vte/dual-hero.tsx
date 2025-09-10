"use client"

import { motion } from "framer-motion"
import { HeroXStats } from "./hero-stats"

export const DualHero = () => {
  return (
    <div className="relative">
      {/* Background that spans both heroes */}
      <div
        className="absolute top-0 left-0 w-full h-[200vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.png')" }}
      ></div>

      <div className="relative">
        {/* Hero 1 - clear with title only */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Overlay to soften image */}
          {/* <div className="absolute inset-0 bg-black/30"></div> */}

          {/* Title on bottom-right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-16 right-12 text-right"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Velocity Tax Express
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mt-2 drop-shadow">
              Your Partner in Financial Success
            </p>
          </motion.div>
        </section>

        {/* Hero 2 - with stats */}
        <HeroXStats />
      </div>
    </div>
  )
}
