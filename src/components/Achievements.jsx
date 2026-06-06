import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Users, Flag, Trophy, ShieldCheck } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "Junior Red Cross Captain",
      description: "Led student volunteer teams and coordinated social service activities, awareness campaigns, and community welfare initiatives.",
      icon: <Users className="w-8 h-8 text-red-500" />
    },
    {
      title: "School Pupil Leader (SPL)",
      description: "Represented students, maintained discipline, coordinated school events, and acted as a bridge between administration and students.",
      icon: <Flag className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Class Representative",
      description: "Managed communication between faculty and students while coordinating academic activities and resolving concerns.",
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />
    },
    {
      title: "NSS Student Leader",
      description: "Organized community outreach programs, volunteer activities, and environmental awareness initiatives.",
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Athlete & Long Distance Runner",
      description: "Demonstrated endurance, discipline, consistency, and commitment through athletic participation.",
      icon: <Trophy className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Football Player",
      description: "Strengthened teamwork, leadership, strategic thinking, and collaborative problem-solving skills.",
      icon: <Award className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Beyond academics and coding, I have consistently taken on leadership roles 
            and participated in community and athletic activities.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gray-900/40 backdrop-blur-xl rounded-[2rem] p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center shadow-xl"
            >
              <div className="p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
