import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Pensiunea Aybo",
  description:
    "Politica de confidențialitate și protecția datelor personale - Pensiunea Aybo, Agigea.",
};

export default function PrivacyPolicyPage() {
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
        Politica de Confidențialitate
      </h1>
      <p className="mt-2 text-sm text-charcoal-400">
        Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
      </p>

      <div className="prose-charcoal mt-10 space-y-8 text-charcoal-600 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-charcoal-900 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-charcoal-800 [&_strong]:text-charcoal-800">
        <section>
          <h2>1. Introducere</h2>
          <p className="mt-3 leading-relaxed">
            Pensiunea Aybo, cu sediul pe Str. Brizei Nr. 22, Agigea, Județul
            Constanța, România, se angajează să protejeze confidențialitatea
            datelor dumneavoastră personale, în conformitate cu Regulamentul
            General privind Protecția Datelor (GDPR) - Regulamentul (UE)
            2016/679.
          </p>
        </section>

        <section>
          <h2>2. Datele pe care le colectăm</h2>
          <p className="mt-3 leading-relaxed">
            Prin intermediul formularului de contact de pe site, putem colecta
            următoarele date personale:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Numele complet</li>
            <li>Adresa de email</li>
            <li>Numărul de telefon (opțional)</li>
            <li>Conținutul mesajului transmis</li>
          </ul>
        </section>

        <section>
          <h2>3. Scopul prelucrării datelor</h2>
          <p className="mt-3 leading-relaxed">
            Datele personale sunt prelucrate exclusiv în scopul:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Răspunderii la solicitările și întrebările dumneavoastră</li>
            <li>Procesării cererilor de rezervare</li>
            <li>Comunicării informațiilor solicitate despre serviciile noastre</li>
          </ul>
        </section>

        <section>
          <h2>4. Temeiul legal</h2>
          <p className="mt-3 leading-relaxed">
            Prelucrarea datelor se bazează pe{" "}
            <strong>consimțământul dumneavoastră</strong> (Art. 6 alin. 1 lit. a
            GDPR), exprimat prin completarea și trimiterea formularului de
            contact, precum și pe{" "}
            <strong>interesul nostru legitim</strong> (Art. 6 alin. 1 lit. f
            GDPR) de a răspunde solicitărilor primite.
          </p>
        </section>

        <section>
          <h2>5. Durata stocării</h2>
          <p className="mt-3 leading-relaxed">
            Datele personale sunt stocate doar pe perioada necesară îndeplinirii
            scopurilor pentru care au fost colectate, dar nu mai mult de 2 ani de
            la ultima interacțiune, cu excepția cazului în care legislația
            impune o perioadă mai lungă.
          </p>
        </section>

        <section>
          <h2>6. Cookie-uri</h2>
          <p className="mt-3 leading-relaxed">
            Site-ul nostru utilizează doar <strong>cookie-uri esențiale</strong>{" "}
            necesare funcționării corecte a site-ului (de exemplu, reținerea
            preferinței cookie). Nu folosim cookie-uri de marketing, analiză sau
            publicitate targetată.
          </p>
        </section>

        <section>
          <h2>7. Drepturile dumneavoastră</h2>
          <p className="mt-3 leading-relaxed">
            Conform GDPR, aveți următoarele drepturi:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>Dreptul de acces</strong> – să solicitați informații despre
              datele prelucrate
            </li>
            <li>
              <strong>Dreptul la rectificare</strong> – să solicitați corectarea
              datelor inexacte
            </li>
            <li>
              <strong>Dreptul la ștergere</strong> – să solicitați ștergerea
              datelor personale
            </li>
            <li>
              <strong>Dreptul la restricționare</strong> – să solicitați
              limitarea prelucrării
            </li>
            <li>
              <strong>Dreptul la portabilitate</strong> – să primiți datele
              într-un format structurat
            </li>
            <li>
              <strong>Dreptul la opoziție</strong> – să vă opuneți prelucrării
              datelor
            </li>
            <li>
              <strong>Dreptul de retragere a consimțământului</strong> – în orice
              moment, fără a afecta legalitatea prelucrării anterioare
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Securitatea datelor</h2>
          <p className="mt-3 leading-relaxed">
            Implementăm măsuri tehnice și organizatorice adecvate pentru a
            proteja datele personale împotriva accesului neautorizat, pierderii
            sau distrugerii.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p className="mt-3 leading-relaxed">
            Pentru orice întrebări legate de prelucrarea datelor personale sau
            pentru exercitarea drepturilor dumneavoastră, ne puteți contacta la:
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

        <section>
          <h2>10. Autoritatea de supraveghere</h2>
          <p className="mt-3 leading-relaxed">
            Dacă considerați că prelucrarea datelor dumneavoastră personale
            încalcă prevederile GDPR, aveți dreptul de a depune o plângere la{" "}
            <strong>
              Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
              Caracter Personal (ANSPDCP)
            </strong>
            , B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod poștal 010336,
            București, România.
          </p>
        </section>
      </div>
    </main>
  );
}
