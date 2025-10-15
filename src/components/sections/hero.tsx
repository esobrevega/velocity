import { ChevronDown, TrendingUp } from "lucide-react"
import { Rasa } from "next/font/google"
import { Button } from "../ui/button"

const rasa = Rasa({
  subsets: ["latin"],
  variable: "--font-rasa",
  display: "swap",
})

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 sm:pt-40 min-h-screen flex items-end relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#f3e5d0]"
    >
      {/* Background */}
      <div className="absolute inset-0 m-2 sm:m-3 top-16 sm:top-20">
        <div className="absolute bottom-0 left-0 right-0 rounded-2xl sm:rounded-3xl min-h-5/12 bg-gradient-to-t from-black/90 to-transparent" />
        <img
          src="/herobg.png"
          alt="Background"
          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
        />
      </div>

      {/* Since 2021 badge */}
      <div className="absolute top-24 sm:top-28 left-6 sm:left-10 z-20">
        <Button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-full shadow-md border border-gray-200 hover:bg-white transition text-xs sm:text-sm">
          Since 2021
        </Button>
      </div>

      {/* Content */}
      <div className="max-w-full px-4 sm:px-6 lg:px-8 w-full text-left absolute bottom-8 sm:bottom-12 left-4 sm:left-8">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border rounded-full text-white text-xs sm:text-sm font-medium">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Your Financial Success Partners
            </div>
            <h1
              className={`text-5xl sm:text-5xl lg:text-7xl font-thin text-white`}
            >
              Feel the Velocity Tax Express Difference
            </h1>
            <p className="text-[13.4px] sm:text-md text-gray-100 max-w-md sm:max-w-lg lg:max-w-6xl">
              As your Tax & Financial Professionals, we ensure all your
              financial decisions are made carefully with your best interests
              in mind. Ready to guide you along your path to success.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-1 sm:gap-2 animate-bounce cursor-pointer"
      // onClick={() =>
      // document.getElementById("services")?.scrollIntoView({
      // behavior: "smooth",
      //  block: "start",
      //})
      //}
      >
        <span className="text-white font-semibold text-xs sm:text-sm lg:text-base">
          Get Started
        </span>
        <ChevronDown className="text-white" size={22} />
      </div>
    </section>
  )
}
