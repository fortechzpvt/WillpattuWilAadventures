"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/basePath";

const specs = [
  {
    title: "Front-Facing Tiered Seating",
    desc: "All seats are arranged in tiered rows, all facing forward. Every guest has a full, unobstructed sightline to wildlife regardless of where they sit.",
    icon: "01",
  },
  {
    title: "Cooler & Refreshments",
    desc: "Chilled drinking water and refreshments are stocked onboard for all-day and multi-night expeditions with no stops or interruptions.",
    icon: "02",
  },
  {
    title: "Custom 4WD Build",
    desc: "Modified suspension and reinforced 4WD drivetrain allow access to deep-zone tracks and villu lake edges that standard safari jeeps cannot physically reach.",
    icon: "03",
  },
  {
    title: "Shade Canopy",
    desc: "Extended full-length overhead canopy protects guests from direct sun, dust, and insects, keeping every safari comfortable from first light to dusk.",
    icon: "04",
  },
  {
    title: "Unrestricted Photography",
    desc: "The open-sided design and panoramic roof give photographers a full 360-degree field of view with no windows, no obstructions and no missed shots.",
    icon: "05",
  },
];

export default function JeepPage() {
  const jeepImageUrl = "/assets/safari-jeep.jpg";
  const jeepVideoUrl = withBasePath("/assets/jeep-bg.mp4");

  return (
    <div className="min-h-screen relative">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
        aria-hidden="true"
      >
        <source src={jeepVideoUrl} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="fixed inset-0 -z-10" style={{ background: "rgba(20,18,12,0.78)" }} aria-hidden="true" />

      {/* Back link */}
      <div className="px-[7%] pt-8">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 font-sans text-[0.78rem] font-semibold text-cream/70 hover:text-gold transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to About
        </Link>
      </div>

      {/* Hero — text left, jeep right */}
      <div className="px-[7%] pt-10 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block border border-cream/30 text-cream/70 font-sans text-[0.6rem] font-bold tracking-[3px] uppercase px-3.5 py-1.5 rounded-sm mb-4"
            >
              Your Vehicle
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-cream leading-[1.15] mb-4"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)" }}
            >
              Safari Jeep Specifications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-[0.92rem] text-cream/75 leading-[1.8] mb-6"
            >
              Custom 6 Seater Toyota Hilux Safari Jeep
              Built on a rugged 6th Gen Toyota Hilux 4x4 platform, this modified safari vehicle accommodates 6 passengers in custom, elevated stadium seating under an open air viewing canopy. It features a tactical matte black finish, high clearance Cooper Discoverer off road tires, a heavy duty front bumper with a recovery winch, and twin auxiliary spotlights for optimal wildlife tracking.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-9 h-0.5 bg-gold origin-left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[12px] overflow-hidden relative w-full" style={{ aspectRatio: "1/1" }}>
              <Image
                src={withBasePath(jeepImageUrl)}
                alt="Tharaka's custom matte-black Toyota Hilux safari jeep"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="mt-3 font-sans text-[0.65rem] font-semibold tracking-[2px] uppercase text-cream/35">
              Custom 4WD Build · Toyota Hilux · Wilpattu National Park
            </p>
          </motion.div>
        </div>
      </div>

      {/* Specs */}
      <div className="px-[7%] pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {specs.map(({ title, desc, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="p-7 rounded-[10px] border border-cream/10 relative overflow-hidden"
              style={{ background: "rgba(20,18,12,0.55)", backdropFilter: "blur(10px)" }}
            >
              <span
                className="absolute top-4 right-5 font-display font-black text-cream/[0.06] leading-none select-none"
                style={{ fontSize: "4rem" }}
                aria-hidden="true"
              >
                {icon}
              </span>
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h3 className="font-display font-bold text-cream mb-3 leading-[1.2]" style={{ fontSize: "1.05rem" }}>
                {title}
              </h3>
              <p className="font-sans text-[0.84rem] text-cream/70 leading-[1.75]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 pt-10 border-t border-cream/15 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <div>
            <p className="font-display font-bold text-cream mb-1" style={{ fontSize: "1.1rem" }}>
              Ready to see it in person?
            </p>
            <p className="font-sans text-[0.84rem] text-cream/65 leading-[1.65]">
              Every safari departs from Wilpattu's main gate. Your vehicle is waiting.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 font-sans text-[0.84rem] font-bold text-dark bg-gold px-7 py-3 rounded-sm hover:bg-[#a07342] transition-colors duration-200"
          >
            Book Your Safari
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
