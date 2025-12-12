"use client";

import { useEffect } from "react";
import Link from "next/link";

// Tell TypeScript that window.fbq exists
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    async function sendLeadToCapi() {
      try {
        // Safely read cookies
        const cookies = document.cookie.split("; ").filter(Boolean);

        const fbp = cookies.find((c) => c.startsWith("_fbp="))?.split("=")[1];

        const fbc = cookies.find((c) => c.startsWith("_fbc="))?.split("=")[1];

        // Generate event ID (fallback if crypto not available)
        const eventId =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2);

        // Fire Pixel browser event (for dedupe)
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead", {}, { eventID: eventId });
        }

        // Fire CAPI event via your API route
        await fetch("/api/meta-capi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event_name: "Lead",
            event_id: eventId,
            event_source_url: window.location.href,
            fbp,
            fbc,
          }),
        });
      } catch (err) {
        console.error("Error sending lead to CAPI:", err);
      }
    }

    sendLeadToCapi();
  }, []); // runs once on page load

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl md:text-5xl font-semibold text-amber-700">
        Thank you! We’ll get in touch soon.
      </h1>

      <Link
        href="/"
        className="mt-8 text-green-900 font-medium hover:underline text-lg"
      >
        Go back to Home
      </Link>
    </div>
  );
}
