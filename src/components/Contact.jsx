import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "5dcaabe9-de2f-4886-a177-b6c6f4dc388d",

            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,

            from_name: "Elangovan Portfolio",

            botcheck: false,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(result.message || "Failed to send message.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      text: "Chennai, Tamil Nadu",
      href: null,
    },
    {
      icon: <Phone />,
      text: "+91 6381373309",
      href: "tel:+916381373309",
    },
    {
      icon: <Mail />,
      text: "elangovanit5012@gmail.com",
      href: "mailto:elangovanit5012@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Github />,
      href: "https://github.com/soldier-soft",
      label: "GitHub",
    },
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/elangovan-v-598989333/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project, internship opportunity, or collaboration
            idea? Feel free to contact me.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-5"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Section */}

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-800 p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                      {info.icon}
                    </div>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-blue-400 transition"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">
                        {info.text}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-800">
                <h4 className="font-semibold text-lg mb-5">
                  Connect With Me
                </h4>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -5,
                        scale: 1.1,
                      }}
                      className="p-4 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-800 p-8"
          >
            <h3 className="text-2xl font-bold mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 outline-none"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 outline-none"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 outline-none"
              />

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white resize-none focus:border-blue-500 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>
                    Thank you! Your message has been sent
                    successfully.
                  </span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>{error}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;