"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

const creds = ["Fluent English", "Fluent Sinhala"];

const phones = [
  { display: "077 311 8295", tel: "+94773118295" },
  { display: "076 047 8310", tel: "+94760478310" },
];

const bullets = [
  "Sole operator. You message me, I guide you.",
  "13 years tracking leopards, sloth bears and birds in Wilpattu",
  "Patient guide style suited to photography, families, and researchers",
  "Custom expedition design around your exact wildlife priorities",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-[92px] px-[7%] bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[min(420px,100%)_1fr] gap-12 lg:gap-20 items-start">

          {/* Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -22 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[8px] overflow-hidden aspect-[3/4] bg-rust relative">
              <Image
                src={withBasePath("/assets/tharaka.jpg")}
                alt="Tharaka Rathnayaka, Private Wilpattu Safari Guide"
                fill
                className="object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            {/* Experience badge */}
            <div
              className="absolute -bottom-[18px] -right-[18px] w-[108px] h-[108px] rounded-full bg-gold border-[4px] border-cream
                         flex flex-col items-center justify-center
                         shadow-[0_8px_28px_rgba(187,137,84,0.30)]"
            >
              <strong className="font-display font-black text-cream leading-none" style={{ fontSize: "1.9rem" }}>13+</strong>
              <span className="font-sans text-[0.54rem] font-bold uppercase tracking-[0.5px] text-cream/78 text-center leading-[1.35]">
                Years in<br />Wildlife
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="pt-1"
            initial={{ opacity: 0, x: 22 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[0.67rem] font-bold tracking-[3px] uppercase text-gold mb-2.5">
              Your Personal Guide
            </p>
            <h2
              className="font-display font-bold text-brown leading-[1.18] mb-5"
              style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.3rem)" }}
            >
              Meet Tharaka Rathnayaka
            </h2>

            <p className="font-sans text-[0.9rem] text-dark/74 leading-[1.85] mb-3.5">
              Tharaka is a highly specialized wildlife guide, tracker, and the sole coordinator behind Wilpattu Wild Adventure. With over 13 years of immersive, on the ground experience spent entirely within the borders of Wilpattu National Park, he has developed an intuitive understanding of the ecosystem that no classroom can replicate.
            </p>
            <p className="font-sans text-[0.9rem] text-dark/74 leading-[1.85] mb-3.5">
              Tharaka operates with zero middlemen, third parties, or sub contracted drivers. From your initial booking inquiry to navigating the park gates, he personally manages every detail of your journey, using his own private safari vehicle to ensure top tier comfort and safety.
            </p>
            <p className="font-sans text-[0.9rem] text-dark/74 leading-[1.85] mb-5">
              Driven by his deep experience, he is a highly skillful tracker who knows exactly how to locate and follow the park's wildlife in their natural habitats. When you book a safari, you are securing an elite, one on one guiding experience with a master tracker who is with you for every single kilometer inside Wilpattu.
            </p>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {creds.map((c) => (
                <span
                  key={c}
                  className="font-sans text-[0.67rem] font-semibold text-sage border border-sage/22 bg-sage/10 px-3 py-1 rounded-sm"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-2.5 mb-7">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-[0.87rem] text-dark/74 leading-[1.55]">
                  <span className="w-[18px] h-0.5 bg-gold rounded-sm flex-shrink-0 mt-[8px]" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Jeep link */}
            <Link
              href="/jeep"
              className="flex items-center justify-between w-full px-5 py-4 rounded-[8px] border border-sage/22 bg-sage/5 hover:bg-sage/10 transition-colors duration-200 mb-3"
            >
              <div>
                <p className="font-sans text-[0.86rem] font-semibold text-brown">Safari Jeep Specifications</p>
                <p className="font-sans text-[0.7rem] text-sage font-medium mt-0.5">Custom 4x4 · 6 passenger · Full equipment</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-sage flex-shrink-0" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Direct contact card */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full px-5 py-3.5 rounded-[8px] border border-sage/22 bg-sage/5">
              <p className="font-sans text-[0.7rem] font-semibold text-sage flex-shrink-0">Call Tharaka</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-x-4 sm:gap-y-1">
                {phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="font-sans text-[0.85rem] font-semibold text-brown hover:text-gold transition-colors duration-200 py-1"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
