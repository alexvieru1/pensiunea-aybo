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
  IconCheck,
} from "@tabler/icons-react";
import React, { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          <Card className="border-neutral-200 bg-white">
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
                    Str. Brizei 22, 907015 Agigea, România
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IconPhone className="h-5 w-5" />
                <a href="tel:+40785203576" className="text-sm hover:underline">
                  +40 785 203 576
                </a>
              </div>

              <div className="flex items-center gap-3">
                <IconMail className="h-5 w-5" />
                <a href="mailto:contact@pensiuneaaybo.ro" className="text-sm hover:underline">
                  contact@pensiuneaaybo.ro
                </a>
              </div>

              <div className="flex items-start gap-3">
                <IconClock className="h-5 w-5" />
                <div className="text-sm text-neutral-700">
                  <p>Check-in: 14:00 – 22:00</p>
                  <p>Check-out: până la 11:00</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              {/* TODO: replace "#" with actual Facebook page URL */}
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-md border border-neutral-200 px-3 py-2 text-sm opacity-50 cursor-default"
              >
                <IconBrandFacebook className="h-5 w-5" />
              </a>
              {/* TODO: replace "#" with actual Instagram page URL */}
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-md border border-neutral-200 px-3 py-2 text-sm opacity-50 cursor-default"
              >
                <IconBrandInstagram className="h-5 w-5" />
              </a>
            </CardFooter>
          </Card>
          <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8!2d28.636!3d44.088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40baec4f3a3c5c8d%3A0x0!2sStr.+Brizei+22%2C+Agigea+907015!5e0!3m2!1sen!2sro!4v1709500000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Pensiunea Aybo"
            />
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.12, ease: cubicBezier(0.22, 0.61, 0.36, 1) }}
        >
          <Card className="h-full border-neutral-200 bg-white">
            {formState === "success" ? (
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <IconCheck className="h-12 w-12 text-green-600" />
                  <p className="text-lg font-medium">Mesajul a fost trimis!</p>
                  <p className="text-sm text-neutral-600">Te vom contacta in cel mai scurt timp.</p>
                </div>
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <CardTitle>Trimite un mesaj</CardTitle>
                  <CardDescription>Spune-ne perioada si preferintele tale.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setFormState("loading");
                      setErrorMessage("");

                      const formData = new FormData(e.currentTarget);
                      const data = {
                        name: formData.get("name"),
                        phone: formData.get("phone"),
                        email: formData.get("email"),
                        dates: formData.get("dates"),
                        message: formData.get("message"),
                      };

                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data),
                        });

                        if (!res.ok) {
                          const err = await res.json();
                          throw new Error(err.error || "Eroare la trimitere.");
                        }

                        setFormState("success");
                      } catch (err) {
                        setFormState("error");
                        setErrorMessage(err instanceof Error ? err.message : "Eroare la trimitere.");
                      }
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
                        <Input id="dates" name="dates" placeholder="ex: 12-15 iulie" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea id="message" name="message" rows={4} placeholder="Scrie mesajul..." />
                    </div>

                    {formState === "error" && (
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

                    <Button type="submit" className="w-full" disabled={formState === "loading"}>
                      {formState === "loading" ? "Se trimite..." : "Trimite"}
                    </Button>
                  </form>
                </CardContent>
              </>
            )}
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
