import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { getCopyrightYear } from "@/lib/copyright";
import { contactLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage() {
  const year = await getCopyrightYear();

  return (
    <section className="flex w-full flex-col gap-[22px]">
      <SectionHeader label="contact" index="03" />

      <a
        href={`mailto:${site.email}`}
        className="break-anywhere text-[28px] font-bold tracking-[-1px] text-ink transition-opacity hover:opacity-70 sm:text-[42px]"
      >
        {site.email}
      </a>

      <p className="max-w-[560px] text-[14px] leading-[22px] text-muted">
        {site.contactNote}
      </p>

      <div className="flex flex-col gap-[12px] pt-[8px]">
        <span className="text-[11px] tracking-[1.5px] text-subtle">
          {"// ELSEWHERE"}
        </span>
        <div className="flex flex-wrap items-center gap-[24px] sm:gap-[36px]">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-[13px] tracking-[1px] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-line" />

      <div className="flex w-full flex-col justify-between gap-[8px] sm:flex-row sm:items-center">
        <span className="text-[11px] tracking-[1px] text-subtle">
          © {year} {site.name} — {site.footerNote}
        </span>
        <span className="text-[11px] tracking-[1px] text-subtle">
          {site.location} · {site.timezone}
        </span>
      </div>
    </section>
  );
}
