"use client";

import { motion } from "motion/react";
import { cubicBezier } from "motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Cu vedere la lac, Pensiunea Aybo Hotel Agigea, se află la aproape 10 minute cu mașina de Plaja Eforie Nord. De asemenea, este disponibilă locuri de parcare.

Agigea se află la 25 de minute de mers pe jos, iar atracțiile naturale, precum Eforie Aqua Park, sunt la 4.3 km distanță. Faleza Sud se află la aproximativ 10 minute cu mașina, iar Costineşti este la 17 km. Această casă de oaspeți din Agigea excelentă este situat la câteva minute cu mașina de Lacul Siutghiol. Pensiunea Aybo Hotel se află la 10 minute cu mașina de la Plaja Belona. Pentru cei care călătoresc de la distanță, Aeroportul International Mihail Kogalniceanu se află la 34 de minute de mers cu mașina.

Toate camerele au aer conditionat, în timp ce unele dintre ele vin cu un balcon și o terasă pentru confortul oaspeților. De asemenea, oaspeții pot folosi dușuri, împreună cu facilități precum un uscător de păr și articole de toaletă gratuite.
`;

export function AboutUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 scroll-mt-[50px]" id="despre-noi">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Despre noi</h2>
        <p className="mt-2 text-sm text-neutral-600">
          O pensiune primitoare, aproape de mare și de atracțiile locale.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
        className="grid grid-cols-1 gap-6"
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
        >
          <TextGenerateEffect words={words} />
        </motion.div>
      </motion.div>
    </section>
  );
}
