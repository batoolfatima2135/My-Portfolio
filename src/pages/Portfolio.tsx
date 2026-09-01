import { About } from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import Contact from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Recommendation } from "@/sections/Recommendations";
import { Skills } from "@/sections/Skills";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    if (!mediaQuery.matches) return;

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Experience />
      <Recommendation />
      <Contact />
    </>
  );
}
