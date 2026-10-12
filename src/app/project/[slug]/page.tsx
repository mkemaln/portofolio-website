import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { TagList } from "@/components/tag";
import { TextLink } from "@/components/button-link";
import { SectionHeader } from "@/components/section-header";
import { getEntries, getEntry } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getEntries("projects").map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("projects", slug);
  if (!entry) return { title: "Project not found" };
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntry("projects", slug);
  if (!entry) notFound();

  const { title, summary, tags, href } = entry.frontmatter;
  const others = getEntries("projects")
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  return (
    <article className="flex w-full flex-col gap-[32px]">
      <div className="flex w-full flex-col gap-[20px]">
        <Link
          href="/project"
          className="text-[12px] tracking-[1px] text-subtle transition-colors hover:text-ink"
        >
          ← ALL PROJECTS
        </Link>
        <SectionHeader label="project" index="02" />
        <h1 className="text-[36px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[44px]">
          {title}
        </h1>
        {summary && (
          <p className="max-w-[700px] text-[15px] leading-[26px] text-muted">
            {summary}
          </p>
        )}
        <div className="flex w-full flex-wrap items-center justify-between gap-[16px]">
          <TagList tags={tags} />
          {href && (
            <TextLink href={href} external>
              VISIT
            </TextLink>
          )}
        </div>
      </div>

      <div className="h-px w-full bg-line" />

      <Mdx source={entry.body} />

      {others.length > 0 && (
        <div className="flex w-full flex-col gap-[16px]">
          <SectionHeader label="more" />
          <ul className="flex flex-col">
            {others.map((item) => (
              <li key={item.slug} className="border-t border-line first:border-t-0">
                <Link
                  href={`/project/${item.slug}`}
                  className="flex w-full items-center justify-between gap-[16px] py-[16px] transition-opacity hover:opacity-70"
                >
                  <span className="text-[14px] text-ink">
                    {item.frontmatter.title}
                  </span>
                  <span className="text-[11px] tracking-[1px] text-subtle">
                    {String(item.frontmatter.order ?? 0).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
