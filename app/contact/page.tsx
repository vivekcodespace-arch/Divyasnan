import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Divyasnan team. We answer fastest on WhatsApp, usually within an hour during daylight in Bharat.",
};

export default function Page() {
  return <ContactPage />;
}
