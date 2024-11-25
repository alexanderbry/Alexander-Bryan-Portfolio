"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form and show success
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const contactInfoItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container mx-auto max-w-5xl bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Contact Information Section */}
        <motion.div
          className="space-y-6 bg-blue-50 dark:bg-neutral-900 p-6 rounded-xl"
          variants={contactInfoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6"
            variants={contactInfoItemVariants}
          >
            Get In Touch
          </motion.h2>

          <motion.div
            className="flex items-center space-x-4"
            variants={contactInfoItemVariants}
          >
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <div>
              <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                Location
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Depok, Indonesia
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            variants={contactInfoItemVariants}
          >
            <FaPhone className="text-blue-500 text-2xl" />
            <div>
              <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                Phone
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                +6285156386466
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            variants={contactInfoItemVariants}
          >
            <FaEnvelope className="text-blue-500 text-2xl" />
            <div>
              <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                Email
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                alexunderbrain@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Send a Message
          </h2>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-blue-500" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-blue-500" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
              <FaCommentDots className="text-blue-500" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
                w-full 
                py-3 
                rounded-lg 
                text-white 
                font-semibold 
                flex 
                items-center 
                justify-center 
                space-x-2
                ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }
                transition 
                duration-300
              `}
          >
            {isSubmitting ? (
              <>
                <span>Sending...</span>
                <div className="animate-spin">🔄</div>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <FaPaperPlane />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactMePage;
