import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { homeData } from "../data/data";

const Home = () => {
  const { name, roles, bio, resumeUrl, socialLinks, profileImage } = homeData;

  const [currentRole, setCurrentRole] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];

      if (!isDeleting && currentRole.length < fullRole.length) {
        setCurrentRole(fullRole.substring(0, currentRole.length + 1));
        setTypingSpeed(100);
      }

      if (isDeleting && currentRole.length > 0) {
        setCurrentRole(fullRole.substring(0, currentRole.length - 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && currentRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, currentRoleIndex, isDeleting, typingSpeed, roles]);

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden min-h-screen bg-gray-100 dark:bg-gray-900 flex items-start justify-center pt-24 md:pt-32 pb-24 md:pb-0 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-cyan-400/20 dark:bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:pl-16 lg:pl-24">
        {/* Left Side - Introduction */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1 max-w-xl mx-auto md:mx-0">
              Hi, I'm <span className="gradient-text">{name}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 max-w-xl mx-auto md:mx-0">
              <span className="font-semibold text-indigo-600 dark:text-cyan-300">
                {currentRole}
              </span>
              <span className="animate-blink text-cyan-500">|</span>
            </p>
          </div>

          <p className="text-base text-gray-700 dark:text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            {bio}
          </p>

          {/* Social Links and Resume Button */}
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover text-gray-700 dark:text-white hover:scale-110 p-2 rounded-full"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </a>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-2 rounded-md font-medium text-indigo-700 dark:text-cyan-200 bg-white/40 dark:bg-white/5 border border-indigo-500/60 dark:border-cyan-400/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40"
            >
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side - Photo (cut-out on gradient circle) */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-64 md:w-80 mt-12 md:mt-0">
            {/* Circle behind the person */}
            <div className="aspect-square w-full rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 border border-white/40 dark:border-white/10 shadow-2xl shadow-indigo-500/30 backdrop-blur-sm" />

            {/* Person: clip region extends upward, bottom follows the circle curve */}
            <div
              className="absolute inset-0"
              style={{ clipPath: "inset(-50% 0 0 0 round 0 0 9999px 9999px)" }}
            >
              <img
                src={profileImage}
                alt={name}
                className="absolute bottom-0 left-0 w-full h-auto max-w-none"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;