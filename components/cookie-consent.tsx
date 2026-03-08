"use client";

import { useEffect, useState } from "react";
import { IconCookie, IconX } from "@tabler/icons-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-sand-200 bg-white p-6 shadow-2xl shadow-charcoal-900/10">
        <div className="flex items-start gap-4">
          <div className="hidden shrink-0 rounded-xl bg-teal-50 p-2.5 text-teal-700 sm:block">
            <IconCookie size={24} stroke={1.5} />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-base font-bold text-charcoal-900">
              Acest site folosește cookie-uri
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-charcoal-500">
              Folosim cookie-uri esențiale pentru funcționarea site-ului. Nu
              colectăm date personale prin cookie-uri de marketing. Aflați mai
              multe în{" "}
              <a
                href="/politica-confidentialitate"
                className="font-medium text-teal-700 underline decoration-teal-300 underline-offset-2"
              >
                Politica de Confidențialitate
              </a>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                onClick={accept}
                className="rounded-lg bg-teal-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
              >
                Accept
              </button>
              <button
                onClick={decline}
                className="rounded-lg border border-sand-200 px-5 py-2 text-sm font-medium text-charcoal-600 transition-colors hover:bg-sand-50"
              >
                Doar esențiale
              </button>
            </div>
          </div>
          <button
            onClick={decline}
            className="shrink-0 text-charcoal-400 transition-colors hover:text-charcoal-600"
            aria-label="Închide"
          >
            <IconX size={18} stroke={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
