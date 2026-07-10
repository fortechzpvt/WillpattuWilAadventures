"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { tours } from "@/lib/tours";
import { withBasePath } from "@/lib/basePath";
import BookingSection from "@/components/BookingSection";
import BungalowLifeSection from "@/components/BungalowLifeSection";

export default function BookPageContent() {
  const searchParams = useSearchParams();
  const pkg = searchParams.get("pkg");
  const tour = tours.find((t) => t.pkg === pkg) ?? null;

  return (
    <div className="min-h-screen bg-dark relative">

      {/* Back link */}
      <div className="px-[7%] pt-8 relative z-10">
        <Link
          href="/#tours"
          className="inline-flex items-center gap-2 font-sans text-[0.78rem] font-semibold text-cream/70 hover:text-gold transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Expeditions
        </Link>
      </div>

      {/* Package summary */}
      <div className="px-[7%] pt-10 pb-4 max-w-7xl mx-auto">
        {tour ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[10px] overflow-hidden flex flex-col md:flex-row"
            style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(121,130,98,0.18)" }}
          >
            {tour.image && (
              <div className="relative w-full md:w-[300px] h-[200px] md:h-auto flex-shrink-0">
                <Image src={withBasePath(tour.image)} alt={tour.title} fill className="object-cover object-center" />
              </div>
            )}
            <div className="p-8">
              <p className="font-sans text-[0.58rem] font-bold tracking-[2px] uppercase text-gold mb-2">
                {tour.tag}
              </p>
              <h1 className="font-display font-bold text-cream mb-3 leading-[1.18]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}>
                {tour.title}
              </h1>
              <p className="font-sans text-[0.88rem] text-cream/75 leading-[1.75] mb-5">
                {tour.desc}
              </p>
              <ul className="flex flex-col gap-3">
                {tour.items.map((item) => (
                  <li key={item.name} className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-sans text-[0.84rem] font-semibold text-cream/90 mb-0.5">{item.name}</p>
                      {item.detail ? (
                        <p className="font-sans text-[0.73rem] text-cream/75 leading-[1.5]">{item.detail}</p>
                      ) : item.info ? (
                        <p className="font-sans text-[0.73rem] text-cream/75 leading-[1.5]">{item.info}</p>
                      ) : null}
                      {item.benefit && (
                        <p className="font-sans text-[0.73rem] text-gold/90 leading-[1.5] mt-1">
                          <span className="font-semibold">Benefit:</span> {item.benefit}
                        </p>
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
          </motion.div>
        ) : (
          <div className="text-center py-6">
            <h1 className="font-display font-bold text-cream mb-2" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}>
              Book Your Safari
            </h1>
            <p className="font-sans text-[0.88rem] text-cream/65">
              Choose a package below and Tharaka will personally confirm your expedition.
            </p>
          </div>
        )}
      </div>

      {tour?.pkg === "Bungalow Stay" && (
        <div className="px-[7%] pb-3 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 rounded-[10px] p-5 text-center sm:text-left"
            style={{
              background: "linear-gradient(135deg, rgba(216,90,40,0.22), rgba(200,60,30,0.16))",
              border: "2px solid rgba(224,138,95,0.55)",
              boxShadow: "0 0 0 1px rgba(224,138,95,0.15), 0 8px 28px rgba(180,70,40,0.35)",
            }}
          >
            <motion.span
              className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full"
              style={{ background: "rgba(224,138,95,0.22)", color: "#ffb98a", fontSize: "1.4rem" }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              ⚠
            </motion.span>
            <div>
              <p className="font-sans text-[0.68rem] font-bold tracking-[2px] uppercase mb-1" style={{ color: "#ffb98a" }}>
                Important Notice
              </p>
              <p className="font-sans text-[0.94rem] font-bold text-cream leading-[1.5]">
                If you have booked a bungalow please send your booking details , If you want to book a bungalow visit(dwc.lankagate.gov.lk).
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {tour?.pkg === "Bungalow Stay" && <BungalowLifeSection />}

      {/* Bungalow locations map */}
      {tour?.pkg === "Bungalow Stay" && (
        <section
          className="relative py-20 px-[7%] overflow-hidden"
          style={{ background: "linear-gradient(160deg, rgba(127,82,53,0.28), rgba(76,43,18,0.45))" }}
        >
          {/* Top rule, matching the booking section's cinematic divider */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgb(var(--gold-rgb)), transparent)" }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto relative">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <span className="inline-block border border-gold/30 text-gold font-sans text-[0.6rem] font-bold tracking-[3px] uppercase px-3.5 py-1.5 rounded-sm mb-3.5">
                Scattered Across the Wilderness
              </span>
              <h2
                className="font-display font-bold text-cream mb-3.5 leading-[1.18]"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
              >
                Six Bungalows, One Untamed Park
              </h2>
              <p className="font-sans text-[0.9rem] text-cream/60 max-w-[560px] mx-auto leading-[1.8]">
                Each stay is set deep within Wilpattu's boundary, a world away from the nearest town. Explore where every bungalow sits before you choose yours.
              </p>
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="w-9 h-0.5 bg-gold mx-auto mt-4 origin-left"
              />
            </motion.div>

            {/* Combined map — all bungalows as waypoints on one embed */}
            {(() => {
              const queries = tour.items.map((item) => `${item.name}, Wilpattu National Park, Sri Lanka`);
              const encoded = queries.map((q) => encodeURIComponent(q));
              const saddr = encoded[0];
              const daddr = encoded.slice(1).join("+to:");
              const embedSrc = `https://maps.google.com/maps?saddr=${saddr}&daddr=${daddr}&output=embed`;
              const openSrc = `https://www.google.com/maps/dir/${encoded.join("/")}`;

              return (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[10px] overflow-hidden relative mb-6"
                    style={{ background: "rgba(20,18,12,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(245,245,211,0.09)" }}
                  >
                    <div className="relative" style={{ height: 460 }}>
                      <iframe
                        title="All bungalow locations map"
                        src={embedSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "saturate(0.8) contrast(1.08) brightness(0.95)" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between gap-3"
                      style={{ borderTop: "1px solid rgba(245,245,211,0.09)" }}>
                      <p className="font-sans text-[0.78rem] text-cream/60">All six bungalows shown as stops on one map</p>
                      <a
                        href={openSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-2 font-sans text-[0.76rem] font-semibold text-gold hover:text-cream transition-colors duration-200"
                      >
                        Open in Google Maps
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </motion.div>

                  {/* Legend — matches the A/B/C.../numbered stops on the map above */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {tour.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 rounded-[8px] px-4 py-3"
                        style={{ background: "rgba(20,18,12,0.4)", border: "1px solid rgba(245,245,211,0.08)" }}
                      >
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-sans text-[0.68rem] font-bold"
                          style={{ background: "rgba(187,137,84,0.22)", color: "#ffb98a" }}
                        >
                          {i + 1}
                        </span>
                        <p className="font-sans text-[0.78rem] font-semibold text-cream/85 leading-[1.4]">{item.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </>
              );
            })()}

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="font-sans text-[0.68rem] text-cream/35 text-center mt-8 leading-[1.6]"
            >
              Pins are approximate, based on each bungalow's name. Confirm exact directions with Tharaka before travel.
            </motion.p>
          </div>
        </section>
      )}

      {tour?.pkg !== "Bungalow Stay" && (
        <BookingSection defaultPackage={tour?.pkg} />
      )}
    </div>
  );
}
