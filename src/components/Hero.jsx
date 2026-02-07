import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const Hero = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/portfolio/files/Villadarez_Resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Ian_Beach_M_Villadarez_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleView = () => {
    window.open("/portfolio/files/Villadarez_Resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-lg mb-2">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Ian Beach M. Villadarez
            </h1>
            <div className="text-2xl md:text-4xl mb-6 h-20">
              <TypeAnimation
                sequence={[
                  "Chatbot Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "Database Specialist",
                  2000,
                  "Automation Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Web developer with 2+ years of professional experience
              specializing in PHP, JavaScript, and modern web technologies.
              Proven track record in building dynamic web applications, RESTful
              APIs, and AI automation solutions. Strong expertise in MVC
              architecture, database design, and problem-solving with a
              continuous learning mindset.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/Nai2425"
                className="p-3 bg-gray-800 hover:bg-primary rounded-lg transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ian-beach-villadarez-873191291/"
                className="p-3 bg-gray-800 hover:bg-primary rounded-lg transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:ianbeach.villadarez025@gmail.com"
                className="p-3 bg-gray-800 hover:bg-primary rounded-lg transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
              >
                Contact Me
              </a>
              <button
                onClick={handleView}
                className="px-8 py-3 border border-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-colors duration-300 flex items-center gap-2"
              >
                <FaEye size={18} />
                View Resume
              </button>
              <button
                onClick={handleDownload}
                className="px-8 py-3 border border-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-colors duration-300 flex items-center gap-2"
              >
                <FaDownload size={18} />
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-72 h-72 bg-darker rounded-full flex items-center justify-center text-6xl gradient-text font-bold">
                <img
                  src="/portfolio/images/profile.png"
                  alt="Villadarez"
                  className="w-80 h-80 rounded-full object-cover border-4"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
