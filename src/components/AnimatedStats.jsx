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
    <div ref={containerRef} className="mt-12 flex flex-row items-start gap-0">
      {/* Stat 1: 72% */}
      <div
        className={`flex-1 pl-0 pr-8 transition-all duration-700 ${
          animated[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="font-display-sans text-[56px] md:text-[72px] font-bold tracking-tight text-[var(--text-dark)]">
          {percentageValue}%
        </div>
        <div className="mt-2 font-label-mono text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
          Dos erros em licenciamento → interpretação regulatória
        </div>
      </div>

      {/* Separator 1 */}
      <div className="w-px h-16 bg-[rgba(255,255,255,0.08)] self-center" />

      {/* Stat 2: 6–12h */}
      <div
        className={`flex-1 px-8 transition-all duration-700 ${
          animated[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: "150ms",
        }}
      >
        <div className="font-display-sans text-[48px] md:text-[56px] font-bold tracking-tight text-[var(--text-dark)] whitespace-nowrap">
          6–12h
        </div>
        <div className="mt-2 font-label-mono text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
          Por projeto em leitura manual de PDMs
        </div>
      </div>

      {/* Separator 2 */}
      <div className="w-px h-16 bg-[rgba(255,255,255,0.08)] self-center" />

      {/* Stat 3: 308 */}
      <div
        className={`flex-1 pl-8 transition-all duration-700 ${
          animated[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: "300ms",
        }}
      >
        <div className="font-display-sans text-[56px] md:text-[72px] font-bold tracking-tight text-[var(--text-dark)]">
          {municipiosValue}
        </div>
        <div className="mt-2 font-label-mono text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
          Municípios em Portugal continental
        </div>
      </div>
    </div>
  );
}
