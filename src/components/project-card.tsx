import Link from "next/link";
import { TagList } from "@/components/tag";
import { TextLink } from "@/components/button-link";
import { ArrowRightIcon } from "@/components/icons";
import type { Entry } from "@/lib/content";

function indexLabel(entry: Entry, position: number) {
  const base = String(entry.frontmatter.order ?? position + 1).padStart(2, "0");
  return entry.frontmatter.featured ? `${base} / FEATURED` : base;
}

export function ProjectCard({
  entry,
  position,
}: {
  entry: Entry;
  position: number;
}) {
  const { title, summary, tags, href } = entry.frontmatter;
  const detailHref = `/project/${entry.slug}`;

  return (
    <article className="flex h-full min-h-[300px] flex-col justify-between gap-[16px] rounded-[6px] border border-line bg-surface-raised p-[26px]">
      <div className="flex w-full flex-col gap-[12px]">
        <span className="text-[11px] tracking-[1.5px] text-subtle">
          {indexLabel(entry, position)}
        </span>
        <h3 className="text-[22px] leading-[26px] font-bold text-ink">
          <Link href={detailHref} className="transition-opacity hover:opacity-70">
            {title}
          </Link>
        </h3>
        {summary && (
          <p className="text-[13px] leading-[21px] text-muted">{summary}</p>
        )}
      </div>

      <div className="flex w-full items-end justify-between gap-[12px]">
        <TagList tags={tags} />
        {href ? (
          <TextLink href={href} external>
            READ
          </TextLink>
        ) : (
          <TextLink href={detailHref}>READ</TextLink>
        )}
      </div>
    </article>
  );
}

export function ProjectGrid({ entries }: { entries: Entry[] }) {
  if (!entries.length) {
    return (
      <p className="text-[13px] text-subtle">
        No projects yet — add an MDX file under `content/projects`.
      </p>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2">
      {entries.map((entry, index) => (
        <ProjectCard key={entry.slug} entry={entry} position={index} />
      ))}
    </div>
  );
}

export function ProjectRow({ entry }: { entry: Entry }) {
  const { title, summary, tags, href } = entry.frontmatter;

  return (
    <div className="flex w-full flex-col gap-[12px] border-t border-line py-[24px] first:border-t-0">
      <div className="flex w-full flex-wrap items-baseline justify-between gap-[12px]">
        <h3 className="text-[20px] font-bold text-ink">{title}</h3>
        <div className="flex items-center gap-[16px]">
          <Link
            href={`/project/${entry.slug}`}
            className="text-[12px] tracking-[1px] text-muted transition-colors hover:text-ink"
          >
            DETAILS
          </Link>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[8px] text-[12px] tracking-[1px] text-ink transition-opacity hover:opacity-70"
            >
              VIEW
              <ArrowRightIcon className="h-[14px] w-[14px]" />
            </a>
          )}
        </div>
      </div>
      {summary && <p className="text-[13px] leading-[22px] text-muted">{summary}</p>}
      <TagList tags={tags} />
    </div>
  );
}
