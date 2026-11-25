"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  TopFlourish,
  SectionDivider,
  LotusMotif,
  OrnamentalBorder,
  CornerOrnament,
  SparkleField,
  FloatingPetals,
  FloralCorner,
  Diya,
} from "@/components/Decorations";
import { BRIDE, GROOM } from "@/lib/events";
import { asset } from "@/lib/asset";

interface PhotoItem {
  src: string;
  title: string;
  caption: string;
  aspect: "portrait" | "landscape";
}

const PHOTOS: PhotoItem[] = [
  {
    src: "/photos/moment-1.jpg",
    title: "Hand in Hand",
    caption: "Stepping together into our forever journey",
    aspect: "portrait",
  },
  {
    src: "/photos/moment-2.jpg",
    title: "A Gaze of Love",
    caption: "Two souls, one beautiful heartbeat",
    aspect: "landscape",
  },
  {
    src: "/photos/moment-3.jpg",
    title: "Pure Joy & Laughter",
    caption: "In your smile, I found my world",
    aspect: "portrait",
  },
  {
    src: "/photos/moment-4.jpg",
    title: "Written in the Stars",
    caption: "Blessed by destiny, bound by eternal love",
    aspect: "portrait",
  },
  {
    src: "/photos/moment-5.jpg",
    title: "Side by Side",
    caption: "Together is our most cherished place to be",
    aspect: "portrait",
  },
  {
    src: "/photos/moment-6.jpg",
    title: "Timeless Embrace",
    caption: "Every fleeting moment with you is golden",
    aspect: "portrait",
  },
  {
    src: "/photos/moment-7.jpg",
    title: "Forever Begins",
    caption: "With folded hands & full hearts, stepping into tomorrow",
    aspect: "portrait",
  },
];

interface MomentsCardProps {
  onNext?: () => void;
}

