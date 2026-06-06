import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  Download,
  Sparkles
} from "lucide-react";
import resumePdf from "../assets/resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);

      const sections = navLinks.map((link) =>
        link.toLowerCase()
      );

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (element) {
          const rect =
            element.getBoundingClientRect();

          if (
            rect.top <= 120 &&
            rect.bottom >= 120
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(
      section.toLowerCase()
    );

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Elangovan_V_Resume.pdf";
    link.click();
  };

  return (
    <>
      {/* Scroll Progress Bar */}

      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100]"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-xl"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              onClick={() =>
                scrollToSection("home")
              }
              className="flex items-center gap-3 cursor-pointer"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Code2 className="w-9 h-9 text-blue-500" />
              </motion.div>

              <div>
                <h1 className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Elangovan
                </h1>

                <p className="text-xs text-gray-400">
                  Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Desktop Nav */}

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const section =
                  link.toLowerCase();

                const active =
                  activeSection === section;

                return (
                  <motion.button
                    key={link}
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() =>
                      scrollToSection(link)
                    }
                    className={`relative px-4 py-2 rounded-xl transition-all ${active
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {link}

                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Right Side */}

            <div className="hidden md:flex items-center gap-4">

              {/* Open To Work */}

              <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

                <span className="text-green-400 text-xs">
                  Open To Work
                </span>
              </div>

              {/* Resume */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={
                  handleResumeDownload
                }
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-medium flex items-center gap-2 shadow-lg"
              >
                <Download size={16} />
                Resume
              </motion.button>
            </div>

            {/* Mobile Menu Button */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
              onClick={() =>
                setIsOpen(!isOpen)
              }
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
            >
              <div className="px-6 py-6 space-y-3">

                <div className="mb-4 flex items-center gap-2 text-green-400">
                  <Sparkles size={16} />
                  Open To Work
                </div>

                {navLinks.map((link) => (
                  <motion.button
                    key={link}
                    whileHover={{
                      x: 8,
                    }}
                    onClick={() =>
                      scrollToSection(link)
                    }
                    className="block w-full text-left py-3 px-4 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    {link}
                  </motion.button>
                ))}

                <button
                  onClick={
                    handleResumeDownload
                  }
                  className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex justify-center items-center gap-2"
                >
                  <Download size={16} />
                  Download Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;