import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { scrollToSection } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden bg-gradient-to-b from-white to-[#E1B995]/40"
    >
      {/* Finance-themed pattern using ::before */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23b68a5a'%3E
            <text x='10' y='35' font-size='28'>$</text>
            <rect x='50' y='10' width='28' height='28' rx='4' ry='4'/>
            <rect x='20' y='60' width='50' height='20' rx='3' ry='3'/>
          %3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#E1B995]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-semibold tracking-tight"
      >
        FEEL THE{" "}
        <span className="text-[#E1B995]">VELOCITY TAX EXPRESS</span>{" "}
        DIFFERENCE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-6 max-w-2xl text-lg text-gray-700"
      >
        Providing unparalleled personalized tax services. As your Tax &
        Financial Professionals, we ensure your decisions are made with
        clarity and your best interests in mind.
      </motion.p>

      <div className="mt-8 flex gap-4">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-md hover:shadow-[#E1B995]/50"
          onClick={() => scrollToSection("contact")}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full px-6 border-gray-400 text-gray-900 hover:border-[#E1B995] hover:text-blue-600"
          onClick={() => scrollToSection("about")}
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};
