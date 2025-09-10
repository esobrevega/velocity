import { ChevronDown, TrendingUp } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export const HeroXStats = () => {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="pt-40 min-h-screen flex items-end relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 m-3 top-20">
        <img
          src="/herobg.png"
          alt="Background"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Since 2021 badge */}
      <div className="absolute top-30 left-15 z-20">
        <button className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-full shadow-md border border-gray-200 hover:bg-white transition">
          Since 2021
        </button>
      </div>

      {/* Content moved lower-left */}
      <div className="max-w-full px-4 sm:px-6 lg:px-8 w-full text-left absolute bottom-12 left-8">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center px-4 py-2 bg-transparent border rounded-full text-white text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Your Financial Success Partners
            </div>
            <h1 className="text-5xl lg:text-7xl font-extralight text-white">
              Feel the Velocity Tax Express Difference
            </h1>
            <p className="text-md text-gray-100">
              As your Tax & Financial Professionals, we ensure all your
              financial decisions are made carefully with your best interests
              in mind. Ready to guide you along your path to success.
            </p>
          </div>

          {/* Stats */}

        </div>
      </div>

      {/* Scroll indicator moved to right with text */}
      <div
        className="absolute bottom-8 right-8 flex items-center gap-2 animate-bounce cursor-pointer"
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }
      >
        <span className="text-white font-semibold">Get Started</span>
        <ChevronDown className="text-white" size={30} />
      </div>
    </section>
  )
}