"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

const explore = [
  { label: "Day Safaris",    href: "#tours"   },
  { label: "Bungalow Stays",   href: "#tours"   },
  { label: "Bird Watching",    href: "#tours"   },
  { label: "About Tharaka",   href: "#about"   },
  { label: "Guest Reviews",    href: "#reviews" },
  { label: "FAQ",              href: "#faq"     },
];

const contact = [
  { label: "Location",      value: "Wilpattu National Park, North Western Province, Sri Lanka" },
  { label: "Enquiries",     value: "WhatsApp enquiries welcomed"                               },
  { label: "Response Time", value: "Personal response within 24 hours"                         },
];

const phones = [
  { display: "077 311 8295", tel: "+94773118295" },
  { display: "076 047 8310", tel: "+94760478310" },
];

export default function SiteFooter() {
  const logoUrl = "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/logo.png";

  return (
    <footer style={{ background: "#111310" }} className="px-[7%] pt-14 pb-7">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1.2fr] gap-8 xl:gap-14 mb-11">
          
          {/* Brand */}
          <div>
            <div className="mb-3.5">
              <Image
                src={withBasePath(logoUrl)}
                alt="Wilpattu Wild Adventures logo"
                width={170}
                height={80}
                className="brightness-0 invert h-9 w-auto mb-1.5"
              />
              <p className="font-sans text-[0.56rem] font-semibold tracking-[2.5px] uppercase text-gold">
                Sri Lanka's Premier Private Safari
              </p>
            </div>
            <p className="font-sans text-[0.79rem] text-cream/32 leading-[1.75] max-w-[230px]">
              Exclusively serving Wilpattu National Park. One guide, one park, one extraordinary experience. No group tours. No compromises.
            </p>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-cream/70 mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {explore.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans text-[0.79rem] text-cream/34 hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-cream/70 mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              {contact.map(({ label, value }) => (
                <li key={label}>
                  <p className="font-sans text-[0.62rem] font-bold tracking-[1px] uppercase text-cream/38 mb-0.5">{label}</p>
                  <p className="font-sans text-[0.79rem] text-cream/34 leading-[1.55]">{value}</p>
                </li>
              ))}
              <li>
                <p className="font-sans text-[0.62rem] font-bold tracking-[1px] uppercase text-cream/38 mb-0.5">Phone</p>
                <div className="flex flex-col gap-0.5">
                  {phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="font-sans text-[0.79rem] text-cream/34 hover:text-gold transition-colors duration-200 leading-[1.55]"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between flex-wrap gap-1.5 pt-6 font-sans text-[0.7rem] text-cream/20"
          style={{ borderTop: "1px solid rgba(245,245,211,0.05)" }}
        >
          <span>© 2025 Wilpattu Wild Adventures · Tharaka Rathnayaka · All Rights Reserved</span>
          <span>Wilpattu National Park, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
