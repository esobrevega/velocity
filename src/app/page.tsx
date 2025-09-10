"use client";

import { NavBarRound } from "@/components/sections/navbar-round";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { AboutUs } from "@/components/sections/about";
import { StickyFooter } from "@/components/sections/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBarRound />
      <Hero />
      <Services />
      <AboutUs />
      <StickyFooter />
    </main>
  );
}
