import { tagIcons } from "@/components/icons";

export function Tag({ tag }: { tag: string }) {
  const Icon = tagIcons[tag.toLowerCase()];
  return (
    <span className="relative inline-flex w-fit items-center gap-[6px] rounded-full border border-line px-[10px] py-[5px] text-[10px] tracking-[1px] whitespace-nowrap text-muted transition-transform hover:scale-120">
      {Icon && <Icon className="absolute -top-1 -left-1 h-[14px] w-[14px]" />}
      {tag}
    </span>
  );
}

export function TagList({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className="flex w-fit flex-wrap items-center gap-[8px]">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}
