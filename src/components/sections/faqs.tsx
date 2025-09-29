"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Velocity Tax Express offer?",
    answer:
      "We provide tax preparation, retirement planning, bookkeeping, payroll, and other financial consulting services tailored to your needs.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a free consultation to discuss your financial goals and determine the best way to help you.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our website’s contact form or by calling us directly at 623-387-5086.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our office is located in [Your Location]. We also provide virtual services so we can help you no matter where you are.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="faqs">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
