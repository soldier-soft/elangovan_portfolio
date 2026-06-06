import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  MessageCircle,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowDown
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";

import profilePic from "../assets/profile.png";
import resumePdf from "../assets/resume.pdf";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Elangovan_V_Resume.pdf";
    link.click();
  };

  const scrollToSection = (section) => {
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      icon: <Code2 size={22} />,
      title: "15+",
      subtitle: "Projects"
    },
    {
      icon: <Briefcase size={22} />,
      title: "Full Stack",
      subtitle: "Developer"
    },
    {
      icon: <GraduationCap size={22} />,
      title: "8.19",
      subtitle: "CGPA"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Open To Work Badge */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-8"
        >
          <div className="px-5 py-2 rounded-full border border-green-500/40 bg-green-500/10 backdrop-blur-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-sm font-medium">
              Open To Work
            </span>
          </div>
        </motion.div>

        {/* Profile */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150
          }}
          className="relative mx-auto mb-10 w-52 h-52 md:w-64 md:h-64"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-md opacity-70" />

          <img
            src={profilePic}
            alt="Elangovan"
            className="relative w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl"
          />

          <div className="absolute -bottom-2 -right-2 bg-gray-900 rounded-full p-3 border border-green-500">
            <Sparkles size={22} className="text-yellow-400" />
          </div>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center text-5xl md:text-7xl font-extrabold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            ELANGOVAN V
          </span>
        </motion.h1>

        {/* Typing Animation */}

        <div className="text-center text-xl md:text-3xl text-gray-300 font-medium mb-6">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Application Developer",
              2000,
              "Data Analyst",
              2000,
              "AI Enthusiast",
              2000
            ]}
            repeat={Infinity}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto text-center text-gray-400 text-lg leading-relaxed mb-10"
        >
          Full Stack Developer, AI Enthusiast, and Emerging Technology Professional with proven leadership experience as Junior Red Cross Captain, School Pupil Leader, NSS Student Leader, and Class Representative. Experienced in leading teams, managing projects, organizing events, and collaborating effectively in dynamic environments. Passionate about building impactful software solutions while maintaining excellence in athletics, football, and community service.
        </motion.p>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
            >
              <div className="flex justify-center mb-3 text-blue-400">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold flex items-center gap-2 shadow-lg"
          >
            View Projects
            <ChevronRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleDownloadResume}
            className="px-8 py-4 rounded-xl border border-gray-700 bg-white/5 backdrop-blur-lg"
          >
            <div className="flex items-center gap-2">
              <Download size={20} />
              Resume
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-xl border border-purple-500 bg-purple-500/10"
          >
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              Contact
            </div>
          </motion.button>
        </div>

        {/* Social Links */}

        <div className="flex justify-center gap-8 mb-10">
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/soldier-soft"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-white/5 backdrop-blur-xl"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.linkedin.com/in/elangovan-v-598989333/"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-white/5 backdrop-blur-xl"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="mailto:elangovanit5012@gmail.com"
            className="p-4 rounded-full bg-white/5 backdrop-blur-xl"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        {/* Scroll Indicator */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="flex justify-center"
        >
          <ArrowDown className="text-gray-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;