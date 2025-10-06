import { services, ServicesProps } from "@/data/services"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    {...props}
  >
    <path d="M52.46,26.64c-1.15.25-4.74.65-9.7-2.41a.5.5,0,0,0-.77.42s0,10,0,13.33c0,2.68.15,20.4-17.16,18.42,0,0-13.68-1-13.68-16.33,0,0,.19-13.8,16.42-15a.51.51,0,0,1,.55.5V32.6a.48.48,0,0,1-.42.49c-1.9.27-9.54,1.8-8.69,8.77a7.19,7.19,0,0,0,7.37,6.3s7,.78,7.32-9V7.94a.51.51,0,0,1,.5-.5h6.88a.5.5,0,0,1,.49.41c.36,2,2.42,9.82,10.8,10.31a.5.5,0,0,1,.48.49v7.51A.48.48,0,0,1,52.46,26.64Z" />
  </svg>
)

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    hoverColor: "hover:text-blue-500",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    hoverColor: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    hoverColor: "hover:text-pink-500",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
    hoverColor: "hover:text-red-500",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: TikTokIcon,
    hoverColor: "hover:text-black",
  },
]

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
              {socialLinks.map(({ name, href, icon: Icon, hoverColor }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${hoverColor}`}
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
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


