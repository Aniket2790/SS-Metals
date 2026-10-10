"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactFormFromQuery() {
  const searchParams = useSearchParams();
  const defaultProduct = searchParams.get("product")?.slice(0, 120) ?? "";
  return <ContactForm defaultProduct={defaultProduct} />;
}
