"use client";

import { Hero } from '@/components/sections/hero';
import { TestimonialsVte } from '@/components/sections/testimonials';
import { ContactUs } from '@/components/sections/contact-us';
import { AboutVteWCU } from '@/components/sections/about-wcu';
import ResourcesSection from '@/components/sections/resource-section';
import ServicesBento from '@/components/sections/services-bento';
import AboutPreviewSection from '@/components/sections/about-company';

export default function VelocityTaxLanding() {
  return (
    <div>
      <Hero />
      <AboutVteWCU />
      <ServicesBento />
      <ResourcesSection />
      <TestimonialsVte />
      <AboutPreviewSection />
      <ContactUs />
    </div>
  )
}