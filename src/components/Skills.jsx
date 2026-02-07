import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaJs,
} from "react-icons/fa";
import { SiVite, SiTailwindcss, SiLaravel, SiMysql } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Jquery", icon: <FaJs /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNode /> },
        { name: "PHP/Laravel", icon: <SiLaravel /> },
        { name: "PHP/Codeigniter", icon: <FaPhp /> },
        { name: "REST API", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiMysql /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Linux", icon: <FaLinux /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <span className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
