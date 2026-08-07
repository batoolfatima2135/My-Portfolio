import BorderGlow from "@/components/BorderGlow/BorderGlow";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { Trophy } from "lucide-react";

export const Achievements: React.FC = () => {
  return (
    <section className=" md:pt-20">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Achievements
      </ScrollFloat>
      <div className="w-full px-1 md:px-8 lg:px-12 md:py-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6">
          <div className="my-5">
            <BorderGlow
              edgeSensitivity={8}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={80}
              glowIntensity={3}
              coneSpread={34}
              animated
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div className=" flex flex-col md:flex-row items-center gap-4 justify-center p-5 md:p-10">
                <div className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-linear-to-br from-yellow-400 via-amber-500 to-orange-500 text-white shadow-lg">
                  <Trophy className="h-6  w-6 md:h-8 md:w-8" />
                </div>

                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  textClassName="text-achievement"
                >
                  Value Victor Award
                </ScrollFloat>
              </div>
              <div className="px-5">
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  textClassName="text-skills-xs"
                >
                  Honored with Talverse's quarterly Value Victor Award (Q3 2025)
                  award for demonstrating ownership, resilience, technical
                  excellence, and leadership while delivering successful project
                  outcomes and solving complex engineering challenges. It was
                  especially meaningful because it reflected the trust my team
                  and company placed in my work.
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="./award.jfif"
                    alt="Award"
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="./value-victor.jpeg"
                    alt="Value Victor Award"
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </BorderGlow>
          </div>
          <div className="my-5">
            <BorderGlow
              edgeSensitivity={8}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={80}
              glowIntensity={3}
              coneSpread={34}
              animated
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div className=" flex items-center  justify-center md:p-10">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  textClassName="text-achievement"
                >
                  Leadership Program
                </ScrollFloat>
              </div>
              <div className="md:px-5">
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  textClassName="text-skills-xs"
                >
                  Selected as the Engineering Department representative for
                  Talverse's Future Leadership Program 2025. Strengthened and
                  proved my leadership, communication, and presentation skills
                  through peer collaboration, cross-functional teamwork, and
                  delivering impactful presentations while gaining insights into
                  effective leadership practices.
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 gap-6 p-5 md:mt-10 sm:mt-5">
                <div className="rounded-2xl overflow-hidden w-7/8 mx-auto">
                  <img
                    src="./future-leadership-program.jpeg"
                    alt="Certificate"
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
