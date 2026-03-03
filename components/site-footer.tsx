"use client";

import { motion } from "motion/react";
import { cubicBezier } from "motion";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import React from "react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">Pensiunea Aybo</p>
            <p className="mt-2 text-sm text-neutral-600">
              Un loc liniștit aproape de mare — camere confortabile, grădină și acces facil.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <a href="#despre-noi" className="text-sm hover:underline">Despre noi</a>
            <a href="#facilitati" className="text-sm hover:underline">Facilități</a>
            <a href="#tarife" className="text-sm hover:underline">Tarife</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </nav>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <IconMapPin className="h-5 w-5" />
              Str. Brizei 22, 907015 Agigea
            </div>
            <a href="tel:+40785203576" className="flex items-center gap-2 text-sm hover:underline">
              <IconPhone className="h-5 w-5" />
              +40 785 203 576
            </a>
            <a href="mailto:contact@pensiuneaaybo.ro" className="flex items-center gap-2 text-sm hover:underline">
              <IconMail className="h-5 w-5" />
              contact@pensiuneaaybo.ro
            </a>

            <div className="mt-2 flex gap-3">
              {/* TODO: replace "#" with actual Facebook page URL */}
              <a href="#" aria-label="Facebook" className="rounded-md border border-neutral-200 px-3 py-2 opacity-50 cursor-default">
                <IconBrandFacebook className="h-5 w-5" />
              </a>
              {/* TODO: replace "#" with actual Instagram page URL */}
              <a href="#" aria-label="Instagram" className="rounded-md border border-neutral-200 px-3 py-2 opacity-50 cursor-default">
                <IconBrandInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-neutral-200 pt-6 text-sm text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} Pensiunea Aybo. Toate drepturile rezervate.</p>
          <p>
            Realizat cu <span aria-hidden>♥</span> —{" "}
            <a href="/termeni" className="hover:underline">Termeni &amp; Politică</a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
