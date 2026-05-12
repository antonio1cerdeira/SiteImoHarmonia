import React, { useEffect, useRef, useState } from "react";

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

export default function AnimatedStats() {
  const containerRef = useRef(null);
  const [animated, setAnimated] = useState([false, false, false]);
  const [percentageValue, setPercentageValue] = useState(0);
  const [municipiosValue, setMuniciposValue] = useState(0);
  const hasAnimated = useRef(false);

  const startCounterAnimation = (start, end, duration, callback) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.round(start + (end - start) * easedProgress);

      callback(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Stat 1: 72% (starts at 0ms)
          startCounterAnimation(
            0,
            72,
            1500,
            (val) => setPercentageValue(val)
          );
          setAnimated((prev) => {
            const newState = [...prev];
            newState[0] = true;
            return newState;
          });

          // Stat 2: 6–12h (starts at 150ms, just fade-in)
          setTimeout(() => {
            setAnimated((prev) => {
              const newState = [...prev];
              newState[1] = true;
              return newState;
            });
          }, 150);

          // Stat 3: 308 (starts at 300ms)
          setTimeout(() => {
            startCounterAnimation(
              0,
              278, // 308 - 30 (buffer for realism)
              1800,
              (val) => setMuniciposValue(val)
            );
            setAnimated((prev) => {
              const newState = [...prev];
              newState[2] = true;
              return newState;
            });
          }, 300);

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="stats-wrap mt-12 flex flex-col md:flex-row items-start md:items-center">
      {/* Stat 1: 72% */}
      <div
        className={`stats-stat flex-1 px-4 md:px-0 transition-all duration-700 ${
          animated[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="stats-value font-display-sans text-[clamp(2rem,8vw,4.5rem)] md:text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-tight text-[var(--text-dark)]">
          {percentageValue}%
        </div>
        <div className="stats-label mt-2 font-label-mono text-[11px] uppercase tracking-[0.18em] text-[var(--on-surface-variant)]">
          Dos erros em licenciamento → interpretação regulatória
        </div>
      </div>

      {/* Separator 1 */}
      <div className="stats-separator hidden md:block w-px h-16 bg-[rgba(255,255,255,0.08)] self-center" />

      {/* Stat 2: 6–12h */}
      <div
        className={`stats-stat flex-1 px-4 md:px-8 mt-4 md:mt-0 transition-all duration-700 ${
          animated[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: "150ms",
        }}
      >
        <div className="stats-value font-display-sans text-[clamp(1.6rem,6vw,3.6rem)] md:text-[clamp(2rem,4.5vw,3.6rem)] font-bold tracking-tight text-[var(--text-dark)] break-words">
          6–12h
        </div>
        <div className="stats-label mt-2 font-label-mono text-[11px] uppercase tracking-[0.18em] text-[var(--on-surface-variant)]">
          Por projeto em leitura manual de PDMs
        </div>
      </div>

      {/* Separator 2 */}
      <div className="stats-separator hidden md:block w-px h-16 bg-[rgba(255,255,255,0.08)] self-center" />

      {/* Stat 3: 308 */}
      <div
        className={`stats-stat flex-1 px-4 md:pl-8 mt-4 md:mt-0 transition-all duration-700 ${
          animated[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: "300ms",
        }}
      >
        <div className="stats-value font-display-sans text-[clamp(2rem,7.5vw,4.5rem)] md:text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-tight text-[var(--text-dark)]">
          {municipiosValue}
        </div>
        <div className="stats-label mt-2 font-label-mono text-[11px] uppercase tracking-[0.18em] text-[var(--on-surface-variant)]">
          Municípios em Portugal continental
        </div>
      </div>
    </div>
  );
}
