"use client";

import { useState } from "react";
import { useT } from "./language-context";
import { Section } from "./section";

const WHATSAPP_NUMBER = "919279726893";

export function ContactPage() {
  const t = useT();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to backend (Resend / SendGrid). For now, just show acknowledgement.
    setSent(true);
  }

  const waMessage = encodeURIComponent(
    "Namaste 🙏 I would like to book a Divya Snan. Please share details.",
  );

  return (
    <>
      <header className="bg-warm-paper">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="tag mb-3">{t("nav.contact")}</p>
          <h1 className="font-serif-display text-4xl text-maroon-deep sm:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="font-hindi mt-1 text-lg text-maroon/80">हमसे संपर्क करें</p>
          <p className="mt-4 text-ink/75">{t("contact.sub")}</p>
        </div>
      </header>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <aside className="space-y-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-5 hover:bg-cream transition-colors"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M19.11 17.55c-.27-.13-1.58-.78-1.83-.87-.25-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.16 0-.34-.02-.51-.02-.18 0-.47.07-.71.34-.25.27-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.13.18 1.87 2.85 4.53 4 .63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.58-.64 1.8-1.27.22-.62.22-1.15.16-1.27-.06-.11-.24-.18-.51-.31zM16 4C9.37 4 4 9.37 4 16c0 2.12.55 4.16 1.6 5.98L4 28l6.18-1.62A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-maroon-deep">{t("contact.whatsapp")}</p>
                <p className="text-sm text-ink/65">+91 99999 99999 · (placeholder)</p>
              </div>
            </a>

            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/55">
                {t("contact.email")}
              </p>
              <a href="mailto:seva@divyasnan.com" className="mt-1 block text-base font-medium text-maroon">
                seva@divyasnan.com
              </a>
            </div>

            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/55">
                {t("contact.phone")}
              </p>
              <a href="tel:+919999999999" className="mt-1 block text-base font-medium text-maroon">
                +91 99999 99999
              </a>
            </div>

            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/55">
                {t("contact.address")}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/80">
                Divyasnan Seva Trust<br />
                Near Har Ki Pauri<br />
                Haridwar, Uttarakhand 249401
              </p>
            </div>
          </aside>

          <div>
            {sent ? (
              <div className="card p-8 text-center">
                <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4 10-11" />
                  </svg>
                </div>
                <p className="font-serif-display text-2xl text-maroon-deep">
                  {t("contact.form.sent")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-4 p-6">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink/65">
                    {t("contact.form.name")}
                  </span>
                  <input required type="text" name="name" className="input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink/65">
                    {t("contact.form.email")}
                  </span>
                  <input required type="text" name="contact" className="input" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink/65">
                    {t("contact.form.message")}
                  </span>
                  <textarea required rows={5} name="message" className="input" />
                </label>
                <button type="submit" className="btn btn-primary w-full">
                  {t("contact.form.send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
