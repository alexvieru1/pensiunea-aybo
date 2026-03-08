import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Termeni și Condiții | Pensiunea Aybo",
  description:
    "Termenii și condițiile de utilizare a site-ului și serviciilor Pensiunea Aybo, Agigea.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-700 transition-colors hover:text-teal-600"
      >
        <IconArrowLeft size={16} stroke={2} />
        Înapoi la pagina principală
      </Link>

      <h1 className="font-display text-4xl font-bold text-charcoal-900">
        Termeni și Condiții
      </h1>
      <p className="mt-2 text-sm text-charcoal-400">
        Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
      </p>

      <div className="prose-charcoal mt-10 space-y-8 text-charcoal-600 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-charcoal-900 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-charcoal-800 [&_strong]:text-charcoal-800">
        <section>
          <h2>1. Informații generale</h2>
          <p className="mt-3 leading-relaxed">
            Prezentul document stabilește termenii și condițiile de utilizare a
            site-ului web al Pensiunii Aybo, situat pe Str. Brizei Nr. 22,
            Agigea, Județul Constanța, România. Prin accesarea și utilizarea
            acestui site, sunteți de acord cu acești termeni.
          </p>
        </section>

        <section>
          <h2>2. Servicii de cazare</h2>
          <p className="mt-3 leading-relaxed">
            Pensiunea Aybo oferă servicii de cazare în apartamente complet
            utilate. Disponibilitatea și tarifele pot varia în funcție de sezon
            și sunt supuse modificărilor fără notificare prealabilă.
          </p>
        </section>

        <section>
          <h2>3. Rezervări</h2>
          <p className="mt-3 leading-relaxed">
            Rezervările pot fi efectuate prin:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              Telefonic la{" "}
              <a
                href="tel:+40785203576"
                className="text-teal-700 underline decoration-teal-300 underline-offset-2"
              >
                0785 203 576
              </a>
            </li>
            <li>
              Prin platforma{" "}
              <a
                href="https://www.booking.com/hotel/ro/pensiunea-aybo.ro.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline decoration-teal-300 underline-offset-2"
              >
                Booking.com
              </a>
            </li>
            <li>Prin formularul de contact de pe acest site</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Formularul de contact de pe site are caracter informativ și nu
            constituie o confirmare automată a rezervării. Rezervarea este
            confirmată doar după comunicarea directă cu personalul pensiunii.
          </p>
        </section>

        <section>
          <h2>4. Check-in și Check-out</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>Check-in:</strong> între orele 14:00 și 22:00
            </li>
            <li>
              <strong>Check-out:</strong> până la ora 11:00
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Programul poate fi ajustat prin înțelegere prealabilă cu
            administrația pensiunii.
          </p>
        </section>

        <section>
          <h2>5. Politica de anulare</h2>
          <p className="mt-3 leading-relaxed">
            Condițiile de anulare depind de modalitatea de rezervare. Pentru
            rezervările efectuate prin Booking.com, se aplică politica de anulare
            afișată pe platformă. Pentru rezervările telefonice, condițiile se
            comunică la momentul confirmării.
          </p>
        </section>

        <section>
          <h2>6. Regulamentul intern</h2>
          <p className="mt-3 leading-relaxed">Oaspeții se obligă să:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Respecte liniștea între orele 22:00 și 08:00</li>
            <li>Mențină curățenia în apartament și spațiile comune</li>
            <li>Nu fumeze în interiorul apartamentelor</li>
            <li>
              Raporteze imediat orice defecțiune sau pagubă produsă în timpul
              sejurului
            </li>
            <li>
              Achite contravaloarea oricăror pagube produse bunurilor pensiunii
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Răspundere</h2>
          <p className="mt-3 leading-relaxed">
            Pensiunea Aybo nu își asumă răspunderea pentru obiectele de valoare
            nesupravegheate ale oaspeților. Recomandăm păstrarea obiectelor
            de valoare în siguranță pe toată durata sejurului.
          </p>
        </section>

        <section>
          <h2>8. Proprietate intelectuală</h2>
          <p className="mt-3 leading-relaxed">
            Toate materialele de pe acest site (texte, imagini, logo-uri,
            design) sunt proprietatea Pensiunii Aybo și sunt protejate de legile
            privind drepturile de autor. Reproducerea fără acord scris este
            interzisă.
          </p>
        </section>

        <section>
          <h2>9. Protecția datelor</h2>
          <p className="mt-3 leading-relaxed">
            Prelucrarea datelor personale se face în conformitate cu{" "}
            <Link
              href="/politica-confidentialitate"
              className="text-teal-700 underline decoration-teal-300 underline-offset-2"
            >
              Politica de Confidențialitate
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>10. Legea aplicabilă</h2>
          <p className="mt-3 leading-relaxed">
            Acești termeni și condiții sunt guvernați de legislația română.
            Orice litigiu va fi soluționat de instanțele competente din
            Constanța, România.
          </p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p className="mt-3 leading-relaxed">
            Pentru întrebări despre acești termeni, ne puteți contacta la:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>Telefon:</strong>{" "}
              <a
                href="tel:+40785203576"
                className="text-teal-700 underline decoration-teal-300 underline-offset-2"
              >
                0785 203 576
              </a>
            </li>
            <li>
              <strong>Adresă:</strong> Str. Brizei Nr. 22, Agigea, Județul
              Constanța, România
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
