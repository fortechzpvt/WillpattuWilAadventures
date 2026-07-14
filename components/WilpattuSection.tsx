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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block border border-sage/22 text-sage font-sans text-[0.6rem] font-bold tracking-[3px] uppercase px-3.5 py-1.5 rounded-sm mb-4"
            >
              About the Park
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-brown leading-[1.18] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)" }}
            >
              Wilpattu National Park
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[0.9rem] text-dark/72 leading-[1.85] mb-4">
                Wilpattu National Park is Sri Lanka's largest and oldest national park, located along the northwest coast. Its name means "Land of Lakes" in Sinhala, a reference to the natural lakes called <em className="not-italic font-semibold text-brown">villus</em> that define its unique landscape.
              </p>
              <p className="font-sans text-[0.9rem] text-dark/72 leading-[1.85] mb-4">
                Unlike the crowded Yala in the south, Wilpattu remains relatively undiscovered, offering vast, silent wilderness where leopards roam freely across open scrub, sloth bears forage undisturbed, and elephants move through ancient dry-zone forest.
              </p>
              <p className="font-sans text-[0.9rem] text-dark/72 leading-[1.85]">
                The park's network of villu lakes attracts an extraordinary concentration of wildlife at water's edge, making it one of the finest leopard-viewing destinations in all of Asia and a paradise for birders seeking Sri Lanka's resident and migratory species.
              </p>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-9 h-0.5 bg-gold mt-8 origin-left"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 22 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col justify-center p-8 rounded-[10px] border border-sage/20"
                style={{ background: "rgba(121,130,98,0.06)" }}
              >
                <span
                  className="font-display font-black text-brown mb-2 leading-none"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                >
                  {value}
                </span>
                <span className="font-sans text-[0.75rem] text-dark/55 leading-[1.4] uppercase tracking-[1px]">
                  {label}
                </span>
              </div>
            ))}
            <div
              className="col-span-2 p-6 rounded-[10px]"
              style={{ background: "linear-gradient(135deg, rgb(var(--brown-rgb)), rgb(var(--rust-rgb)))" }}
            >
              <p className="font-display font-bold text-cream mb-1" style={{ fontSize: "1.1rem" }}>
                Sri Lanka's Leopard Capital
              </p>
              <p className="font-sans text-[0.82rem] text-cream/65 leading-[1.65]">
                Wilpattu holds one of the highest densities of Sri Lankan leopards (<em className="not-italic font-semibold text-cream/85">Panthera pardus kotiya</em>) anywhere in the world, a subspecies found nowhere else on earth.
              </p>
            </div>
          </motion.div>
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

        {/* ── Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-dark/38">
              Park Location · North Western Province, Sri Lanka
            </p>
            <a
              href="https://www.google.com/maps/place/Wilpattu+National+Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.72rem] text-sage hover:text-brown transition-colors duration-200 underline underline-offset-2"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="w-full rounded-[10px] overflow-hidden border border-sage/20" style={{ height: 380 }}>
            <iframe
              title="Wilpattu National Park map"
              src="https://maps.google.com/maps?q=Wilpattu+National+Park,+Sri+Lanka&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
