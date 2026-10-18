import { techIcons } from "@/components/icons";

export function TechBadge({ tech }: { tech: string }) {
  const key = tech.toLowerCase();
  const icon = techIcons[key];

  return (
    <span
      className={`flex w-fit items-center gap-[6px] rounded-full border border-line px-[10px] py-[5px] text-[10px] tracking-[1px] whitespace-nowrap ${icon ? "text-white" : "text-muted"} transition-transform hover:scale-120 hover:animate-wiggle`}
      style={icon ? { backgroundColor: `#${icon.hex}` } : undefined}
    >
      {icon && (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-[10px] w-[10px]"
        >
          <path d={icon.path} />
        </svg>
      )}
      {tech}
    </span>
  );
}

export function TechList({ stack }: { stack?: string[] }) {
  if (!stack?.length) return null;
  return (
    <div className="flex w-fit flex-wrap items-center gap-[8px]">
      {stack.map((tech) => (
        <TechBadge key={tech} tech={tech} />
      ))}
    </div>
  );
}
