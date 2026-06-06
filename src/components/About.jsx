import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code2, Database, Cloud } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-6">
            Dynamic and results-driven Full Stack Developer with a strong academic foundation 
            in Information Technology and hands-on experience in web, AI, and IoT application 
            development. Skilled in both front-end and back-end technologies including Java, 
            React, Node.js, and Python. Passionate about solving real-world problems 
            through clean code, robust design, and strategic planning.
          </motion.p>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
              <Code2 className="text-blue-500" />
              <span className="text-sm">Full Stack Dev</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
              <Database className="text-purple-500" />
              <span className="text-sm">Data Analyst</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
              <Cloud className="text-green-500" />
              <span className="text-sm">AI & IoT</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;