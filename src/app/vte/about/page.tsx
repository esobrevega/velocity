"use client";

import Image from "next/image";
import { ArrowUpRight, Check, Languages, ShieldCheck, Users, Heart } from "lucide-react";

import { ContactUs } from "@/components/sections/contact-us";

const teamMembers = [
  {
    name: "Melani",
    languages: "English • Tagalog",
    bio: "Tax Professional, Bookkeeper / Accountant / Payroll Specialist and Life & Health Insurance Agent",
    image: "/mel_allen.jpg",
  },
  {
    name: "Crystal",
    languages: "English • Spanish",
    bio: "Tax Professional and Life & Health Insurance Agent",
    image: "/crystal-mata.JPG",
  },
  {
    name: "Monica",
    languages: "English • Spanish",
    bio: "Tax Professional, Real Estate Agent, Life & Health Insurance Agent, Business Consultant, Legal Document Preparer and Notary Public",
    image: "/monica1.jpg",
  },
  {
    name: "Mila",
    languages: "English • Tagalog • Ilocano",
    bio: "Tax Professional, Real Estate Agent, Life & Health / Medicare Insurance Agent, Notary Public and Military Veteran",
    image: "/mila1.JPG",
  },
  {
    name: "Joseph",
    languages: "English • Tagalog • Ilocano",
    bio: "Tax Professional, Real Estate Agent, Life & Health / Medicare Insurance Agent",
    image: "/joseph.JPG",
  },
  {
    name: "Angelica",
    languages: "English • Spanish",
    bio: "Tax Professional & Notary Public",
    image: "/angelica.jpg",
  },
  {
    name: "Jeng",
    languages: "English • Tagalog • Ilocano",
    bio: "Tax Professional, Life & Health Insurance Agent",
    image: "/jeng.JPG",
  },
];

const services = [
  "Tax Preparation",
  "Accounting & Bookkeeping",
  "Payroll Services",
  "Life & Health Insurance",
  "Medicare Insurance",
  "Real Estate Services",
  "Business Consulting",
  "Notary Services",
];

const values = [
  {
    number: "01",
    title: "Personal Attention",
    description:
      "Every client has a different financial story. We take the time to understand your needs and provide service that feels personal, not transactional.",
  },
  {
    number: "02",
    title: "Professional Expertise",
    description:
      "Our team brings experience across tax preparation, accounting, insurance, real estate, business services, and more.",
  },
  {
    number: "03",
    title: "Integrity First",
    description:
      "We believe trust is earned through transparency, honesty, attention to detail, and responsible guidance.",
  },
  {
    number: "04",
    title: "Long-Term Relationships",
    description:
      "We want to be more than a once-a-year tax appointment. Our goal is to become a dependable resource throughout the year.",
  },
];

