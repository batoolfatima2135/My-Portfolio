import ProfileCard from "@/components/ProfileCard/ProfileCard";
import ProfileCardMobile from "@/components/ProfileCard/ProfileCardMobile";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { useTranslation } from "react-i18next";

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen md:mt-10">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="mb-4"
      >
        {t("about.title")}
      </ScrollFloat>
      <section className="relative flex flex-col md:flex-row w-full container ">
        <div className="w-full md:w-1/3  text-white flex justify-center align-middle">
          <ProfileCard
            avatarUrl="/batool.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            className="hidden md:block"
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/iconpattern.png"
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
          <ProfileCardMobile
            avatarUrl="/batool.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/iconpattern.png"
            className="md:hidden"
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>

        <div className="w-full p-4 md:w-2/3 text-white flex justify-center items-center  ">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
          >
            {t("about.description")}
          </ScrollReveal>
        </div>
      </section>
    </section>
  );
};
