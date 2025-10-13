import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calculator, Search, BadgeQuestionMark } from "lucide-react"

export default function ResourcesSection() {
  const resources = [
    {
      title: "Tax Refund Tracker",
      desc: "Check your refund status quickly and easily.",
      icon: <Search className="w-6 h-6 text-[#867343]" />,
      href: "vte/resources",
    },
    {
      title: "Tax Calculator",
      desc: "Estimate your taxes with our built-in tool.",
      icon: <Calculator className="w-6 h-6 text-[#867343]" />,
      href: "#",
    },
    {
      title: "Forms, Guides & Quicklinks",
      desc: "Download official tax forms and resources.",
      icon: <FileText className="w-6 h-6 text-[#867343]" />,
      href: "vte/resources",
    },
    {
      title: "Tax FAQs",
      desc: "Find quick answers to common tax questions.",
      icon: <BadgeQuestionMark className="w-6 h-6 text-[#867343]" />,
      href: "#",
    },
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Right side - Cards (show first on mobile) */}
        <div className="order-1 md:order-2 relative z-10">
          <h2 className="text-4xl sm:text-5xl text-black font-thin mb-4">
            Resources & Tools
          </h2>
          <p className="text-base text-black mb-10 max-w-lg">
            Access helpful tools, calculators, and official tax resources to make managing your taxes simpler and faster.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((item, i) => (
              <a href={item.href} key={i}>
                <Card className="hover:shadow-xl transition rounded-2xl">
                  <CardHeader className="flex items-center space-x-3">
                    {item.icon}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Left side - Stock Photo (show second on mobile) */}
        <div className="order-2 md:order-1 flex justify-center">
          <div>
            <img
              src="/resource.jpg"
              alt="Resources"
              className="w-full max-w-[400px] sm:max-w-[500px] h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
