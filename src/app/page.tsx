import { ButtonLink, TextLink } from "@/components/button-link";
import { SectionHeader } from "@/components/section-header";
import { ProjectGrid } from "@/components/project-card";
import { ExperienceSection } from "@/components/experience-section";
import { getEntries } from "@/lib/content";
import { getCopyrightYear } from "@/lib/copyright";
import { contactLinks, site } from "@/lib/site";

export default async function HomePage() {
  const year = await getCopyrightYear();
  const projects = getEntries("projects");
  const experience = getEntries("experience");
  const latestProjects = projects.slice(0, 2);
  // const latestExperience = experience.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="flex w-full flex-col gap-[26px]">
        <div className="flex w-fit items-center gap-[10px]">
          <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-inverse" />
          <span className="text-[11px] tracking-[2px] text-muted">
            {site.status}
          </span>
        </div>

        <span className="flex text-[12px] tracking-[2px] text-subtle gap-2">
          {/* {site.tagline} */}
          <div className="flex gap-1 px-2 group w-fit transition-transform duration-200 hover:animate-wiggle hover:scale-120">
            <div className="group-hover:text-[#4c3255]">デ</div>
            <div className="group-hover:text-[#2b479b]">ー</div>
            <div className="group-hover:text-[#cd4e5d]">ト</div>
            <div className="group-hover:text-[#f57743]">・</div>
            <div className="group-hover:text-[#8283c1]">ア</div>
            <div className="group-hover:text-[#4c9a91]">・</div>
            <div className="group-hover:text-[#cedded]">ラ</div>
            <div className="group-hover:text-[#c0c5c8]">イ</div>
            <div className="group-hover:text-[#fefea7]">ブ</div>
            <div className="group-hover:text-[#9f2c29]">!</div>
          </div>
          /
          <div className="flex gap-1 px-2 group w-fit transition-transform duration-200 hover:animate-wiggle hover:scale-120"> 
            <div className="group-hover:text-[#F2C9D5]">ぼっ</div>
            <div className="group-hover:text-[#B43E44]">ち・ざ</div>
            <div className="group-hover:text-[#FADF92]">・ろ</div>
            <div className="group-hover:text-[#496496]">っく！</div>
          </div>
        </span>

        <h1 className="text-[52px] leading-[1.02] font-bold tracking-[-3px] text-ink sm:text-[72px] xl:text-[84px]">
          {site.name}
        </h1>

        <p className="max-w-[700px] text-[16px] leading-[28px] text-muted sm:text-[18px] sm:leading-[30px]">
          {site.headline}
        </p>

        <div className="flex flex-wrap items-start gap-[14px]">
          <ButtonLink href="/project">VIEW PROJECTS</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            GET IN TOUCH
          </ButtonLink>
        </div>
      </section>

      {/* Latest experience */}
      <section className="flex w-full flex-col gap-[20px]">
        <SectionHeader
          label="experience"
          index="01"
          action={<TextLink href="/experience">MORE</TextLink>}
        />
        <ExperienceSection entries={experience} />
      </section>

      {/* Latest projects */}
      <section className="flex w-full flex-col gap-[24px]">
        <SectionHeader
          label="project"
          index="02"
          action={<TextLink href="/project">MORE</TextLink>}
        />
        <ProjectGrid entries={latestProjects} />
      </section>

      {/* Contact */}
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
    </>
  );
}
