import { services, ServicesProps } from "@/data/services"
import { Facebook, Linkedin } from "lucide-react"

export const StickyFooter = () => {
  return (
    <footer className="sticky bottom-0 bg-gray-700 text-gray-400 z-10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">
                Velocity Tax Express
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Your trusted partner for financial and tax services. From taxes to
              retirement planning, we&apos;ve got you covered.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service: ServicesProps) => {
                const Icon = service.icon
                return (
                  <li key={service.name} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{service.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>VelocityTaxExpress@gmail.com</li>
              <li>Phone: 623-387-5086</li>
              <li>Fax: 866-331-4057</li>
              <li>Free Consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
          <div className="text-xs md:text-sm text-center md:text-left">
            © 2021 Velocity Tax Express. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {["Privacy Policy", "Terms of Service", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-blue-400 transition-colors text-xs md:text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
