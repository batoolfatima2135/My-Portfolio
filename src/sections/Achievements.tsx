import BorderGlow from "@/components/BorderGlow/BorderGlow";
import LiquidGlassDialog from "@/components/Dialog/LiquidGlassDialog";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { Trophy } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import awardImage from "@/assets/award.jfif";
import awardDetailImage from "@/assets/value-victor.jpeg";
import futureLeadershipProgramImage from "@/assets/future-leadership-program.jpeg";

export const Achievements: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  const { t } = useTranslation();
  return (
    <section className=" md:pt-20">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        {t("achievements.title")}
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
                  animationDuration={0.8}
                  scrollStart="center bottom"
                  scrollEnd="bottom bottom"
                  stagger={0.03}
                  textClassName="text-achievement"
                >
                  {t("achievements.value-victor")}
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
                  {t("achievements.value-victor-description")}
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                <div className="rounded-2xl overflow-hidden h-100">
                  <button
                    type="button"
                    onClick={() => handleImageClick(awardImage)}
                    className="block w-full cursor-pointer h-full"
                  >
                    <img
                      src={awardImage}
                      alt="Award"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden h-100">
                  <button
                    type="button"
                    onClick={() => handleImageClick(awardDetailImage)}
                    className="block w-full cursor-pointer h-full"
                  >
                    <img
                      src={awardDetailImage}
                      alt="Value Victor Award"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </button>
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
              <div className=" flex pt-5 items-center  justify-center md:p-10">
                <ScrollFloat
                  animationDuration={0.8}
                  scrollStart="center bottom"
                  scrollEnd="bottom bottom"
                  stagger={0.03}
                  textClassName="text-achievement"
                >
                  {t("achievements.leadership-award")}
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
                  {t("achievements.leadership-award-description")}
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 gap-6 p-5 md:mt-10 sm:mt-5">
                <div className="rounded-2xl overflow-hidden w-11/12 max-w-4xl mx-auto">
                  <button
                    type="button"
                    onClick={() =>
                      handleImageClick(futureLeadershipProgramImage)
                    }
                    className="block w-7/8 cursor-pointer mx-auto"
                  >
                    <img
                      src={futureLeadershipProgramImage}
                      alt="Certificate"
                      className=" h-auto object-cover rounded-2xl"
                    />
                  </button>
                </div>
              </div>
            </BorderGlow>
          </div>
          <LiquidGlassDialog
            open={selectedImage !== null}
            onOpenChange={(open) => {
              if (!open) {
                setSelectedImage(null);
              }
            }}
            image={selectedImage ?? ""}
            size="md"
          />
        </div>
      </div>
    </section>
  );
};
