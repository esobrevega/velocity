"use client"

import { FileText, CheckCircle, Briefcase } from "lucide-react"

export default function TaxSafetySection() {
  return (
    <section className="min-h-screen py-24 bg-gradient-to-r from-black/90 via-[#435686] to-[#6B78A0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <h2 className="text-5xl font-extrabold">
              Secure Your Taxes with Confidence
            </h2>
            <p className="text-lg">
              Our experts help individuals and businesses maximize refunds, minimize liabilities, and stay compliant with local regulations.
            </p>
            <button className="px-6 py-3 bg-[#435686] text-white font-semibold rounded-lg hover:bg-[#2C3A7C] transition">
              Learn How We Protect Your Taxes
            </button>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="bg-white p-4 rounded-full inline-flex shadow">
                  <FileText className="w-6 h-6 text-[#435686]" />
                </div>
                <p className="font-semibold">Expert Tax Filing</p>
                <p className="text-sm">
                  Accurate and timely filing for individuals and businesses.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="bg-white p-4 rounded-full inline-flex shadow">
                  <CheckCircle className="w-6 h-6 text-[#435686]" />
                </div>
                <p className="font-semibold">Audit Support</p>
                <p className="text-sm">
                  Professional guidance if the tax authorities audit your returns.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="bg-white p-4 rounded-full inline-flex shadow">
                  <Briefcase className="w-6 h-6 text-[#435686]" />
                </div>
                <p className="font-semibold">Tax Planning</p>
                <p className="text-sm">
                  Strategic advice to minimize liabilities and maximize savings.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1581093588402-9f5c6e3e0a2b"
              alt="Tax Security"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
