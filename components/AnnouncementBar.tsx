"use client";

import Link from "next/link";

// Easy-to-edit announcement copy. Swap this string anytime.
const ANNOUNCEMENT_TEXT =
  "🪔 Exam & Placement Season Special — book a Divya Snan and seek blessings for success in your upcoming exams & placements. Aapki mehnat, devon ka aashirvaad. 🙏 Book your snan now →";
// Alternative copy (uncomment to use):
// const ANNOUNCEMENT_TEXT = "🪔 Holy dip for upcoming exams & placements — towards guaranteed success!";

const ARIA_LABEL =
  "Exam and Placement season special: book a Divya Snan for blessings of success — opens the booking page";

export function AnnouncementBar() {
  return (
    <Link
      href="/book"
      aria-label={ARIA_LABEL}
      className="announcement-bar block w-full overflow-hidden border-b border-gold/70 bg-gradient-to-r from-saffron to-maroon-deep text-cream cursor-pointer transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_2px_8px_rgba(123,30,30,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
    >
      <div className="relative flex h-10 items-center">
        <div className="marquee-track">
          <span className="shrink-0 px-8 text-sm font-medium tracking-wide">
            {ANNOUNCEMENT_TEXT}
          </span>
          <span
            aria-hidden
            data-marquee-dupe
            className="shrink-0 px-8 text-sm font-medium tracking-wide"
          >
            {ANNOUNCEMENT_TEXT}
          </span>
        </div>
      </div>
    </Link>
  );
}
