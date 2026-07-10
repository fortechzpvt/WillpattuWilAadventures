"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Tours",    href: "#tours"   },
  { label: "About",    href: "#about"   },
  { label: "Reviews",  href: "#reviews" },
  { label: "FAQ",      href: "#faq"     },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [hidden, setHidden]        = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);

  // Logo URL from GitHub
  const logoUrl = "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/logo.png";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleNav(href: string) {
    setMenuOpen(false);
    setTimeout(() => scrollTo(href), 80);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.18)] py-3"
            : "py-5"
        } ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"} px-[7%]`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="flex items-center gap-3"
          >
            <Image
              src={logoUrl}
              alt="Wilpattu Wild Adventures"
              width={728}
              height={343}
              className="brightness-0 invert h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navItems.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="font-sans text-[0.73rem] font-bold tracking-[1.5px] uppercase text-white hover:text-gold transition-colors duration-200"
                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.9)" }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="font-sans text-[0.73rem] font-bold tracking-[0.5px] uppercase
                         bg-gold text-dark px-5 py-2 rounded-sm
                         hover:bg-[#a07342] transition-colors duration-200"
            >
              Book Safari
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.25px] w-5" : "w-5"}`} />
            <span className={`block h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.25px] w-5" : "w-3.5 ml-auto"}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 1, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark/97 backdrop-blur-lg flex flex-col justify-between px-8 pt-24 pb-12"
          >
            <nav aria-label="Mobile navigation">
              <ul className="space-y-6">
                {[...navItems, { label: "Book Safari", href: "#contact" }].map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      onClick={() => handleNav(href)}
                      className="font-display font-bold text-4xl tracking-[-0.03em] text-cream/70 hover:text-gold transition-colors duration-200"
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <p className="font-sans text-[0.6rem] text-cream/25 tracking-[2px] uppercase">
              Wilpattu Wild Adventures · Tharaka Rathnayaka
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
