import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/exterior_villa.webp"
        alt="Pensiunea Aybo - Vedere exterioară"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/30 to-charcoal-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-up">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.4em] text-sand-200">
            Agigea • Constanța • Vedere la Lac
          </span>
        </div>

        <h1 className="animate-fade-up delay-200 font-display text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Pensiunea
          <br />
          <span className="italic text-teal-300">Aybo</span>
        </h1>

        <p className="animate-fade-up delay-400 mt-6 max-w-lg text-base leading-relaxed text-sand-200/90 sm:text-lg">
          Confort modern cu vedere la lac, în Agigea.
          <br />
          Locul perfect pentru relaxare la malul mării.
        </p>

        <div className="animate-fade-up delay-600 mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+40785203576"
            className="rounded-full bg-teal-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal-700"
          >
            Sună pentru Rezervare
          </a>
          <a
            href="https://www.booking.com/hotel/ro/pensiunea-aybo.ro.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            Booking.com
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
