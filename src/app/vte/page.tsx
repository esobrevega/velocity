"use client";

import { NavBarComb } from '@/components/sections-vte/navbar';
import { HeroXStats } from '@/components/sections-vte/hero-stats';
import { ServicesVte } from '@/components/sections-vte/services-vte';
import { AboutVte } from '@/components/sections-vte/about-vte';
import { ContactUsVte } from '@/components/sections-vte/contact-us-vte';
import { StickyFooter } from '@/components/sections/footer';
import { TestimonialsVte } from '@/components/sections-vte/testimonials';
import { DualHero } from '@/components/sections-vte/dual-hero';
import { TestimonialsScroll } from '@/components/sections-vte/testimonials-infinite-scroll';
import { ContactUs } from '@/components/sections/contact-us';
import { ServicesMenu } from '@/components/sections/services-menu';

export default function VelocityTaxLanding() {
  return (
    <div className="min-h-screen bg-white">
      <NavBarComb />
      <HeroXStats />
      <AboutVte />
      <ServicesMenu />
      <ServicesVte />
      <TestimonialsVte />
      <ContactUs />
      <StickyFooter />
    </div>
  )
}