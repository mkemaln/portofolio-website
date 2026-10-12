import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { getEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectPage() {
  const projects = getEntries("projects");

  return (
    <section className="flex w-full flex-col gap-[24px]">
      <SectionHeader label="project" index="02" />
      <p className="max-w-[620px] text-[13px] leading-[22px] text-muted">
        Selected work, most recent first.
      </p>
      <ProjectGrid entries={projects} />
    </section>
  );
}
