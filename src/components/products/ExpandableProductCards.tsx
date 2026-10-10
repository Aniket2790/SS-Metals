"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type CardItem = {
  title: string;
  description: string;
  fullDescription: string;
};

type ExpandableProductCardsProps = {
  items: readonly CardItem[];
};

export function ExpandableProductCards({ items }: ExpandableProductCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {items.map((item, index) => {
        const expanded = expandedIndex === index;
        return (
          <article
            key={item.title}
            className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 ease-out ${
              expanded ? "sm:col-span-2 ring-2 ring-amber-600/30" : ""
            }`}
          >
            <div
              className={`grid gap-0 ${expanded ? "lg:grid-cols-2" : "grid-cols-1"}`}
            >
              <ImagePlaceholder
                aspect={expanded ? "video" : "square"}
                className={`rounded-none border-0 border-b border-dashed border-slate-200 lg:border-b-0 ${
                  expanded ? "lg:border-r lg:border-dashed" : ""
                }`}
                label={item.title}
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed text-slate-600 ${
                    expanded ? "" : "line-clamp-3"
                  }`}
                >
                  {expanded ? item.fullDescription : item.description}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedIndex(expanded ? null : index)
                  }
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-amber-700 hover:text-amber-900"
                  aria-expanded={expanded}
                >
                  {expanded ? "Read less" : "Read more"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
