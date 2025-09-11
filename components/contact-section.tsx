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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconClock,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import React from "react";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 scroll-mt-[50px]" id="contact">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Scrie-ne sau dă-ne un telefon — răspundem rapid.
        </p>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
      >
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.04, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
        >
          <Card className="h-full border-neutral-200 bg-white">
            <CardHeader>
              <CardTitle>Detalii de contact</CardTitle>
              <CardDescription>Ne găsești ușor, on-site sau online.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <IconMapPin className="h-5 w-5" />
                <div>
                  <p className="font-medium">Pensiunea Aybo</p>
                  <p className="text-sm text-neutral-600">
                    Str. Exemplu 12, Agigea, Constanța
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IconPhone className="h-5 w-5" />
                <a href="tel:+40785203576" className="text-sm hover:underline">
                  +40 785 203 576
                </a>
              </div>

              {/* <div className="flex items-center gap-3">
                <IconMail className="h-5 w-5" />
                <a href="mailto:rezervari@aybo.ro" className="text-sm hover:underline">
                  rezervari@aybo.ro
                </a>
              </div> */}

              <div className="flex items-start gap-3">
                <IconClock className="h-5 w-5" />
                <div className="text-sm text-neutral-700">
                  <p>Check-in: 14:00 – 22:00</p>
                  <p>Check-out: până la 11:00</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="rounded-md border border-neutral-200 px-3 py-2 text-sm hover:translate-y-[-2px] transition"
              >
                <IconBrandFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="rounded-md border border-neutral-200 px-3 py-2 text-sm hover:translate-y-[-2px] transition"
              >
                <IconBrandInstagram className="h-5 w-5" />
              </a>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.12, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
        >
          <Card className="h-full border-neutral-200 bg-white">
            <CardHeader>
              <CardTitle>Trimite un mesaj</CardTitle>
              <CardDescription>Spune-ne perioada și preferințele tale.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: wire up your submission (API route or 3rd-party)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume</Label>
                    <Input id="name" name="name" placeholder="Nume complet" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" placeholder="+40 ..." />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="exemplu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dates">Perioada</Label>
                    <Input id="dates" name="dates" placeholder="ex: 12–15 iulie" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea id="message" name="message" rows={4} placeholder="Scrie mesajul..." />
                </div>

                <Button type="submit" className="w-full">Trimite</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
