"use client";

import { useTheme } from "@/components/theme-provider";
import { SunIcon, MoonIcon } from "@/components/icons";

const options = [
  { value: "light", label: "LIGHT" },
  { value: "dark", label: "DARK" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className="flex w-full items-center rounded-[6px] border border-line p-[4px]"
    >
      {options.map((option) => {
        const active = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(option.value)}
            className={`flex-1 cursor-pointer rounded-[4px] py-[8px] text-center text-[11px] font-normal tracking-[1px] transition-colors ${
              active
                ? "bg-inverse text-on-inverse"
                : "text-subtle hover:text-muted"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function ThemeToggleCompact() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex touch-manipulation items-center justify-center rounded-[6px] border border-line px-[12px] py-[13px] text-muted transition-colors hover:text-ink"
    >
      {theme === "dark" ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
