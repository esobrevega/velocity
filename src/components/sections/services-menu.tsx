import { services, servicesMenu } from "@/data/services";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import FlowingMenu from "../FlowingMenu";
import { Shield } from "lucide-react";

export const ServicesMenu = () => {
  return (
    <section id="services" className="py-24 bg-[#867343]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-blue-600 text-sm font-medium shadow-sm">
          <Shield className="w-4 h-4 mr-2" />
          Our Expertise
        </div>
        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
          Comprehensive Financial
          <span className="block text-white">
            Services
          </span>
        </h2>
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={servicesMenu} />
      </div>
    </section>
  )
}