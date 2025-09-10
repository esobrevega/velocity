import { services } from "@/data/services";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

export const Services = () => {
    return(
        <section id="services" className="py-24 px-6 bg-[#E1B995]/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all rounded-xl bg-white">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}