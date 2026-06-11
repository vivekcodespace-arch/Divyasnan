export const BUSINESS_WHATSAPP =
  (process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP ?? "").replace(/\D/g, "");

export const businessWhatsAppConfigured = BUSINESS_WHATSAPP.length >= 10;

export type SankalpMessage = {
  orderId: string;
  devoteeName: string;
  gotra?: string;
  sankalp?: string;
  riverLabel: string;
  ghat: string;
  sevaName: string;
  amountInr: number;
  dateLabel: string;
  customerPhone: string;
  photoUrls: string[];
};

export function buildSankalpMessage(m: SankalpMessage): string {
  const dash = "—";
  const photoLine =
    m.photoUrls.length === 0
      ? "Photo will be sent separately"
      : m.photoUrls.length === 1
        ? m.photoUrls[0]
        : m.photoUrls.map((u, i) => `(${i + 1}) ${u}`).join("\n");

  return [
    "🕉 *New Divya Snan Sankalp*",
    `Order ID: ${m.orderId}`,
    "",
    `👤 Devotee: ${m.devoteeName}`,
    `Gotra: ${m.gotra?.trim() || dash}`,
    `📿 Sankalp: ${m.sankalp?.trim() || dash}`,
    `🛕 River / Ghat: ${m.riverLabel} · ${m.ghat}`,
    `🪔 Seva: ${m.sevaName} (₹${m.amountInr.toLocaleString("en-IN")})`,
    `📅 Requested on: ${m.dateLabel}`,
    `📞 Customer WhatsApp: ${m.customerPhone}`,
    `🖼 Photo: ${photoLine}`,
  ].join("\n");
}

export function buildWhatsAppLink(message: string): string | null {
  if (!businessWhatsAppConfigured) return null;
  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
