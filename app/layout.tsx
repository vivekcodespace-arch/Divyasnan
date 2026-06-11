import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { AnnouncementBar } from "@/components/AnnouncementBar";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hindi = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-hindi",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divyasnan.com"),
  title: {
    default: "Divyasnan · घर बैठे, गंगा स्नान",
    template: "%s · Divyasnan",
  },
  description:
    "Divyasnan offers a sacred photo-snan seva in the Ganga at Haridwar, Varanasi, and the Triveni Sangam at Prayagraj. Send your photograph; we perform a respectful holy dip and prayer on your behalf and return a dated, geo-tagged video and Divya Snan Certificate.",
  keywords: [
    "Divyasnan",
    "Divya Snan",
    "photo snan",
    "Ganga snan",
    "Triveni Sangam",
    "Haridwar",
    "Varanasi",
    "Prayagraj",
    "online puja",
    "gangajal home delivery",
    "remote puja seva",
  ],
  openGraph: {
    title: "Divyasnan · घर बैठे, गंगा स्नान",
    description:
      "A holy dip, from your home. Send your photograph — receive a dated, geo-tagged video and Divya Snan Certificate from the sacred rivers of Bharat.",
    type: "website",
    locale: "en_IN",
    siteName: "Divyasnan",
  },
  icons: {
    icon: "/assets/logo-mark.svg",
    apple: "/assets/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${hindi.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-cream-grain flex flex-col">
        <LanguageProvider>
          <AnnouncementBar />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
