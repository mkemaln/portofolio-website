import type { Entry } from "@/lib/content";
import type { ReactNode } from "react";

function parseBold(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function BulletList({ body }: { body: string }) {
  const items = body
    .split("\n")
    .filter((line) => line.trim().startsWith("- "))
    .map((line) => line.trim().slice(2));

  if (!items.length) return null;

  return (
    <ul className="mt-[8px] flex flex-col gap-[6px]">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-[20px] text-[16px] leading-[24px] text-muted"
        >
          <span className="absolute left-0 text-subtle">—</span>
          {parseBold(item)}
        </li>
      ))}
    </ul>
  );
}

export function ExperienceSection({
  entries,
  compact = false,
}: {
  entries: Entry[];
  compact?: boolean;
}) {
  if (!entries.length) {
    return <p className="text-[13px] text-subtle">No experience yet.</p>;
  }

  return (
    <div className="flex w-full flex-col">
      {entries.map((entry, index) => {
        const { title, company, location, period, summary } = entry.frontmatter;
        return (
          <div key={entry.slug}>
            {index > 0 && <div className="h-px w-full bg-line" />}
            <div className="flex w-full flex-col gap-[20px] py-[28px] sm:flex-row sm:gap-[40px]">
              <span className="w-full shrink-0 text-[16px] text-subtle sm:w-[170px]">
                {period}
              </span>
              <div className="flex flex-1 flex-col gap-[8px]">
                <h3 className="text-[20px] font-bold text-ink">{title}</h3>
                {(company || location) && (
                  <span className="text-[18px] tracking-[1px] text-subtle">
                    {[company, location].filter(Boolean).join(" · ")}
                  </span>
                )}
                {summary && !compact && (
                  <p className="text-[16px] leading-[22px] text-muted">{summary}</p>
                )}
                {entry.body && !compact && <BulletList body={entry.body} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
