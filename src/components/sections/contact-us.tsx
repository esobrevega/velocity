"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";

import { useCreateContact } from "@/features/contact/api/use-create-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { createContactSchemaFE } from "@/features/contact/schemas";
import { Textarea } from "../ui/textarea";
import { advServices, AdvServicesProps } from "@/data/services";

export const ContactUs = () => {
  const { mutate, isPending } = useCreateContact();
  // const {data} = useGetServices();

  const form = useForm<z.infer<typeof createContactSchemaFE>>({
    resolver: zodResolver(createContactSchemaFE),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      service: "",
      time: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof createContactSchemaFE>) => {
  const { consent, ...finalValues } = values

  try {
    // Save to Appwrite
    await new Promise((resolve, reject) => {
      mutate(
        { form: finalValues },
        {
          onSuccess: () => resolve(true),
          onError: (err) => reject(err),
        }
      )
    })

    // Send email via Web3Forms
    const formData = new FormData()
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!) // replace this
    formData.append("subject", `New inquiry from ${values.name}`)
    formData.append("name", values.name)
    formData.append("email", values.email)
    formData.append("phoneNumber", values.phoneNumber)
    formData.append("service", values.service)
    formData.append("time",values.time)
    formData.append("message", values.message || "No message provided")

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
    const data = await res.json()

    if (!data.success) throw new Error("Email sending failed")

    form.reset()
  } catch (err) {
    console.error(err)
  }
}

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-[30px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/about.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left side (form) */}
          <div className="lg:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10">
            <h3 className="text-2xl md:text-3xl font-thin text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-8 text-xs">
              Have questions or need assistance? Fill out the form below and we’ll get back to you as soon as possible.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="you@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] text-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Phone Number</FormLabel>
                        <FormControl>
                          <PhoneInput
                            country="us"
                            value={field.value}
                            onChange={(val) => form.setValue("phoneNumber", val)}
                            inputProps={{ name: "phoneNumber", required: true }}
                            containerClass="!w-full"
                            inputClass="!w-full !h-[35px] !py-2 !pl-12 !pr-3 !bg-white !border !border-gray-300 !rounded-lg !focus:ring-2 !focus:ring-[#a08c5c] !transition !text-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Service */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Service Needed</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] text-sm"
                        >
                          <option value="">Select a service</option>
                          {advServices.map((service: AdvServicesProps) => (
                            <option key={service.key} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Time */}
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Best Time to Contact</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g., Weekdays after 5 PM"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Additional Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={3}
                          placeholder="Your message (optional)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a08c5c] resize-none text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Consent */}
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <Input
                          id="consentCheckbox"
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="text-center h-6 w-6 text-[#a08c5c] border-gray-300 rounded focus:ring-[#a08c5c] cursor-pointer"
                        />
                      </FormControl>

                      <div className="space-y-1 text-[10px] text-gray-500 leading-relaxed">
                        <p>
                          I consent to receive text messages about my account or appointments from{" "}
                          <span className="font-semibold text-gray-900">
                            Velocity Tax Express, LLC
                          </span>{" "}
                          at the phone number I provided.
                          Message and data rates may apply. Message frequency varies. Reply{" "}
                          <span className="font-semibold">HELP</span> for assistance or{" "}
                          <span className="font-semibold">STOP</span> to opt out.

                          Please review our{" "}
                          <a
                            href="/coming-soon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#a08c5c] underline hover:text-[#867343]"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />


                {/* Submit */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col gap-6">
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-6 py-5 flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center shrink-0">
                  <card.icon className="text-white" size={26} />
                </div>

                {/* Text */}
                <div className="text-left">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-700 text-sm leading-snug">{card.detail}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const contactCards = [
  {
    title: "Call Us",
    detail: "(623) 387-5086",
    icon: Phone,
    href: "tel:6233875086",
  },
  {
    title: "Email Us",
    detail: "VelocityTaxExpress@gmail.com",
    icon: Mail,
    href: "mailto:VelocityTaxExpress@gmail.com",
  },
  {
    title: "Visit Us",
    detail: "11371 N 145th Ln Surprise, AZ 85379",
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=11371+N+145th+Ln,+Surprise,+AZ+85379",
    external: true,
  },
  {
    title: "Book an appointment",
    detail: "Book an appointment with us — available virtually or in person.",
    icon: CalendarCheck,
    href: "https://cal.com/velocity-tax-express-mnrmwv/vte-appointment",
    external: true
  },
];
