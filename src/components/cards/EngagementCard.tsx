"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TopFlourish,
  SectionDivider,
  LotusMotif,
  OrnamentalBorder,
  SparkleField,
  FloatingPetals,
  Kalash,
  FloralCorner,
} from "@/components/Decorations";
import Countdown from "@/components/Countdown";
import VenueCard from "@/components/VenueCard";
import { BRIDE, EVENTS, GROOM } from "@/lib/events";

export default function EngagementCard() {
  const ev = EVENTS.engagement;
  return (
    <div className="theme-gold parchment-bg floral-bg-pattern card-frame card-container relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="golden-glow absolute inset-0 pointer-events-none z-[1]" />
      <OrnamentalBorder color="#8a6410" />
      <SparkleField count={6} />
      <FloatingPetals count={5} color="#b8860b" />

      <div className="absolute top-4 right-4 z-[15] opacity-55 -scale-x-100 hidden sm:block"><FloralCorner /></div>
      <div className="absolute bottom-4 left-4 z-[15] opacity-55 -scale-y-100 hidden sm:block"><FloralCorner /></div>

      <div className="relative z-30 text-center px-7 sm:px-14 md:px-20 py-10 sm:py-14 max-w-2xl mx-auto w-full">
        <TopFlourish className="mx-auto mb-5" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-3"
        >
          <Kalash />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card-title"
        >
          Engagement Ceremony
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-subtitle mb-5"
        >
          Together With Their Families
        </motion.p>

        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-6"
        >
          <p className="body-text italic mb-4">
            Together with their families, we joyfully invite you to join the engagement ceremony of
          </p>
          <p className="name-gold">{GROOM}</p>
          <div className="flex items-center justify-center gap-3 my-1">
            <div className="ornament-line w-10" />
            <span className="amp-mark">&amp;</span>
            <div className="ornament-line w-10" />
          </div>
          <p className="name-gold">{BRIDE}</p>
        </motion.div>

        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="event-info-box info-box mb-6"
        >
          <p className="label mb-2">Date &amp; Time</p>
          <p className="date-big">{ev.dateLabel}</p>
          <p className="time-big">{ev.timeLabel}</p>
          <p className="body-text italic mt-1">{ev.note}</p>
        </motion.div>

        <Countdown target={ev.startISO} label="Counting down to the engagement" />

        <div className="my-6">
          <p className="label mb-3">Venue</p>
          <VenueCard event={ev} />
        </div>

        <p className="body-small italic mt-2">Your presence and blessings are humbly requested</p>

        <LotusMotif className="mx-auto mt-6" />
        <TopFlourish className="mx-auto mt-5 rotate-180" />
      </div>
    </div>
  );
}
