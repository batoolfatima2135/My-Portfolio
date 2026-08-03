import ElectroBorder from "@/components/lightswind/electro-border";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { Trophy } from "lucide-react";

export const Achievements: React.FC = () => {
  return (
    <section>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        ACHIEVEMENTS
      </ScrollFloat>
      <div className="w-full px-4 md:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6">
          <div className="my-5">
            <ElectroBorder borderColor="white">
              <div className=" flex items-center gap-4 justify-center p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 text-white shadow-lg">
                  <Trophy className="h-8 w-8" />
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
            </ElectroBorder>
          </div>
          <div className="my-5">
            <ElectroBorder>
              <div className=" flex items-center gap-4 justify-center p-10">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  textClassName="text-achievement"
                >
                  Future Leadership Program
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
                  Selected as the Engineering Department representative for
                  Talverse's Future Leadership Program 2025. Strengthened
                  leadership, communication, and presentation skills through
                  peer collaboration, cross-functional teamwork, and delivering
                  impactful presentations while gaining insights into effective
                  leadership practices.
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 gap-6 p-5 md:mt-13 sm:mt-5">
                <div className="rounded-2xl overflow-hidden w-7/8 mx-auto">
                  <img
                    src="./future-leadership-program.jpeg"
                    alt="Award"
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </ElectroBorder>
          </div>
        </div>
      </div>
    </section>
  );
};
