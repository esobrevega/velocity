import { services, ServicesProps } from "@/data/services";
import { Facebook, Linkedin } from "lucide-react";

export const StickyFooter = () => {
  return (
    <footer className="sticky bottom-0 py-12 px-4 bg-gray-700 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold text-white">
                Velocity Tax Express
              </div>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              Your trusted partner for financial and tax services. From taxes to
              retirement planning, we&apos;ve got you covered.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service: ServicesProps) => {
                const Icon = service.icon;
                return (
                  <li key={service.name} className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    {service.name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>VelocityTaxExpress@gmail.com</li>
              <li>Phone: 623-387-5086</li>
              <li>Fax: 866-331-4057</li>
              <li>Free Consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-gray-500 text-sm">
            © 2021 Velocity Tax Express. All rights
            reserved.
          </div>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {/* Links */}
            {["Privacy Policy", "Terms of Service", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {link}
              </a>
            ))}

            
          </div>
        </div>
      </div>
    </footer>
  );
};
