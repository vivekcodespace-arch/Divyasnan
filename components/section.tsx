import { clsx } from "@/lib/clsx";

type Props = {
  id?: string;
  kicker?: string;
  title?: string;
  titleHi?: string;
  sub?: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  variant?: "cream" | "paper";
};

export function Section({
  id,
  kicker,
  title,
  titleHi,
  sub,
  children,
  className,
  align = "center",
  variant = "cream",
}: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "section-pad",
        variant === "paper" && "bg-warm-paper",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(kicker || title || sub) && (
          <header
            className={clsx(
              "mb-10 max-w-2xl",
              align === "center" ? "mx-auto text-center" : "text-left",
            )}
          >
            {kicker ? (
              <p className="tag mb-3">{kicker}</p>
            ) : null}
            {title ? (
              <h2 className="font-serif-display text-3xl sm:text-4xl text-maroon-deep tracking-tight">
                {title}
              </h2>
            ) : null}
            {titleHi ? (
              <p className="font-hindi mt-1 text-lg text-maroon/80">{titleHi}</p>
            ) : null}
            {sub ? (
              <p className="mt-4 text-base text-ink/75 leading-relaxed">{sub}</p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
