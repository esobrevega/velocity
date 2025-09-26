"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            We are a team of certified tax professionals dedicated to helping
            individuals and businesses stay compliant while maximizing savings.
            Our mission is to provide transparent, reliable, and stress-free
            tax solutions tailored to your needs.
          </p>
          <Button asChild>
            <a href="/about">Meet Our Team</a>
          </Button>
        </div>

        {/* Right Side - Image / Illustration */}
        <div className="flex justify-center">
          <Image
            src="/about-preview.png"
            alt="Our Team"
            width={400}    
            height={300}   
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
