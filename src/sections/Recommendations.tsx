import ChromaGrid from "@/components/ChromaGrid/ChromaGrid";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import { externalLinks } from "@/Data/ExternalLinks";
import { recommendations } from "@/Data/Recommendations";

export const Recommendation: React.FC = () => {
  return (
    <section className="mt-10 md:mt-30">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Recommendations
      </ScrollFloat>
      <div className="mt-5 md:mt-15">
        <ChromaGrid
          items={recommendations}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
      <div className="relative flex justify-center my-10">
        <a
          href={externalLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="
                group
                relative
                px-5
                md:px-10           
                overflow-hidden
                rounded-full
                bg-linear-to-r
                from-purple-500
                via-pink-500
                to-blue-500
                py-3.5
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-[1.02]
                disabled:opacity-50
            "
        >
          View All Recommendations on LinkedIn
        </a>
      </div>
    </section>
  );
};
