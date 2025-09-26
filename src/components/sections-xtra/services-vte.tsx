import { Users, FileText, Building2, Home, PiggyBank, Shield } from "lucide-react"

const services = [
  { icon: FileText, title: "Tax Services", description: "Expert tax preparation and planning", image: "herobg2.png" },
  { icon: Building2, title: "Small Business", description: "Business solutions to help your company thrive", image: "herobg2.png" },
  { icon: Shield, title: "Insurance", description: "Protect what matters most with insurance planning", image: "herobg2.png" },
  { icon: PiggyBank, title: "Retirement", description: "Strategic retirement planning for a secure future", image: "herobg2.png" },
  { icon: Users, title: "Estate Planning", description: "Preserve and transfer your wealth with confidence", image: "herobg2.png" },
  { icon: Home, title: "Real Estate", description: "Navigate investments and transactions with ease", image: "herobg2.png" }
]

export const ServicesVte = () => {
  return (
    <section id="services" className="py-20 bg-[#f7f9fa] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[#867343] text-sm font-medium shadow-sm">
          <Shield className="w-4 h-4 mr-2" />
          Our Expertise
        </div>
        <h2 className="mt-5 text-3xl lg:text-4xl font-light text-black">
          Discover our financial solutions
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full group">
        <div className="flex animate-marquee w-[200%] space-x-5">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-70 group"
            >
              <div
                className="relative h-80 rounded-xl border border-gray-200 shadow-xl overflow-hidden flex flex-col items-center justify-start px-4 
                           transition-all duration-500 group-hover:[animation-play-state:paused] hover:-translate-y-3 hover:shadow-2xl"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center text-white">
                  <h3 className="font-bold text-lg my-6">{service.title}</h3>
                  <div className="w-20 h-20 mt-2 border border-white/30 rounded-lg shadow-lg flex items-center justify-center bg-white/10 backdrop-blur-sm">
                    <service.icon size={40} className="text-white" />
                  </div>
                  <p className="text-sm opacity-90 mt-6 px-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
