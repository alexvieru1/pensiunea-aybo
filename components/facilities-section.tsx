import {
  IconBuildingEstate,
  IconWifi,
  IconDeviceTv,
  IconSnowflake,
  IconParking,
  IconSunHigh,
  IconFlame,
  IconSparkles,
} from "@tabler/icons-react";
import { ScrollReveal } from "./scroll-reveal";

const facilities = [
  {
    icon: IconBuildingEstate,
    title: "Apartamente Complet Utilate",
    description:
      "Fiecare apartament include living, dormitor, bucătărie complet echipată și baie privată cu finisaje premium.",
  },
  {
    icon: IconWifi,
    title: "WiFi Gratuit",
    description:
      "Internet wireless de mare viteză disponibil gratuit în toate apartamentele și spațiile comune.",
  },
  {
    icon: IconDeviceTv,
    title: "Smart TV",
    description:
      "Televizor cu ecran plat în fiecare cameră cu acces la canale prin cablu și platforme de streaming.",
  },
  {
    icon: IconSnowflake,
    title: "Aer Condiționat",
    description:
      "Sistem de climatizare în fiecare apartament pentru confort optim indiferent de sezon.",
  },
  {
    icon: IconParking,
    title: "Parcare Gratuită",
    description:
      "Loc de parcare privat, gratuit, disponibil pentru toți oaspeții, în incinta pensiunii.",
  },
  {
    icon: IconSunHigh,
    title: "Balcon / Terasă",
    description:
      "Unele apartamente beneficiază de balcon sau terasă privată cu vedere panoramică.",
  },
  {
    icon: IconFlame,
    title: "Încălzire Centrală",
    description:
      "Sistem de încălzire centrală modern pentru sejururi confortabile pe tot parcursul anului.",
  },
  {
    icon: IconSparkles,
    title: "Curățenie Impecabilă",
    description:
      "Standarde ridicate de curățenie și igienă. Lenjerie și prosoape de calitate superioară incluse.",
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilitati" className="relative overflow-x-clip py-24 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23167070' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-teal-700">
              Facilități
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal-900 sm:text-5xl">
              Tot ce aveți{" "}
              <span className="italic text-teal-700">nevoie</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-charcoal-500">
              Pensiunea Aybo pune la dispoziția oaspeților săi o gamă completă de
              facilități pentru un sejur perfect.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-sand-200/80 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50">
                <div className="mb-5 inline-flex rounded-xl bg-teal-50 p-3 text-teal-700 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <f.icon size={28} stroke={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {f.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
