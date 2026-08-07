import { Download, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { ContactCard } from "@/components/Contact/ContactCard";
import { ContactForm } from "@/components/Contact/ContactForm";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { externalLinks } from "@/Data/ExternalLinks";

export default function Contact() {
  return (
    <section className="relative  px-3 py-16 sm:px-0 sm:py-20">
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            textClassName="text-skills-small"
          >
            Let's Build Something Great!
          </ScrollFloat>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
          >
            Have a project, opportunity, or just want to connect? I would love
            to hear from you.
          </ScrollReveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-4 ">
            <ContactCard
              icon={<Mail />}
              title="Email"
              value="batoolFatima2135@gmail.com"
              href="mailto:batoolFatima2135@gmail.com"
            />

            <ContactCard
              icon={<IoLogoLinkedin />}
              title="LinkedIn"
              value="linkedin.com/batoolfatima2135"
              href={externalLinks.linkedIn}
            />

            <ContactCard
              icon={<SiGithub />}
              title="GitHub"
              value="github.com/batoolfatima2135"
              href={externalLinks.gitHub}
            />
            <ContactCard
              icon={<Download />}
              title="Resume"
              value="Download my CV"
              href={externalLinks.cv}
            />
            <ContactCard
              icon={<MapPin />}
              title="Location"
              value="Hamburg, Germany"
            />
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
