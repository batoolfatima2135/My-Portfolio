import BorderGlow from "@/components/BorderGlow/BorderGlow";
import ChromaGrid from "@/components/ChromaGrid/ChromaGrid";
import ElectroBorder from "@/components/lightswind/electro-border";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import { recommendations } from "@/Data/Recommendations";

export const Recommendation: React.FC = () => {
  return (
    <section className="mt-10">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Recommendations
      </ScrollFloat>
      <div>
        <ChromaGrid
          items={recommendations}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>

      <div className="flex justify-center my-10 z-10">
        <a
          href="https://www.linkedin.com/in/batoolfatima2135/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-200 hover:scale-105"
        >
          View All Recommendations on LinkedIn
        </a>
      </div>
    </section>
  );
};
