import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Baby's Cake Ordering Website",
      description:
        "Developed a web based ordering system with integrated inventory management and real-time stock tracking",
      tech: ["PHP", "MYSQL", "Javascript"],
      github: "#",
      demo: "#",
      image: "/images/babyweb.png",
    },
    {
      id: 2,
      title: "Baby's Cake POS and Inventory Desktop",
      description:
        "Built a comprehensive desktop POS application with integrated inventory management, real time sales tracking, and automated stock updates for a bakery business",
      tech: ["VB.net", "MySQL"],
      github: "#",
      demo: "#",
      image: "/images/babydesktop.png",
    },
    {
      id: 3,
      title: "Baby's Cake Ordering Mobile",
      description:
        "Developed a mobile ordering application for Baby's Cake bakery, featuring product browsing, cart management, order placement, payment integration, and real time order tracking",
      tech: ["Flutter"],
      github: "#",
      demo: "#",
      image: "/images/babymobile.jpg",
    },
    {
      id: 4,
      title: "Telegram Assistant Bot",
      description:
        "Developed a Telegram assistant bot with automated responses.",
      tech: ["PHP", "REST API"],
      github: "#",
      demo: "#",
      image: "/images/telegram.png",
    },
  ];

  return (
    <section id="projects" className="bg-dark/50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my full-stack
            development skills
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden bg-gray-900/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {/* <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Demo</span>
                    </a>
                  </div>*/}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
