"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLang, useT } from "../language-context";
import { Section } from "../section";
import { Stepper, STEPS, type StepId } from "./stepper";
import { CertificatePreview } from "../certificate-preview";
import { RIVERS, TIERS, type RiverId, type TierId } from "@/lib/catalog";
import { clsx } from "@/lib/clsx";
import {
  cloudinaryConfigured,
  uploadImageToCloudinary,
} from "@/lib/cloudinary";
import {
  buildSankalpMessage,
  buildWhatsAppLink,
  businessWhatsAppConfigured,
} from "@/lib/whatsapp";

type DevoteePhoto = {
  id: string;
  name: string;
  // Local preview only; the actual upload (file) is what gets POSTed to Cloudinary on the Confirm step.
  dataUrl: string;
  file: File;
  uploadedUrl?: string;
};

type Booking = {
  photos: DevoteePhoto[];
  devoteeName: string;
  gotra: string;
  sankalp: string;
  customerPhone: string;
  riverId: RiverId;
  tierId: TierId;
  consent: boolean;
};

const empty: Booking = {
  photos: [],
  devoteeName: "",
  gotra: "",
  sankalp: "",
  customerPhone: "",
  riverId: "haridwar",
  tierId: "aarti",
  consent: false,
};

function digitCount(s: string) {
  return s.replace(/\D/g, "").length;
}

function makeOrderId() {
  const year = new Date().getFullYear();
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `DS-${year}-${rand}`;
}

