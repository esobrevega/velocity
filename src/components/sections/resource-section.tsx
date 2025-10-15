"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calculator, Search, BadgeQuestionMark } from "lucide-react"

export default function ResourcesSection() {
  const resources = [
    {
      title: "Tax Refund Tracker",
      desc: "Check your refund status quickly and easily.",
      icon: <Search className="w-6 h-6 text-[#867343]" />,
      href: "vte/resources#tax-refund",
    },
    {
      title: "Tax Calculator",
      desc: "Estimate your taxes with our built-in tool.",
      icon: <Calculator className="w-6 h-6 text-[#867343]" />,
      href: "/coming-soon",
    },
    {
      title: "Forms, Guides & Quicklinks",
      desc: "Download official tax forms and resources.",
      icon: <FileText className="w-6 h-6 text-[#867343]" />,
      href: "vte/resources#quicklinks",
    },
    {
      title: "Tax FAQs",
      desc: "Find quick answers to common tax questions.",
      icon: <BadgeQuestionMark className="w-6 h-6 text-[#867343]" />,
      href: "vte/resources#faqs",
    },
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Right side - Cards */}
        <motion.div
          className="order-1 md:order-2 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl text-black font-thin mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Resources & Tools
          </motion.h2>

          <motion.p
            className="text-base text-black mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Access helpful tools, calculators, and official tax resources to make managing your taxes simpler and faster.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {resources.map((item, i) => (
              <motion.a
                href={item.href}
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <Card className="hover:shadow-xl hover:border-[#a08c5c]/40 transition rounded-2xl">
                  <CardHeader className="flex items-center space-x-3">
                    {item.icon}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg text-black">
                      {item.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Left side - Image */}
        <motion.div
          className="order-2 md:order-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/resource.jpg"
            alt="Resources"
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto rounded-2xl shadow-lg object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
