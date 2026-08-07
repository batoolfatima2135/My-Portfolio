import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { externalLinks } from "@/Data/ExternalLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "Email",
      href: "mailto:batoolfatima2135@gmail.com",
    },
    {
      name: "LinkedIn",
      href: externalLinks.linkedIn,
    },
    {
      name: "GitHub",
      href: externalLinks.gitHub,
    },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">
      <nav className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-lg font-bold tracking-wide text-white sm:text-xl"
          >
            Batool Fatima Zaidi
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="mailto:batoolfatima2135@gmail.com"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              batoolfatima2135@gmail.com
            </a>

            <a
              href={externalLinks.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href={externalLinks.gitHub}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href={externalLinks.cv}
              target="_blank"
              rel="noreferrer"
              className="flex 
                        items-center 
                        gap-2 
                        rounded-full 
                        border 
                        border-white/20 
                        bg-white/10 
                        px-5 
                        py-2.5 
                        text-sm 
                        font-medium 
                        text-white 
                        transition
                        duration-300
                        hover:scale-[1.02]
                        disabled:opacity-50 hover:bg-white/20"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                mt-4
                overflow-hidden
                rounded-xl
                border border-white/10
                bg-black/30
                backdrop-blur-xl
              "
            >
              <div className="flex flex-col gap-2 p-3">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target={item.name !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                      rounded-lg
                      px-3
                      
                      text-md
                      text-gray-300
                      transition
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.a
                  href={externalLinks.cv}
                  target="_blank"
                  rel="noreferrer"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border border-white/20
                    bg-white/10
                    py-3
                    text-sm
                    font-medium
                    text-white
                    hover:bg-white/20
                  "
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
