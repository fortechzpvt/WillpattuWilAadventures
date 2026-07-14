"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/lib/tours";
import { withBasePath } from "@/lib/basePath";

export default function ToursSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoNearView = useInView(sectionRef, { once: true, margin: "200px" });

  useEffect(() => {
    if (videoNearView) videoRef.current?.play().catch(() => {});
  }, [videoNearView]);

  // Helper to get the correct image URL based on the tour index
  const getTourImage = (idx: string, originalImage: string) => {
    const customImages: Record<string, string> = {
      "01": "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/_originals_backup/tharaka.jpg",
      "02": "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/bungalow.jpg",
      "03": "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/bird-watching.jpg",
    };
    return customImages[idx] || withBasePath(originalImage);
  };

  return (
    <section id="tours" ref={sectionRef} className="relative py-[92px] px-[7%] overflow-hidden" style={{ background: "#14120c" }}>

      {/* ── Video background ── */}
      {videoNearView && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/safari-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(20,18,12,0.82) 0%, rgba(20,18,12,0.72) 50%, rgba(20,18,12,0.88) 100%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block border border-cream/40 text-cream/85 font-sans text-[0.6rem] font-bold tracking-[3px] uppercase px-3.5 py-1.5 rounded-sm mb-3.5"
          >
            Curated Expeditions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-cream mb-3.5 leading-[1.18]"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)" }}
          >
            Exclusive Wilpattu Expeditions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[0.92rem] text-cream/80 max-w-[520px] mx-auto leading-[1.8]"
          >
            Three distinct expedition types, each privately guided by Tharaka, from first-light leopard tracking to multi-night birding immersions.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-9 h-0.5 bg-gold mx-auto mt-4 origin-left"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tours.map((tour, i) => (
            <motion.article
              key={tour.idx}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[10px] overflow-hidden flex flex-col group
                         hover:shadow-[0_14px_44px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
              style={{ background: "rgba(20,18,12,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(245,245,211,0.09)" }}
            >
              {/* Card header */}
              <div
                className="h-[170px] relative flex flex-col justify-end p-6 overflow-hidden"
                style={!tour.image ? { background: "linear-gradient(150deg, rgba(127,82,53,0.85), rgba(76,43,18,0.9))" } : undefined}
              >
                {tour.image && (
                  <>
                    <Image src={getTourImage(tour.idx, tour.image)} alt={tour.title} fill className="object-cover object-center" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,12,0.82) 0%, rgba(20,18,12,0.3) 100%)" }} aria-hidden="true" />
                  </>
                )}
                <span
                  className="absolute top-5 right-6 font-display font-black text-cream/[0.08] select-none leading-none"
                  style={{ fontSize: "3.5rem" }}
                  aria-hidden="true"
                >
                  {tour.idx}
                </span>
                <p className="font-sans text-[0.58rem] font-bold tracking-[2px] uppercase text-cream/80 mb-1.5 relative z-10">
                  {tour.tag}
                </p>
                <h3 className="font-display font-bold text-cream relative z-10" style={{ fontSize: "1.3rem" }}>
                  {tour.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 flex-1">
                <p className="font-sans text-[0.81rem] text-cream/80 leading-[1.7] mb-4 pb-4" style={{ borderBottom: "1px solid rgba(245,245,211,0.15)" }}>
                  {tour.desc}
                </p>
                <ul className="flex flex-col gap-4">
                  {tour.items.map((item) => (
                    <li key={item.name} className="flex gap-3 items-start">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-sans text-[0.84rem] font-semibold text-cream/90 mb-0.5">{item.name}</p>
                        {item.info && (
                          <p className="font-sans text-[0.73rem] text-cream/75 leading-[1.5]">{item.info}</p>
                        )}
                        {item.badge && (
                          <span className="inline-block mt-1 font-sans text-[0.57rem] font-bold tracking-[1.5px] uppercase text-cream/80 px-2 py-0.5 rounded-sm"
                            style={{ background: "rgba(121,130,98,0.30)" }}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <Link
                  href={`/book/${tour.slug}`}
                  className="block w-full py-3 rounded-sm font-sans text-[0.84rem] font-bold text-dark bg-gold text-center
                             hover:bg-[#a07342] transition-colors duration-200"
                >
                  Select This Package
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
