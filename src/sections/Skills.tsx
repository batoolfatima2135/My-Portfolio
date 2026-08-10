import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { SkillCard } from "@/components/SkillCard";
import { backendSkills, frontendSkills, toolsSkills } from "@/Data/SkillsData";
import { useTranslation } from "react-i18next";

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 pt-10 md:pt-30">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        {t("skills.title")}
      </ScrollFloat>
      <div className="md:mx-20">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
        >
          {t("skills.description")}
        </ScrollReveal>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard logos={frontendSkills} title={t("skills.frontend")} />
        <SkillCard logos={backendSkills} title={t("skills.backend")} />

        <div className="md:col-span-2 flex justify-center">
          <div className="w-full md:w-[calc(60%-1rem)]">
            <SkillCard logos={toolsSkills} title={t("skills.tools")} />
          </div>
        </div>
      </div>
    </section>
  );
};
