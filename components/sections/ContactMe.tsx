"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Instagram,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Youtube,
} from "lucide-react";

// Custom Icons
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21.5 2.5L2.5 10.5L9.5 14.5L13.5 21.5L21.5 2.5Z" />
    <path d="M9.5 14.5L14.5 9.5" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mbdazoqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "New Portfolio Message", // Formspree uses _subject
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Handle Formspree specific errors
        setError(
          data.errors?.[0]?.message || "Submission failed. Please try again.",
        );
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "Telegram",
      icon: TelegramIcon,
      url: "https://t.me/aki_project",
      color: "hover:text-sky-500",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      url: "https://tiktok.com/@akiproject7",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@yourusername",
      color: "hover:text-red-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aklilu-derbew-810058352",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/aki.project7",
      color: "hover:text-pink-600",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Jornalistaklilu@gmail.com",
      href: "mailto:Jornalistaklilu@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 99 383 4681",
      href: "tel:+251993834681",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "https://www.google.com/maps/place/Addis+Ababa",
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            Let's work together
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Send me a message and I'll get back to you
            as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                      <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Connect With Me
              </h2>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-all group"
                    aria-label={social.name}
                  >
                    <social.icon
                      className={`w-5 h-5 text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    Currently Available
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Open to freelance opportunities and interesting projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    I'll get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <p className="text-xs text-red-600">{error}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full py-2 bg-transparent border-b border-gray-200 dark:border-gray-800 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className="w-full py-2 bg-transparent border-b border-gray-200 dark:border-gray-800 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="w-full py-2 bg-transparent border-b border-gray-200 dark:border-gray-800 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full py-2 bg-transparent border-b border-gray-200 dark:border-gray-800 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-sm resize-none"
                    />
                  </div>

                  {/* Formspree Honeypot (Anti-Spam) */}
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
