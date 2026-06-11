"use client";

import { useT } from "../language-context";
import { clsx } from "@/lib/clsx";

export const STEPS = [
  { id: "photo", labelKey: "book.step.photo" },
  { id: "devotee", labelKey: "book.step.devotee" },
  { id: "river", labelKey: "book.step.river" },
  { id: "seva", labelKey: "book.step.seva" },
  { id: "review", labelKey: "book.step.review" },
  { id: "send", labelKey: "book.step.send" },
] as const;

export type StepId = (typeof STEPS)[number]["id"];

export function Stepper({ current }: { current: StepId }) {
  const t = useT();
  const currentIndex = STEPS.findIndex((s) => s.id === current);
  return (
    <nav aria-label="Booking progress" className="mb-8">
      <ol className="flex items-center gap-1 overflow-x-auto scroll-hide">
        {STEPS.map((s, i) => {
          const isDone = i < currentIndex;
          const isCurrent = i === currentIndex;
          return (
            <li key={s.id} className="flex shrink-0 items-center">
              <div
                className={clsx(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold",
                  isCurrent && "bg-maroon text-cream",
                  isDone && "bg-gold/30 text-maroon",
                  !isCurrent && !isDone && "bg-cream-dark/50 text-ink/60",
                )}
              >
                <span
                  className={clsx(
                    "inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px]",
                    isCurrent ? "bg-cream text-maroon" : "bg-maroon/15 text-maroon",
                  )}
                >
                  {isDone ? "✓" : i + 1}
                </span>
                <span className="whitespace-nowrap inline-flex items-center gap-1.5">
                  {s.id === "send" && (
                    <svg viewBox="0 0 32 32" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="M19.11 17.55c-.27-.13-1.58-.78-1.83-.87-.25-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.16 0-.34-.02-.51-.02-.18 0-.47.07-.71.34-.25.27-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.13.18 1.87 2.85 4.53 4 .63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.58-.64 1.8-1.27.22-.62.22-1.15.16-1.27-.06-.11-.24-.18-.51-.31zM16 4C9.37 4 4 9.37 4 16c0 2.12.55 4.16 1.6 5.98L4 28l6.18-1.62A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4z" />
                    </svg>
                  )}
                  {t(s.labelKey)}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className={clsx(
                    "mx-1 h-px w-4 sm:w-8",
                    isDone ? "bg-gold/60" : "bg-ink/15",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
