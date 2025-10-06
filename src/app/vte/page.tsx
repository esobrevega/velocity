import { Hero } from '@/components/sections/hero';
import { TestimonialsVte } from '@/components/sections/testimonials';
import { ContactUs } from '@/components/sections/contact-us';
import { AboutVteWCU } from '@/components/sections/about-wcu';
import ResourcesSection from '@/components/sections/resource-section';
import ServicesBento from '@/components/sections/services-bento';
import AboutPreviewSection from '@/components/sections/about-company';
import ServicesGrid from '@/components/sections-xtra/services-grid';
import ServicesBento2 from '@/components/sections-xtra/services-bento2';

export default function VelocityTaxLanding() {
  return (
    <div>
      <Hero />
      <AboutVteWCU />
      {/* <ServicesBento /> */}
      <ServicesBento2 />
      <ResourcesSection />
      <TestimonialsVte />
      <AboutPreviewSection />
      <ContactUs />
    </div>
  )
}