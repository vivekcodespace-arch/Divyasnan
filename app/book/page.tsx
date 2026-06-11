import { Suspense } from "react";
import { BookingFlow } from "@/components/booking/booking-flow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Divya Snan",
  description:
    "Book a respectful, geo-tagged photo-snan in the Ganga or at the Triveni Sangam. We perform the snan on your behalf and return video and certificate within 48 hours.",
};

export default function BookPage() {
  return (
    <Suspense fallback={<div className="section-pad text-center text-ink/60">Loading…</div>}>
      <BookingFlow />
    </Suspense>
  );
}
