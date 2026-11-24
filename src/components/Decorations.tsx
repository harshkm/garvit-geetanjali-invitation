"use client";

import React from "react";
import { asset } from "@/lib/asset";

/* =============================================
   CORNER ORNAMENT — Paisley / Kalamkari vine
   ============================================= */
export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 ${className}`} fill="none">
      <defs>
        <linearGradient id="cGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8860b" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
      </defs>
      <path d="M10,10 Q10,100 60,140 Q80,155 100,160 Q70,130 50,100 Q30,65 30,30 Q30,15 10,10 Z" fill="url(#cGold)" opacity="0.85" />
      <path d="M20,20 Q25,70 55,110 Q65,125 80,135 Q55,105 40,75 Q28,48 25,20 Z" fill="url(#cGold)" opacity="0.65" />
      <path d="M15,5 Q5,5 5,15 Q5,40 20,60 Q35,80 55,95 Q40,70 30,45 Q20,20 20,10 Q20,5 15,5 Z" fill="#b8860b" opacity="0.75" />
      <circle cx="70" cy="140" r="2.5" fill="#b8860b" opacity="0.75" />
      <circle cx="85" cy="148" r="2" fill="#b8860b" opacity="0.65" />
      <circle cx="95" cy="155" r="1.5" fill="#b8860b" opacity="0.55" />
      <path d="M60,140 Q90,155 110,170 Q115,172 120,168 Q100,155 75,140" stroke="#b8860b" strokeWidth="1.2" fill="none" opacity="0.55" />
      <path d="M100,160 Q130,170 150,185 Q152,186 155,183 Q135,168 105,157" stroke="#b8860b" strokeWidth="1" fill="none" opacity="0.45" />
    </svg>
  );
}

/* =============================================
   ORNAMENTAL BORDER FRAME
   ============================================= */
export function OrnamentalBorder({ color = "#d4af37" }: { color?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="absolute inset-3 sm:inset-4 md:inset-6 border rounded-sm" style={{ borderColor: `${color}73` }} />
      <div className="absolute inset-5 sm:inset-7 md:inset-10 border rounded-sm" style={{ borderColor: `${color}4D`, boxShadow: `inset 0 0 30px ${color}1A` }} />
      <div className="absolute inset-6 sm:inset-8 md:inset-12 border border-[#8b5a2b]/20 rounded-sm" />
    </div>
  );
}

/* =============================================
   TOP FLOURISH — Scrollwork
   ============================================= */
export function TopFlourish({ className = "", color = "#d4af37" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 600 80" className={`w-56 sm:w-72 md:w-[440px] h-auto ${className}`} fill="none">
      <defs>
        <linearGradient id={`fl-${color.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor={color} stopOpacity="0.6" />
          <stop offset="50%" stopColor={color} />
          <stop offset="80%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="20" r="3" fill={color} opacity="0.7" />
      <path d="M300,25 Q250,25 200,38 Q160,47 130,43 Q110,40 100,47 Q110,52 130,49 Q170,44 220,34 Q260,27 300,30" stroke={`url(#fl-${color.replace('#','')})`} strokeWidth="1.5" fill="none" />
      <path d="M100,47 Q90,43 82,47 Q78,51 82,55 Q88,52 94,49" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M300,25 Q350,25 400,38 Q440,47 470,43 Q490,40 500,47 Q490,52 470,49 Q430,44 380,34 Q340,27 300,30" stroke={`url(#fl-${color.replace('#','')})`} strokeWidth="1.5" fill="none" />
      <path d="M500,47 Q510,43 518,47 Q522,51 518,55 Q512,52 506,49" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <line x1="120" y1="43" x2="480" y2="43" stroke={`url(#fl-${color.replace('#','')})`} strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/* =============================================
   SECTION DIVIDER
   ============================================= */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 sm:my-8 ${className}`}>
      <div className="ornament-line flex-1 max-w-[120px] sm:max-w-[160px]" />
      <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-7 sm:h-7" fill="none">
        <path d="M20,5 Q25,15 35,20 Q25,25 20,35 Q15,25 5,20 Q15,15 20,5 Z" fill="#d4af37" opacity="0.5" />
        <circle cx="20" cy="20" r="2.5" fill="#d4af37" opacity="0.7" />
      </svg>
      <div className="ornament-line flex-1 max-w-[120px] sm:max-w-[160px]" />
    </div>
  );
}

/* =============================================
   ANIMATED MANDALA (draws itself)
   ============================================= */
export function AnimatedMandala({ className = "", size = 400, color = "#d4af37", animate = true }: {
  className?: string; size?: number; color?: string; animate?: boolean;
}) {
  return (
    <svg viewBox="0 0 400 400" className={className} width={size} height={size}>
      {/* Outer ring of petals */}
      {Array.from({ length: 16 }).map((_, i) => (
        <ellipse key={`o${i}`} cx="200" cy="80" rx="18" ry="50" fill="none" stroke={color}
          strokeWidth="0.8" opacity="0.6" transform={`rotate(${i * 22.5} 200 200)`}
          className={animate ? "svg-draw" : ""} style={animate ? { animationDelay: `${i * 0.1}s` } : {}}
        />
      ))}
      {/* Middle ring */}
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={`m${i}`} cx="200" cy="120" rx="12" ry="35" fill="none" stroke={color}
          strokeWidth="0.6" opacity="0.5" transform={`rotate(${i * 30} 200 200)`}
          className={animate ? "svg-draw" : ""} style={animate ? { animationDelay: `${0.8 + i * 0.08}s` } : {}}
        />
      ))}
      {/* Inner ring */}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={`n${i}`} cx="200" cy="150" rx="8" ry="25" fill="none" stroke={color}
          strokeWidth="0.5" opacity="0.4" transform={`rotate(${i * 45} 200 200)`}
          className={animate ? "svg-draw" : ""} style={animate ? { animationDelay: `${1.6 + i * 0.1}s` } : {}}
        />
      ))}
      <circle cx="200" cy="200" r="20" fill="none" stroke={color} strokeWidth="1" opacity="0.5"
        className={animate ? "svg-draw" : ""} style={animate ? { animationDelay: "2.2s" } : {}} />
      <circle cx="200" cy="200" r="8" fill={color} opacity="0.3" />
      <circle cx="200" cy="200" r="3" fill={color} opacity="0.6" />
    </svg>
  );
}

/* =============================================
   LOTUS MOTIF
   ============================================= */
export function LotusMotif({ className = "", color = "#d4af37" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={`w-14 h-9 sm:w-18 sm:h-11 ${className}`} fill="none">
      <path d="M50,5 Q55,25 50,45 Q45,25 50,5 Z" fill={color} opacity="0.6" />
      <path d="M50,45 Q35,30 25,40 Q38,35 50,45 Z" fill={color} opacity="0.5" />
      <path d="M50,45 Q30,35 15,45 Q33,38 50,45 Z" fill={color} opacity="0.4" />
      <path d="M50,45 Q65,30 75,40 Q62,35 50,45 Z" fill={color} opacity="0.5" />
      <path d="M50,45 Q70,35 85,45 Q67,38 50,45 Z" fill={color} opacity="0.4" />
      <path d="M40,48 Q50,55 60,48 Q50,52 40,48 Z" fill={color} opacity="0.3" />
    </svg>
  );
}

/* =============================================
   DIYA (Oil Lamp)
   ============================================= */
export function Diya({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 60 70" className={className} width={size} height={size * 70 / 60} fill="none">
      {/* Base */}
      <ellipse cx="30" cy="58" rx="20" ry="6" fill="#b8860b" opacity="0.6" />
      {/* Bowl */}
      <path d="M12,50 Q12,38 20,35 Q30,32 40,35 Q48,38 48,50 Z" fill="#d4af37" opacity="0.5" />
      <path d="M15,48 Q15,40 22,37 Q30,34 38,37 Q45,40 45,48 Z" fill="#b8860b" opacity="0.3" />
      {/* Flame */}
      <g className="diya-flame">
        <path d="M27,32 Q30,12 33,32 Q30,28 27,32 Z" fill="#ff6b35" opacity="0.9" />
        <path d="M28,30 Q30,16 32,30 Q30,26 28,30 Z" fill="#ffd700" opacity="0.8" />
        <path d="M29,28 Q30,20 31,28" fill="#fff7e6" opacity="0.6" />
      </g>
      {/* Glow */}
      <circle cx="30" cy="24" r="10" fill="#ffd700" opacity="0.1" />
    </svg>
  );
}

/* =============================================
   BELL
   ============================================= */
export function Bell({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 70" className={`w-8 h-11 sm:w-10 sm:h-14 bell-swing ${className}`} fill="none">
      <line x1="25" y1="0" x2="25" y2="15" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="25" cy="4" r="3" fill="#d4af37" opacity="0.7" />
      <path d="M10,45 Q10,20 25,15 Q40,20 40,45 Z" fill="#d4af37" opacity="0.4" />
      <path d="M12,44 Q12,22 25,17 Q38,22 38,44 Z" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
      <ellipse cx="25" cy="47" rx="16" ry="4" fill="#d4af37" opacity="0.5" />
      <circle cx="25" cy="54" r="3.5" fill="#d4af37" opacity="0.6" />
      <line x1="25" y1="48" x2="25" y2="54" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/* =============================================
   KALASH (Sacred Pot)
   ============================================= */
export function Kalash({ className = "" }: { className?: string }) {
  return (
    <img
      src={asset("/kalash.svg")}
      alt="Kalash"
      className={`w-16 h-20 sm:w-20 sm:h-24 drop-shadow-[0_2px_4px_rgba(160,119,24,0.3)] ${className}`}
      draggable={false}
    />
  );
}

/* =============================================
   PEACOCK
   ============================================= */
export function Peacock({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 120 140" className={`w-16 h-20 sm:w-20 sm:h-24 ${flip ? "-scale-x-100" : ""} ${className}`} fill="none">
      {/* Tail feathers */}
      {[-30, -15, 0, 15, 30].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 60 90)`}>
          <ellipse cx="60" cy="30" rx="8" ry="28" fill="#d4af37" opacity={0.2 + i * 0.05} />
          <ellipse cx="60" cy="25" rx="4" ry="6" fill="#2d5a27" opacity="0.3" />
          <circle cx="60" cy="25" r="2.5" fill="#d4af37" opacity="0.4" />
        </g>
      ))}
      {/* Body */}
      <ellipse cx="60" cy="95" rx="12" ry="18" fill="#2d5a27" opacity="0.4" />
      <ellipse cx="60" cy="95" rx="10" ry="16" fill="#d4af37" opacity="0.2" />
      {/* Neck */}
      <path d="M56,80 Q52,65 55,55" stroke="#2d5a27" strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round" />
      {/* Head */}
      <circle cx="55" cy="52" r="5" fill="#2d5a27" opacity="0.4" />
      {/* Crown */}
      <line x1="55" y1="47" x2="53" y2="40" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="47" x2="55" y2="39" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="47" x2="57" y2="40" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      <circle cx="53" cy="39" r="1.5" fill="#d4af37" opacity="0.5" />
      <circle cx="55" cy="38" r="1.5" fill="#d4af37" opacity="0.5" />
      <circle cx="57" cy="39" r="1.5" fill="#d4af37" opacity="0.5" />
      {/* Beak */}
      <path d="M50,52 L46,54 L50,55" fill="#d4af37" opacity="0.5" />
      {/* Eye */}
      <circle cx="53" cy="51" r="1" fill="#1a0e04" opacity="0.6" />
    </svg>
  );
}

