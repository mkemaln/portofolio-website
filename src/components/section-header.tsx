export function SectionHeader({
  label,
  index,
  action,
}: {
  label: string;
  index?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex w-full items-center gap-[14px]">
      <span className="text-[16px] text-subtle">/</span>
      <span className="text-[16px] tracking-[2px] text-ink">{label}</span>
      <span className="h-px flex-1 bg-line" />
      {action ? (
        action
      ) : index ? (
        <span className="text-[12px] tracking-[1px] text-subtle">{index}</span>
      ) : null}
    </div>
  );
}
