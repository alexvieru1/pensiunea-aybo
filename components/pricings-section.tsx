"use client";

import { motion } from "motion/react";
import { cubicBezier } from "motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Standard",
    price: "199",
    period: "noapte",
    description:
      "Cameră cozy pentru 2 persoane. Perfectă pentru un city break relaxant.",
    features: [
      "Wi-Fi gratuit",
      "Pat matrimonial / twin",
      "TV + aer condiționat",
      "Baie privată",
    ],
    ctaLabel: "Rezervă acum",
    ctaHref: "#rezerva-standard",
  },
  {
    name: "Family",
    price: "299",
    period: "noapte",
    description:
      "Spațiu generos pentru familie sau grup mic, cu facilități extra.",
    features: [
      "Wi-Fi gratuit",
      "4 persoane (2+2)",
      "Mic dejun inclus",
      "Balcon / vedere grădină",
    ],
    ctaLabel: "Rezervă Family",
    ctaHref: "#rezerva-family",
    popular: true,
  },
  {
    name: "Premium",
    price: "399",
    period: "noapte",
    description:
      "Experiență premium cu cele mai bune dotări pentru un sejur memorabil.",
    features: [
      "Wi-Fi rapid",
      "Pat king-size",
      "Mini-bar & cafea",
      "Late check-out (la disponibilitate)",
    ],
    ctaLabel: "Rezervă Premium",
    ctaHref: "#rezerva-premium",
  },
];

export function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 scroll-mt-[50px]" id="tarife">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Tarife</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Alege pachetul potrivit pentru sejurul tău la Pensiunea Aybo.
        </p>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: cubicBezier(0.22, 0.61, 0.36, 1),
            }}
          >
            <Card
              className={[
                "relative h-full border-neutral-200 bg-white",
                plan.popular ? "ring-2 ring-blue-600" : "",
              ].join(" ")}
            >
              <CardHeader>
                <div className="mb-1 flex items-center justify-between">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  {plan.popular && (
                    <Badge className="bg-blue-600 text-white">Popular</Badge>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-neutral-500">RON / {plan.period}</span>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <IconCheck className="h-5 w-5" strokeWidth={1.8} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <a href={plan.ctaHref}>{plan.ctaLabel}</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
