"use client";

import { useT } from "./language-context";

// TODO: replace with the real production WhatsApp number.
const WHATSAPP_NUMBER = "919279726893";

export function WhatsAppFloat() {
  const t = useT();
  const message = encodeURIComponent(
    "Namaste 🙏 I would like to book a Divya Snan. Please share details.",
  );
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("contact.whatsapp")}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M19.11 17.55c-.27-.13-1.58-.78-1.83-.87-.25-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.16 0-.34-.02-.51-.02-.18 0-.47.07-.71.34-.25.27-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.13.18 1.87 2.85 4.53 4 .63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.58-.64 1.8-1.27.22-.62.22-1.15.16-1.27-.06-.11-.24-.18-.51-.31zM16 4C9.37 4 4 9.37 4 16c0 2.12.55 4.16 1.6 5.98L4 28l6.18-1.62A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.84c-1.84 0-3.62-.49-5.17-1.42l-.37-.22-3.67.96.98-3.58-.24-.37A9.84 9.84 0 1 1 25.84 16c0 5.43-4.41 9.84-9.84 9.84z"
        />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
