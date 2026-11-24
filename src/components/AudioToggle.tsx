"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import { asset } from "@/lib/asset";

export interface AudioToggleHandle {
  play: () => void;
}

interface AudioToggleProps {
  visible?: boolean;
}

const AudioToggle = forwardRef<AudioToggleHandle, AudioToggleProps>(function AudioToggle({ visible = true }, ref) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(asset("/music.mp3"));
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "auto";
    audio.setAttribute("playsinline", "");
    audioRef.current = audio;
    setReady(true);

    // Resume playback when user returns to the tab (iOS pauses on background)
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && audioRef.current && !audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      audio.pause();
      audio.src = "";
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play() {
      if (!audioRef.current) return;
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    },
  }));

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying((p) => !p);
  }, [playing]);

  if (!ready || !visible) return null;

  return (
    <button
      onClick={toggle}
      className="audio-btn"
      aria-label={playing ? "Pause music" : "Play music"}
      aria-pressed={playing}
      title={playing ? "Pause music" : "Play music"}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
        {playing ? (
          <>
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </>
        ) : (
          <>
            <path d="m16 9 5 6" />
            <path d="m21 9-5 6" />
          </>
        )}
      </svg>
      <span className="audio-label">{playing ? "Music on" : "Music off"}</span>
    </button>
  );
});

export default AudioToggle;
