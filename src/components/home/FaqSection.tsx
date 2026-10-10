"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-slate-600">
              Quick answers about grades, stock, certificates, and how to place
              an order with SS Metals.
            </p>
          </div>

          <div className="lg:col-span-3">
            <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              {faqs.map((item, index) => {
                const open = openIndex === index;
                return (
                  <li key={item.question}>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                      aria-expanded={open}
                      onClick={() =>
                        setOpenIndex(open ? null : index)
                      }
                    >
                      <span className="font-semibold text-slate-900">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-200 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
