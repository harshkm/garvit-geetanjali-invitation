"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  TopFlourish,
  SectionDivider,
  LotusMotif,
  OrnamentalBorder,
  SparkleField,
  FloatingPetals,
  Diya,
  Bell,
  FloralCorner,
} from "@/components/Decorations";
import Countdown from "@/components/Countdown";
import VenueCard from "@/components/VenueCard";
import { BRIDE, EVENTS, FAMILY, GROOM } from "@/lib/events";
import { asset } from "@/lib/asset";

export default function WeddingCard() {
  const ev = EVENTS.wedding;
  return (
    <div className="theme-maroon parchment-bg parchment-wedding card-frame card-container relative overflow-hidden min-h-full flex flex-col items-center">
      <OrnamentalBorder color="#6b1010" />
      <SparkleField count={6} />
      <FloatingPetals count={5} color="#b05050" />

      <div className="absolute top-8 left-8 sm:left-14 z-20 pointer-events-none"><Bell /></div>
      <div className="absolute top-8 right-8 sm:right-14 z-20 pointer-events-none -scale-x-100"><Bell /></div>

      <div className="absolute bottom-16 left-10 sm:left-20 z-20 pointer-events-none"><Diya size={36} /></div>
      <div className="absolute bottom-16 right-10 sm:right-20 z-20 pointer-events-none"><Diya size={36} /></div>

      <div className="absolute bottom-4 left-4 z-[15] opacity-55 -scale-y-100 hidden md:block"><FloralCorner color="#6b1010" /></div>
      <div className="absolute bottom-4 right-4 z-[15] opacity-55 -scale-x-100 -scale-y-100 hidden md:block"><FloralCorner color="#6b1010" /></div>

      <div className="relative z-30 text-center px-7 sm:px-14 md:px-20 py-10 sm:py-14 max-w-2xl mx-auto w-full">
        <TopFlourish className="mx-auto mb-4" color="#6b1010" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex justify-center mb-5"
        >
          <div className="relative p-1.5 rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#d4af37] via-[#a87d14] to-[#6b1010] shadow-[0_12px_28px_rgba(107,16,16,0.35)]">
            <div className="relative w-32 sm:w-36 md:w-40 h-44 sm:h-50 md:h-54 rounded-t-full rounded-b-xl overflow-hidden border border-[#f5e6c8]/50">
              <Image
                src={asset("/photos/moment-1.jpg")}
                alt={`${GROOM} & ${BRIDE}`}
                fill
                sizes="(max-width: 640px) 130px, 160px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4af37] border border-[#f5e6c8]" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="card-title"
        >
          Wedding Invitation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-subtitle mb-5"
        >
          The Sacred Union
        </motion.p>

        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mb-6"
        >
          <p className="body-text italic mb-5">
            Late Sh Surender Kumar Gupta &amp; Late Smt Satyawati Devi solicit the honour of your presence for the wedding of their beloved grandson
          </p>

          <p className="name-gold">{GROOM}</p>
          <p className="body-small font-semibold">S/o Smt Babita Gupta &amp; Sh Sanjay Gupta</p>

          <div className="flex items-center justify-center gap-3 my-2">
            <div className="ornament-line w-10" />
            <span className="amp-mark">&amp;</span>
            <div className="ornament-line w-10" />
          </div>

          <p className="name-gold">{BRIDE}</p>
          <p className="body-small font-semibold">D/o Smt Meena Gupta &amp; Sh Munesh Gupta</p>
        </motion.div>

        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="event-info-box info-box mb-6"
        >
          <p className="label mb-2">Wedding Date</p>
          <p className="date-big">{ev.dateLabel}</p>
          <ol className="timeline" aria-label="Wedding day timings">
            <li><span className="tl-time">4:00 PM</span><span className="tl-what">Sehra</span></li>
            <li><span className="tl-time">5:00 PM</span><span className="tl-what">Barat</span></li>
          </ol>
        </motion.div>

        <Countdown target={ev.startISO} label="Counting down to our special day" />

        <div className="my-6">
          <p className="label mb-3">Venue</p>
          <VenueCard event={ev} />
        </div>

        <SectionDivider />

        <div className="mb-4">
          <p className="label mb-2">RSVP</p>
          <p className="date-big">{FAMILY}</p>
        </div>

        <p className="body-small italic mb-4">
          Your gracious presence and heartfelt blessings will make this occasion truly auspicious
        </p>

        <LotusMotif className="mx-auto mt-5" color="#6b1010" />
        <TopFlourish className="mx-auto mt-4 rotate-180" color="#6b1010" />
      </div>
    </div>
  );
}