/* =============================================
   MANDAP (Wedding Canopy)
   ============================================= */
export function Mandap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" className={`w-40 h-36 sm:w-52 sm:h-46 ${className}`} fill="none">
      <defs>
        <linearGradient id="mandapGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#f5d680" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      {/* Pillars */}
      <rect x="25" y="60" width="8" height="100" fill="url(#mandapGold)" opacity="0.4" rx="2" />
      <rect x="167" y="60" width="8" height="100" fill="url(#mandapGold)" opacity="0.4" rx="2" />
      {/* Canopy */}
      <path d="M15,60 Q100,5 185,60" fill="#8b1a1a" opacity="0.2" />
      <path d="M15,60 Q100,5 185,60" stroke="url(#mandapGold)" strokeWidth="2" fill="none" className="svg-draw" />
      {/* Decorative scallops */}
      <path d="M20,60 Q35,72 50,60 Q65,72 80,60 Q95,72 110,60 Q125,72 140,60 Q155,72 170,60 Q185,72 180,60" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Sacred fire */}
      <g className="diya-flame">
        <path d="M92,145 Q100,110 108,145 Q100,135 92,145 Z" fill="#ff6b35" opacity="0.7" />
        <path d="M95,142 Q100,118 105,142 Q100,132 95,142 Z" fill="#ffd700" opacity="0.6" />
        <path d="M97,140 Q100,125 103,140" stroke="#fff7e6" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
      {/* Fire base */}
      <ellipse cx="100" cy="150" rx="15" ry="5" fill="#8b5a2b" opacity="0.3" />
      {/* Base platform */}
      <rect x="10" y="158" width="180" height="6" rx="2" fill="url(#mandapGold)" opacity="0.3" />
      {/* Garland drape */}
      <path d="M30,60 Q60,80 100,75 Q140,80 170,60" stroke="#2d5a27" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="4 3" />
    </svg>
  );
}

