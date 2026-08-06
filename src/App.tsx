import "./App.css";
import { Hero } from "./sections/Hero";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Particles from "./components/ParticleBackground/Particles";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Achievements } from "./sections/Achievements";
import { Recommendation } from "./sections/Recommendations";
function App() {
  useEffect(() => {
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
      <div className="w-full relative">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={20000}
          particleSpread={10}
          speed={0.01}
          moveParticlesOnHover
          particleBaseSize={50}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={0.5}
        />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Recommendation />
      </div>
    </>
  );
}

export default App;
