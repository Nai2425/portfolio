import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "SlashdotPH",
      position: "Junior Developer",
      duration: "July 2024 – February 2026 ",
      location: "Pasig City",
      description: [
        "Developed chatbots across different channels such as Facebook, Telegram, Viber, and WhatsApp.",
        "Designed and implemented RESTful APIs with rate limiting and security best practices.",
        "Optimized database queries and API performance through load testing with Locust. ",
      ],
      technologies: [
        "Codeigniter 3 and 4",
        "Node.js",
        "Laravel",
        "MySQL",
        "REST API",
      ],
    },
    {
      id: 2,
      company: "Negosyolab PH ",
      position: "Web Developer",
      duration: "August 2023 – July  2024 ",
      location: "Tandang Sora",
      description: [
        "Developed responsive web applications using PHP, JavaScript, HTML, and CSS. ",
        "Built and maintained back-end services and database structures",
        "Optimized database queries and improved application performance",
      ],
      technologies: ["Codeigniter 3 and 4", "Jquery", "MySQL"],
    },
    {
      id: 3,
      company: "Rising Red Dragon Imexco ",
      position: "Technical Support",
      duration: "August 2020 – September 2021  ",
      location: "Tandang Sora",
      description: [
        "Provided technical support and troubleshooting for hardware and software issues.  ",
        "Assisted in system upgrades and maintenance procedures. ",
      ],
      technologies: ["Hardware Troubleshooting", "Software Troubleshooting"],
    },
  ];

  return (
    <section id="experience" className="bg-dark/50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? "md:ml-0 md:mr-auto md:pr-12"
                        : "md:ml-auto md:mr-0 md:pl-12"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-darker z-10 mt-6" />

                    {/* Experience Card */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 ml-8 md:ml-0">
                      {/* Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FaBriefcase className="text-primary text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-semibold">
                            {exp.position}
                          </p>
                        </div>
                      </div>

                      {/* Duration & Location */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-secondary" />
                          <span>{exp.duration}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
