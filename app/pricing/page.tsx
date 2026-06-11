import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three seva tiers — Snan, Snan + Aarti, and Sampurna Seva. Choose the offering that feels right for your sankalp. Dakshina-inclusive pricing in INR.",
};

export default function Page() {
  return <PricingPage />;
}
