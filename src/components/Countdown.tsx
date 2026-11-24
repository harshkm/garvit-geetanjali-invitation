"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  target: string;
  label: string;
  doneText?: string;
}

export default function Countdown({ target, label, doneText = "The celebration has begun" }: CountdownProps) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const diff = now === null ? 0 : new Date(target).getTime() - now;
  const done = now !== null && diff <= 0;
  const t = Math.max(diff, 0);
  const parts = [
    { value: Math.floor(t / 86400000), label: "Days" },
    { value: Math.floor((t / 3600000) % 24), label: "Hours" },
    { value: Math.floor((t / 60000) % 60), label: "Min" },
    { value: Math.floor((t / 1000) % 60), label: "Sec" },
  ];

  return (
    <div className="countdown-wrap" role="timer" aria-label={label}>
      <p className="countdown-title">{label}</p>
      {done ? (
        <p className="countdown-done">{doneText}</p>
      ) : (
        <div className="flex justify-center gap-2.5 sm:gap-3">
          {parts.map((p) => (
            <div key={p.label} className="flex flex-col items-center">
              <div className="countdown-box">
                <span className="countdown-digit">{String(p.value).padStart(2, "0")}</span>
              </div>
              <span className="countdown-label">{p.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
