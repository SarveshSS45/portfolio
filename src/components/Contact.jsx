import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const fieldClass =
  "w-full p-3 rounded-lg border border-gray-300 dark:border-white/15 bg-white/70 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 focus:border-transparent transition";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          setError(false);
          form.current.reset();

          setTimeout(() => {
            setSent(false);
          }, 4000);
        },
        () => {
          setSending(false);
          setSent(false);
          setError(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden glass-card w-full max-w-3xl rounded-xl p-8"
      >
        {/* Gradient line on top */}
        <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />

        <h2 className="text-4xl font-bold text-center mb-6 mt-1 gradient-text">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className={fieldClass}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className={fieldClass}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className={fieldClass}
          />

          <div className="flex justify-end">
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={sending ? {} : { scale: 1.05 }}
              whileTap={sending ? {} : { scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-indigo-700 dark:text-cyan-200 bg-white/40 dark:bg-white/5 border border-indigo-500/60 dark:border-cyan-400/60 backdrop-blur-md transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FaPaperPlane className="text-sm" />
              <span>{sending ? "Sending..." : "Send Message"}</span>
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