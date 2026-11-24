"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimatedMandala,
  TopFlourish,
  CornerOrnament,
  OrnamentalBorder,
  SparkleField,
  Diya,
  FloralCorner,
} from "@/components/Decorations";
import { BRIDE, EVENTS, GROOM } from "@/lib/events";
import { asset } from "@/lib/asset";

interface IntroCardProps {
  /** Opens the invitation (and starts the music). `to` jumps straight to a card. */
  onBegin: (to?: number) => void;
}

const tiles = [
  { label: "Engagement", event: EVENTS.engagement, detail: "6:00 PM", to: 1 },
  { label: "Wedding", event: EVENTS.wedding, detail: "Sehra 4 PM", to: 2 },
] as const;

export default function IntroCard({ onBegin }: IntroCardProps) {
  return (
    <div className="theme-gold parchment-bg floral-bg-pattern card-frame card-container relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="golden-glow absolute inset-0 pointer-events-none z-[1]" />

      <OrnamentalBorder color="#8a6410" />

      <div className="absolute top-2 left-2 z-20"><CornerOrnament /></div>
      <div className="absolute top-2 right-2 z-20 -scale-x-100"><CornerOrnament /></div>
      <div className="absolute bottom-2 left-2 z-20 -scale-y-100"><CornerOrnament /></div>
      <div className="absolute bottom-2 right-2 z-20 -scale-x-100 -scale-y-100"><CornerOrnament /></div>

      <div className="absolute top-4 left-4 z-[15] opacity-60 hidden md:block"><FloralCorner /></div>
      <div className="absolute top-4 right-4 z-[15] opacity-50 -scale-x-100 hidden md:block"><FloralCorner /></div>
      <div className="absolute bottom-4 left-4 z-[15] opacity-50 -scale-y-100 hidden md:block"><FloralCorner /></div>
      <div className="absolute bottom-4 right-4 z-[15] opacity-50 -scale-x-100 -scale-y-100 hidden md:block"><FloralCorner /></div>

      <SparkleField count={8} />

      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
        <Diya size={40} />
      </div>
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
        <Diya size={40} />
      </div>

      <div className="relative z-30 text-center px-6 sm:px-10 py-6 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4"
        >
          <p lang="hi" className="deva-line">ॐ श्री गणेशाय नमः</p>
          <p className="blessing-line">|| Shri Ganeshaya Namah ||</p>
        </motion.div>

        <TopFlourish className="mx-auto mb-3" />

        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-2"
        >
          <div className="absolute mandala-rotate-slow opacity-[0.1]">
            <AnimatedMandala size={330} color="#8a6410" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="ring-glow relative z-10"
          >
            <Image
              src={asset("/ganesh.png")}
              alt="Lord Shri Ganesh"
              width={220}
              height={220}
              className="w-28 sm:w-40 md:w-48 h-auto mix-blend-screen"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="cover-names"
        >
          <span className="name-gold">{GROOM}</span>
          <span className="cover-amp" aria-hidden="true">&amp;</span>
          <span className="sr-only"> and </span>
          <span className="name-gold">{BRIDE}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="body-text italic mb-1"
        >
          Engagement &amp; Wedding Invitation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="body-small max-w-md mx-auto mb-5 italic"
        >
          With the divine blessings of Lord Shri Ganesh and our revered elders, we cordially invite you to grace the auspicious engagement and wedding celebrations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2 }}
          className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto mb-4"
        >
          {tiles.map((t) => (
            <button key={t.label} type="button" onClick={() => onBegin(t.to)} className="event-tile">
              <span className="event-tile-label">{t.label}</span>
              <span className="event-tile-date">{t.event.shortDate.replace(" 2026", "")}</span>
              <span className="event-tile-time">{t.detail}</span>
              <span className="event-tile-cta">View details &rarr;</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.4, type: "spring", stiffness: 200 }}
        >
          <button onClick={() => onBegin(1)} className="wax-seal mx-auto group" aria-label="Open invitation">
            <span className="font-[family-name:var(--font-cinzel-decorative)] text-[#fbe9b0] text-[11px] font-bold tracking-[0.12em] uppercase leading-tight text-center">
              Open<br />Invite
            </span>
          </button>
          <p className="body-small italic mt-3">tap to begin, with music</p>
        </motion.div>
      </div>
    </div>
  );
}
