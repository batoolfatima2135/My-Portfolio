import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { SkillCard } from "@/components/SkillCard";
import { backendSkills, frontendSkills, toolsSkills } from "@/Data/SkillsData";

export const Skills: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 pt-10 md:pt-30">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Skills
      </ScrollFloat>
      <div className="md:mx-20">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
        >
          Skilled in building modern, responsive, and scalable web applications
          using React, Next.js, TypeScript, C#, ASP.NET, and Node.js.
          Experienced with REST APIs, SQL databases, testing, CI/CD, and Agile
          development practices to deliver high-quality software.
        </ScrollReveal>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard logos={frontendSkills} title="Frontend" />
        <SkillCard logos={backendSkills} title="Backend" />

        <div className="md:col-span-2 flex justify-center">
          <div className="w-full md:w-[calc(60%-1rem)]">
            <SkillCard logos={toolsSkills} title="Tools & DevOps" />
          </div>
        </div>
      </div>
    </section>
  );
};