/* =============================================
   MARIGOLD GARLAND
   ============================================= */
export function MarigoldGarland({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 80" className={`w-full h-12 sm:h-16 ${className}`} fill="none">
      <path d="M0,10 Q75,60 150,40 Q225,20 300,50" stroke="#2d5a27" strokeWidth="1.5" fill="none" opacity="0.4" />
      {[30, 70, 110, 150, 190, 230, 270].map((x, i) => {
        const y = 10 + 30 * Math.sin((x / 300) * Math.PI);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="8" fill="#e6b422" opacity={0.5 + (i % 2) * 0.15} />
            <circle cx={x} cy={y} r="5" fill="#f5d680" opacity="0.4" />
            <circle cx={x} cy={y} r="2" fill="#d4af37" opacity="0.6" />
          </g>
        );
      })}
    </svg>
  );
}

/* =============================================
   MEHNDI VINE (animated growth)
   ============================================= */
export function MehndiVine({ className = "", side = "left" }: { className?: string; side?: "left" | "right" }) {
  const mirror = side === "right" ? "-scale-x-100" : "";
  return (
    <svg viewBox="0 0 100 600" className={`${mirror} ${className}`} fill="none">
      {/* Main vine stem */}
      <path d="M50,0 Q30,100 50,200 Q70,300 50,400 Q30,500 50,600"
        stroke="#8b5a2b" strokeWidth="2" fill="none" opacity="0.3" className="svg-draw-slow" />
      {/* Leaves and curls */}
      {[80, 180, 280, 380, 480].map((y, i) => (
        <g key={i} style={{ animationDelay: `${1 + i * 0.5}s` }} className="vine-grow">
          <path d={`M${45 + (i % 2) * 10},${y} Q${20 + (i % 2) * 60},${y - 20} ${35 + (i % 2) * 30},${y - 35}`}
            stroke="#2d5a27" strokeWidth="1.2" fill="none" opacity="0.4" />
          <circle cx={35 + (i % 2) * 30} cy={y - 35} r="4" fill="#2d5a27" opacity="0.15" />
          <path d={`M${45 + (i % 2) * 10},${y + 20} Q${15 + (i % 2) * 70},${y + 40} ${30 + (i % 2) * 40},${y + 50}`}
            stroke="#8b5a2b" strokeWidth="1" fill="none" opacity="0.3" />
        </g>
      ))}
      {/* Small flowers */}
      {[130, 330, 530].map((y, i) => (
        <g key={`f${i}`}>
          {[0, 72, 144, 216, 288].map((angle, j) => (
            <ellipse key={j} cx="50" cy={y - 8} rx="3" ry="7" fill="#2d5a27" opacity="0.15"
              transform={`rotate(${angle} 50 ${y})`} />
          ))}
          <circle cx="50" cy={y} r="3" fill="#d4af37" opacity="0.2" />
        </g>
      ))}
    </svg>
  );
}

