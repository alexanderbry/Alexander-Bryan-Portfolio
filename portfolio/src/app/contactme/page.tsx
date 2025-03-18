"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { Globe } from "../../components/Globe";

const ContactMePage = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
        {/* Globe Section */}
        <motion.div className="text-black dark:text-white p-4 md:p-8 flex flex-col">
          <div className="w-full h-full">
            <Globe />
          </div>
        </motion.div>

        {/* Work Opportunities Section */}
        <motion.div
          className="p-8 flex flex-col justify-center space-y-6 text-neutral-800 dark:text-neutral-100"
          variants={containerVariants}
        >
          <div className="flex items-center space-x-4">
            <FaLaptop className="text-3xl text-blue-500" />
            <h2 className="text-2xl md:text-3xl font-bold">Reach me out!</h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-200 text-justify">
            I am open to diverse work arrangements, including on-site, remote,
            and hybrid opportunities. My flexibility and adaptability allow me
            to contribute effectively in various work environments.
          </p>

          {/* Contact Information */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <FaMapMarkerAlt className="text-xl text-blue-500" />
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p className="text-xs">Depok, West Java, Indonesia</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="https://wa.me/6285156386466"
                className="flex items-center space-x-4 hover:text-blue-400"
              >
                <FaPhone className="text-xl text-green-500" />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-xs">+62 851-5638-6466</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <Link
                href="mailto:alexunderbrain@gmail.com"
                className="flex items-center space-x-4 hover:text-blue-400"
              >
                <FaEnvelope className="text-xl text-red-500" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-xs break-words">
                    alexunderbrain@gmail.com
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMePage;
