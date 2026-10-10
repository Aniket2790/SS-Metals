import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="border-b border-slate-200/80 bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5 text-amber-500" />
            {site.phones.join(" · ")}
          </span>
          <span className="hidden h-3 w-px bg-slate-700 sm:inline" />
          <span className="inline-flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-amber-500" />
            {site.email}
          </span>
        </p>
        <p className="text-slate-400">{site.address}</p>
      </div>
    </div>
  );
}