/* =============================================
   LORD GANESHA — Traditional Wedding Card Style
   Detailed, ornamental, static illustration
   ============================================= */
export function GaneshaIllustration({ className = "", size = 180 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 240 280" className={className} width={size} height={size * 280 / 240} fill="none">
      <defs>
        <linearGradient id="gGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="35%" stopColor="#f5d680" />
          <stop offset="65%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
        <linearGradient id="gGoldV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5d680" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
        <radialGradient id="gHalo" cx="50%" cy="42%" r="48%">
          <stop offset="0%" stopColor="#f5d680" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#d4af37" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ---- Ornamental arch / Prabhavali ---- */}
      <path d="M120,8 Q160,8 185,30 Q210,55 210,95 Q210,135 185,160 Q160,180 120,185 Q80,180 55,160 Q30,135 30,95 Q30,55 55,30 Q80,8 120,8 Z"
        fill="none" stroke="url(#gGold)" strokeWidth="2" opacity="0.5" />
      <path d="M120,14 Q155,14 178,34 Q200,56 200,95 Q200,132 178,154 Q155,172 120,176 Q85,172 62,154 Q40,132 40,95 Q40,56 62,34 Q85,14 120,14 Z"
        fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.3" />
      {/* Arch flame finials */}
      {[-60, -45, -30, -15, 0, 15, 30, 45, 60].map((angle, i) => {
        const rad = (angle - 90) * Math.PI / 180;
        const cx = 120 + 100 * Math.cos(rad);
        const cy = 95 + 92 * Math.sin(rad);
        return <circle key={i} cx={cx} cy={cy} r="2.5" fill="#d4af37" opacity={0.35 + (i % 2) * 0.15} />;
      })}
      {/* Halo glow */}
      <ellipse cx="120" cy="95" rx="80" ry="78" fill="url(#gHalo)" />

      {/* ---- Crown / Mukut ---- */}
      <path d="M90,52 L94,30 L102,46 L108,22 L114,42 L120,18 L126,42 L132,22 L138,46 L146,30 L150,52"
        fill="url(#gGold)" opacity="0.7" />
      <path d="M92,52 L96,34 L103,47 L109,26 L115,43 L120,22 L125,43 L131,26 L137,47 L144,34 L148,52"
        fill="none" stroke="#b8860b" strokeWidth="0.6" opacity="0.5" />
      {/* Crown jewels */}
      <circle cx="120" cy="24" r="4" fill="#f5d680" opacity="0.85" />
      <circle cx="120" cy="24" r="2" fill="#fff" opacity="0.3" />
      <circle cx="108" cy="34" r="2.5" fill="#f5d680" opacity="0.6" />
      <circle cx="132" cy="34" r="2.5" fill="#f5d680" opacity="0.6" />
      <circle cx="96" cy="40" r="2" fill="#d4af37" opacity="0.5" />
      <circle cx="144" cy="40" r="2" fill="#d4af37" opacity="0.5" />

      {/* ---- Head ---- */}
      <ellipse cx="120" cy="75" rx="33" ry="28" fill="url(#gGold)" opacity="0.3" />
      <ellipse cx="120" cy="75" rx="33" ry="28" fill="none" stroke="#d4af37" strokeWidth="1.2" opacity="0.6" />

      {/* ---- Large fan ears ---- */}
      {/* Left ear */}
      <ellipse cx="82" cy="74" rx="18" ry="24" fill="url(#gGold)" opacity="0.2" />
      <ellipse cx="82" cy="74" rx="18" ry="24" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      <ellipse cx="82" cy="74" rx="13" ry="18" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.3" />
      <ellipse cx="82" cy="74" rx="8" ry="12" fill="none" stroke="#d4af37" strokeWidth="0.3" opacity="0.2" />
      {/* Right ear */}
      <ellipse cx="158" cy="74" rx="18" ry="24" fill="url(#gGold)" opacity="0.2" />
      <ellipse cx="158" cy="74" rx="18" ry="24" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      <ellipse cx="158" cy="74" rx="13" ry="18" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.3" />
      <ellipse cx="158" cy="74" rx="8" ry="12" fill="none" stroke="#d4af37" strokeWidth="0.3" opacity="0.2" />

      {/* ---- Tilak / third eye ---- */}
      <path d="M116,58 L120,52 L124,58 Z" fill="#c0392b" opacity="0.5" />
      <circle cx="120" cy="57" r="1.5" fill="#f5d680" opacity="0.7" />

      {/* ---- Eyes — half-closed, meditative ---- */}
      <path d="M106,69 Q110,65 114,69" stroke="#b8860b" strokeWidth="1.2" fill="none" opacity="0.7" />
      <ellipse cx="110" cy="69" rx="3" ry="1.8" fill="#d4af37" opacity="0.4" />
      <path d="M126,69 Q130,65 134,69" stroke="#b8860b" strokeWidth="1.2" fill="none" opacity="0.7" />
      <ellipse cx="130" cy="69" rx="3" ry="1.8" fill="#d4af37" opacity="0.4" />

      {/* ---- Trunk — curving left with ridges ---- */}
      <path d="M120,84 Q116,96 110,108 Q104,120 98,130 Q93,138 88,142 Q84,145 82,142 Q83,138 88,134 Q96,124 102,112 Q108,100 114,90"
        fill="url(#gGold)" opacity="0.35" />
      <path d="M120,84 Q116,96 110,108 Q104,120 98,130 Q93,138 88,142 Q84,145 82,142"
        stroke="#d4af37" strokeWidth="1.2" fill="none" opacity="0.65" />
      {/* Trunk ridges */}
      <path d="M115,92 Q112,94 114,96" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.35" />
      <path d="M112,100 Q109,102 111,104" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.35" />
      <path d="M108,108 Q105,110 107,112" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.35" />
      <path d="M103,116 Q100,118 102,120" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.35" />
      {/* Modak held at trunk tip */}
      <circle cx="82" cy="144" r="5" fill="#d4af37" opacity="0.4" />
      <path d="M78,142 Q82,137 86,142" fill="#d4af37" opacity="0.25" />

      {/* ---- Tusks ---- */}
      <path d="M126,86 Q132,98 135,94 Q133,90 128,84" fill="#f5d680" opacity="0.55" stroke="#b8860b" strokeWidth="0.5" />

      {/* ---- Body / Belly ---- */}
      <ellipse cx="120" cy="158" rx="40" ry="36" fill="url(#gGold)" opacity="0.22" />
      <ellipse cx="120" cy="158" rx="40" ry="36" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      {/* Belly pearl / navel */}
      <circle cx="120" cy="162" r="3" fill="#d4af37" opacity="0.3" />
      <circle cx="120" cy="162" r="1.5" fill="#f5d680" opacity="0.4" />

      {/* ---- Necklaces ---- */}
      <path d="M96,100 Q120,118 144,100" stroke="#d4af37" strokeWidth="1.2" fill="none" opacity="0.5" />
      {/* Pearl dots on necklace */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const t = (i + 1) / 8;
        const x = 96 + (144 - 96) * t;
        const y = 100 + 18 * Math.sin(t * Math.PI);
        return <circle key={i} cx={x} cy={y} r="1.5" fill="#f5d680" opacity="0.55" />;
      })}
      {/* Second necklace */}
      <path d="M92,104 Q120,126 148,104" stroke="#d4af37" strokeWidth="0.8" fill="none" opacity="0.35" strokeDasharray="3 2" />

      {/* ---- Four arms ---- */}
      {/* Upper-left arm — holding pasha (noose) */}
      <path d="M84,128 Q65,112 55,100 Q48,92 42,90"
        stroke="#d4af37" strokeWidth="2.8" fill="none" opacity="0.5" strokeLinecap="round" />
      {/* Pasha loop */}
      <circle cx="38" cy="86" r="7" fill="none" stroke="#d4af37" strokeWidth="1.2" opacity="0.45" />
      <path d="M38,79 Q42,76 44,80" stroke="#d4af37" strokeWidth="0.8" fill="none" opacity="0.35" />

      {/* Upper-right arm — holding ankusha (goad) */}
      <path d="M156,128 Q175,112 185,100 Q192,92 198,90"
        stroke="#d4af37" strokeWidth="2.8" fill="none" opacity="0.5" strokeLinecap="round" />
      {/* Ankusha hook */}
      <path d="M198,90 Q204,84 200,78 Q196,74 192,78" stroke="#d4af37" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="198" y1="90" x2="200" y2="96" stroke="#d4af37" strokeWidth="1.2" opacity="0.4" />

      {/* Lower-left arm — blessing (abhaya mudra, palm forward) */}
      <path d="M88,145 Q68,158 58,170"
        stroke="#d4af37" strokeWidth="2.2" fill="none" opacity="0.45" strokeLinecap="round" />
      {/* Open palm */}
      <ellipse cx="55" cy="174" rx="6" ry="8" fill="url(#gGold)" opacity="0.3" />
      <ellipse cx="55" cy="174" rx="6" ry="8" fill="none" stroke="#d4af37" strokeWidth="0.6" opacity="0.4" />
      {/* Fingers */}
      <line x1="51" y1="168" x2="49" y2="163" stroke="#d4af37" strokeWidth="0.7" opacity="0.35" />
      <line x1="53" y1="167" x2="52" y2="161" stroke="#d4af37" strokeWidth="0.7" opacity="0.35" />
      <line x1="55" y1="166" x2="55" y2="160" stroke="#d4af37" strokeWidth="0.7" opacity="0.35" />
      <line x1="57" y1="167" x2="58" y2="161" stroke="#d4af37" strokeWidth="0.7" opacity="0.35" />

      {/* Lower-right arm — holding broken tusk */}
      <path d="M152,145 Q172,158 180,168"
        stroke="#d4af37" strokeWidth="2.2" fill="none" opacity="0.45" strokeLinecap="round" />
      {/* Broken tusk in hand */}
      <path d="M182,164 L186,150 Q187,147 185,148 L182,158" fill="#f5d680" opacity="0.45" stroke="#b8860b" strokeWidth="0.5" />

      {/* ---- Sacred thread (yagnopavita) ---- */}
      <path d="M100,110 Q90,140 85,175 Q83,185 88,190 Q95,188 105,170 Q115,155 120,145 Q125,155 135,170 Q145,188 152,190 Q157,185 155,175 Q150,140 140,110"
        stroke="#d4af37" strokeWidth="0.7" fill="none" opacity="0.25" />

      {/* ---- Dhoti / garment folds ---- */}
      <path d="M85,175 Q100,195 120,198 Q140,195 155,175" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.35" />
      <path d="M90,180 Q105,198 120,200 Q135,198 150,180" stroke="#d4af37" strokeWidth="0.6" fill="none" opacity="0.25" />
      {/* Waist band */}
      <path d="M82,135 Q120,148 158,135" stroke="#d4af37" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Belt jewel */}
      <circle cx="120" cy="140" r="3" fill="#d4af37" opacity="0.45" />
      <circle cx="120" cy="140" r="1.5" fill="#f5d680" opacity="0.6" />

      {/* ---- Lotus throne / Padmasana ---- */}
      <ellipse cx="120" cy="210" rx="55" ry="12" fill="url(#gGold)" opacity="0.18" />
      <ellipse cx="120" cy="210" rx="55" ry="12" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
      {/* Upper row of lotus petals */}
      {[-44, -30, -16, -2, 12, 26, 40].map((x, i) => (
        <path key={`u${i}`} d={`M${120 + x},210 Q${120 + x + 7},197 ${120 + x + 14},210`}
          fill="url(#gGold)" opacity="0.25" />
      ))}
      {/* Lower row of petals (offset) */}
      {[-37, -23, -9, 5, 19, 33].map((x, i) => (
        <path key={`l${i}`} d={`M${120 + x},212 Q${120 + x + 7},222 ${120 + x + 14},212`}
          fill="url(#gGold)" opacity="0.18" />
      ))}
      {/* Base platform */}
      <rect x="60" y="222" width="120" height="5" rx="2" fill="url(#gGold)" opacity="0.2" />
      <rect x="60" y="222" width="120" height="5" rx="2" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.3" />

      {/* ---- Mouse / Mushika (vahana) ---- */}
      <g transform="translate(170, 216)">
        {/* Body */}
        <ellipse cx="10" cy="8" rx="10" ry="6" fill="#d4af37" opacity="0.3" />
        <ellipse cx="10" cy="8" rx="10" ry="6" fill="none" stroke="#d4af37" strokeWidth="0.6" opacity="0.4" />
        {/* Head */}
        <ellipse cx="22" cy="6" rx="5" ry="4.5" fill="#d4af37" opacity="0.3" />
        {/* Ear */}
        <ellipse cx="20" cy="2" rx="3" ry="2.5" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.35" />
        {/* Eye */}
        <circle cx="24" cy="5" r="0.8" fill="#b8860b" opacity="0.6" />
        {/* Tail */}
        <path d="M0,8 Q-5,4 -8,8 Q-10,12 -6,14" stroke="#d4af37" strokeWidth="0.6" fill="none" opacity="0.3" />
        {/* Whiskers */}
        <line x1="26" y1="5" x2="30" y2="3" stroke="#d4af37" strokeWidth="0.3" opacity="0.3" />
        <line x1="26" y1="7" x2="30" y2="7" stroke="#d4af37" strokeWidth="0.3" opacity="0.3" />
      </g>

      {/* ---- Decorative dots around arch ---- */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (-70 + i * 35) * Math.PI / 180;
        return (
          <circle key={`d${i}`}
            cx={120 + 88 * Math.cos(angle)} cy={95 + 82 * Math.sin(angle)}
            r="1.5" fill="#d4af37" opacity="0.25" />
        );
      })}
    </svg>
  );
}

