"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FaqSection = () => {
  return (
    <section id="faqs" className="w-full bg-gradient-to-b from-white to-[#f9f1e6] mx-auto px-6 py-20">
      <div className="text-start mb-12">
        <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to some of the most common questions about our services.
        </p>
      </div>

      <Accordion type="single" collapsible className="overflow-visible cursor-pointer">
        <AccordionItem value="item-1" className="border-b border-black py-2">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-[#867343] cursor-pointer">
            How do I book an appointment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            You can easily book an appointment by clicking the{" "}
            <strong>“Book Now”</strong> button at the top of the page. This opens
            our scheduling calendar where you can select your preferred time slot.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b border-black py-2">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-[#867343] cursor-pointer">
            What services do you offer?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            We provide a full range of tax and financial services including tax
            preparation, small business accounting, insurance solutions,
            retirement planning, estate planning, and real estate advisory.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b border-black py-2">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-[#867343] cursor-pointer">
            How can I contact your team?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            You can reach us through the <strong>Contact</strong> section or email us
            directly. We respond promptly during business hours to assist with any
            inquiries or support needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b border-black py-2">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-[#867343] cursor-pointer">
            Are virtual consultations available?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, we offer secure online consultations through our scheduling system.
            Once you book a meeting, you’ll receive a confirmation email with a
            video meeting link.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b border-black py-2">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-[#867343] cursor-pointer">
            What documents should I prepare for my appointment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Bring any relevant tax documents, income statements, and previous tax
            returns. For business clients, financial records and expense reports
            are helpful to ensure accuracy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
