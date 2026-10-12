import type { Entry } from "@/lib/content";

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
              <span className="w-full shrink-0 text-[12px] text-subtle sm:w-[170px]">
                {period}
              </span>
              <div className="flex flex-1 flex-col gap-[8px]">
                <h3 className="text-[20px] font-bold text-ink">{title}</h3>
                {(company || location) && (
                  <span className="text-[12px] tracking-[1px] text-subtle">
                    {[company, location].filter(Boolean).join(" · ")}
                  </span>
                )}
                {summary && !compact && (
                  <p className="text-[13px] leading-[22px] text-muted">{summary}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
