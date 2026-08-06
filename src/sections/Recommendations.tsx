import BorderGlow from "@/components/BorderGlow/BorderGlow";
import ChromaGrid from "@/components/ChromaGrid/ChromaGrid";
import ElectroBorder from "@/components/lightswind/electro-border";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import SpecularButton from "@/components/SpecularButton/SpecularButton";
import { recommendations } from "@/Data/Recommendations";
import { ArrowRight } from "lucide-react";

export const Recommendation: React.FC = () => {
  return (
    <section className=" md:mt-15">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Recommendations
      </ScrollFloat>
      <div className="mt-15">
        <ChromaGrid
          items={recommendations}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
      <div className="my-10 ">
        <SpecularButton
          size="lg"
          radius={18}
          tint="#ffffff"
          tintOpacity={0}
          blur={0}
          textColor="#f5f5f5"
          lineColor="#EC4899"
          baseColor="#7C3AED"
          intensity={1}
          shineSize={10}
          shineFade={40}
          thickness={1}
          speed={0.35}
          followMouse
          proximity={250}
          className="w-3/4 md:w-fit"
          autoAnimate
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/batoolfatima2135/",
              "_blank",
            )
          }
        >
          <span className="flex items-center gap-2">
            View all Recommendations on LinkedIn
            <ArrowRight size={18} absoluteStrokeWidth={true} />
          </span>
        </SpecularButton>
      </div>
    </section>
  );
};
