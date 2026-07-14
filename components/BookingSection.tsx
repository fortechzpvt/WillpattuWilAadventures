"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// 1. Define the interface for your props
interface BookingSectionProps {
  defaultPackage?: string;
}

const WHATSAPP_RECIPIENT = "94771878400";

function formatDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// 2. Apply the interface here
export default function BookingSection({ defaultPackage }: BookingSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const bookingBgUrl = "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/booking-bg.jpg";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("fFn") as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem("fLn") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("fEm") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("fPh") as HTMLInputElement).value.trim();
    const country = (form.elements.namedItem("fCo") as HTMLInputElement).value.trim();
    const groupSize = (form.elements.namedItem("fGr") as HTMLInputElement).value.trim();
    const days = (form.elements.namedItem("fDy") as HTMLInputElement).value.trim();
    const pkg = (form.elements.namedItem("fPk") as HTMLSelectElement).value;
    const travelDate = (form.elements.namedItem("fDt") as HTMLInputElement).value;
    const children = (form.elements.namedItem("fCh") as HTMLInputElement).value.trim();
    const notes = (form.elements.namedItem("fNt") as HTMLTextAreaElement).value.trim();

    if (!firstName || !lastName || !email || !phone || !country || !groupSize || !days || !pkg || !travelDate) {
      alert("Please complete all required fields marked with *.");
      return;
    }

    const lines = [
      "New Safari Enquiry",
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Country: ${country}`,
      `Package: ${pkg}`,
      `Group Size: ${groupSize}`,
      `Days: ${days}`,
      `Travel Date: ${formatDate(travelDate)}`,
      `Children: ${children || "None"}`,
      `Notes: ${notes || "None"}`,
    ];

    const url = `https://wa.me/${WHATSAPP_RECIPIENT}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  }

  const inputCls =
    "w-full px-4 py-3 font-sans text-[0.88rem] text-cream placeholder-cream/18 " +
    "bg-cream/5 border border-sage/22 rounded-[5px] outline-none " +
    "focus:border-gold focus:bg-cream/7 transition-colors duration-200";

  return (
    <section
      id="contact"
      className="py-[92px] px-[7%] relative overflow-hidden"
    >
      <Image
        src={bookingBgUrl}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{ background: "rgba(20,18,12,0.68)" }}
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent, rgb(var(--gold-rgb)), transparent)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block border border-gold/30 text-gold font-sans text-[0.6rem] font-bold tracking-[3px] uppercase px-3.5 py-1.5 rounded-sm mb-3.5"
          >
            Start Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-cream leading-[1.18] mb-3.5"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)" }}
          >
            Book Your Private Safari
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[0.92rem] text-cream/55 max-w-[520px] mx-auto leading-[1.8]"
          >
            Complete the form and Tharaka will personally respond within 24 hours to confirm your Wilpattu expedition.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="w-9 h-0.5 bg-gold mx-auto mt-4 origin-left"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[780px] mx-auto rounded-[10px] p-12 border"
          style={{
            background: "rgba(255,255,255,0.035)",
            borderColor: "rgba(121,130,98,0.18)",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <p className="font-sans text-[0.63rem] font-bold tracking-[2px] uppercase text-gold mb-3.5">
              Your Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] pb-6 mb-6" style={{ borderBottom: "1px solid rgba(121,130,98,0.18)" }}>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fFn" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  First Name <span className="text-gold">*</span>
                </label>
                <input id="fFn" name="fFn" type="text" placeholder="e.g. James" required autoComplete="given-name" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fLn" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Last Name <span className="text-gold">*</span>
                </label>
                <input id="fLn" name="fLn" type="text" placeholder="e.g. Mercer" required autoComplete="family-name" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fEm" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input id="fEm" name="fEm" type="email" placeholder="your@email.com" required autoComplete="email" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fPh" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Phone Number <span className="text-gold">*</span>
                </label>
                <input id="fPh" name="fPh" type="tel" placeholder="e.g. +44 7700 900000" required autoComplete="tel" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="fCo" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Country <span className="text-gold">*</span>
                </label>
                <input id="fCo" name="fCo" type="text" placeholder="e.g. United Kingdom" required autoComplete="country-name" className={inputCls} />
              </div>
            </div>

            <p className="font-sans text-[0.63rem] font-bold tracking-[2px] uppercase text-gold mb-3.5">
              Trip Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fPk" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Safari Package <span className="text-gold">*</span>
                </label>
                <select
                  id="fPk"
                  name="fPk"
                  required
                  defaultValue={defaultPackage ?? ""}
                  className={`${inputCls} cursor-pointer appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23BB8954' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: 40,
                  }}
                >
                  <option value="" disabled>Select a package…</option>
                  <option value="Day Safari">Day Safari</option>
                  <option value="Bungalow Stay">Bungalow Stay</option>
                  <option value="Birding Expedition">Birding Expedition</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fDt" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Preferred Travel Date <span className="text-gold">*</span>
                </label>
                <input id="fDt" name="fDt" type="date" required className={inputCls} style={{ colorScheme: "dark" }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fGr" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Group Size <span className="text-gold">*</span>
                </label>
                <input id="fGr" name="fGr" type="number" placeholder="Number of people" min={1} max={20} required className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fDy" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  How Many Days <span className="text-gold">*</span>
                </label>
                <input id="fDy" name="fDy" type="number" placeholder="Number of days" min={1} max={30} required className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="fCh" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Children &amp; Their Ages
                </label>
                <input id="fCh" name="fCh" type="text" placeholder="e.g. 2 children, ages 6 and 9" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="fNt" className="font-sans text-[0.67rem] font-bold tracking-[1.5px] uppercase text-cream/90">
                  Special Requests or Notes
                </label>
                <textarea
                  id="fNt"
                  name="fNt"
                  placeholder="Dietary requirements, wildlife priorities, photography goals, or anything else you would like Tharaka to know…"
                  className={`${inputCls} resize-y min-h-[110px]`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-4 rounded-[5px] font-sans text-[0.95rem] font-bold text-dark bg-gold flex items-center justify-center gap-2.5 hover:bg-[#a07342] transition-colors duration-200 shadow-[0_4px_18px_rgba(187,137,84,0.20)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send Enquiry via WhatsApp
            </button>
            <div className="flex justify-center gap-6 mt-3.5 flex-wrap">
              {["Your details stay private", "Personal response within 24 hours", "No commitment required"].map((note) => (
                <span key={note} className="font-sans text-[0.69rem] text-cream/28 tracking-[0.5px]">{note}</span>
              ))}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
