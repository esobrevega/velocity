import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-[30px]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left side (form) */}
          <div className="lg:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-10">
              Have questions or need assistance? Fill out the form below and
              we’ll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] focus:border-transparent transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] focus:border-transparent transition"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] focus:border-transparent transition"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] focus:border-transparent resize-none transition"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>

          {/* Right side (contact cards) */}
          <div className="flex flex-col gap-6">
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center mb-4">
                  <card.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{card.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact card config
const contactCards = [
  {
    title: "Call Us",
    detail: "(623) 387-5086",
    icon: Phone,
    href: "tel:6233875086",
  },
  {
    title: "Email Us",
    detail: "VelocityTaxExpress@gmail.com",
    icon: Mail,
    href: "mailto:VelocityTaxExpress@gmail.com",
  },
  {
    title: "Visit Us",
    detail: "11371 N 145th Ln\nSurprise, AZ 85379",
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=11371+N+145th+Ln,+Surprise,+AZ+85379",
    external: true,
  },
]