export default function MomentsCard({ onNext }: MomentsCardProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
    if (slides[index]) {
      slides[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
    }
  }, []);

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % PHOTOS.length;
    scrollToSlide(next);
  }, [activeIndex, scrollToSlide]);

  const goPrev = useCallback(() => {
    const prev = (activeIndex - 1 + PHOTOS.length) % PHOTOS.length;
    scrollToSlide(prev);
  }, [activeIndex, scrollToSlide]);

  // Sync scroll position with active dot
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleScroll = () => {
      const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
      const center = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let minDiff = Infinity;

      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const diff = Math.abs(center - slideCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      });

      setActiveIndex(closestIdx);
    };

    let timer: NodeJS.Timeout;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(handleScroll, 60);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Keyboard navigation for carousel and lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % PHOTOS.length : null));
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null));
      } else {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <div
      data-prevent-swipe="true"
      className="theme-gold parchment-bg floral-bg-pattern card-frame card-container relative overflow-hidden min-h-full flex flex-col items-center py-10 sm:py-14"
    >
      <div className="golden-glow absolute inset-0 pointer-events-none z-[1]" />
      <OrnamentalBorder color="#8a6410" />

      {/* Heritage Corner Ornaments */}
      <div className="absolute top-2 left-2 z-20 pointer-events-none"><CornerOrnament /></div>
      <div className="absolute top-2 right-2 z-20 pointer-events-none -scale-x-100"><CornerOrnament /></div>
      <div className="absolute bottom-2 left-2 z-20 pointer-events-none -scale-y-100"><CornerOrnament /></div>
      <div className="absolute bottom-2 right-2 z-20 pointer-events-none -scale-x-100 -scale-y-100"><CornerOrnament /></div>

      <div className="absolute top-6 left-6 z-[15] opacity-50 hidden md:block"><FloralCorner /></div>
      <div className="absolute top-6 right-6 z-[15] opacity-50 -scale-x-100 hidden md:block"><FloralCorner /></div>

      <SparkleField count={8} />
      <FloatingPetals count={6} color="#d4af37" />

      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block pointer-events-none">
        <Diya size={36} />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block pointer-events-none">
        <Diya size={36} />
      </div>

      <div className="relative z-30 text-center px-4 sm:px-8 max-w-4xl mx-auto w-full">
        {/* Sanskrit blessing banner */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <p lang="hi" className="deva-line">॥ प्रेम परमो धर्मः ॥</p>
          <p className="blessing-line">|| Two Souls, Bound By Love ||</p>
        </motion.div>

        <TopFlourish className="mx-auto mb-3" />

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-title text-2xl sm:text-3xl md:text-4xl"
        >
          Cherished Moments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-subtitle mb-2"
        >
          {GROOM} &amp; {BRIDE}
        </motion.p>

        <p className="body-small italic text-[#5a3920] max-w-md mx-auto mb-5">
          Glimpses from the sweet chapters leading up to our sacred day
        </p>

        <SectionDivider className="my-3 sm:my-4" />

        {/* Carousel Container */}
        <div data-prevent-swipe="true" className="relative w-full max-w-xl mx-auto my-3">
          {/* Previous Button (Desktop) */}
          <button
            onClick={goPrev}
            aria-label="Previous photo"
            className="hidden sm:flex absolute -left-5 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full items-center justify-center bg-[#1a0e04]/80 text-[#d4af37] border border-[#d4af37]/50 hover:scale-110 active:scale-95 transition-all shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M15,18 L9,12 L15,6" />
            </svg>
          </button>

          {/* Next Button (Desktop) */}
          <button
            onClick={goNext}
            aria-label="Next photo"
            className="hidden sm:flex absolute -right-5 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full items-center justify-center bg-[#1a0e04]/80 text-[#d4af37] border border-[#d4af37]/50 hover:scale-110 active:scale-95 transition-all shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M9,18 L15,12 L9,6" />
            </svg>
          </button>

          {/* Horizontal scroll snap track */}
          <div
            ref={carouselRef}
            role="region"
            aria-label="Couple photo gallery"
            tabIndex={0}
            data-prevent-swipe="true"
            className="carousel-track flex items-center gap-4 sm:gap-6 overflow-x-auto py-4 px-6 snap-x snap-mandatory focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
            style={{
              touchAction: "pan-x pan-y",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {PHOTOS.map((photo, i) => {
              const isCurrent = i === activeIndex;
              return (
                <div
                  key={photo.src}
                  data-slide
                  data-prevent-swipe="true"
                  onClick={() => setLightboxIndex(i)}
                  className={`flex-none w-[78%] sm:w-[320px] md:w-[340px] snap-center cursor-pointer transition-all duration-500 ease-out select-none ${
                    isCurrent ? "scale-100 opacity-100" : "scale-[0.92] opacity-75"
                  }`}
                  style={{
                    containerType: "scroll-state",
                    touchAction: "pan-x pan-y",
                  }}
                >
                  {/* Royal ornate polaroid frame */}
                  <div className="bg-[#fff9ef] p-3 sm:p-4 rounded-xl border-2 border-[#d4af37]/70 shadow-[0_12px_28px_rgba(40,20,0,0.28)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.35)] transition-shadow duration-300">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-[#2d1b0c] border border-[#d4af37]/30">
                      <Image
                        src={asset(photo.src)}
                        alt={`${photo.title} — ${GROOM} & ${BRIDE}`}
                        fill
                        sizes="(max-width: 640px) 280px, 340px"
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : "low"}
                        decoding="async"
                        draggable={false}
                        className="object-cover transition-transform duration-700 hover:scale-105 pointer-events-none select-none"
                      />
                      {/* Subtle golden corner sparkles */}
                      <div className="absolute top-2 right-2 bg-[#1a0e04]/60 backdrop-blur-xs text-[#f5e6c8] px-2 py-0.5 rounded text-[10px] tracking-widest font-mono">
                        {i + 1} / {PHOTOS.length}
                      </div>
                    </div>

                    <div className="pt-3 pb-1 text-center">
                      <h3 className="font-[family-name:var(--font-cinzel-decorative)] text-sm sm:text-base font-bold text-[#8a6410]">
                        {photo.title}
                      </h3>
                      <p className="font-[family-name:var(--font-cormorant)] text-xs sm:text-sm italic text-[#5a3920] mt-0.5 leading-snug">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot Navigation */}
          <div data-prevent-swipe="true" className="flex items-center justify-center gap-2 mt-4" aria-label="Gallery slide controls">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === i
                    ? "w-6 h-2 bg-[#8a6410]"
                    : "w-2 h-2 bg-[#8a6410]/35 hover:bg-[#8a6410]/60"
                }`}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={activeIndex === i ? "true" : undefined}
              />
            ))}
          </div>
          <p className="body-small italic text-[11px] text-[#7a4e22] mt-2">
            tap any photograph to view full screen
          </p>
        </div>

        <LotusMotif className="mx-auto mt-6" color="#8a6410" />
        <TopFlourish className="mx-auto mt-4 rotate-180" color="#8a6410" />

        {onNext && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 mb-2"
          >
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1a0e04] bg-gradient-to-r from-[#d4af37] via-[#f5e6c8] to-[#d4af37] shadow-[0_4px_14px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] active:scale-95 transition-all duration-200 border border-[#8a6410]/40"
            >
              <span>Our Gratitude</span>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5,12 L19,12 M13,6 L19,12 L13,18" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            data-prevent-swipe="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-50 p-2 text-[#f5e6c8] hover:text-[#d4af37] transition-colors rounded-full bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18,6 L6,18 M6,6 L18,18" />
              </svg>
            </button>

            {/* Prev / Next within Lightbox */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null));
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 text-[#d4af37] bg-black/60 rounded-full hover:bg-black/90 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15,18 L9,12 L15,6" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i !== null ? (i + 1) % PHOTOS.length : null));
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 text-[#d4af37] bg-black/60 rounded-full hover:bg-black/90 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9,18 L15,12 L9,6" />
              </svg>
            </button>

            {/* Lightbox Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full max-h-[85vh] flex flex-col items-center bg-[#1a0e04] rounded-2xl border-2 border-[#d4af37] overflow-hidden p-3 shadow-2xl"
            >
              <div className="relative w-full h-[62vh] sm:h-[68vh] rounded-xl overflow-hidden">
                <Image
                  src={asset(PHOTOS[lightboxIndex].src)}
                  alt={PHOTOS[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center pt-3 pb-1">
                <h4 className="font-[family-name:var(--font-cinzel-decorative)] text-base sm:text-lg font-bold text-[#fbe9b0]">
                  {PHOTOS[lightboxIndex].title}
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-xs sm:text-sm italic text-[#ead2a2] mt-0.5">
                  {PHOTOS[lightboxIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
