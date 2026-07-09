"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "When is the best time to visit Wilpattu National Park?",
    a: "The dry season from February to October offers the best wildlife visibility. Water levels in the villu lakes drop, concentrating animals around fewer water sources and making sightings far more predictable. Tharaka will advise on timing based on your specific wildlife priorities.",
  },
  {
    q: "How is a private safari different from a shared group tour?",
    a: "In a private safari there are zero other guests in the jeep. Tharaka sets the pace entirely around your group. You stop as long as you want, go where you want, and never follow a route designed for strangers. When a leopard appears, you have unlimited time to photograph without a convoy of other vehicles forming behind you.",
  },
  {
    q: "How far in advance should I book?",
    a: "Since Tharaka operates as a sole guide, only one group can be accommodated per slot. During peak season (March to September) we recommend booking 4 to 8 weeks in advance. Last-minute bookings are sometimes possible in off-peak months. WhatsApp Tharaka to check availability.",
  },
  {
    q: "Is Wilpattu safe for families with young children?",
    a: "Yes, Wilpattu is one of the safest parks in Sri Lanka for families, and Tharaka has extensive experience guiding groups with young children. The jeep provides safe, comfortable viewing and Tharaka's patient, story-driven guide style keeps children engaged throughout.",
  },
  {
    q: "Do you guarantee leopard sightings?",
    a: "No ethical operator can guarantee specific sightings, nature is wild. What Tharaka guarantees is 13 years of on-the-ground tracking knowledge applied to position you in exactly the right place at the right time. Leopard sighting rates on private Wilpattu safaris with Tharaka are significantly above average.",
  },
  {
    q: "What should I bring on a Wilpattu safari?",
    a: "Neutral earth-toned clothing, sun protection (hat and SPF), binoculars if available, a camera with zoom lens, insect repellent, and a refillable water bottle. The jeep has charging ports for all devices. Tharaka sends a detailed preparation guide with every booking confirmation.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border rounded-[8px] overflow-hidden transition-colors duration-200"
      style={{
        borderColor: open ? "rgba(187,137,84,0.2)" : "rgba(121,130,98,0.18)",
      }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-[18px] text-left hover:bg-white/[0.02] transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-sans text-[0.9rem] font-medium text-cream leading-[1.45] pr-3">{q}</span>
        <span
          className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center font-sans text-[0.9rem] transition-all duration-300"
          style={{
            background: open ? "rgb(var(--gold-rgb))" : "rgba(187,137,84,0.14)",
            color: open ? "rgb(var(--dark-rgb))" : "rgb(var(--gold-rgb))",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="font-sans text-[0.84rem] text-cream/55 leading-[1.78] px-5 pb-[18px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="py-[92px] px-[7%]" style={{ background: "rgb(var(--dark-rgb))" }}>
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block border border-gold/30 text-gold font-sans text-[0.6rem] font-bold tracking-[3px] uppercase px-3.5 py-1.5 rounded-sm mb-3.5"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-cream leading-[1.18] mb-3.5"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[0.92rem] text-cream/55 max-w-[520px] mx-auto leading-[1.8]"
          >
            Cannot find your answer? WhatsApp Tharaka directly. Responses within 24 hours.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="w-9 h-0.5 bg-gold mx-auto mt-4 origin-left"
          />
        </div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px] mx-auto flex flex-col gap-2.5"
        >
          {faqs.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
        </motion.div>

      </div>
    </section>
  );
}
