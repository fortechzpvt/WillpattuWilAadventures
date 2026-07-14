"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { withBasePath } from "@/lib/basePath";

interface Review {
  initials: string;
  name: string;
  from: string;
  text: string;
}

const reviews: Review[] = [
  {
    initials: "JM",
    name: "James Mercer",
    from: "Wildlife Photographer · United Kingdom",
    text: "Tharaka found us three leopards in a single morning, something I had never experienced in 15 years of safaris across Africa. His knowledge of each individual cat's territory is staggering. Wilpattu is now our favourite park in all of Asia.",
  },
  {
    initials: "SH",
    name: "Sophie Hartmann",
    from: "Ornithologist · Germany",
    text: "We came for birds and left speechless. Tharaka identified 67 species across three mornings and positioned the jeep perfectly for photography every single time. The 3-night birding expedition is unmissable for any serious ornithologist.",
  },
  {
    initials: "RC",
    name: "Rajan Chandrasekaran",
    from: "Family Traveller · Singapore",
    text: "No other jeeps, no noise. Just our family and the wilderness. Tharaka tracked a sloth bear mother with cubs for 45 minutes. An experience my children will carry forever. The private format makes all the difference.",
  },
  {
    initials: "EV",
    name: "Elena Vasquez",
    from: "Travel Writer · Spain",
    text: "I have been on safari in Kenya, Botswana, and India. Wilpattu with Tharaka stood above all of them. His encyclopaedic wildlife knowledge and obvious love for this landscape made it the most authentic safari I have ever had.",
  },
  {
    initials: "TK",
    name: "Thomas Kiefer",
    from: "Adventure Traveller · Austria",
    text: "Waking at 4:30 AM to a leopard calling 200 metres away, then being first through the park gate at dawn with Tharaka. That is something money can plan but only Tharaka can actually deliver.",
  },
  {
    initials: "NP",
    name: "Dr. Nadia Petrov",
    from: "Wildlife Researcher · Canada",
    text: "As a wildlife researcher I was sceptical any guide could match my field questions. Tharaka surpassed every expectation. Wilpattu Wild Adventures is the finest specialist wildlife operation I have encountered in Asia.",
  },
  {
    initials: "LW",
    name: "Liam and Fiona Walsh",
    from: "Couple Travellers · Ireland",
    text: "We had visited Yala twice and found it overcrowded. Wilpattu with Tharaka was something else entirely. Silent mornings, no other vehicles, two leopard sightings on our first day. We have already rebooked for next season.",
  },
];

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragRef = useRef({ dragging: false, startX: 0 });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoNearView = useInView(sectionRef, { once: true, margin: "200px" });

  const videoUrl = withBasePath("/assets/reviews-bg.mp4");

  useEffect(() => {
    if (videoNearView) videoRef.current?.play().catch(() => {});
  }, [videoNearView]);

  const cardWidth = useCallback(() => {
    const card = trackRef.current?.querySelector<HTMLDivElement>(".rev-card");
    if (!card) return 380;
    return card.offsetWidth + 20;
  }, []);

  const maxIdx = useCallback(() => {
    if (!trackRef.current) return reviews.length - 1;
    const visible = Math.max(1, Math.floor(trackRef.current.parentElement!.offsetWidth / cardWidth()));
    return Math.max(0, reviews.length - visible);
  }, [cardWidth]);

  const go = useCallback((n: number) => {
    const m = maxIdx();
    const clamped = n < 0 ? m : n > m ? 0 : n;
    setIdx(clamped);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${clamped * cardWidth()}px)`;
    }
  }, [maxIdx, cardWidth]);

  const reset = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(idx + 1), 4500);
  }, [go, idx]);

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx((p) => {
      const next = p >= maxIdx() ? 0 : p + 1;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${next * cardWidth()}px)`;
      }
      return next;
    }), 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [maxIdx, cardWidth]);

  useEffect(() => {
    const handleResize = () => go(idx);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [go, idx]);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative py-[92px] px-[7%] overflow-hidden"
      style={{ background: "rgb(var(--brown-rgb))" }}
    >
      {/* Video background */}
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
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(76,43,18,0.86) 0%, rgba(76,43,18,0.78) 50%, rgba(76,43,18,0.9) 100%)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Heading remains the same */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block border border-gold/30 text-gold font-sans text-[0.6rem] font-bold tracking-[3px] uppercase px-3.5 py-1.5 rounded-sm mb-3.5"
          >
            Verified Guests
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-cream leading-[1.18] mb-3.5"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)" }}
          >
            What Travellers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[0.92rem] text-cream/55 max-w-[520px] mx-auto leading-[1.8]"
          >
            Every review is unedited, from a real guest who explored Wilpattu with Tharaka.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-9 h-0.5 bg-gold mx-auto mt-4 origin-left"
          />
        </div>

        {/* Track and rest of component remains identical */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 cursor-grab active:cursor-grabbing select-none"
            style={{ transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)", willChange: "transform" }}
            onMouseDown={(e) => { dragRef.current = { dragging: true, startX: e.clientX }; if (timerRef.current) clearInterval(timerRef.current); }}
            onMouseUp={(e) => {
              if (!dragRef.current.dragging) return;
              dragRef.current.dragging = false;
              const d = dragRef.current.startX - e.clientX;
              if (Math.abs(d) > 56) go(d > 0 ? idx + 1 : idx - 1);
              reset();
            }}
            onMouseLeave={() => { if (!dragRef.current.dragging) return; dragRef.current.dragging = false; reset(); }}
            onTouchStart={(e) => { dragRef.current.startX = e.touches[0].clientX; if (timerRef.current) clearInterval(timerRef.current); }}
            onTouchEnd={(e) => {
              const d = dragRef.current.startX - e.changedTouches[0].clientX;
              if (Math.abs(d) > 44) go(d > 0 ? idx + 1 : idx - 1);
              reset();
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rev-card flex-shrink-0 rounded-[10px] p-5 sm:p-7 relative"
                style={{
                  minWidth: "min(360px, 82vw)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(245,245,211,0.09)",
                }}
              >
                <span className="absolute top-3.5 right-5 font-display text-gold/[0.08] pointer-events-none select-none leading-none" style={{ fontSize: "5rem" }} aria-hidden="true">&ldquo;</span>
                <div className="flex gap-0.5 mb-3.5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (<span key={i} className="text-gold" style={{ fontSize: "0.92rem" }}>&#9733;</span>))}
                </div>
                <p className="font-sans text-[0.84rem] text-cream/75 leading-[1.78] italic mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3.5">
                  <div className="w-[38px] h-[38px] rounded-full flex-shrink-0 bg-gold text-dark flex items-center justify-center font-sans font-bold text-[0.84rem]">{r.initials}</div>
                  <div>
                    <p className="font-sans text-[0.86rem] font-semibold text-cream">{r.name}</p>
                    <p className="font-sans text-[0.7rem] text-cream/40 mt-0.5">{r.from}</p>
                    <p className="font-sans text-[0.6rem] text-cream/27 mt-0.5 tracking-[0.5px]">Verified Google Review · 5 Stars</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls remain identical */}
        <div className="flex justify-center items-center gap-3 mt-9">
          <button onClick={() => { go(idx - 1); reset(); }} className="w-[42px] h-[42px] rounded-full flex items-center justify-center border border-gold/28 text-gold hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200" style={{ background: "rgba(187,137,84,0.12)" }} aria-label="Previous review">&#8592;</button>
          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => { go(i); reset(); }} aria-label={`Review ${i + 1}`} className="h-1.5 rounded-full transition-all duration-200" style={{ width: i === idx ? 20 : 6, background: i === idx ? "rgb(var(--gold-rgb))" : "rgba(187,137,84,0.22)", borderRadius: i === idx ? 3 : "50%", }} />
            ))}
          </div>
          <button onClick={() => { go(idx + 1); reset(); }} className="w-[42px] h-[42px] rounded-full flex items-center justify-center border border-gold/28 text-gold hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200" style={{ background: "rgba(187,137,84,0.12)" }} aria-label="Next review">&#8594;</button>
        </div>
      </div>
    </section>
  );
}
