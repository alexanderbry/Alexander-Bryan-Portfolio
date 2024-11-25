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
  FaCheck,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="w-full h-full bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid md:grid-cols-2 h-full w-full">
        {/* Contact Information Section */}
        <motion.div
          className="bg-[url('https://i.pinimg.com/736x/5b/e6/c5/5be6c573577a0c8a0d84e6bc56195128.jpg')] text-white p-8 flex flex-col justify-end"
          variants={itemVariants}
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
              <motion.div
                className="flex items-center space-x-4 sm:col-span-1"
                variants={itemVariants}
              >
                <FaMapMarkerAlt className="text-xl min-w-[32px]" />
                <div>
                  <p className="text-[12px] font-semibold">Location</p>
                  <p className="text-[10px]">
                    West Java, Indonesia
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
              >
                <Link href="https://wa.me/6285156386466" className="flex items-center space-x-4 sm:col-span-1 hover:text-blue-400">
                <FaPhone className="text-xl min-w-[32px]" />
                <div>
                  <p className="text-[12px] font-semibold">Phone</p>
                  <p className="text-[10px]">+62 851-5638-6466</p>
                </div>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 sm:col-span-1"
                variants={itemVariants}
              >
                <Link href="mailto:alexunderbrain@gmail.com" className="flex items-center space-x-4 sm:col-span-1 hover:text-blue-400">
                <FaEnvelope className="text-xl min-w-[32px]" />
                <div>
                  <p className="text-[12px] font-semibold">Email</p>
                  <p className="text-[10px] break-words">
                    alexunderbrain@gmail.com
                  </p>
                </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-8 space-y-6 my-auto"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Send a Message
          </h2>

          {/* Name Input */}
          <motion.div className="relative" variants={itemVariants}>
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
          </motion.div>

          {/* Email Input */}
          <motion.div className="relative" variants={itemVariants}>
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
          </motion.div>

          {/* Message Textarea */}
          <motion.div className="relative" variants={itemVariants}>
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
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || isSubmitted}
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
                transition 
                duration-300
                ${
                  isSubmitted
                    ? "bg-green-500"
                    : isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }
              `}
            variants={itemVariants}
          >
            {isSubmitted ? (
              <>
                <FaCheck className="mr-2" />
                <span>Message Sent!</span>
              </>
            ) : isSubmitting ? (
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
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactMePage;
