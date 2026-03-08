import Image from "next/image";
import Link from "next/link";
import { IconPhone } from "@tabler/icons-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-sand-200 bg-charcoal-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Pensiunea Aybo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <div className="font-display text-lg font-bold text-white">
                  Pensiunea Aybo
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400">
                  Agigea • Constanța
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-400">
              Cazare modernă cu vedere la lac în Agigea, lângă Constanța.
              Confort premium pentru o vacanță de neuitat.
            </p>
            <a
              href="tel:+40785203576"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
            >
              <IconPhone size={16} stroke={1.5} />
              0785 203 576
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-charcoal-300">
              Navigare
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#despre", label: "Despre Noi" },
                { href: "#galerie", label: "Galerie" },
                { href: "#facilitati", label: "Facilități" },
                { href: "#tarife", label: "Tarife" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* POPAM + Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-charcoal-300">
              Proiect Cofinanțat
            </h4>
            <div className="rounded-xl border border-charcoal-700/50 bg-charcoal-800/50 p-4">
              <Image
                src="/images/POPAM_logo.webp"
                alt="POPAM Logo"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
              <p className="mt-3 text-xs leading-relaxed text-charcoal-400">
                Proiect cofinanțat prin Programul Operațional pentru Pescuit și
                Afaceri Maritime (POPAM).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-charcoal-800 pt-8 text-xs text-charcoal-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Pensiunea Aybo. Toate drepturile
            rezervate.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-confidentialitate"
              className="transition-colors hover:text-teal-400"
            >
              Confidențialitate
            </Link>
            <Link
              href="/termeni-conditii"
              className="transition-colors hover:text-teal-400"
            >
              Termeni și Condiții
            </Link>
            <a
              href="https://www.booking.com/hotel/ro/pensiunea-aybo.ro.html"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-teal-400"
            >
              Booking.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
