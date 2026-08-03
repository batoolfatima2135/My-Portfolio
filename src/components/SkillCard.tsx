import BorderGlow from "./BorderGlow/BorderGlow";
import LogoLoop, { type LogoItem } from "./LogoLoop/LogoLoop";
import ScrollFloat from "./ScrollFloat/ScrollFloat";

interface SkillCardProps {
  logos: LogoItem[];
  title: string;
}

export const SkillCard = ({ logos, title }: SkillCardProps) => {
  return (
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
      <div className="p-8 w-full">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-skills-small"
        >
          {title}
        </ScrollFloat>
        <div className=" w-full relative overflow-hidden md:mt-10 sm:mt-5">
          <LogoLoop
            logos={logos}
            speed={50}
            direction="left"
            logoHeight={40}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Skill Set"
          />
        </div>
      </div>
    </BorderGlow>
  );
};
