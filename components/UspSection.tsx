"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const usps = [
  {
    num: "01",
    title: "Zero Compromises",
    body: "No shared jeep, no group majority vote. Your entire safari is built around your interests, your pace, and your wildlife priorities — only yours.",
  },
  {
    num: "02",
    title: "One Park, Mastered",
    body: "While operators cover 15 parks superficially, Tharaka has spent 13 years exclusively inside Wilpattu — knowing individual leopards, their ranges, and behaviours season by season.",
  },
  {
    num: "03",
    title: "Direct from the Source",
    body: "When you message, Tharaka answers. When you arrive, Tharaka is there. No agency, no middleman, no sub-contracted stranger who does not know the park.",
  },
];

export default function UspSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="usp" className="py-[72px] px-[7%]" style={{ background: "rgb(var(--brown-rgb))" }}>
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {usps.map(({ num, title, body }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={`px-10 py-10 hover:bg-white/[0.03] transition-colors duration-300 ${
              i < usps.length - 1 ? "border-b md:border-b-0 md:border-r border-cream/[0.08]" : ""
            }`}
          >
            <p className="font-display font-black text-gold/22 mb-4" style={{ fontSize: "2.4rem", lineHeight: 1 }}>
              {num}
            </p>
            <h3 className="font-display font-bold text-cream mb-2.5" style={{ fontSize: "1.18rem" }}>
              {title}
            </h3>
            <p className="font-sans text-[0.83rem] text-cream/50 leading-[1.75]">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
