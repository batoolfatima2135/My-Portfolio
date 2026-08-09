import { ScrollTimeline } from "@/components/ScrollTimeline/scroll-timeline";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

export const Experience: React.FC = () => {
  const events = [
    {
      year: "2025",
      title: "Software Engineer",
      subtitle: "Talverse",
      description:
        "Worked on scalable web applications by integrating payment gateways, implementing Keycloak authentication and authorization, and creating interactive animated experiences using React and GSAP.",
    },
    {
      year: "2024",
      title: "Associate Software Engineer",
      subtitle: "Talverse",
      description:
        "Optimized frontend performance through lazy loading and code splitting, achieving 85%+ Lighthouse performance scores. Developed modern applications using React, Next.js, and ASP.NET.",
    },
    {
      year: "2023",
      title: "MERN Stack Developer",
      subtitle: "Native Brains",
      description:
        "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js. Mentored junior developers and contributed to improving code quality through reviews and refactoring.",
    },
    {
      year: "2023",
      title: "Full-Stack Development Program",
      subtitle: "Microverse",
      description:
        "Completed 1300+ hours of intensive full-stack development training, focusing on JavaScript, React, Ruby on Rails, databases, testing, and collaborative software development.",
    },
    {
      year: "2022",
      title: "Started Web Development Career",
      subtitle: "WordPress Developer",
      description:
        "Built and maintained websites using WordPress while developing a strong foundation in frontend technologies and web development practices.",
    },
  ];
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 pt-20 md:pt-50">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Experience
      </ScrollFloat>
      <div>
        <ScrollTimeline
          events={events}
          lineColor="#c084fc"
          progressIndicator={true}
          cardAlignment="alternating"
          revealAnimation="fade"
        />
      </div>
    </section>
  );
};
