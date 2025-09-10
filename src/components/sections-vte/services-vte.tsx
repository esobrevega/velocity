import { Users, FileText, Building2, Home, PiggyBank, ArrowRight, Shield } from "lucide-react"

const services = [
  { icon: FileText, title: "Tax Services", description: "Expert tax preparation and planning" },
  { icon: Building2, title: "Small Business", description: "Business solutions to help your company thrive" },
  { icon: Shield, title: "Insurance", description: "Protect what matters most with insurance planning" },
  { icon: PiggyBank, title: "Retirement", description: "Strategic retirement planning for a secure future" },
  { icon: Users, title: "Estate Planning", description: "Preserve and transfer your wealth with confidence" },
  { icon: Home, title: "Real Estate", description: "Navigate investments and transactions with ease" }
]

export const ServicesVte = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-blue-600 text-sm font-medium shadow-sm">
          <Shield className="w-4 h-4 mr-2" />
          Our Expertise
        </div>
        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
          Comprehensive Financial
          <span className="block bg-gradient-to-r from-[#867343] to-[#a08c5c] bg-clip-text text-transparent">
            Services
          </span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full">
        <div className="flex animate-marquee w-[200%] space-x-5">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72"
            >
              {/* Strip title above */}
              <h3 className="text-center text-black font-bold text-lg mb-2">
                {service.title}
              </h3>

              {/* Thin strip card */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 h-50 flex items-center px-4 space-x-3 hover:shadow-lg transition">
                <div className="w-12 h-12 border rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon size={22} />
                </div>
                <p className="text-gray-700 text-sm text-left line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
