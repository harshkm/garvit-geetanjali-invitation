"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TopFlourish,
  SectionDivider,
  LotusMotif,
  OrnamentalBorder,
  AnimatedMandala,
  FloatingPetals,
  SparkleField,
  CornerOrnament,
  FloralCorner,
} from "@/components/Decorations";
import { BRIDE, FAMILY, GROOM } from "@/lib/events";

export default function ThankYouCard() {
  return (
    <div className="theme-gold parchment-bg floral-bg-pattern card-frame card-container relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div className="golden-glow absolute inset-0 pointer-events-none z-[1]" />
      <OrnamentalBorder color="#a07718" />

      {/* Corner ornaments */}
      <div className="absolute top-2 left-2 z-20"><CornerOrnament /></div>
      <div className="absolute top-2 right-2 z-20 -scale-x-100"><CornerOrnament /></div>
      <div className="absolute bottom-2 left-2 z-20 -scale-y-100"><CornerOrnament /></div>
      <div className="absolute bottom-2 right-2 z-20 -scale-x-100 -scale-y-100"><CornerOrnament /></div>

      {/* Floral corners */}
      <div className="absolute top-4 left-4 z-[15] opacity-65 hidden md:block"><FloralCorner /></div>
      <div className="absolute bottom-4 right-4 z-[15] opacity-40 -scale-x-100 -scale-y-100 hidden md:block"><FloralCorner /></div>

      <FloatingPetals count={6} color="#d4af37" />
      <SparkleField count={10} />

      <div className="relative z-30 text-center px-6 sm:px-10 md:px-16 py-10 sm:py-14 max-w-2xl mx-auto">
        <TopFlourish className="mx-auto mb-6" />

        {/* Rotating mandala behind content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate pointer-events-none"
        >
          <AnimatedMandala size={400} color="#b8860b" animate={false} />
        </motion.div>

        {/* Thank you text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="label mb-3"
          >
            With Love &amp; Gratitude
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="thanks-title mb-3"
          >
            Thank You
          </motion.h2>

          <SectionDivider />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="body-text italic max-w-md mx-auto mb-6"
          >
            We are truly grateful for your love, blessings, and gracious presence in our wedding celebrations. Your warmth and good wishes mean the world to us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-8"
          >
            <p className="name-gold">{GROOM}</p>
            <p className="amp-mark my-1">&amp;</p>
            <p className="name-gold">{BRIDE}</p>
            <p className="body-small font-semibold mt-2">29 November &amp; 14 December 2026</p>
          </motion.div>

          <SectionDivider />

          {/* Golden seal emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 2, type: "spring", stiffness: 150 }}
            className="mx-auto mb-6"
          >
            <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 mx-auto">
              <defs>
                <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8a6410" />
                  <stop offset="50%" stopColor="#a87d14" />
                  <stop offset="100%" stopColor="#6e4f0c" />
                </linearGradient>
              </defs>
              {/* Seal outer ring */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="url(#sealGold)" strokeWidth="2.5" opacity="0.8" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="url(#sealGold)" strokeWidth="0.8" opacity="0.55" />
              {/* Scalloped edge */}
              {Array.from({ length: 24 }).map((_, i) => (
                <circle key={i} cx={50 + 40 * Math.cos((i * 15 * Math.PI) / 180)}
                  cy={50 + 40 * Math.sin((i * 15 * Math.PI) / 180)} r="2"
                  fill="#b8860b" opacity="0.45" />
              ))}
              {/* Initials */}
              <text x="32" y="58" fontFamily="var(--font-great-vibes), cursive" fontSize="28"
                fill="url(#sealGold)" stroke="#8b6914" strokeWidth="0.3" opacity="0.9">G</text>
              <text x="54" y="58" fontFamily="var(--font-great-vibes), cursive" fontSize="28"
                fill="url(#sealGold)" stroke="#8b6914" strokeWidth="0.3" opacity="0.9">G</text>
              {/* Small heart between */}
              <path d="M48,44 Q50,40 52,44 Q52,48 50,50 Q48,48 48,44 Z" fill="#b8860b" opacity="0.7" />
            </svg>
          </motion.div>

          <div className="mb-6">
            <p className="label mb-2">RSVP</p>
            <p className="date-big">{FAMILY}</p>
          </div>

          <SectionDivider />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="body-small italic mb-4"
          >
            With folded hands and warm hearts, we seek your blessings and gracious presence
          </motion.p>

        </motion.div>

        <LotusMotif className="mx-auto mt-8" />
        <TopFlourish className="mx-auto mt-4 rotate-180" />
      </div>
    </div>
  );
}
