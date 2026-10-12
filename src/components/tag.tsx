export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex w-fit items-center rounded-full border border-line px-[10px] py-[5px] text-[10px] tracking-[1px] whitespace-nowrap text-muted">
      {children}
    </span>
  );
}

export function TagList({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className="flex w-fit flex-wrap items-center gap-[8px]">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
