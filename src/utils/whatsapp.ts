export const WHATSAPP_PHONE_DISPLAY = "8695767656";
export const WHATSAPP_PHONE_INTL = "918695767656";

/**
 * Builds a direct WhatsApp chat link that works seamlessly across desktop and mobile.
 */
export function createWhatsAppUrl(message: string): string {
  const cleanPhone = WHATSAPP_PHONE_INTL.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Generates the standard order message for a specific product as required.
 */
export function getProductOrderWhatsAppUrl(
  productName: string,
  selectedFinish?: string,
  price?: number
): string {
  let message = `Hello WOODORA LIVING, I am interested in ordering the ${productName}`;
  if (selectedFinish) {
    message += ` in ${selectedFinish} finish`;
  }
  if (price) {
    message += ` (₹${price.toLocaleString("en-IN")})`;
  }
  message += `. Please share availability, final price and delivery details.`;

  return createWhatsAppUrl(message);
}

/**
 * Generates custom furniture inquiry WhatsApp link.
 */
export function getCustomFurnitureWhatsAppUrl(details?: {
  furnitureType?: string;
  woodType?: string;
  finish?: string;
  dimensions?: string;
  notes?: string;
}): string {
  if (!details || !details.furnitureType) {
    return createWhatsAppUrl(
      "Hello WOODORA LIVING, I would like to discuss a custom furniture requirement."
    );
  }

  const parts = [
    "Hello WOODORA LIVING, I would like to discuss a custom furniture requirement:",
    `• Furniture Type: ${details.furnitureType}`,
    details.woodType ? `• Preferred Wood: ${details.woodType}` : null,
    details.finish ? `• Finish: ${details.finish}` : null,
    details.dimensions ? `• Dimensions: ${details.dimensions}` : null,
    details.notes ? `• Specific Details: ${details.notes}` : null,
    "Please share estimated timelines and quotation."
  ].filter(Boolean);

  return createWhatsAppUrl(parts.join("\n"));
}

/**
 * Generates multiple items inquiry link (e.g. from Wishlist / Cart).
 */
export function getMultiProductWhatsAppUrl(
  items: { name: string; price: number; finish?: string }[]
): string {
  if (items.length === 0) {
    return createWhatsAppUrl("Hello WOODORA LIVING, I would like to inquire about your furniture collection.");
  }

  const itemsList = items
    .map((item, idx) => `${idx + 1}. ${item.name} (${item.finish || "Standard"} - ₹${item.price.toLocaleString("en-IN")})`)
    .join("\n");

  const msg = `Hello WOODORA LIVING, I am interested in the following curated pieces from your collection:\n\n${itemsList}\n\nPlease share combined availability, bundled offers, and delivery schedule.`;
  return createWhatsAppUrl(msg);
}

/**
 * Showroom visit booking WhatsApp link.
 */
export function getShowroomVisitWhatsAppUrl(): string {
  return createWhatsAppUrl(
    "Hello WOODORA LIVING, I would like to schedule a private walkthrough at the Experience Studio (42 Harmony Avenue, Varanasi)."
  );
}

/**
 * General customer support WhatsApp link.
 */
export function getGeneralWhatsAppUrl(): string {
  return createWhatsAppUrl(
    "Hello WOODORA LIVING, I am browsing your furniture catalogue and would like some assistance."
  );
}
