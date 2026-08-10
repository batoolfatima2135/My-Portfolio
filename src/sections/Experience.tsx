import { ScrollTimeline } from "@/components/ScrollTimeline/scroll-timeline";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import { useTranslation } from "react-i18next";

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const events = [
    {
      year: t("experience.events.softwareEngineer.year"),
      title: t("experience.events.softwareEngineer.title"),
      subtitle: t("experience.events.softwareEngineer.subtitle"),
      description: t("experience.events.softwareEngineer.description"),
    },
    {
      year: t("experience.events.associateSoftwareEngineer.year"),
      title: t("experience.events.associateSoftwareEngineer.title"),
      subtitle: t("experience.events.associateSoftwareEngineer.subtitle"),
      description: t("experience.events.associateSoftwareEngineer.description"),
    },
    {
      year: t("experience.events.mernDeveloper.year"),
      title: t("experience.events.mernDeveloper.title"),
      subtitle: t("experience.events.mernDeveloper.subtitle"),
      description: t("experience.events.mernDeveloper.description"),
    },
    {
      year: t("experience.events.microverse.year"),
      title: t("experience.events.microverse.title"),
      subtitle: t("experience.events.microverse.subtitle"),
      description: t("experience.events.microverse.description"),
    },
    {
      year: t("experience.events.wordpress.year"),
      title: t("experience.events.wordpress.title"),
      subtitle: t("experience.events.wordpress.subtitle"),
      description: t("experience.events.wordpress.description"),
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
        {t("experience.title")}
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
