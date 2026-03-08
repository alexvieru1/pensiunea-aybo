import Image from "next/image";
import {
  IconToolsKitchen2,
  IconBeach,
  IconBuildingSkyscraper,
  IconRipple,
} from "@tabler/icons-react";
import { ScrollReveal } from "./scroll-reveal";

const nearbyLocations = [
  {
    name: "Restaurant & Plaja Golful Pescarilor",
    distance: "3 km",
    icon: IconBeach,
  },
  {
    name: "Costinești",
    distance: "22 km",
    icon: IconBeach,
  },
  {
    name: "Constanța Centru",
    distance: "8 km",
    icon: IconBuildingSkyscraper,
  },
  {
    name: "Lacul Agigea",
    distance: "0.5 km",
    icon: IconRipple,
  },
];

export function AboutSection() {
  return (
    <section id="despre" className="relative isolate overflow-x-clip py-24 lg:py-32">
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-sand-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-teal-700">
              Despre noi
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal-900 sm:text-5xl">
              Bun venit la{" "}
              <span className="italic text-teal-700">Pensiunea Aybo</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <ScrollReveal delay={100}>
            <div className="relative">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src="/images/living_wide.webp"
                  alt="Interior Pensiunea Aybo - Living spațios"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 right-4 rounded-xl bg-teal-700 p-6 text-white shadow-xl lg:-right-6">
                <div className="font-display text-4xl font-bold">6+</div>
                <div className="mt-1 text-sm text-teal-100">
                  Apartamente
                  <br />
                  Premium
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal delay={200}>
            <div className="lg:pl-8">
              <p className="text-lg leading-relaxed text-charcoal-600">
                Situată în <strong className="text-charcoal-800">Agigea</strong>,
                la doar câțiva kilometri de{" "}
                <strong className="text-charcoal-800">Constanța</strong>,
                Pensiunea Aybo este destinația ideală pentru cei care caută
                confort modern cu{" "}
                <strong className="text-charcoal-800">vedere la lac</strong>{" "}
                într-un cadru natural deosebit.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
                Vila noastră nou construită oferă apartamente spațioase,
                complet utilate și mobilate la standarde superioare. Fiecare
                unitate de cazare dispune de{" "}
                <strong className="text-charcoal-800">
                  living, dormitor, bucătărie echipată
                </strong>{" "}
                și baie proprie cu finisaje premium din marmură.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
                Fie că veniți pentru a explora litoralul, pentru a vă bucura de
                priveliștea lacului sau pur și simplu pentru a vă relaxa,
                Pensiunea Aybo vă oferă o experiență de neuitat.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-sand-200 pt-10">
                <div>
                  <div className="font-display text-3xl font-bold text-teal-700">
                    100%
                  </div>
                  <div className="mt-1 text-sm text-charcoal-500">
                    Nou Construit
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-teal-700">
                    4★
                  </div>
                  <div className="mt-1 text-sm text-charcoal-500">
                    Confort Premium
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-teal-700">
                    Lac
                  </div>
                  <div className="mt-1 text-sm text-charcoal-500">
                    Vedere Panoramică
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Nearby locations */}
        <ScrollReveal delay={300}>
          <div className="mt-24 rounded-2xl border border-sand-200/80 bg-white p-8 lg:p-10">
            <h3 className="mb-8 text-center font-display text-2xl font-bold text-charcoal-900">
              În <span className="italic text-teal-700">apropierea</span> noastră
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyLocations.map((loc) => (
                <div
                  key={loc.name}
                  className="flex items-start gap-4 rounded-xl bg-sand-50 p-5"
                >
                  <div className="shrink-0 rounded-lg bg-teal-50 p-2.5 text-teal-700">
                    <loc.icon size={24} stroke={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal-800">
                      {loc.name}
                    </div>
                    <div className="mt-0.5 text-xs font-medium text-teal-600">
                      ~ {loc.distance}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
