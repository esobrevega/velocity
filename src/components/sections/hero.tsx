import { ChevronDown, TrendingUp } from "lucide-react"

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-40 min-h-screen flex items-end relative overflow-hidden bg-slate-200"
    >
      {/* Background */}
      <div className="absolute inset-0 m-3 top-20">
        <div className="absolute bottom-0 left-0 right-0 rounded-3xl min-h-5/12 bg-gradient-to-t from-black/90 to-transparent" />
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