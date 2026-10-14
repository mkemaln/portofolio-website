import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type Variant = "primary" | "secondary";

const styles: Record<Variant, string> = {
  primary: "bg-inverse text-on-inverse",
  secondary: "border border-line text-ink hover:bg-surface-sunken",
};

export function ButtonLink({
  href,
  variant = "primary",
  external,
  children,
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className = `inline-flex w-fit items-center gap-[10px] rounded-[4px] px-[24px] py-[14px] text-[12px] tracking-[1px] transition-colors ${styles[variant]}`;

  const base =
    variant === "primary"
      ? "hover:opacity-90"
      : "hover:bg-surface-sunken";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${className} ${base}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${className} ${base}`}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "inline-flex w-fit items-center gap-[8px] text-[12px] tracking-[1px] text-ink transition-opacity hover:opacity-70";

  if (external) {
    return (
      <a href={href} rel="noreferrer" className={className}>
        {children}
        <ArrowRightIcon className="h-[14px] w-[14px]" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <ArrowRightIcon className="h-[14px] w-[14px]" />
    </Link>
  );
}
