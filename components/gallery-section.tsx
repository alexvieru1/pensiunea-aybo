"use client";

import Image from "next/image";
import { useState } from "react";
import {
  IconZoomIn,
  IconX,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { ScrollReveal } from "./scroll-reveal";

const images = [
  {
    src: "/images/exterior_villa.webp",
    alt: "Exterior Vila - Vedere frontală",
  },
  {
    src: "/images/living_wide.webp",
    alt: "Living spațios cu canapea și vedere spre dormitor",
  },
  {
    src: "/images/bathroom.webp",
    alt: "Baie premium cu finisaje din marmură",
  },
  {
    src: "/images/dining.webp",
    alt: "Zonă de dining cu bucătărie echipată",
  },
  {
    src: "/images/living_narrow.webp",
    alt: "Living cu canapea și masă de dining",
  },
  {
    src: "/images/bathroom_2.webp",
    alt: "Baie cu duș walk-in și oglinzi LED",
  },
  {
    src: "/images/living_narrow_2.webp",
    alt: "Living cu vedere spre balcon",
  },
];

// Desktop layout: row 1-2 = hero(2col,2row) + 4 squares, row 3 = 2 wide images
const desktopConfig = [
  { className: "md:col-span-2 md:row-span-2 md:h-full", aspect: "aspect-[4/3] md:aspect-auto md:h-full" },
  { className: "", aspect: "aspect-square" },
  { className: "", aspect: "aspect-square" },
  { className: "", aspect: "aspect-square" },
  { className: "", aspect: "aspect-square" },
  { className: "md:col-span-2", aspect: "aspect-[4/3] md:aspect-[2/1]" },
  { className: "md:col-span-2", aspect: "aspect-[4/3] md:aspect-[2/1]" },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section
        id="galerie"
        className="relative bg-charcoal-900 py-24 lg:py-32"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-teal-400">
                Galerie foto
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
                Descoperiți{" "}
                <span className="italic text-teal-300">spațiile noastre</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-charcoal-400">
                Apartamente moderne, complet utilate, cu finisaje premium și
                atenție la fiecare detaliu.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {images.map((img, i) => {
              const config = desktopConfig[i];
              return (
                <ScrollReveal
                  key={img.src}
                  delay={i * 80}
                  className={config.className}
                >
                  <button
                    onClick={() => setLightbox(i)}
                    className={`group relative w-full overflow-hidden rounded-xl ${config.aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes={
                        i === 0
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "(max-width: 768px) 50vw, 25vw"
                      }
                    />
                    <div className="absolute inset-0 bg-charcoal-950/0 transition-all duration-300 group-hover:bg-charcoal-950/30" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                        <IconZoomIn size={20} className="text-white" stroke={2} />
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-white/70 transition-colors hover:text-white"
            aria-label="Închide"
          >
            <IconX size={32} stroke={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                lightbox === 0 ? images.length - 1 : lightbox - 1
              );
            }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Anterior"
          >
            <IconChevronLeft size={24} stroke={2} />
          </button>

          <div
            className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto rounded-xl object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                lightbox === images.length - 1 ? 0 : lightbox + 1
              );
            }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Următor"
          >
            <IconChevronRight size={24} stroke={2} />
          </button>

          <div className="absolute bottom-6 text-sm text-white/50">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
