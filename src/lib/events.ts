/* Single source of truth for names, dates and venues — every card reads from here. */

export const GROOM = "Garvit (Rishabh)";
export const BRIDE = "Geetanjali (Varsha)";
export const COUPLE = `${GROOM} & ${BRIDE}`;
export const FAMILY = "Gupta Family";

export type EventKey = "engagement" | "wedding";

export interface EventInfo {
  key: EventKey;
  title: string;
  dateLabel: string;
  shortDate: string;
  timeLabel: string;
  startISO: string;
  endISO: string;
  venue: string;
  address: string;
  mapsQuery: string;
  lat: number;
  lng: number;
  placeId: string;
  note?: string;
}

export const EVENTS: Record<EventKey, EventInfo> = {
  engagement: {
    key: "engagement",
    title: "Engagement Ceremony",
    dateLabel: "Sunday, 29 November 2026",
    shortDate: "Sun, 29 Nov 2026",
    timeLabel: "6:00 PM",
    startISO: "2026-11-29T18:00:00+05:30",
    endISO: "2026-11-29T22:00:00+05:30",
    venue: "Diamond Crown Banquet",
    address: "Karkardooma Metro Station, Arya Nagar, Anand Vihar, Delhi",
    mapsQuery: "Diamond Crown Banquet, Karkardooma Metro Station, Arya Nagar, Anand Vihar, Delhi",
    lat: 28.6487184,
    lng: 77.305948,
    placeId: "ChIJ_Sks-WP7DDkRiGwKsjl7KrM",
    note: "Reception to follow",
  },
  wedding: {
    key: "wedding",
    title: "Wedding Ceremony",
    dateLabel: "Monday, 14 December 2026",
    shortDate: "Mon, 14 Dec 2026",
    timeLabel: "Sehra 4:00 PM · Barat 5:00 PM",
    startISO: "2026-12-14T16:00:00+05:30",
    endISO: "2026-12-14T22:00:00+05:30",
    venue: "Diamond Crown Platinum Hall",
    address: "Sector 51, Noida",
    mapsQuery: "Diamond Crown Platinum Hall, Sector 51, Noida",
    // Google lists the Sector 51 venue as "Diamond Crown Banquet" (H 55, Hoshiyarpur)
    lat: 28.5785315,
    lng: 77.3705805,
    placeId: "ChIJ79G1EY_lDDkRhQHaH8RiwBs",
  },
};

export function mapsUrl(e: EventInfo) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.mapsQuery)}&query_place_id=${e.placeId}`;
}

/** Keyless Google Maps embed, centred on the venue. */
export function embedUrl(e: EventInfo) {
  return `https://maps.google.com/maps?q=${e.lat},${e.lng}&z=16&hl=en&output=embed`;
}

function gcalStamp(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");
}

export function calendarUrl(e: EventInfo) {
  const title =
    e.key === "engagement" ? `Engagement: ${COUPLE}` : `Wedding: ${COUPLE}`;
  const details =
    e.key === "engagement"
      ? `Engagement ceremony at ${e.timeLabel}. ${e.note ? `${e.note}. ` : ""}RSVP: ${FAMILY}`
      : `${e.timeLabel}. RSVP: ${FAMILY}`;
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${gcalStamp(e.startISO)}/${gcalStamp(e.endISO)}`,
    location: `${e.venue}, ${e.address}`,
    details,
    ctz: "Asia/Kolkata",
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}
