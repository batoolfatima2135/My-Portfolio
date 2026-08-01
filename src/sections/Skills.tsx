import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import { SkillCard } from "@/components/SkillCard";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export const Skills: React.FC = () => {
  const techLogos = [
    {
      node: (
        <div className=" items-center gap-2 text-white">
          <SiReact color="white" />
          <p className="text-sm font-medium">React</p>
        </div>
      ),
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs color="white" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript color="white" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss color="white" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 pt-30">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        SKILLS
      </ScrollFloat>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex">
          <SkillCard logos={techLogos} />
        </div>

        <div className="flex">
          <SkillCard logos={techLogos} />
        </div>
      </div>
    </section>
  );
};
