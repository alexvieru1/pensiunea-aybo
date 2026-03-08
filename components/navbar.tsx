"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#despre", label: "Despre Noi" },
  { href: "#galerie", label: "Galerie" },
  { href: "#facilitati", label: "Facilități" },
  { href: "#tarife", label: "Tarife" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* POPAM announcement bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-teal-950/95 px-4 py-1.5 text-xs text-teal-100 backdrop-blur-sm transition-all duration-500 ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <Image
          src="/images/POPAM_logo.webp"
          alt="POPAM 2014-2020"
          width={80}
          height={30}
          className="h-6 w-auto"
        />
        <span className="font-body tracking-wide">
          Proiect cofinanțat prin POPAM 2014–2020
        </span>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-sand-50/95 shadow-sm backdrop-blur-md"
            : "top-8 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Pensiunea Aybo"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <div className="flex flex-col">
              <span
                className={`font-display text-xl font-bold tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-teal-900" : "text-white"
                }`}
              >
                Pensiunea Aybo
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${
                  scrolled ? "text-sand-600" : "text-sand-200"
                }`}
              >
                Agigea • Constanța
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-charcoal-600 hover:text-teal-700"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+40785203576"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-teal-700 text-white hover:bg-teal-800"
                  : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
              }`}
            >
              Sună: 0785 203 576
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Meniu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? `rotate-45 translate-y-2 ${scrolled ? "bg-charcoal-800" : "bg-white"}`
                  : scrolled
                    ? "bg-charcoal-800"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                    ? "bg-charcoal-800"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? `-rotate-45 -translate-y-2 ${scrolled ? "bg-charcoal-800" : "bg-white"}`
                  : scrolled
                    ? "bg-charcoal-800"
                    : "bg-white"
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 bg-sand-50/98 px-6 pb-6 pt-2 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wide text-charcoal-700 transition-colors hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+40785203576"
              className="mt-2 rounded-full bg-teal-700 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Sună: 0785 203 576
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
