"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { getCalApi } from "@calcom/embed-react"

export const NavBarComb = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: "meet" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#867343" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center transition-all duration-500">
      <nav
        className={`flex items-center justify-between w-full max-w-4xl px-6 py-3
          transition-all duration-500 ease-in-out transform
          ${isScrolled
            ? "bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-full translate-y-2"
            : "bg-transparent backdrop-blur-0 border-0 shadow-none"
          }`}
      >
        {/* Logo */}
        <div className="text-xl font-bold text-black">VTE</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/vte#home" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">Home</Link>
          <Link href="/vte/about" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">About Us</Link>
          <Link href="/vte#services" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">Our Services</Link>
          <Link href="/vte/resources" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">Resources</Link>
          <Link href="/vte#contact" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">Contact Us</Link>
          <button
            className="bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            data-cal-namespace="meet"
            data-cal-link="velocity-tax-express-mnrmwv/vte-appointment"
            data-cal-config='{"layout":"month_view"}'
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 hover:text-[#867343] transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white/90 backdrop-blur-lg border-l border-gray-200 shadow-xl transform transition-transform duration-300 md:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-lg font-bold text-gray-900">VTE</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={28} className="text-gray-900" />
          </button>
        </div>
        <div className="px-6 space-y-6 mt-6">
          <a href="/vte#home" onClick={() => setMobileMenuOpen(false)} className="block text-gray-900 hover:text-[#867343] transition-colors">Home</a>
          <a href="/vte/about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-900 hover:text-[#867343] transition-colors">About</a>
          <a href="/vte/resources" onClick={() => setMobileMenuOpen(false)} className="block text-gray-900 hover:text-[#867343] transition-colors">Resources</a>
          <a href="/vte#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-900 hover:text-[#867343] transition-colors">Services</a>
          <a href="/vte#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-900 hover:text-[#867343] transition-colors">Contact</a>
          <button
            className="bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            data-cal-namespace="meet"
            data-cal-link="velocity-tax-express-mnrmwv/vte-appointment"
            data-cal-config='{"layout":"month_view"}'
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  )
}
