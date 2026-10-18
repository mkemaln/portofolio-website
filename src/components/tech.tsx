import { techIcons, techStyles } from "@/components/icons";

export function TechBadge({ tech }: { tech: string }) {
  const key = tech.toLowerCase();
  const Icon = techIcons[key];
  const styles = techStyles[key];

  return (
    <span
      className={`flex w-fit items-center gap-[6px] rounded-full border border-line px-[10px] py-[5px] text-[12px] tracking-[1px] whitespace-nowrap ${styles ?? "text-muted"} transition-transform hover:scale-120 hover:animate-wiggle`}
    >
      {Icon && <Icon className="h-[10px] w-[10px]" />}
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
