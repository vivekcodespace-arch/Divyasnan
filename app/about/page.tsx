import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "Our Promise",
  description:
    "Divyasnan exists for devotees who cannot travel. Our promise: respect, authenticity, and absolute privacy in every sacred photo-snan.",
};

export default function Page() {
  return <AboutPage />;
}
