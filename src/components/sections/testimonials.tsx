"use client"

import { motion } from "framer-motion"
import { ThumbsUp, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "Emily Johnson",
    avatar: "https://i.pravatar.cc/100?img=47",
    company: "Johnson Consulting",
    comment:
      "I’ve been with them for 3 years and they always deliver excellent service. I like that I can just send over my documents, and they take care of the rest. They’re highly professional but also approachable, so I never feel intimidated when asking questions. That level of comfort is rare in financial services.",
  },
  {
    name: "John Smith",
    avatar: "https://i.pravatar.cc/100?img=12",
    company: "Smith Enterprises",
    comment:
      "Velocity Tax Express made my tax filing stress-free. Their team explained everything clearly, step by step, so I always understood what was happening.",
  },
  {
    name: "Michael Davis",
    avatar: "https://i.pravatar.cc/100?img=33",
    company: "Davis Holdings",
    comment:
      "The best financial advice I’ve ever received. They don’t just focus on the short term; they explain how each decision affects my long-term goals. I feel like they genuinely care about my success, not just rushing through the numbers. It’s refreshing to work with a team that puts clients before profits.",
  },
  {
    name: "Sophia Martinez",
    avatar: "https://i.pravatar.cc/100?img=56",
    company: "Martinez & Co.",
    comment:
      "I was nervous about filing my taxes for the first time, but Velocity Tax Express made the experience so simple. They took the time to explain every detail and answer my questions with patience. What impressed me most is that they didn’t treat me like just another client—they made me feel like my case mattered.",
  },
  {
    name: "David Lee",
    avatar: "https://i.pravatar.cc/100?img=22",
    company: "Lee Financial Group",
    comment:
      "Quick, reliable, and always available to answer my questions. I especially appreciate how responsive they are—I can send a message and usually get a clear, detailed reply within the same day. It feels like having a financial expert on call whenever I need one.",
  },
  {
    name: "Olivia Brown",
    avatar: "https://i.pravatar.cc/100?img=36",
    company: "Brown Creative Agency",
    comment:
      "They went above and beyond to help me maximize my returns. Instead of just filling out forms, they explained strategies for saving money and planning for next year. That extra guidance has helped me be more organized with my finances overall. Truly a client-first company that values long-term relationships.",
  },
  {
    name: "James Wilson",
    avatar: "https://i.pravatar.cc/100?img=8",
    company: "Wilson Tech",
    comment:
      "Every interaction has been pleasant and efficient. I especially love their online tools that make uploading and tracking documents so easy. I never have to dig through emails or wonder what’s missing—the portal keeps everything organized. That convenience alone makes their service worth it.",
  },
  {
    name: "Ava Thompson",
    avatar: "https://i.pravatar.cc/100?img=61",
    company: "Thompson Legal",
    comment:
      "I appreciate how transparent and clear they are with their process. They don’t bury you in financial jargon or surprise you with hidden fees. Everything is upfront, straightforward, and tailored to my needs. That honesty has built a lot of trust, and it’s why I keep coming back every year.",
  },
  {
    name: "Liam Anderson",
    avatar: "https://i.pravatar.cc/100?img=41",
    company: "Anderson Group",
    comment:
      "Excellent service! I feel like they genuinely care about helping me grow my financial future. They’ve given me insights into budgeting, investment planning, and tax-saving strategies I never would’ve thought of myself. It feels like more than just a tax service—it feels like having a financial partner.",
  },
  {
    name: "Chloe White",
    avatar: "https://i.pravatar.cc/100?img=65",
    company: "White Realty",
    comment:
      "This is the first time I’ve worked with a tax service that didn’t make me feel rushed or unimportant. They set aside time to go through my paperwork line by line and made sure I understood my options. That personal attention makes a huge difference, especially when it comes to something as stressful as taxes.",
  },
  {
    name: "Ethan Clark",
    avatar: "https://i.pravatar.cc/100?img=19",
    company: "Clark Industries",
    comment:
      "I was referred by a friend and I’m so glad I tried them. Filing taxes used to be my least favorite time of the year, but now it feels manageable. They even followed up after everything was filed to make sure I had no loose ends. That level of service makes me feel valued as a client.",
  },
  {
    name: "Grace Turner",
    avatar: "https://i.pravatar.cc/100?img=77",
    company: "Turner Consulting",
    comment:
      "Their customer support is outstanding. I had a complicated situation with multiple income sources and deductions, but they broke it all down and explained how everything would work. Instead of feeling overwhelmed, I felt confident and informed. I couldn’t have done it without them.",
  },
]

export const TestimonialsVte = () => {
  return (
    <section id="testimonials" className="relative py-20 bg-[#f9f1e6]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-3">
        <h2 className="text-7xl font-thin text-black text-center mb-12">
          What Our Clients Say
        </h2>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border p-6 hover:shadow-lg transition-all break-inside-avoid"
            >
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 px-2 py-2 text-lg">{t.comment}</p>

              {/* Actions */}
              {/* <div className="flex items-center space-x-6 text-gray-500 text-sm mt-3">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <ThumbsUp size={16} /> <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <MessageCircle size={16} /> <span>Reply</span>
                </button>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}