/* =============================================
   FLORAL CORNER DECORATION
   ============================================= */
export function FloralCorner({ className = "", color = "#d4af37" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 150 150" className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 ${className}`} fill="none">
      {/* Main floral vine */}
      <path d="M5,5 Q20,40 15,80 Q12,110 30,130 Q50,145 80,140"
        stroke={color} strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* Branch 1 */}
      <path d="M12,50 Q35,45 50,55 Q58,60 55,70"
        stroke={color} strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Branch 2 */}
      <path d="M20,95 Q45,85 60,95 Q70,100 65,115"
        stroke={color} strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Flower 1 */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse key={i} cx="50" cy="48" rx="4" ry="10" fill={color} opacity="0.15"
          transform={`rotate(${angle} 50 55)`} />
      ))}
      <circle cx="50" cy="55" r="4" fill={color} opacity="0.25" />
      {/* Flower 2 */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse key={i} cx="60" cy="88" rx="3" ry="8" fill={color} opacity="0.12"
          transform={`rotate(${angle} 60 95)`} />
      ))}
      <circle cx="60" cy="95" r="3" fill={color} opacity="0.2" />
      {/* Flower 3 - large */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse key={i} cx="30" cy="123" rx="5" ry="12" fill={color} opacity="0.12"
          transform={`rotate(${angle} 30 130)`} />
      ))}
      <circle cx="30" cy="130" r="5" fill={color} opacity="0.2" />
      {/* Small leaves */}
      <path d="M8,30 Q18,22 12,35" fill={color} opacity="0.2" />
      <path d="M10,65 Q22,58 15,72" fill={color} opacity="0.18" />
      <path d="M18,110 Q32,102 24,118" fill={color} opacity="0.15" />
      {/* Dots trail */}
      <circle cx="70" cy="130" r="2" fill={color} opacity="0.2" />
      <circle cx="82" cy="138" r="1.5" fill={color} opacity="0.15" />
      <circle cx="92" cy="142" r="1" fill={color} opacity="0.1" />
    </svg>
  );
}

