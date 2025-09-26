import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "Services", href: "services" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export const NavBarRound = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = link.href;
          }
        }
      });
      setActiveSection(current);

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center transition-colors duration-300">
      <div
        className={`flex items-center justify-between max-w-6xl w-full px-6 py-3 rounded-full shadow-md transition-colors duration-300 ${
          isScrolled ? "bg-[#f2f2f2]/95 backdrop-blur" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          onClick={() => scrollToSection("hero")}
          className="text-lg font-bold text-black cursor-pointer"
        >
          Velocity Tax Express
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`transition-colors ${
                activeSection === link.href
                  ? "text-blue-600 font-semibold underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 shadow-md hover:shadow-[#E1B995]/50"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white">
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-lg text-left transition-colors ${
                      activeSection === link.href
                        ? "text-blue-600 font-semibold underline underline-offset-4"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-6 shadow-md hover:shadow-[#E1B995]/50"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
