import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Method 1: Using Formspree (easiest)
      const response = await fetch("https://formspree.io/f/mkovnrjg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="bg-dark/50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:ianbeach.villadarez025@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    ianbeach.villadarez025@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaGithub className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold mb-1">GitHub</p>
                  <a
                    href="https://github.com/Nai2425"
                    className="text-gray-400 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Nai2425
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaLinkedin className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/ian-beach-villadarez-873191291/"
                    className="text-gray-400 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/ian-beach-villadarez
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully! 🎉
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
