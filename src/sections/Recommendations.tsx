import ChromaGrid from "@/components/ChromaGrid/ChromaGrid";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

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
      <ChromaGrid radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
    </section>
  );
};
