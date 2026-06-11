import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Rivers } from "@/components/home/rivers";
import { Trust } from "@/components/home/trust";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CtaBand } from "@/components/home/cta-band";
import { RippleDivider } from "@/components/ripple-divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RippleDivider className="opacity-60" />
      <HowItWorks />
      <Rivers />
      <Trust />
      <PricingTeaser />
      <Testimonials />
      <FAQ />
      <CtaBand />
    </>
  );
}