export function BookingFlow() {
  const t = useT();
  const { lang } = useLang();
  const params = useSearchParams();

  const [step, setStep] = useState<StepId>("photo");
  const [data, setData] = useState<Booking>(() => {
    const tier = params.get("tier") as TierId | null;
    if (tier && TIERS.some((tt) => tt.id === tier)) {
      return { ...empty, tierId: tier };
    }
    return empty;
  });
  const [orderId, setOrderId] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  const stepIndex = STEPS.findIndex((s) => s.id === step);
  const canNext = useMemo(() => validateStep(step, data), [step, data]);

  function next() {
    if (!canNext) return;
    const i = STEPS.findIndex((s) => s.id === step);
    if (i < STEPS.length - 1) setStep(STEPS[i + 1].id as StepId);
  }
  function back() {
    const i = STEPS.findIndex((s) => s.id === step);
    if (i > 0) setStep(STEPS[i - 1].id as StepId);
  }

  if (orderId) {
    return <Confirmation booking={data} orderId={orderId} />;
  }

  const tier = TIERS.find((tt) => tt.id === data.tierId)!;
  const river = RIVERS.find((r) => r.id === data.riverId)!;

  return (
    <Section
      title={t("book.title")}
      titleHi="अपना दिव्यस्नान बुक करें"
      sub={`Step ${stepIndex + 1} of ${STEPS.length}`}
      variant="paper"
    >
      <div ref={topRef} />
      <div className="mx-auto max-w-3xl">
        <Stepper current={step} />

        <div className="card p-6 sm:p-8">
          {step === "photo" && (
            <StepPhoto data={data} setData={setData} />
          )}
          {step === "devotee" && (
            <StepDevotee data={data} setData={setData} />
          )}
          {step === "river" && (
            <StepRiver data={data} setData={setData} />
          )}
          {step === "seva" && (
            <StepSeva data={data} setData={setData} />
          )}
          {step === "review" && (
            <StepReview data={data} setData={setData} tier={tier} river={river} />
          )}
          {step === "send" && (
            <StepSend
              data={data}
              setData={setData}
              tier={tier}
              river={river}
              onSent={(id) => setOrderId(id)}
            />
          )}

          {step !== "send" && (
            <div className="mt-8 flex items-center justify-between border-t border-gold/20 pt-6">
              <button
                type="button"
                onClick={back}
                disabled={stepIndex === 0}
                className="btn btn-ghost disabled:opacity-40"
              >
                ← {t("book.back")}
              </button>
              <button
                type="button"
                onClick={next}
                disabled={!canNext}
                className="btn btn-primary disabled:opacity-50"
              >
                {step === "review" ? t("book.review.proceed") : t("book.next")} →
              </button>
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-ink/55">
          {lang === "hi"
            ? "आपका डेटा एन्क्रिप्टेड है। हम कभी आपकी फोटो साझा नहीं करते।"
            : "Your data is encrypted. We never share your photographs."}
        </p>
      </div>
    </Section>
  );
}

function validateStep(step: StepId, d: Booking): boolean {
  switch (step) {
    case "photo":
      return d.photos.length > 0;
    case "devotee":
      return d.devoteeName.trim().length >= 2 && digitCount(d.customerPhone) >= 10;
    case "river":
      return Boolean(d.riverId);
    case "seva":
      return Boolean(d.tierId);
    case "review":
      return d.consent;
    case "send":
      return true;
  }
}

// ----- Steps -----

function StepPhoto({
  data,
  setData,
}: {
  data: Booking;
  setData: React.Dispatch<React.SetStateAction<Booking>>;
}) {
  const t = useT();

  function handleFiles(files: FileList | null) {
    if (!files) return;
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = String(reader.result);
        setData((d) => ({
          ...d,
          photos: [
            ...d.photos,
            { id: crypto.randomUUID(), name: file.name, dataUrl, file },
          ],
        }));
      };
      reader.readAsDataURL(file);
    });
  }

  return (
    <div>
      <header className="mb-5">
        <h2 className="font-serif-display text-2xl text-maroon">{t("book.photo.title")}</h2>
        <p className="mt-1 text-sm text-ink/70">{t("book.photo.help")}</p>
      </header>

      {data.photos.length === 0 ? (
        <label
          htmlFor="photo-input"
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/50 bg-cream/60 px-6 py-12 text-center transition-colors hover:bg-cream"
        >
          <svg viewBox="0 0 48 48" className="h-12 w-12 text-maroon/60" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M24 32V12m0 0l-8 8m8-8l8 8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 32v4a4 4 0 004 4h24a4 4 0 004-4v-4" strokeLinecap="round" />
          </svg>
          <p className="mt-3 font-serif-display text-lg text-maroon">{t("book.photo.cta")}</p>
          <p className="mt-1 text-xs text-ink/55">JPG, PNG · up to 10 MB</p>
        </label>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {data.photos.map((p) => (
            <li key={p.id} className="relative overflow-hidden rounded-xl border border-gold/30 bg-cream/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.dataUrl}
                alt="Devotee photograph preview"
                className="h-40 w-full object-cover"
              />
              <div className="flex items-center justify-between gap-2 p-3">
                <p className="truncate text-xs text-ink/70">{p.name}</p>
                <button
                  type="button"
                  onClick={() =>
                    setData((d) => ({ ...d, photos: d.photos.filter((x) => x.id !== p.id) }))
                  }
                  className="text-xs font-semibold text-maroon underline-offset-2 hover:underline"
                >
                  {t("book.photo.remove")}
                </button>
              </div>
            </li>
          ))}
          <li>
            <label
              htmlFor="photo-input"
              className="flex h-full min-h-40 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gold/40 text-sm text-maroon hover:bg-cream"
            >
              + {t("book.photo.addAnother")}
            </label>
          </li>
        </ul>
      )}
      <input
        id="photo-input"
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={(e) => handleFiles(e.target.files)}
      />

      <p className="mt-5 flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/10 p-4 text-sm text-maroon-deep">
        <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="currentColor" aria-hidden>
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 4a1 1 0 110 2 1 1 0 010-2zm1 4H9v6h2v-6z" />
        </svg>
        <span>{t("book.photo.trust")}</span>
      </p>
    </div>
  );
}

function StepDevotee({
  data,
  setData,
}: {
  data: Booking;
  setData: React.Dispatch<React.SetStateAction<Booking>>;
}) {
  const t = useT();
  const phoneValid = digitCount(data.customerPhone) >= 10 || data.customerPhone === "";
  return (
    <div>
      <header className="mb-5">
        <h2 className="font-serif-display text-2xl text-maroon">{t("book.devotee.title")}</h2>
        <p className="mt-1 text-sm text-ink/70">{t("book.devotee.help")}</p>
      </header>
      <div className="space-y-4">
        <Field label={t("book.devotee.name")}>
          <input
            type="text"
            required
            value={data.devoteeName}
            onChange={(e) => setData({ ...data, devoteeName: e.target.value })}
            className="input"
            placeholder="Shri / Smt. ___"
          />
        </Field>
        <Field label={t("book.devotee.phone")} help={t("book.devotee.phone.help")}>
          <input
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={data.customerPhone}
            onChange={(e) => setData({ ...data, customerPhone: e.target.value })}
            className={clsx("input", !phoneValid && "border-saffron")}
            placeholder={t("book.devotee.phone.placeholder")}
          />
        </Field>
        <Field label={t("book.devotee.gotra")}>
          <input
            type="text"
            value={data.gotra}
            onChange={(e) => setData({ ...data, gotra: e.target.value })}
            className="input"
            placeholder={t("book.devotee.gotra.placeholder")}
          />
        </Field>
        <Field label={t("book.devotee.sankalp")}>
          <textarea
            rows={4}
            value={data.sankalp}
            onChange={(e) => setData({ ...data, sankalp: e.target.value })}
            className="input"
            placeholder={t("book.devotee.sankalp.placeholder")}
          />
        </Field>
      </div>
    </div>
  );
}

