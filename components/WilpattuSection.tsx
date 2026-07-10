"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const facts = [
  { value: "131,693", label: "Hectares of Wilderness" },
  { value: "200+",    label: "Bird Species"            },
  { value: "1938",    label: "Established"             },
  { value: "40+",     label: "Mammal Species"          },
];

const photos = [
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/DSC04779.jpg", alt: "Sri Lankan leopard walking through golden grassland", caption: "Sri Lankan Leopard on the prowl" },
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/DSC05483-Enhanced-NR.jpg", alt: "Sloth bear emerging from misty forest at dawn", caption: "Sloth Bear at dawn" },
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/DSCN1617.jpg", alt: "Asian elephant standing at a Wilpattu villu lake", caption: "Asian Elephant at a villu" },
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/DSC05228.jpg", alt: "Sloth bear foraging between trees in golden hour light", caption: "Sloth Bear through the forest" },
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/IMG_8045.jpg", alt: "Leopard resting on sandy ground beneath red-flowering bush", caption: "Leopard beneath flowering forest" },
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/DSC05306.jpg", alt: "Sloth bear close-up in dry grassland", caption: "Sloth Bear in dry grassland" },
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/DSCN1459.jpg", alt: "Leopard face peering through tree branches", caption: "Leopard watching from the trees" },
  { src: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/leopard-resting.jpg", alt: "Close-up of Sri Lankan leopard resting in grass", caption: "Sri Lankan Leopard at rest" },
];

/* Per-photo reveal: overlay wipes left, image scales in behind it */
function GalleryPhoto({ src, alt, caption, delay }: {
  src: string; alt: string; caption: string; delay: number;
}) {
  return (
    <div className="break-inside-avoid mb-3 group cursor-pointer">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative overflow-hidden rounded-[8px]"
      >
        <motion.div
          variants={{
            hidden: { scale: 1.1 },
            visible: { scale: 1 },
          }}
          transition={{ duration: 1.2, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          style={{ background: "rgb(245 245 211)", transformOrigin: "right center" }}
          variants={{
            hidden: { scaleX: 1 },
            visible: { scaleX: 0 },
          }}
          transition={{ duration: 0.75, delay, ease: [0.76, 0, 0.24, 1] }}
        />

        <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(30,28,20,0.75) 0%, transparent 60%)" }}>
          <span className="font-sans text-[0.7rem] font-semibold text-cream tracking-[0.5px] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {caption}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function WilpattuSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="wilpattu" className="py-[92px] px-[7%] bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Two-column layout remains same */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* ... (Keep your existing text/facts JSX here) ... */}
            {/* (Note: I removed the intermediate JSX for brevity, but keep your original structure) */}
        </div>

        {/* ── Wildlife gallery ── */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <p className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-dark/38 whitespace-nowrap">
              Wildlife Gallery · Photographed inside Wilpattu
            </p>
            <motion.div
              className="flex-1 h-px bg-dark/10 origin-left"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {photos.map(({ src, alt, caption }, i) => (
              <GalleryPhoto
                key={src}
                src={src}
                alt={alt}
                caption={caption}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
        {/* ... (Keep your map section) ... */}
      </div>
    </section>
  );
}
