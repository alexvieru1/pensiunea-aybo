"use client";

import { useState, type FormEvent } from "react";
import { IconPhone, IconCheck } from "@tabler/icons-react";
import { ScrollReveal } from "./scroll-reveal";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-x-clip py-24 lg:py-32">
      <div className="absolute -right-48 top-0 h-96 w-96 rounded-full bg-teal-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-teal-700">
              Contact
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal-900 sm:text-5xl">
              Luați{" "}
              <span className="italic text-teal-700">legătura</span>{" "}
              cu noi
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-charcoal-500">
              Aveți întrebări sau doriți informații suplimentare? Nu ezitați
              să ne contactați.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <ScrollReveal delay={100} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-bold text-charcoal-900">
                  Telefon
                </h3>
                <a
                  href="tel:+40785203576"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-teal-700 transition-colors hover:text-teal-600"
                >
                  <IconPhone size={20} stroke={1.5} />
                  0785 203 576
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-charcoal-900">
                  Locație
                </h3>
                <p className="mt-2 text-charcoal-600">
                  Str. Brizei Nr. 22, Agigea
                  <br />
                  Județul Constanța, România
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-charcoal-900">
                  Program
                </h3>
                <p className="mt-2 text-charcoal-600">
                  Check-in: 14:00 – 22:00
                  <br />
                  Check-out: până la 11:00
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-charcoal-900">
                  Rezervări Online
                </h3>
                <p className="mt-2 text-charcoal-600">
                  Puteți rezerva și pe{" "}
                  <a
                    href="https://www.booking.com/hotel/ro/pensiunea-aybo.ro.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-2 transition-colors hover:text-teal-600"
                  >
                    Booking.com
                  </a>
                </p>
              </div>

              {/* Map */}
              <div className="aspect-video overflow-hidden rounded-xl border border-sand-200 bg-sand-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850!2d28.6285!3d44.0835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bae5b0a65e0e5d%3A0xf3c8e5e4c63a60b6!2sStrada%20Brizei%2022%2C%20Agigea%2C%20Constan%C8%9Ba!5e0!3m2!1sro!2sro!4v1710000000000!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Pensiunea Aybo pe hartă"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={200} className="lg:col-span-3">
            <div className="rounded-2xl border border-sand-200/80 bg-white p-8 shadow-sm lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-teal-50 p-4 text-teal-700">
                    <IconCheck size={32} stroke={2} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal-900">
                    Mesaj trimis!
                  </h3>
                  <p className="mt-2 text-charcoal-500">
                    Vă mulțumim pentru mesaj. Vă vom contacta în cel mai scurt
                    timp posibil.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-teal-700 underline decoration-teal-300 underline-offset-2"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-charcoal-700"
                      >
                        Nume complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-charcoal-800 outline-none transition-all duration-300 placeholder:text-charcoal-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                        placeholder="ex. Ion Popescu"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-charcoal-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-charcoal-800 outline-none transition-all duration-300 placeholder:text-charcoal-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-charcoal-700"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-charcoal-800 outline-none transition-all duration-300 placeholder:text-charcoal-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      placeholder="07xx xxx xxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-charcoal-700"
                    >
                      Subiect
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-charcoal-800 outline-none transition-all duration-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                    >
                      <option value="rezervare">Informații rezervare</option>
                      <option value="disponibilitate">Disponibilitate</option>
                      <option value="facilitati">Facilități</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-charcoal-700"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-charcoal-800 outline-none transition-all duration-300 placeholder:text-charcoal-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      placeholder="Scrieți mesajul dvs. aici..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdpr"
                      name="gdpr"
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-sand-300 text-teal-700 accent-teal-700"
                    />
                    <label
                      htmlFor="gdpr"
                      className="text-xs leading-relaxed text-charcoal-500"
                    >
                      Sunt de acord cu prelucrarea datelor personale conform{" "}
                      <a
                        href="/politica-confidentialitate"
                        target="_blank"
                        className="font-medium text-teal-700 underline decoration-teal-300 underline-offset-2"
                      >
                        Politicii de Confidențialitate
                      </a>
                      . *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-200/50"
                  >
                    Trimite Mesajul
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