function StepRiver({
  data,
  setData,
}: {
  data: Booking;
  setData: React.Dispatch<React.SetStateAction<Booking>>;
}) {
  const t = useT();
  return (
    <div>
      <header className="mb-5">
        <h2 className="font-serif-display text-2xl text-maroon">{t("book.river.title")}</h2>
        <p className="mt-1 text-sm text-ink/70">{t("book.river.help")}</p>
      </header>
      <div className="grid gap-3">
        {RIVERS.map((r) => {
          const selected = data.riverId === r.id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setData({ ...data, riverId: r.id })}
              className={clsx(
                "rounded-xl border p-4 text-left transition-colors",
                selected
                  ? "border-saffron bg-saffron/8 ring-2 ring-saffron/40"
                  : "border-gold/30 bg-cream/50 hover:bg-cream",
              )}
              aria-pressed={selected}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif-display text-lg text-maroon">{t(r.titleKey)}</p>
                  <p className="font-hindi text-sm text-maroon/70">{r.ghatHi}</p>
                </div>
                <span
                  className={clsx(
                    "inline-flex h-5 w-5 items-center justify-center rounded-full border-2",
                    selected ? "border-saffron bg-saffron text-cream" : "border-ink/30",
                  )}
                  aria-hidden
                >
                  {selected ? "✓" : ""}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink/75">{t(r.bodyKey)}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepSeva({
  data,
  setData,
}: {
  data: Booking;
  setData: React.Dispatch<React.SetStateAction<Booking>>;
}) {
  const t = useT();
  return (
    <div>
      <header className="mb-5">
        <h2 className="font-serif-display text-2xl text-maroon">{t("book.seva.title")}</h2>
        <p className="mt-1 text-sm text-ink/70">{t("book.seva.help")}</p>
      </header>
      <div className="grid gap-3">
        {TIERS.map((tier) => {
          const selected = data.tierId === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setData({ ...data, tierId: tier.id })}
              className={clsx(
                "rounded-xl border p-4 text-left transition-colors",
                selected
                  ? "border-saffron bg-saffron/8 ring-2 ring-saffron/40"
                  : "border-gold/30 bg-cream/50 hover:bg-cream",
              )}
              aria-pressed={selected}
            >
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <p className="font-serif-display text-lg text-maroon">
                    {t(tier.nameKey)}
                    {tier.highlighted && (
                      <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-gold">
                        {t("pricing.popular")}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-ink/60">{t(tier.taglineKey)}</p>
                </div>
                <p className="font-serif-display text-xl text-maroon-deep whitespace-nowrap">
                  {t(tier.priceKey)}
                </p>
              </div>
              <ul className="mt-3 grid gap-1 text-sm text-ink/80 sm:grid-cols-2">
                {tier.featureKeys.map((f) => (
                  <li key={f} className="flex items-start gap-1.5">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-saffron" />
                    {t(f)}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepReview({
  data,
  setData,
  tier,
  river,
}: {
  data: Booking;
  setData: React.Dispatch<React.SetStateAction<Booking>>;
  tier: (typeof TIERS)[number];
  river: (typeof RIVERS)[number];
}) {
  const t = useT();
  const { lang } = useLang();
  const total = tier.priceInr + Math.max(0, data.photos.length - 1) * 101;
  return (
    <div>
      <header className="mb-5">
        <h2 className="font-serif-display text-2xl text-maroon">{t("book.review.title")}</h2>
      </header>

      <dl className="grid gap-3 sm:grid-cols-2">
        <Row label={t("book.review.photos")}>
          <div className="flex flex-wrap gap-1.5">
            {data.photos.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.id} src={p.dataUrl} alt="" className="h-10 w-10 rounded object-cover" />
            ))}
          </div>
        </Row>
        <Row label={t("book.review.devotee")}>{data.devoteeName || "—"}</Row>
        <Row label={t("book.devotee.phone")}>{data.customerPhone || "—"}</Row>
        {data.gotra && <Row label={t("book.review.gotra")}>{data.gotra}</Row>}
        {data.sankalp && (
          <Row label={t("book.review.sankalp")} className="sm:col-span-2">
            <span className="italic text-ink/80">&ldquo;{data.sankalp}&rdquo;</span>
          </Row>
        )}
        <Row label={t("book.review.river")}>
          {t(river.titleKey)}
          <span className="block font-hindi text-xs text-maroon/70">{river.ghatHi}</span>
        </Row>
        <Row label={t("book.review.seva")}>
          {t(tier.nameKey)}
          <span className="block text-xs text-ink/60">{t(tier.taglineKey)}</span>
        </Row>
      </dl>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-gold/30 bg-gold/10 px-4 py-3">
        <div>
          <p className="font-semibold text-maroon-deep">{t("book.send.contribution.label")}</p>
          <p className="text-[11px] text-ink/55">{t("book.send.contribution.note")}</p>
        </div>
        <p className="font-serif-display text-2xl text-maroon-deep">
          ₹ {total.toLocaleString(lang === "hi" ? "hi-IN" : "en-IN")}
        </p>
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-ink/80">
        <input
          type="checkbox"
          checked={data.consent}
          onChange={(e) => setData({ ...data, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-ink/30 text-maroon focus:ring-saffron"
        />
        <span>{t("book.review.consent")}</span>
      </label>
    </div>
  );
}

function StepSend({
  data,
  setData,
  tier,
  river,
  onSent,
}: {
  data: Booking;
  setData: React.Dispatch<React.SetStateAction<Booking>>;
  tier: (typeof TIERS)[number];
  river: (typeof RIVERS)[number];
  onSent: (orderId: string) => void;
}) {
  const t = useT();
  const { lang } = useLang();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const total = tier.priceInr + Math.max(0, data.photos.length - 1) * 101;

  const riverLabelEn =
    river.id === "haridwar"
      ? "Ganga"
      : river.id === "varanasi"
        ? "Ganga"
        : "Triveni Sangam";

  async function ensurePhotosUploaded(): Promise<string[]> {
    if (!cloudinaryConfigured) return [];
    const updated = [...data.photos];
    const urls: string[] = [];
    for (let i = 0; i < updated.length; i++) {
      const p = updated[i];
      if (p.uploadedUrl) {
        urls.push(p.uploadedUrl);
        continue;
      }
      // Sequential uploads so we can show a clear progress state.
      const url = await uploadImageToCloudinary(p.file);
      updated[i] = { ...p, uploadedUrl: url };
      urls.push(url);
    }
    setData((d) => ({ ...d, photos: updated }));
    return urls;
  }

  async function sendOnWhatsApp() {
    setUploadError(null);
    let photoUrls: string[] = [];
    if (cloudinaryConfigured) {
      try {
        setUploading(true);
        photoUrls = await ensurePhotosUploaded();
      } catch (err) {
        // Best-effort: proceed without hosted URLs so the seva team can still receive everything.
        console.error("Cloudinary upload failed", err);
        setUploadError(t("book.send.upload.failed"));
        photoUrls = [];
      } finally {
        setUploading(false);
      }
    }

    const orderId = makeOrderId();
    const dateLabel = new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const ghat = river.ghatEn;
    const message = buildSankalpMessage({
      orderId,
      devoteeName: data.devoteeName,
      gotra: data.gotra,
      sankalp: data.sankalp,
      riverLabel: riverLabelEn,
      ghat,
      sevaName: tier.id === "snan" ? "Snan" : tier.id === "aarti" ? "Snan + Aarti" : "Sampurna Seva",
      amountInr: total,
      dateLabel,
      customerPhone: data.customerPhone,
      photoUrls,
    });

    const waUrl = buildWhatsAppLink(message);
    if (waUrl) {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    onSent(orderId);
  }

  return (
    <div>
      <header className="mb-5">
        <h2 className="font-serif-display text-2xl text-maroon">{t("book.send.title")}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">{t("book.send.help")}</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        <Row label={t("book.review.devotee")}>{data.devoteeName || "—"}</Row>
        <Row label={t("book.devotee.phone")}>{data.customerPhone || "—"}</Row>
        <Row label={t("book.review.river")}>
          {t(river.titleKey)}
          <span className="block font-hindi text-xs text-maroon/70">{river.ghatHi}</span>
        </Row>
        <Row label={t("book.review.seva")}>
          {t(tier.nameKey)}
          <span className="block text-xs text-ink/60">{t(tier.taglineKey)}</span>
        </Row>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl border border-gold/30 bg-gold/10 px-4 py-3">
        <div>
          <p className="font-semibold text-maroon-deep">{t("book.send.contribution.label")}</p>
          <p className="text-[11px] text-ink/55">{t("book.send.contribution.note")}</p>
        </div>
        <p className="font-serif-display text-2xl text-maroon-deep">
          ₹ {total.toLocaleString(lang === "hi" ? "hi-IN" : "en-IN")}
        </p>
      </div>

      {!businessWhatsAppConfigured && (
        <Warning>{t("book.send.warning.bizNumber")}</Warning>
      )}
      {!cloudinaryConfigured && (
        <Warning tone="info">{t("book.send.warning.cloudinary")}</Warning>
      )}
      {uploadError && <Warning>{uploadError}</Warning>}

      <button
        type="button"
        onClick={sendOnWhatsApp}
        disabled={uploading}
        className="btn btn-primary mt-6 w-full disabled:opacity-60"
      >
        {uploading ? (
          <span className="inline-flex items-center gap-2">
            <Spinner /> {t("book.send.uploading")}
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <WhatsAppGlyph /> {t("book.send.button")}
          </span>
        )}
      </button>

      <p className="mt-3 text-center text-[11px] text-ink/55">
        {lang === "hi"
          ? "हम इस वेबसाइट पर भुगतान नहीं लेते।"
          : "We do not collect money on this site."}
      </p>
    </div>
  );
}

function Confirmation({ booking, orderId }: { booking: Booking; orderId: string }) {
  const t = useT();
  const river = RIVERS.find((r) => r.id === booking.riverId)!;
  return (
    <Section variant="paper">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4 10-11" />
          </svg>
        </div>
        <p className="font-hindi text-lg text-maroon/80">|| शुभं भवतु ||</p>
        <h1 className="mt-2 font-serif-display text-3xl text-maroon-deep sm:text-4xl">
          {t("book.confirm.title")}
        </h1>
        <p className="font-hindi text-lg text-maroon mt-1">आपका संकल्प प्राप्त हुआ</p>
        <p className="mt-4 text-ink/75">{t("book.confirm.sub")}</p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-cream px-5 py-2 text-sm">
          <span className="text-ink/60">{t("book.confirm.orderId")}</span>
          <span className="font-mono font-semibold text-maroon-deep">{orderId}</span>
        </div>

        <div className="mt-10">
          <CertificatePreview
            devoteeName={booking.devoteeName || "Shri / Smt. ___"}
            gotra={booking.gotra}
            river={`${river.id === "haridwar" ? "Ganga · Har Ki Pauri" : river.id === "varanasi" ? "Ganga · Dashashwamedh" : "Triveni Sangam · Prayagraj"}`}
            orderId={orderId}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-secondary">
            {t("book.confirm.cta.home")}
          </Link>
        </div>
      </div>
    </Section>
  );
}

// ----- Small primitives -----

function Field({
  label,
  help,
  children,
}: {
  label: string;
  help?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink/65">
        {label}
      </span>
      {children}
      {help && <span className="mt-1 block text-[11px] text-ink/55">{help}</span>}
    </label>
  );
}

function Row({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("rounded-xl border border-gold/25 bg-cream/50 px-4 py-3", className)}>
      <dt className="text-[10px] font-semibold uppercase tracking-widest text-ink/55">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-ink">{children}</dd>
    </div>
  );
}

function Warning({
  children,
  tone = "warn",
}: {
  children: React.ReactNode;
  tone?: "warn" | "info";
}) {
  return (
    <p
      role="status"
      className={clsx(
        "mt-4 rounded-xl border px-4 py-3 text-sm",
        tone === "warn"
          ? "border-saffron/40 bg-saffron/10 text-maroon-deep"
          : "border-teal/30 bg-teal/10 text-teal",
      )}
    >
      {children}
    </p>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M19.11 17.55c-.27-.13-1.58-.78-1.83-.87-.25-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.16 0-.34-.02-.51-.02-.18 0-.47.07-.71.34-.25.27-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.13.18 1.87 2.85 4.53 4 .63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.58-.64 1.8-1.27.22-.62.22-1.15.16-1.27-.06-.11-.24-.18-.51-.31zM16 4C9.37 4 4 9.37 4 16c0 2.12.55 4.16 1.6 5.98L4 28l6.18-1.62A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4z" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" strokeOpacity="0.3" />
      <path d="M21 12a9 9 0 00-9-9" strokeLinecap="round" />
    </svg>
  );
}
