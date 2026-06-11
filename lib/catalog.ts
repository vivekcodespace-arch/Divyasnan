import type { DictKey } from "./i18n";

export type TierId = "snan" | "aarti" | "sampurna";

export type Tier = {
  id: TierId;
  nameKey: DictKey;
  taglineKey: DictKey;
  priceInr: number;
  priceKey: DictKey;
  featureKeys: DictKey[];
  highlighted?: boolean;
};

export const TIERS: Tier[] = [
  {
    id: "snan",
    nameKey: "pricing.tier.snan.name",
    taglineKey: "pricing.tier.snan.tagline",
    priceInr: 501,
    priceKey: "pricing.tier.snan.price",
    featureKeys: [
      "pricing.tier.snan.f1",
      "pricing.tier.snan.f2",
      "pricing.tier.snan.f3",
      "pricing.tier.snan.f4",
    ],
  },
  {
    id: "aarti",
    nameKey: "pricing.tier.aarti.name",
    taglineKey: "pricing.tier.aarti.tagline",
    priceInr: 1251,
    priceKey: "pricing.tier.aarti.price",
    featureKeys: [
      "pricing.tier.aarti.f1",
      "pricing.tier.aarti.f2",
      "pricing.tier.aarti.f3",
      "pricing.tier.aarti.f4",
    ],
    highlighted: true,
  },
  {
    id: "sampurna",
    nameKey: "pricing.tier.sampurna.name",
    taglineKey: "pricing.tier.sampurna.tagline",
    priceInr: 2501,
    priceKey: "pricing.tier.sampurna.price",
    featureKeys: [
      "pricing.tier.sampurna.f1",
      "pricing.tier.sampurna.f2",
      "pricing.tier.sampurna.f3",
      "pricing.tier.sampurna.f4",
    ],
  },
];

export type RiverId = "haridwar" | "varanasi" | "prayagraj";

export type River = {
  id: RiverId;
  titleKey: DictKey;
  bodyKey: DictKey;
  ghatEn: string;
  ghatHi: string;
};

export const RIVERS: River[] = [
  {
    id: "haridwar",
    titleKey: "rivers.haridwar.title",
    bodyKey: "rivers.haridwar.body",
    ghatEn: "Har Ki Pauri",
    ghatHi: "हर की पौड़ी",
  },
  {
    id: "varanasi",
    titleKey: "rivers.varanasi.title",
    bodyKey: "rivers.varanasi.body",
    ghatEn: "Dashashwamedh Ghat",
    ghatHi: "दशाश्वमेध घाट",
  },
  {
    id: "prayagraj",
    titleKey: "rivers.prayagraj.title",
    bodyKey: "rivers.prayagraj.body",
    ghatEn: "Sangam Ghat",
    ghatHi: "संगम घाट",
  },
];
