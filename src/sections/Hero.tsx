import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import { useTranslation } from "react-i18next";
import BorderGlow from "@/components/BorderGlow/BorderGlow";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const videoId = i18n.language === "de" ? "4vjnU-Eqb2w" : "8o0T6Xp3pUw";

  return (
    <section className="relative w-full px-6">
      <div className="relative">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl text-center text-white">
            <ScrollFloat
              animationDuration={1.2}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              stagger={0.05}
            >
              {t("hero.greeting1")}
            </ScrollFloat>
            <ScrollFloat
              animationDuration={1.2}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              stagger={0.05}
            >
              {t("hero.greeting2")}
            </ScrollFloat>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl ">
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
              <div className="aspect-video overflow-hidden p-2">
                <iframe
                  key={videoId}
                  className="h-full w-full rounded-xl"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Introduction Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
