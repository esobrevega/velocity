import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

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

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center transition-all duration-500">
      <nav
        className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 
          transition-all duration-500 ease-in-out transform
          ${isScrolled
            ? "bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-full mt-0 translate-y-2 opacity-100"
            : "bg-transparent backdrop-blur-0 border-0 shadow-none rounded-none mt-0 translate-y-0 opacity-95"
          }`}
      >
        {/* Logo */}
        <div className="text-lg md:text-xl font-bold text-black">
          VTE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">Home</a>
          <a href="#about" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">About</a>
          <a href="#services" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">Services</a>
          <a href="#contact" className="text-gray-900 hover:text-[#867343] transition-colors font-medium">Contact</a>
          <button className="bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 hover:text-blue-600 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 w-72 bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-6 md:hidden animate-slideDown">
          <div className="space-y-4">
            <a href="#home" className="block text-gray-900 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="block text-gray-900 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="block text-gray-900 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="block text-gray-900 hover:text-blue-600 transition-colors">Contact</a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
