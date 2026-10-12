import type { Metadata } from "next";
import { ExperienceSection } from "@/components/experience-section";
import { SectionHeader } from "@/components/section-header";
import { getEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  const experience = getEntries("experience");

  return (
    <section className="flex w-full flex-col gap-[20px]">
      <SectionHeader label="experience" index="01" />
      <p className="max-w-[620px] text-[13px] leading-[22px] text-muted">
        Roles and the work that came out of them, most recent first.
      </p>
      <ExperienceSection entries={experience} />
    </section>
  );
}
