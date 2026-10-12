import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="flex w-full flex-col gap-[24px]">
      <span className="text-[12px] tracking-[2px] text-subtle">{"// 404"}</span>
      <h1 className="text-[42px] leading-[1.05] font-bold tracking-[-2px] text-ink">
        NOT FOUND
      </h1>
      <p className="max-w-[520px] text-[14px] leading-[22px] text-muted">
        That route does not exist. Try the navigation on the left.
      </p>
      <ButtonLink href="/">BACK HOME</ButtonLink>
    </section>
  );
}
