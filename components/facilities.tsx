"use client";

import { cn } from "@/lib/utils";
import {
  IconWifi,
  IconCar,
  IconCoffee,
  IconSnowflake,
  IconDog,
  IconSwimming,
  IconBeach,
  IconDeviceTv,
  IconBus,
  IconClock,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cubicBezier } from "motion";
import React from "react";

type Facility = {
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description?: string;
};

const defaultFacilities: Facility[] = [
  { label: "Wi-Fi gratuit", icon: IconWifi },
  { label: "Parcare în incintă", icon: IconCar },
  { label: "Mic dejun", icon: IconCoffee },
  { label: "Aer condiționat", icon: IconSnowflake },
  { label: "Pet-friendly", icon: IconDog },
  { label: "Piscină", icon: IconSwimming },
  { label: "Acces la plajă", icon: IconBeach },
  { label: "TV în cameră", icon: IconDeviceTv },
  { label: "Transfer", icon: IconBus },
  { label: "Recepție 24/7", icon: IconClock },
];

export function Facilities({
  items = defaultFacilities,
  className,
  title = "Facilități",
  subtitle = "Tot ce ai nevoie pentru un sejur plăcut.",
}: {
  items?: Facility[];
  className?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      className={cn("mx-auto max-w-6xl px-4 py-16 scroll-mt-[50px]", className)}
      id="facilitati"
      aria-labelledby="facilities-title"
    >
      <div className="mb-10 text-center">
        <h2 id="facilities-title" className="text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
      </div>

      {/* Parent fade-in */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {items.map(({ label, icon: Icon, description }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08, // stagger
              ease: cubicBezier(0.22, 0.61, 0.36, 1),
            }}
            className="h-full"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
              className="group relative h-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-neutral-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center gap-3">
                <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                <span className="font-medium">{label}</span>
              </div>

              {description && (
                <p className="relative mt-2 text-sm text-neutral-600">{description}</p>
              )}
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