/* Deterministic pseudo-random from index (avoids hydration mismatch) */
function seeded(i: number, offset = 0): number {
  const x = Math.sin((i + 1) * 9301 + offset * 4967) * 49297;
  return x - Math.floor(x);
}

/* =============================================
   SPARKLE FIELD
   ============================================= */
export function SparkleField({ count = 15 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="sparkle-particle"
          style={{
            left: `${seeded(i, 0) * 100}%`,
            top: `${seeded(i, 1) * 100}%`,
            width: 2 + seeded(i, 2) * 4,
            height: 2 + seeded(i, 2) * 4,
            animationDelay: `${seeded(i, 3) * 4}s`,
            animationDuration: `${2 + seeded(i, 4) * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

/* =============================================
   TURMERIC DUST PARTICLES
   ============================================= */
export function TurmericDust({ count = 25 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {Array.from({ length: count }).map((_, i) => {
        const size = 3 + seeded(i, 5) * 6;
        return (
          <div key={i} className="turmeric-particle"
            style={{
              left: `${10 + seeded(i, 0) * 80}%`,
              bottom: `${seeded(i, 1) * 40}%`,
              width: size, height: size,
              animationDelay: `${seeded(i, 2) * 5}s`,
              animationDuration: `${3 + seeded(i, 3) * 4}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/* =============================================
   FLOATING PETALS
   ============================================= */
export function FloatingPetals({ count = 12, color = "#ff9999" }: { count?: number; color?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {Array.from({ length: count }).map((_, i) => {
        const size = 8 + seeded(i, 4) * 10;
        return (
          <div key={i} className="petal"
            style={{
              left: `${seeded(i, 0) * 100}%`,
              top: "-3%",
              width: size, height: size * 1.3,
              background: color,
              opacity: 0.5 + seeded(i, 5) * 0.3,
              animationDelay: `${seeded(i, 1) * 8}s`,
              animationDuration: `${6 + seeded(i, 2) * 6}s`,
              transform: `rotate(${seeded(i, 3) * 360}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
