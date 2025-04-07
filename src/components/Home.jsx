import { useState, useEffect } from 'react';
import { homeData } from '../data/data';

const Home = () => {
  const { name, roles, bio, resumeUrl, socialLinks, profileImage } = homeData;

  const [currentRole, setCurrentRole] = useState('');
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

      if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, currentRoleIndex, isDeleting, typingSpeed, roles]);

  return (
    <section
      id="home"
      className="h-screen bg-gray-100 dark:bg-gray-900 flex items-start justify-center pt-24 md:pt-32 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:pl-16 lg:pl-24">
        {/* Left Side - Introduction */}
        <div className="md:w-1/2 text-center md:text-left space-y-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 max-w-xl mx-auto md:mx-0">
              Hi, I'm {name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 max-w-xl mx-auto md:mx-0">
              <span className="font-semibold">{currentRole}</span>
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
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
                className={`bg-white dark:bg-gray-800 text-gray-700 dark:text-white transition-transform duration-300 hover:scale-110 shadow-md hover:shadow-indigo-400/70 p-2 rounded-full`}
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
              className="relative overflow-hidden text-black font-medium py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center group shadow-lg shadow-blue-500/50 ring-4 ring-opacity-50 ring-indigo-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: 'oklch(0.985 0.002 247.839)' }}
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform group-hover:scale-110 transition-all duration-300 rounded-md blur-md"></div>
            </a>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl shadow-cyan-500/50">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;