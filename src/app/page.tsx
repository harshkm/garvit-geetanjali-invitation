"use client";

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import IntroCard from "@/components/cards/IntroCard";
import WeddingCard from "@/components/cards/WeddingCard";
import ThankYouCard from "@/components/cards/ThankYouCard";
import AudioToggle, { type AudioToggleHandle } from "@/components/AudioToggle";

/* Scroll indicator — flips arrow when user is near the bottom */
function ScrollIndicator({ currentCard }: { currentCard: number }) {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const el = document.querySelector(`[data-card="${currentCard}"]`) as HTMLElement | null;
    if (!el) return;

    const check = () => {
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 40;
      setAtBottom(isAtBottom);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    return () => el.removeEventListener("scroll", check);
  }, [currentCard]);

  const handleClick = () => {
    const el = document.querySelector(`[data-card="${currentCard}"]`) as HTMLElement | null;
    if (!el) return;
    if (atBottom) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ top: el.clientHeight * 0.75, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="scroll-down-btn"
      aria-label={atBottom ? "Scroll to top" : "Scroll down"}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 transition-transform duration-300"
        style={{ transform: atBottom ? "rotate(180deg)" : "none" }}
        fill="none"
        stroke="#1a0e04"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M12,5 L12,19" />
        <path d="M6,13 L12,19 L18,13" />
      </svg>
    </button>
  );
}

/* Card labels for nav dots */
const cardLabels = [
  "Welcome",
  "Wedding",
  "Thank You",
];

export default function WeddingInvitation() {
  const [currentCard, setCurrentCard] = useState(0);
  const [started, setStarted] = useState(false);
  const dirRef = useRef(1); // 1 = forward, -1 = backward
  const audioRef = useRef<AudioToggleHandle>(null);
  /* Track how many times each card has been activated — used as a key
     to force remount, which replays framer-motion entrance animations */
  const [cardGen, setCardGen] = useState([1, 0, 0]);

  const navigate = useCallback(
    (to: number) => {
      if (to === currentCard || to < 0 || to >= cardLabels.length) return;
      dirRef.current = to > currentCard ? 1 : -1;
      setCurrentCard(to);
      setCardGen((prev) => {
        const next = [...prev];
        next[to] = prev[to] + 1;
        return next;
      });
    },
    [currentCard]
  );

  const goNext = useCallback(
    () => navigate(currentCard + 1),
    [navigate, currentCard]
  );
  const goPrev = useCallback(
    () => navigate(currentCard - 1),
    [navigate, currentCard]
  );

  const handleBegin = useCallback((to: number = 1) => {
    setStarted(true);
    dirRef.current = 1;
    setCurrentCard(to);
    setCardGen((prev) => {
      const next = [...prev];
      next[to] = prev[to] + 1;
      return next;
    });
    // Start music on "Open Invite" tap — guaranteed user gesture
    audioRef.current?.play();
  }, []);

  /* Reset scroll to top when switching cards */
  useEffect(() => {
    const el = document.querySelector(`[data-card="${currentCard}"]`);
    if (el) el.scrollTo({ top: 0, behavior: "instant" });
  }, [currentCard]);


  /* Keyboard navigation */
  useEffect(() => {
    if (!started) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [started, goNext, goPrev]);

  /* Touch swipe — horizontal only, vertical scroll handled natively */
  useEffect(() => {
    if (!started) return;
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      const dt = Date.now() - startTime;
      const velocity = Math.abs(dx) / dt;
      const isSwipe =
        (Math.abs(dx) > 40 && velocity > 0.3) || Math.abs(dx) > 60;
      if (isSwipe && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [started, goNext, goPrev]);

  /* All cards created once — never unmounted */
  const cards = useMemo(
    () => [
      <IntroCard key="intro" onBegin={handleBegin} />,
      <WeddingCard key="wedding" />,
      <ThankYouCard key="thankyou" />,
    ],
    [handleBegin]
  );

  return (
    <main className="relative h-dvh bg-[#1a0e04] overflow-hidden">
      {/* Card stack — only mount current ± 1 card for performance */}
      <div
        className="max-w-5xl mx-auto relative h-full"
        style={{ display: "grid", overflow: "hidden" }}
      >
        {cards.map((card, i) => {
          const dist = Math.abs(i - currentCard);
          /* Only mount current card and immediate neighbors */
          if (dist > 1) return null;

          const isActive = i === currentCard;

          return (
            <div
              key={i}
              data-card={i}
              data-active={isActive}
              style={{
                gridRow: "1 / -1",
                gridColumn: "1 / -1",
                height: "100%",
                overflowY: isActive ? "auto" : "hidden",
                overflowX: "hidden",
                overscrollBehavior: "contain",
                touchAction: "pan-y",
                WebkitOverflowScrolling: "touch",
                willChange: isActive ? "transform" : "auto",
                backfaceVisibility: "hidden",
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isActive
                  ? "translate3d(0,0,0)"
                  : i < currentCard
                    ? "translate3d(-100%,0,0)"
                    : "translate3d(100%,0,0)",
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 2 : 1,
                contain: "layout style paint",
              }}
            >
              {/* Inner key forces remount on activation, replaying entrance animations */}
              <div key={`gen-${cardGen[i]}`} style={{ minHeight: '100%' }}>
                {card}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation - only show after started */}
      {started && (
        <>
          {/* Nav dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-3 sm:px-5 py-2 sm:py-3 rounded-full"
            style={{
              bottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
              background: "rgba(26,14,4,0.9)",
            }}
          >
            <button
              type="button"
              onClick={goPrev}
              disabled={currentCard <= 1}
              className="nav-arrow sm:hidden"
              aria-label="Previous card"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M15,18 L9,12 L15,6" /></svg>
            </button>
            {cardLabels.slice(1).map((label, i) => (
              <button
                key={label}
                onClick={() => navigate(i + 1)}
                className={`nav-dot ${currentCard === i + 1 ? "active" : ""}`}
                aria-label={`Go to ${label}`}
                title={label}
              />
            ))}
            <button
              type="button"
              onClick={goNext}
              disabled={currentCard >= cardLabels.length - 1}
              className="nav-arrow sm:hidden"
              aria-label="Next card"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M9,18 L15,12 L9,6" /></svg>
            </button>
          </motion.div>

          {/* Prev / Next arrows (wider screens) */}
          {currentCard > 1 && (
            <button
              onClick={goPrev}
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full hidden sm:flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: "rgba(26,14,4,0.8)",
              }}
              aria-label="Previous card"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M15,18 L9,12 L15,6" />
              </svg>
            </button>
          )}
          {currentCard < cardLabels.length - 1 && (
            <button
              onClick={goNext}
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full hidden sm:flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: "rgba(26,14,4,0.8)",
              }}
              aria-label="Next card"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M9,18 L15,12 L9,6" />
              </svg>
            </button>
          )}
        </>
      )}

      {/* Scroll indicator — visible after started */}
      {started && <ScrollIndicator currentCard={currentCard} />}

      {/* Audio toggle — always mounted so ref is ready, visible after started */}
      <AudioToggle ref={audioRef} visible={started} />
    </main>
  );
}
