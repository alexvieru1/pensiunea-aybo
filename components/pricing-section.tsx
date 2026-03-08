import Image from "next/image";
import { IconCheck, IconStar } from "@tabler/icons-react";
import { ScrollReveal } from "./scroll-reveal";

export function PricingSection() {
  return (
    <section
      id="tarife"
      className="relative overflow-hidden bg-teal-900 py-24 lg:py-32"
    >
      {/* Decorative elements */}
      <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-teal-800/50 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-teal-700/30 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-teal-300">
              Tarife
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              Prețuri{" "}
              <span className="italic text-teal-300">accesibile</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-teal-200/70">
              Confort de top la prețuri competitive. Sunați-ne pentru cele mai
              bune oferte sau rezervați pe Booking.com.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Pricing card */}
          <ScrollReveal delay={100}>
            <div className="rounded-3xl border border-teal-700/50 bg-teal-800/40 p-10 backdrop-blur-sm">
              <div className="mb-2 text-sm font-medium uppercase tracking-widest text-teal-300">
                Apartament cu vedere la lac
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-teal-300/70">de la</span>
                <span className="font-display text-6xl font-bold text-white">
                  350
                </span>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-teal-200">
                    RON
                  </span>
                  <span className="text-xs text-teal-300/60">/ noapte</span>
                </div>
              </div>

              <div className="my-8 h-px bg-teal-700/50" />

              <ul className="space-y-4">
                {[
                  "Living + Dormitor separat",
                  "Vedere la lac",
                  "Bucătărie complet echipată",
                  "Baie privată cu finisaje premium",
                  "WiFi gratuit de mare viteză",
                  "Smart TV cu streaming",
                  "Aer condiționat",
                  "Parcare gratuită inclusă",
                  "Lenjerie și prosoape incluse",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-teal-100">
                    <IconCheck size={20} className="shrink-0 text-teal-400" stroke={2} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+40785203576"
                  className="flex-1 rounded-full bg-white px-6 py-3.5 text-center text-sm font-bold text-teal-900 transition-all duration-300 hover:bg-teal-50 hover:shadow-lg"
                >
                  Sună: 0785 203 576
                </a>
                <a
                  href="https://www.booking.com/hotel/ro/pensiunea-aybo.ro.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-teal-500/30 px-6 py-3.5 text-center text-sm font-semibold text-teal-100 transition-all duration-300 hover:border-teal-400/50 hover:bg-teal-700/30"
                >
                  Booking.com
                </a>
              </div>

              <p className="mt-4 text-center text-xs text-teal-300/50">
                * Prețurile pot varia în funcție de sezon și disponibilitate
              </p>
            </div>
          </ScrollReveal>

          {/* Image side */}
          <ScrollReveal delay={200}>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/living_narrow_2.webp"
                  alt="Interior apartament Pensiunea Aybo"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
