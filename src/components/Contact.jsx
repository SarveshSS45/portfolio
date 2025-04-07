import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setError(false);
          form.current.reset();

          setTimeout(() => {
            setSent(false);
          }, 4000);
        },
        () => {
          setSent(false);
          setError(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-900 p-8 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 
                   transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 
                   hover:border-indigo-400 hover:shadow-indigo-500/40"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-end">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Send Message
            </motion.button>
          </div>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-700 dark:text-green-400 mt-4 text-center font-medium"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-600 mt-4 text-center font-medium"
              >
                ❌ Failed to send message. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;