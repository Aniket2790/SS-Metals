import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import ContactFormFromQuery from "@/components/ContactFormFromQuery";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = { title: "Enquiry & Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="wrap py-14 sm:py-16">
          <h1 className="h-page">Enquiry and contact</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            Tell us what you need. We reply with specifications, pricing and dispatch time.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromQuery />
            </Suspense>
          </div>
          <aside className="space-y-5 text-sm">
            <div className="rounded border border-steel-200 bg-white p-5">
              <h2 className="font-display text-xl font-semibold">Factory and office</h2>
              <address className="mt-2 not-italic text-steel-700">{SITE.address}</address>
            </div>
            <div className="rounded border border-steel-200 bg-white p-5">
              <h2 className="font-display text-xl font-semibold">Call us</h2>
              <p className="mt-2">
                <a className="text-brand hover:underline" href="tel:+919412236335">
                  +91 9412236335
                </a>
              </p>
              <p className="mt-1">
                <a className="text-brand hover:underline" href="tel:+919458771652">
                  +91 9458771652
                </a>
              </p>
              <p className="mt-2 text-steel-600">{SITE.proprietor}</p>
              <p className="mt-3">
                <a className="text-brand hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
              Chat on WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
