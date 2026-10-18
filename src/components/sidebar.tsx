"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle, ThemeToggleCompact } from "@/components/theme-toggle";
import { UserIcon, MenuIcon, CloseIcon, icons } from "@/components/icons";
import { nav, site, socials } from "@/lib/site";
import { TextLink } from "./button-link";

function NavLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`flex w-full items-center gap-[2px] rounded-[4px] px-[16px] py-[clamp(6px,1.5vh,11px)] text-[clamp(16px,2.5vh,22px)] leading-normal transition-colors ${
        active ? "bg-inverse text-on-inverse" : "hover:bg-surface-sunken"
      }`}
    >
      <span className={active ? "text-on-inverse" : "text-subtle"}>/</span>
      <span className={active ? "text-on-inverse" : "text-muted"}>{label}</span>
    </Link>
  );
}

function SidebarBody({
  pathname,
  year,
  onNavigate,
  showThemeToggle = true,
}: {
  pathname: string;
  year: number;
  onNavigate?: () => void;
  showThemeToggle?: boolean;
}) {
  return (
    <>
      <div className="flex w-full flex-col gap-[clamp(16px,2.4vh,34px)]">
        <div className="flex animate-wiggle rounded-lg aspect-square w-[clamp(120px,19vh,248px)] shrink-0 flex-col items-center justify-center gap-[10px] border border-line bg-surface-sunken">
          {/* <UserIcon className="h-[clamp(26px,3.6vh,44px)] w-[clamp(26px,3.6vh,44px)] text-subtle" /> */}
          <span className="text-[11px] tracking-[1.5px] text-subtle">
            <img className="rounded-lg" src="/assets/pp.jpeg" alt="Profile" />
          </span>
        </div>

        <div className="flex w-full flex-col gap-[6px]">
          <span className="text-[20px] font-bold tracking-[1px] text-ink">
            {site.name}
          </span>
          <span className="text-[13px] text-muted">{site.role}</span>
          <span className="text-[12px] text-subtle">
            {site.location} · {site.timezone}
          </span>
        </div>

        <nav className="flex w-full flex-col gap-[10px]" aria-label="Main">
          <span className="text-[11px] tracking-[1.5px] text-subtle">
            {"// NAVIGATION"}
          </span>
          <div className="flex w-full flex-col gap-[2px]">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={active}
                  onNavigate={onNavigate}
                />
              );
            })}
          </div>
        </nav>
      </div>

      <div className="flex w-full flex-col gap-[clamp(10px,1.8vh,18px)]">
        {showThemeToggle && <ThemeToggle />}

        <div className="flex w-full items-center gap-[16px]">
          {socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-[8px] text-muted transition-colors hover:text-ink"
              >
                <Icon className="h-[16px] w-[16px]" />
                <span className="text-[11px] tracking-[1px]">{social.label}</span>
              </a>
            );
          })}
        </div>

        <span className="flex justify-between text-[10px] tracking-[1px] text-subtle">
          <div>© {year} — ALL RIGHTS RESERVED</div>
          <a className="text-muted transition-colors hover:text-ink" href="/more">More?</a>
          {/* <TextLink href="/a">More?</TextLink> */}
        </span>
      </div>
    </>
  );
}

export function Sidebar({ year }: { year: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: fixed, full-height, never scrolls on its own. */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[400px] shrink-0 flex-col justify-between gap-[40px] overflow-hidden bg-surface px-[44px] py-[clamp(20px,3.8vh,56px)] lg:flex">
        <SidebarBody pathname={pathname} year={year} />
      </aside>

      {/* Mobile: a compact top bar plus an overlay drawer. */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line bg-surface px-[20px] pb-[14px] pt-[calc(14px+env(safe-area-inset-top,0px))] lg:hidden">
        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex touch-manipulation items-center justify-center rounded-[6px] border border-line px-[12px] py-[13px] text-muted transition-colors hover:text-ink"
          >
            {open ? (
              <CloseIcon className="h-[18px] w-[18px]" />
            ) : (
              <MenuIcon className="h-[18px] w-[18px]" />
            )}
          </button>
          <Link href="/" className="text-[15px] font-bold tracking-[1px] text-ink">
            {site.name}
          </Link>
        </div>
        <ThemeToggleCompact />
      </header>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[var(--header-height)] z-30 flex flex-col justify-between gap-[40px] overflow-y-auto bg-bg px-[24px] pt-[32px] pb-[calc(32px+env(safe-area-inset-bottom,0px))] lg:hidden"
        >
          <SidebarBody
            pathname={pathname}
            year={year}
            onNavigate={() => setOpen(false)}
            showThemeToggle={false}
          />
        </div>
      )}
    </>
  );
}
