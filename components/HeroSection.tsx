"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HeroText() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-block mb-5 border border-white/60 text-white font-sans text-[0.65rem] font-bold tracking-[3.5px] uppercase px-5 py-1.5 rounded-sm" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)", background: "rgba(0,0,0,0.25)" }}>
          Wilpattu's premier safari service
        </span>
      </motion.div>

      <motion.h1
        className="font-display font-black text-cream leading-[1.1] mb-4"
        style={{ fontSize: "clamp(2.2rem, 4.8vw, 4rem)", textShadow: "0 2px 28px rgba(0,0,0,0.5)" }}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        Let's Experience Wilpattu
      </motion.h1>

      <motion.div
        className="flex gap-3 flex-wrap"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={() => scrollTo("#contact")}
          className="font-sans text-[0.85rem] font-semibold bg-gold text-dark px-8 py-3.5 rounded-sm
                     hover:bg-[#a07342] transition-colors duration-200
                     shadow-[0_4px_18px_rgba(187,137,84,0.3)]"
        >
          Book Your Safari
        </button>
        <button
          onClick={() => scrollTo("#tours")}
          className="font-sans text-[0.85rem] font-semibold text-cream
                     border border-cream/40 px-8 py-3.5 rounded-sm
                     hover:border-gold hover:text-gold transition-colors duration-200"
        >
          View Expeditions
        </button>
      </motion.div>
    </>
  );
}

const gradientOverlay = (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{ background: "linear-gradient(to top, rgba(30,28,20,0.88) 0%, rgba(30,28,20,0.3) 55%, transparent 100%)" }}
    aria-hidden="true"
  />
);

export default function HeroSection() {
  const heroImageUrl = "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/hero.jpg";

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ background: "#1a1c16" }}
      aria-label="Hero — Wilpattu Wild Adventures private safari"
    >
      {/* Mobile: fixed-height crop, guarantees the header never overlaps the text */}
      <div className="sm:hidden relative flex flex-col justify-end" style={{ height: 560 }}>
        <div className="absolute inset-0">
          <Image
            src={heroImageUrl}
            alt="Wilpattu National Park wildlife safari landscape"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 68%" }}
          />
        </div>
        {gradientOverlay}
        <div className="relative z-10 px-[7%] max-w-[820px] pb-10">
          <HeroText />
        </div>
      </div>

      {/* Tablet/desktop: original full-image overlay design */}
      <div className="hidden sm:block relative w-full overflow-hidden">
        <Image
          src={heroImageUrl}
          alt="Wilpattu National Park wildlife safari landscape"
          width={2400}
          height={1600}
          priority
          className="w-full h-auto block"
          style={{ marginTop: "-12%" }}
        />
        {gradientOverlay}
        <div className="absolute bottom-[36%] left-0 right-0 z-10 px-[7%] max-w-[820px]">
          <HeroText />
        </div>
      </div>
    </section>
  );
}
