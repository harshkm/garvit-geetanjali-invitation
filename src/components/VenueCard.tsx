"use client";

import { useEffect, useRef, useState } from "react";
import { type EventInfo, calendarUrl, copyText, mapsUrl } from "@/lib/events";
import MapPreview from "@/components/MapPreview";

export default function VenueCard({ event }: { event: EventInfo }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const onCopy = async () => {
    const ok = await copyText(`${event.venue}, ${event.address}`);
    if (ok) {
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="venue-card">
      <MapPreview event={event} />
      <p className="venue-name">{event.venue}</p>
      <p className="venue-address">{event.address}</p>
      <div className="venue-actions">
        <a className="pill-btn pill-primary" href={mapsUrl(event)} target="_blank" rel="noopener noreferrer">
          Open in Maps
        </a>
        <button type="button" className="pill-btn pill-outline" onClick={onCopy} aria-live="polite">
          {copied ? "Address copied" : "Copy address"}
        </button>
        <a className="pill-btn pill-outline" href={calendarUrl(event)} target="_blank" rel="noopener noreferrer">
          Add to calendar
        </a>
      </div>
    </div>
  );
}
