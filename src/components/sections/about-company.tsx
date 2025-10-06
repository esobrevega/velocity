import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left grid md:grid-cols-2 gap-12 items-center bg-[]">

        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-thin mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-6">
            We are a team of certified tax professionals dedicated to helping
            individuals and businesses stay compliant while maximizing savings.
            Our mission is to provide transparent, reliable, and stress-free
            tax solutions tailored to your needs.
          </p>


          <Button
            asChild
            className="bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-8 py-4 rounded-lg text-lg font-normal shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <Link href="/vte/about">About Us</Link>
          </Button>
        </div>

        {/* Right Side - Image / Illustration */}
        <div className="flex justify-center">
          <Image
            src="/the-team-2.png"
            alt="Our Team"
            width={700}
            height={600}
            className="w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}
