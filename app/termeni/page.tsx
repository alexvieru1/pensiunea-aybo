import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termeni si Conditii",
  description:
    "Termeni si conditii de utilizare si politica de confidentialitate — Pensiunea Aybo.",
};

export default function TermeniPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-20">
        {/* ── Termeni si Conditii ── */}
        <h1 className="text-3xl font-bold text-neutral-900 mb-10">
          Termeni si Conditii
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            1. Conditii generale de utilizare
          </h2>
          <p className="text-neutral-700 mb-3">
            Prin accesarea si utilizarea site-ului{" "}
            <strong>pensiuneaaybo.ro</strong>, acceptati in totalitate prezentii
            termeni si conditii. Site-ul este administrat de Pensiunea Aybo, cu
            sediul in Str. Brizei 22, 907015 Agigea, judetul Constanta,
            Romania.
          </p>
          <p className="text-neutral-700 mb-3">
            Continutul site-ului (texte, imagini, design) este proprietatea
            Pensiunea Aybo si nu poate fi reprodus, distribuit sau utilizat in
            scopuri comerciale fara acordul scris prealabil.
          </p>
          <p className="text-neutral-700">
            Ne rezervam dreptul de a modifica acesti termeni in orice moment.
            Versiunea actualizata va fi publicata pe aceasta pagina.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            2. Rezervari
          </h2>
          <p className="text-neutral-700 mb-3">
            Rezervarile se pot efectua prin intermediul formularului de contact
            de pe site, prin e-mail la adresa{" "}
            <a
              href="mailto:contact@pensiuneaaybo.ro"
              className="text-blue-600 underline"
            >
              contact@pensiuneaaybo.ro
            </a>{" "}
            sau telefonic la numarul{" "}
            <a href="tel:+40785203576" className="text-blue-600 underline">
              +40 785 203 576
            </a>
            .
          </p>
          <p className="text-neutral-700 mb-3">
            O rezervare este considerata confirmata doar dupa primirea unei
            confirmari explicite din partea pensiunii (prin e-mail sau telefon).
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 mt-6 mb-2">
            Program check-in / check-out
          </h3>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>
              <strong>Check-in:</strong> intre orele 14:00 si 22:00
            </li>
            <li>
              <strong>Check-out:</strong> pana la ora 11:00
            </li>
          </ul>
          <p className="text-neutral-700 mt-2">
            Pentru check-in in afara programului standard, va rugam sa ne
            contactati in prealabil.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            3. Politica de anulare
          </h2>
          <p className="text-neutral-700 mb-3">
            Anularea gratuita este posibila cu cel putin <strong>48 de ore</strong>{" "}
            inainte de data de check-in. In cazul anularii in mai putin de 48 de
            ore sau al neprezentarii (no-show), pensiunea isi rezerva dreptul de
            a retine contravaloarea primei nopti de cazare.
          </p>
          <p className="text-neutral-700">
            Modificarile de date sau numar de persoane sunt posibile sub rezerva
            disponibilitatii si trebuie comunicate cat mai devreme posibil.
          </p>
        </section>

        {/* ── Politica de Confidentialitate ── */}
        <h1 className="text-3xl font-bold text-neutral-900 mt-16 mb-10">
          Politica de Confidentialitate
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            4. Date colectate
          </h2>
          <p className="text-neutral-700 mb-3">
            Prin intermediul formularului de contact si al procesului de
            rezervare, colectam urmatoarele date personale:
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>Nume si prenume</li>
            <li>Numar de telefon</li>
            <li>Adresa de e-mail</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            5. Scopul prelucrarii datelor
          </h2>
          <p className="text-neutral-700 mb-3">
            Datele personale sunt utilizate exclusiv in urmatoarele scopuri:
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>Raspunsul la solicitarile primite prin formularul de contact</li>
            <li>Gestionarea rezervarilor si comunicarea cu oaspetii</li>
            <li>
              Indeplinirea obligatiilor legale (de ex. evidenta cazarii conform
              legislatiei in vigoare)
            </li>
          </ul>
          <p className="text-neutral-700 mt-3">
            Nu transmitem datele dumneavoastra catre terti si nu le utilizam in
            scopuri de marketing fara consimtamantul dumneavoastra explicit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            6. Durata stocarii datelor
          </h2>
          <p className="text-neutral-700">
            Datele personale sunt pastrate pe durata necesara indeplinirii
            scopurilor pentru care au fost colectate si conform cerintelor legale
            aplicabile. Datele din formularul de contact sunt sterse in termen de{" "}
            <strong>12 luni</strong> de la ultima interactiune, cu exceptia
            cazurilor in care legislatia impune o perioada de stocare mai lunga.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            7. Drepturile dumneavoastra (GDPR)
          </h2>
          <p className="text-neutral-700 mb-3">
            In conformitate cu Regulamentul General privind Protectia Datelor
            (GDPR), aveti urmatoarele drepturi:
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>
              <strong>Dreptul de acces</strong> — puteti solicita o copie a
              datelor personale pe care le detinem despre dumneavoastra
            </li>
            <li>
              <strong>Dreptul la rectificare</strong> — puteti solicita
              corectarea datelor inexacte sau incomplete
            </li>
            <li>
              <strong>Dreptul la stergere</strong> — puteti solicita stergerea
              datelor personale, in conditiile legii
            </li>
            <li>
              <strong>Dreptul la portabilitate</strong> — puteti solicita
              transferul datelor catre un alt operator
            </li>
            <li>
              <strong>Dreptul la opozitie</strong> — puteti refuza prelucrarea
              datelor in anumite circumstante
            </li>
          </ul>
          <p className="text-neutral-700 mt-3">
            Pentru exercitarea acestor drepturi, ne puteti contacta la adresa de
            e-mail{" "}
            <a
              href="mailto:contact@pensiuneaaybo.ro"
              className="text-blue-600 underline"
            >
              contact@pensiuneaaybo.ro
            </a>{" "}
            sau telefonic la{" "}
            <a href="tel:+40785203576" className="text-blue-600 underline">
              +40 785 203 576
            </a>
            .
          </p>
        </section>

        {/* ── Politica de Cookie-uri ── */}
        <h1 className="text-3xl font-bold text-neutral-900 mt-16 mb-10">
          Politica de Cookie-uri
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            8. Ce sunt cookie-urile
          </h2>
          <p className="text-neutral-700">
            Cookie-urile sunt fisiere text de mici dimensiuni stocate pe
            dispozitivul dumneavoastra de catre browser-ul web atunci cand
            vizitati un site. Acestea permit site-ului sa functioneze corect si
            sa retina anumite preferinte.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            9. Tipuri de cookie-uri utilizate
          </h2>
          <ul className="list-disc list-inside text-neutral-700 space-y-2">
            <li>
              <strong>Cookie-uri esentiale (strict necesare)</strong> — necesare
              pentru functionarea de baza a site-ului. Nu pot fi dezactivate.
            </li>
            <li>
              <strong>Cookie-uri de performanta</strong> — colecteaza informatii
              anonime despre modul in care vizitatorii utilizeaza site-ul, pentru
              a ne ajuta sa il imbunatatim.
            </li>
          </ul>
          <p className="text-neutral-700 mt-3">
            Nu utilizam cookie-uri de publicitate sau de urmarire a
            comportamentului pe site-uri terte.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            10. Gestionarea cookie-urilor
          </h2>
          <p className="text-neutral-700 mb-3">
            Puteti controla si sterge cookie-urile prin setarile browser-ului
            dumneavoastra. Fiecare browser ofera optiuni diferite pentru
            gestionarea cookie-urilor:
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>
              <strong>Chrome:</strong> Setari &rarr; Confidentialitate si
              securitate &rarr; Cookie-uri
            </li>
            <li>
              <strong>Firefox:</strong> Setari &rarr; Viata privata si securitate
              &rarr; Cookie-uri
            </li>
            <li>
              <strong>Safari:</strong> Preferinte &rarr; Confidentialitate
            </li>
            <li>
              <strong>Edge:</strong> Setari &rarr; Cookie-uri si permisiuni
              pentru site-uri
            </li>
          </ul>
          <p className="text-neutral-700 mt-3">
            Dezactivarea cookie-urilor poate afecta functionarea corecta a
            anumitor sectiuni ale site-ului.
          </p>
        </section>

        {/* ── Contact & Back Link ── */}
        <section className="mt-16 pt-8 border-t border-neutral-300">
          <p className="text-neutral-700 mb-2">
            <strong>Pensiunea Aybo</strong>
          </p>
          <p className="text-neutral-700 mb-1">
            Str. Brizei 22, 907015 Agigea, Constanta, Romania
          </p>
          <p className="text-neutral-700 mb-1">
            Telefon:{" "}
            <a href="tel:+40785203576" className="text-blue-600 underline">
              +40 785 203 576
            </a>
          </p>
          <p className="text-neutral-700 mb-6">
            E-mail:{" "}
            <a
              href="mailto:contact@pensiuneaaybo.ro"
              className="text-blue-600 underline"
            >
              contact@pensiuneaaybo.ro
            </a>
          </p>
          <p className="text-sm text-neutral-500 mb-8">
            Ultima actualizare: Martie 2026
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            &larr; Inapoi la pagina principala
          </Link>
        </section>
      </main>
    </div>
  );
}
