"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

const categories: { title: string; intro?: string; items: string[] }[] = [
  {
    title: "Accommodation",
    items: [
      "Government-owned and managed by the DWC.",
      "Usually 2–5 bedrooms, depending on the bungalow.",
      "Can accommodate 6–10 guests.",
      "Simple beds with mattresses, pillows, and mosquito nets.",
      "Shared bathrooms with basic toilets and showers.",
      "Dining room and common living area.",
      "Large outdoor veranda overlooking the surrounding forest or a villu (natural lake).",
    ],
  },
  {
    title: "Electricity",
    items: [
      "Powered mainly by solar energy.",
      "Limited electricity, especially at night.",
      "Fans are available in most bedrooms.",
      "Charging electronic devices is possible but should be kept to a minimum because power is limited.",
    ],
  },
  {
    title: "Water",
    items: [
      "Running water is available.",
      "Cold-water showers are standard.",
      "Drinking water should be brought with you unless your safari operator provides it.",
    ],
  },
  {
    title: "Meals",
    intro: "Unlike hotels, meals are not automatically provided. Normally:",
    items: [
      "A caretaker stays at the bungalow.",
      "Many bungalows also have a cook.",
      "Visitors bring groceries, and the cook prepares the meals.",
      "Safari operators often arrange all food and cooking as part of a package.",
    ],
  },
  {
    title: "Mobile Signal",
    items: [
      "Weak to moderate.",
      "Some locations have only one or two bars.",
      "Internet is unreliable.",
    ],
  },
];

const wildlifeAnimals = [
  "Sri Lankan Leopard",
  "Sri Lankan Elephant",
  "Sri Lankan Sloth Bear",
  "Mugger Crocodile",
  "Spotted Deer",
  "Sambar Deer",
  "Wild Boar",
];

const comforts = [
  "Clean but basic rooms",
  "Simple furniture",
  "Limited electricity",
  "Natural ventilation",
  "No air conditioning",
  "No television",
  "No Wi-Fi",
  "No swimming pool",
  "Very quiet surroundings",
];

const safetyRules = [
  "Always follow the caretaker's instructions.",
  "Do not leave food outside.",
  "Keep doors closed at night.",
  "Never walk away from the bungalow after sunset.",
  "Wildlife has priority — you are staying in their habitat.",
];

export default function BungalowLifeSection() {
  // Raw GitHub URL for the bungalow background
  const bungalowBgUrl = "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/bungalow.jpg";

  return (
    <section className="relative py-12 px-[7%] overflow-hidden">
      {/* Background photo */}
      <Image
        src={bungalowBgUrl}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(20,18,12,0.88) 0%, rgba(20,18,12,0.82) 50%, rgba(20,18,12,0.9) 100%)" }}
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent, rgb(var(--gold-rgb)), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-7"
        >
          <span className="inline-block border border-gold/30 text-gold font-sans text-[0.56rem] font-bold tracking-[3px] uppercase px-3 py-1 rounded-sm mb-2.5">
            Know Before You Go
          </span>
          <h2
            className="font-display font-bold text-cream mb-2 leading-[1.18]"
            style={{ fontSize: "clamp(1.4rem, 2.3vw, 1.9rem)" }}
          >
            Life at a Wilderness Bungalow
          </h2>
          <p className="font-sans text-[0.8rem] text-cream/60 max-w-[500px] mx-auto leading-[1.6]">
            These are Department of Wildlife Conservation bungalows deep inside the park, not hotels. Here is exactly what to expect.
          </p>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-9 h-0.5 bg-gold mx-auto mt-3 origin-left"
          />
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[8px] p-4"
              style={{ background: "rgba(20,18,12,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(245,245,211,0.09)" }}
            >
              <div className="w-6 h-0.5 bg-gold mb-2.5" />
              <h3 className="font-display font-bold text-cream mb-2" style={{ fontSize: "0.9rem" }}>
                {cat.title}
              </h3>
              {cat.intro && (
                <p className="font-sans text-[0.72rem] text-cream/65 leading-[1.5] mb-2">{cat.intro}</p>
              )}
              <ul className="flex flex-col gap-1.5">
                {cat.items.map((it) => (
                  <li key={it} className="flex gap-2 items-start font-sans text-[0.74rem] text-cream/75 leading-[1.5]">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Wildlife around the bungalow — full width feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[8px] p-5 mb-4"
          style={{ background: "rgba(187,137,84,0.08)", border: "1px solid rgba(187,137,84,0.25)" }}
        >
          <div className="w-6 h-0.5 bg-gold mb-2.5" />
          <h3 className="font-display font-bold text-cream mb-1.5" style={{ fontSize: "0.95rem" }}>
            Wildlife Around the Bungalow
          </h3>
          <p className="font-sans text-[0.76rem] text-cream/75 leading-[1.6] mb-3">
            One of the biggest advantages is that wildlife comes to you. You may see:
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {wildlifeAnimals.map((a) => (
              <span
                key={a}
                className="font-sans text-[0.62rem] font-semibold text-gold border border-gold/25 bg-gold/10 px-2 py-0.5 rounded-sm"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="font-sans text-[0.74rem] text-cream/70 leading-[1.6] mb-3">
            Peacocks, owls, eagles, kingfishers, bee-eaters, and many other birds.
          </p>
          <p className="font-sans text-[0.7rem] text-cream/55 leading-[1.6] italic">
            At night, you may hear elephants, jackals, owls, frogs, and other wildlife moving around the bungalow. Guests are not allowed to wander outside after dark without permission because of the danger from wild animals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Comfort level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[8px] p-4"
            style={{ background: "rgba(20,18,12,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(245,245,211,0.09)" }}
          >
            <div className="w-6 h-0.5 bg-gold mb-2.5" />
            <h3 className="font-display font-bold text-cream mb-2" style={{ fontSize: "0.9rem" }}>
              Comfort Level
            </h3>
            <p className="font-sans text-[0.72rem] text-cream/65 leading-[1.5] mb-2">
              These are not luxury lodges. Expect:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 mb-2">
              {comforts.map((c) => (
                <li key={c} className="flex gap-1.5 items-start font-sans text-[0.74rem] text-cream/75 leading-[1.4]">
                  <span className="text-gold flex-shrink-0">✔</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="font-sans text-[0.7rem] text-cream/55 leading-[1.5] italic">
              The focus is on being immersed in nature rather than modern comforts.
            </p>
          </motion.div>

          {/* Safety — highlighted warning card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[8px] p-4"
            style={{ background: "rgba(180,70,40,0.09)", border: "1px solid rgba(200,100,60,0.3)" }}
          >
            <div className="w-6 h-0.5 mb-2.5" style={{ background: "#c8643c" }} />
            <h3 className="font-display font-bold text-cream mb-2" style={{ fontSize: "0.9rem" }}>
              Safety
            </h3>
            <ul className="flex flex-col gap-1.5">
              {safetyRules.map((r) => (
                <li key={r} className="flex gap-2 items-start font-sans text-[0.74rem] text-cream/80 leading-[1.5]">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "#e08a5f" }}>⚠</span>
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
