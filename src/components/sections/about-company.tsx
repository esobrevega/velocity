"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPreviewSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-thin mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We are a team of certified tax professionals dedicated to helping
            individuals and businesses stay compliant while maximizing savings.
            Our mission is to provide transparent, reliable, and stress-free
            tax solutions tailored to your needs.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-8 py-4 rounded-lg text-lg font-normal shadow-md hover:shadow-xl transition-transform"
            >
              <Link href="/vte/about">About Us</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Image
              src="/the-team-2.png"
              alt="Our Team"
              width={700}
              height={600}
              className="w-full max-w-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