const audiences = [
  {
    title: "Individuals & Families",
    description:
      "Personal tax and financial services designed around your unique circumstances and goals.",
  },
  {
    title: "Small Businesses",
    description:
      "Practical support to help business owners stay organized, informed, and financially prepared.",
  },
  {
    title: "Real Estate Professionals",
    description:
      "Services that understand the financial considerations that come with real estate and property ownership.",
  },
  {
    title: "Military & Veterans",
    description:
      "Dedicated service from professionals who understand the importance of serving those who have served.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#25231f]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[#f9f1e6]">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#867343]/15" />
        <div className="absolute -right-20 top-40 h-[360px] w-[360px] rounded-full border border-[#867343]/10" />

        <div className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-32 lg:px-10">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="mb-7 text-sm font-medium uppercase tracking-[0.3em] text-[#867343]">
                About Velocity Tax Express
              </p>

              <h1 className="max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">
                More than
                <span className="block font-normal text-[#867343]">
                  tax preparation.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
                We are a team of professionals committed to helping individuals,
                families, and businesses make confident financial decisions with
                personal service, practical guidance, and integrity.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#867343]/30 bg-white/50 px-5 py-2.5 text-sm">
                  Tax Services
                </span>
                <span className="rounded-full border border-[#867343]/30 bg-white/50 px-5 py-2.5 text-sm">
                  Accounting
                </span>
                <span className="rounded-full border border-[#867343]/30 bg-white/50 px-5 py-2.5 text-sm">
                  Insurance
                </span>
                <span className="rounded-full border border-[#867343]/30 bg-white/50 px-5 py-2.5 text-sm">
                  Business Services
                </span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full border border-[#867343]/20" />
                <div className="absolute -inset-16 rounded-full border border-[#867343]/10" />

                <div className="relative h-72 w-72 overflow-hidden rounded-full border-[6px] border-[#867343] bg-white shadow-2xl sm:h-96 sm:w-96">
                  <Image
                    src="/logo-vte.png"
                    alt="Velocity Tax Express"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div className="absolute -bottom-5 -left-8 rounded-2xl border border-black/5 bg-white px-6 py-4 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Built on
                  </p>
                  <p className="mt-1 font-medium text-[#867343]">
                    Trust & Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / STORY
      ========================================================= */}
      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#867343]">
                Who We Are
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Financial services with a human touch.
              </h2>
            </div>

            <div className="max-w-3xl space-y-7 text-lg leading-8 text-neutral-600">
              <p>
                At Velocity Tax Express, we believe financial services should
                feel personal, understandable, and accessible.
              </p>

              <p>
                Your financial life rarely fits neatly into one category.
                Sometimes you need help preparing your taxes. Sometimes you
                need bookkeeping, payroll, insurance, real estate guidance, or
                support for your business.
              </p>

              <p>
                That&apos;s why our team brings together professionals with
                experience across multiple areas of financial and professional
                services. Our goal is simple: to provide dependable guidance
                while building relationships that last beyond tax season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE SERVE
      ========================================================= */}
      <section className="bg-[#25231f] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d5c79e]">
              Who We Serve
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
              Different needs.
              <span className="block text-[#d5c79e]">
                One trusted team.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Whether you&apos;re managing your household finances or building a
              growing business, we&apos;re here to help you navigate the details.
            </p>
          </div>

          <div className="grid border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className="group border-b border-r border-t border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.04] lg:border-b-0"
              >
                <span className="text-sm text-[#d5c79e]">
                  0{index + 1}
                </span>

                <h3 className="mt-16 text-xl font-medium">
                  {audience.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  {audience.description}
                </p>

                <ArrowUpRight className="mt-8 h-5 w-5 text-[#d5c79e] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MORE THAN TAX
      ========================================================= */}
      <section className="bg-[#f9f1e6] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#867343]">
                Our Expertise
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                More than tax.
                <span className="block font-normal">
                  More ways to help.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-neutral-600">
                Your financial needs can change throughout the year. Our
                services are designed to give you access to professional
                support when those needs arise.
              </p>
            </div>

            <div className="grid border-t border-[#867343]/20 sm:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center justify-between border-b border-[#867343]/20 py-6 pr-3"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-[#867343]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-medium">
                      {service}
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-[#867343]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#867343]">
              What We Believe
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
              Our approach is simple.
            </h2>
          </div>

          <div className="grid border-t border-neutral-200 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="group border-b border-neutral-200 p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm text-[#867343]">
                    {value.number}
                  </span>

                  <Check className="h-5 w-5 text-[#867343] opacity-50 transition-opacity group-hover:opacity-100" />
                </div>

                <h3 className="mt-12 text-2xl font-medium">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LANGUAGES
      ========================================================= */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#867343] px-8 py-14 text-white sm:px-14 lg:px-20 lg:py-20">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.25em] text-white/70">
                    Communication Matters
                  </span>
                </div>

                <h2 className="mt-6 max-w-2xl text-4xl font-light leading-tight sm:text-5xl">
                  Financial services that speak your language.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
                  Clear financial guidance starts with clear communication.
                  Our multilingual team helps clients feel comfortable asking
                  questions, understanding their options, and making informed
                  decisions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
                {["English", "Español", "Tagalog", "Ilocano"].map(
                  (language) => (
                    <span
                      key={language}
                      className="rounded-full border border-white/20 px-5 py-2.5 text-sm"
                    >
                      {language}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST / COMMITMENT
      ========================================================= */}
      <section className="bg-[#f9f1e6] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <ShieldCheck className="mx-auto h-9 w-9 text-[#867343]" />

          <p className="mt-7 text-sm font-medium uppercase tracking-[0.3em] text-[#867343]">
            Our Commitment
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            We take your trust seriously.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Financial decisions can have a lasting impact on you, your family,
            and your business. That&apos;s why we approach our work with care,
            attention to detail, professionalism, and a commitment to serving
            our clients&apos; best interests.
          </p>
        </div>
      </section>

      {/* =========================================================
          MEET THE TEAM
      ========================================================= */}
      {/* <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#867343]">
                The People Behind VTE
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
                Meet the team.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-neutral-600 lg:justify-self-end">
              Behind every return, policy, business decision, and financial
              question is a team of professionals committed to helping our
              clients move forward with confidence.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group ${
                  index === 3 ? "lg:translate-y-12" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f1e9dc]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="text-xs text-white/80">
                      {member.languages}
                    </p>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#867343]">
                        {member.languages}
                      </p>
                    </div>

                    <span className="text-xs text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}
      <section className="border-t border-neutral-200 bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Heart className="h-7 w-7 text-[#867343]" />

              <h2 className="mt-7 max-w-4xl text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Professional service.
                <span className="block text-[#867343]">
                  Personal attention.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-neutral-500 lg:text-right">
              We&apos;re here to help you navigate the numbers, understand your
              options, and plan with greater confidence.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <ContactUs />
    </main>
  );
}