"use client";

import { type EventInfo, embedUrl, mapsUrl } from "@/lib/events";

/* Live Google map by default. Set NEXT_PUBLIC_LIVE_MAP=0 where embedded maps are
   blocked (for example a sandboxed preview) to show a drawn preview that links out. */
const LIVE = process.env.NEXT_PUBLIC_LIVE_MAP !== "0";

export default function MapPreview({ event }: { event: EventInfo }) {
  if (LIVE) {
    return (
      <div className="map-frame">
        <iframe
          src={embedUrl(event)}
          title={`Map of ${event.venue}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  const flip = event.key === "wedding";
  const area = event.key === "wedding" ? "SECTOR 51" : "KARKARDOOMA";
  return (
    <a
      className="map-frame map-drawn"
      href={mapsUrl(event)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${event.venue} in Google Maps`}
    >
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
        <g transform={flip ? "translate(320 0) scale(-1 1)" : undefined}>
          <rect width="320" height="200" fill="#f2eee1" />
          <rect x="16" y="118" width="84" height="58" rx="10" fill="#d3e3c1" />
          <rect x="226" y="14" width="76" height="46" rx="10" fill="#d3e3c1" />
          <ellipse cx="258" cy="152" rx="34" ry="17" fill="#cfe3ef" />
          {/* side streets */}
          <g fill="none" strokeLinecap="round">
            <g stroke="#ddd3bb" strokeWidth="7">
              <path d="M0 44H320M0 150H320M62 0V200M132 0V200M206 0V200M276 0V200" />
            </g>
            <g stroke="#ffffff" strokeWidth="4.5">
              <path d="M0 44H320M0 150H320M62 0V200M132 0V200M206 0V200M276 0V200" />
            </g>
            {/* main road */}
            <path d="M-10 178 L330 38" stroke="#e6c566" strokeWidth="12" />
            <path d="M-10 178 L330 38" stroke="#fbe3a0" strokeWidth="9" />
            {/* metro line */}
            <path d="M0 104 H320" stroke="#6b1010" strokeWidth="3" strokeDasharray="9 5" />
          </g>
          {event.key === "engagement" && (
            <g>
              <circle cx="132" cy="104" r="7" fill="#ffffff" stroke="#6b1010" strokeWidth="3" />
            </g>
          )}
        </g>
        <text x="160" y="194" textAnchor="middle" fontSize="9" letterSpacing="3" fill="#8d8160" fontWeight="700">{area}</text>
        {event.key === "engagement" && (
          <text x={flip ? 188 : 132} y="124" textAnchor="middle" fontSize="8.5" fill="#4a2e18" fontWeight="700">Metro station</text>
        )}
        {/* pin */}
        <ellipse cx="170" cy="100" rx="9" ry="3.2" fill="#24140a" opacity="0.25" />
        <path d="M170 100 C158 82 152 72 152 62 a18 18 0 1 1 36 0 c0 10 -6 20 -18 38z" fill="#6b1010" stroke="#ffffff" strokeWidth="2" />
        <circle cx="170" cy="62" r="6.5" fill="#ffffff" />
        {/* name chip */}
        <rect x="76" y="14" width="168" height="22" rx="11" fill="#ffffff" stroke="#c9b98f" />
        <text x="160" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fill="#24140a">{event.venue.replace("Diamond Crown ", "Diamond Crown ")}</text>
      </svg>
      <span className="map-bar">
        <span>Map preview</span>
        <span>Open in Google Maps &#8599;</span>
      </span>
    </a>
  );
}
