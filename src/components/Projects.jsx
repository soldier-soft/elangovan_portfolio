import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Brain, Coffee, Database, Terminal, Layout, Briefcase, ArrowRight, ShieldCheck, Eye, Activity, HeartPulse, Leaf, Laptop } from 'lucide-react';

import kneeImg from '../assets/projects/knee.png';
import smartEyeImg from '../assets/projects/smarteye.png';
import plantImg from '../assets/projects/plant.png';
import spyUsbImg from '../assets/projects/spyusb.png';
import deepfakeImg from '../assets/projects/deepfake.png';
import healthAidImg from '../assets/projects/healthaid.png';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const projects = [
    {
      title: "Knee Osteoarthritis Detection",
      tech: "Python, AI, Medical Imaging",
      description: "Advanced AI system for identifying knee osteoarthritis from X-ray images. Provides detailed analysis of symptoms, prevention strategies, and diagnostic insights with high accuracy.",
      image: kneeImg,
      icon: <Activity className="w-6 h-6 text-blue-500" />,
      github: "https://github.com/soldier-soft/knee-osteoarthritis",
      tags: ["Healthcare", "AI", "X-Ray"],
    },
    {
      title: "SMART_EYE Vision Assistant",
      tech: "Python, AI, IoT, Computer Vision",
      description: "A comprehensive aid for visually impaired users. Features obstacle detection, facial recognition, currency identification, and indoor/outdoor navigation with integrated digital contact management.",
      image: smartEyeImg,
      icon: <Eye className="w-6 h-6 text-purple-500" />,
      github: "https://github.com/soldier-soft/SMART_EYE",
      tags: ["IoT", "Accessibility", "Computer Vision"],
    },
    {
      title: "Plant Disease Analysis AI",
      tech: "Deep Learning, TensorFlow, Keras",
      description: "Deep learning project achieving 99% accuracy in identifying plant diseases. Offers symptoms analysis, prevention methods, and treatment solutions through automated leaf image scanning.",
      image: plantImg,
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      github: "https://github.com/soldier-soft/-Plant-Disease-Detection-Using-Deep-Learning",
      tags: ["Agriculture", "Deep Learning", "99% Accuracy"],
    },
    {
      title: "Spy USB Security Monitor",
      tech: "Cybersecurity, Python, System Monitoring",
      description: "Security application that monitors USB file operations (copy, move, delete). Protects against malicious transfers and unauthorized data access with real-time alerts and activity logging.",
      image: spyUsbImg,
      icon: <Laptop className="w-6 h-6 text-yellow-500" />,
      github: "https://github.com/soldier-soft/spy_2",
      tags: ["Security", "Monitoring", "USB"],
    },
    {
      title: "Deepfake Detection Analysis",
      tech: "AI/ML, Data Science, rPPG",
      description: "Applies rPPG signal analysis and AI models to detect deepfake videos and live streams. Provides real-time authenticity scores by analyzing physiological signals and facial artifacts.",
      image: deepfakeImg,
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      github: "https://github.com/soldier-soft/face_detection",
      tags: ["Deepfake Detection", "rPPG", "AI/ML"],
    },
    {
      title: "Health Aid Live AI Doctor",
      tech: "Healthcare AI, Data Science, Full Stack",
      description: "A comprehensive AI medical assistant for diagnoses and case studies. Includes a live doctor consultation booking system with video call support and extensive medical dataset integration.",
      image: healthAidImg,
      icon: <HeartPulse className="w-6 h-6 text-pink-500" />,
      github: "https://github.com/soldier-soft/health-aid-live",
      tags: ["Health Tech", "AI Doctor", "Consultation"],
    },
  ];

  const liveProjects = [
    {
      title: "Sri Chakra Real Estate",
      category: "Real Estate Platform",
      link: "https://srichakrarealestate.com/",
      description: "A modern real estate website designed to showcase DTCP-approved plots, property listings, project details, location advantages, and lead generation for potential buyers. The platform focuses on trust, transparency, and conversion-oriented design.",
      features: ["Property listings", "Project showcase pages", "Lead generation forms", "Mobile responsive design", "SEO-friendly structure", "Enquiry management"],
      contributions: ["Frontend Development", "UI/UX Design", "Responsive Layout", "Website Optimization", "Deployment & Maintenance"],
      tech: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Hosting"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Ziters Empire",
      category: "Digital Solutions Company",
      link: "https://www.zitersempire.com/",
      description: "A professional business website representing a technology and digital solutions company. The platform showcases software development, web & mobile applications, digital marketing, and student project solutions.",
      features: ["Service showcase", "Company portfolio", "Client enquiry system", "Modern animations", "Professional UI/UX", "Mobile-first design"],
      contributions: ["Full Stack Development", "UI Design", "Website Architecture", "SEO Optimization", "Deployment"],
      tech: ["React.js", "Node.js", "JavaScript", "Tailwind CSS", "REST APIs"],
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "Gadgetrix Hub",
      category: "Tech & Product Reviews",
      link: "https://gadgetrixhub.com/",
      description: "A technology-focused content platform providing gadget reviews, AI tools, smartphone recommendations, laptop comparisons, gaming content, SaaS tools, and affiliate marketing integration.",
      features: ["Tech product reviews", "AI tools directory", "Smartphone comparison", "Laptop recommendations", "SEO-optimized blog", "Affiliate integration"],
      contributions: ["Website Development", "Content Management", "SEO Implementation", "Performance Optimization", "Affiliate Integration"],
      tech: ["WordPress / CMS", "SEO", "Google Analytics", "Affiliate Marketing", "Content Strategy"],
      color: "from-emerald-600 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                  {project.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
                <p className="text-blue-400 text-sm mb-4 font-semibold tracking-wide uppercase">{project.tech}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Applications Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Live Applications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Real-world platforms I've designed and developed for clients, focusing on 
              high performance, scalability, and exceptional user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {liveProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] border border-gray-800 overflow-hidden hover:border-gray-700 transition-all group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-10 pointer-events-none blur-3xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                
                <div className="p-8 md:p-12 h-full flex flex-col md:flex-row gap-10">
                  {/* Info Section */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                      <span className={`px-4 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-[10px] font-black uppercase tracking-[0.2em]`}>
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black">{project.title}</h3>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <h4 className="text-white font-bold flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((f, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-white font-bold flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          My Contributions
                        </h4>
                        <ul className="space-y-2">
                          {project.contributions.map((c, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Tech Section */}
                  <div className="md:w-72 flex flex-col justify-between gap-8 py-2">
                    <div className="space-y-4">
                        <h4 className="text-gray-300 text-xs font-bold uppercase tracking-widest px-1">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-gray-300">
                              {t}
                            </span>
                          ))}
                        </div>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-5 rounded-[1.25rem] bg-gradient-to-r ${project.color} text-white font-black text-center shadow-2xl flex items-center justify-center gap-3 group/btn transition-all`}
                    >
                      Visit Website
                      <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;