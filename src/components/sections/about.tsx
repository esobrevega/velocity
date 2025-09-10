import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";

export const AboutUs = () => {
    return (
        <section id="about" className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Your Trusted Financial Guide</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At Velocity Tax Express, we are here to guide you through taxes, business, insurance, and real estate.
                        With deep expertise, we simplify complex financial landscapes so you can focus on success.
                    </p>
                    <Button
                        size="lg"
                        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-md hover:shadow-[#E1B995]/50"
                        onClick={() => scrollToSection("contact")}
                    >
                        Schedule a Consultation
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop"
                        alt="Financial Consulting"
                        className="rounded-xl shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    )
}

