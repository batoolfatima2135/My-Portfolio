"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const indicator = indicatorRef.current;
    if (!wrapper || !indicator) return;

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      onLeave: () => {
        gsap.to(indicator, { opacity: 0, duration: 0.5, ease: "power2.out" });
      },
      onEnterBack: () => {
        gsap.to(indicator, { opacity: 1, duration: 0.5, ease: "power2.out" });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="relative w-full px-6">
      {/* Wrap all three screens so the trigger spans them */}
      <div ref={wrapperRef} className="relative">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl text-center text-white">
            <ScrollFloat
              animationDuration={1.2}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              stagger={0.05}
            >
              Hello There!!
            </ScrollFloat>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-6xl text-center text-white">
            <ScrollFloat
              animationDuration={1.2}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              stagger={0.05}
            >
              I am Batool Fatima Zaidi.
            </ScrollFloat>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-6xl text-center text-white">
            <ScrollFloat
              animationDuration={1.2}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              stagger={0.05}
            >
              Welcome to my portfolio.
            </ScrollFloat>
          </div>
        </div>

        {/* Scroll indicator - fixed within the wrapper, spans all 3 screens */}
        <div
          ref={indicatorRef}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/80 z-10"
        >
          <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/70">
            <div className="mt-2 h-2 w-2 rounded-full bg-white/80 animate-scroll"></div>
          </div>

          <span className="text-xs tracking-[0.3em] uppercase opacity-80">
            Scroll Down
          </span>
        </div>
      </div>
    </section>
  );
};
