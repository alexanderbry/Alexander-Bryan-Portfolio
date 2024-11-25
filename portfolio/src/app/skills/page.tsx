"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiSequelize,
  SiPostman,
  SiExpo,
  SiAmazon,
  SiFirebase,
  SiSocketdotio,
  SiGit,
  SiJest,
  SiRedux,
  SiTailwindcss,
  SiRedis,
  SiSpotify,
  SiGooglecloud,
  SiAxios,
  SiVercel,
} from "react-icons/si";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";

// Skill Categories
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      {
        title: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      {
        title: "React.js",
        icon: <SiReact className="text-blue-400" />,
      },
      {
        title: "React Native",
        icon: <SiReact className="text-blue-400" />,
      },
      {
        title: "React Router",
        icon: <SiReactrouter className="text-red-500" />,
      },
      {
        title: "Redux",
        icon: <SiRedux className="text-purple-600" />,
      },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-500" />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        title: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />,
      },
      {
        title: "Express.js",
        icon: <SiExpress className="text-gray-700" />,
      },
      {
        title: "Apollo",
        icon: <SiGraphql className="text-pink-500" />,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        title: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-600" />,
      },
      {
        title: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
      },
      {
        title: "Sequelize",
        icon: <SiSequelize className="text-blue-400" />,
      },
      {
        title: "Redis",
        icon: <SiRedis className="text-red-500" />,
      },
    ],
  },
  {
    category: "APIs & External Services",
    skills: [
      {
        title: "GraphQL",
        icon: <SiGraphql className="text-pink-500" />,
      },
      {
        title: "Spotify API",
        icon: <SiSpotify className="text-green-500" />,
      },
      {
        title: "Google OAuth",
        icon: <FaGoogle className="text-blue-500" />,
      },
      {
        title: "Google Vision OCR",
        icon: <SiGooglecloud className="text-blue-400" />,
      },
      {
        title: "Gemini AI",
        icon: <RiOpenaiFill className="text-purple-500" />,
      },
      {
        title: "Axios",
        icon: <SiAxios className="text-purple-600" />,
      },
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      {
        title: "AWS",
        icon: <SiAmazon className="text-yellow-400" />,
      },
      {
        title: "Vercel",
        icon: <SiVercel className="text-black dark:text-white" />,
      },
      {
        title: "Firebase",
        icon: <SiFirebase className="text-orange-500" />,
      },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      {
        title: "Git",
        icon: <SiGit className="text-orange-500" />,
      },
      {
        title: "Github",
        icon: <FaGithub className="text-black dark:text-white" />,
      },
      {
        title: "Socket.io",
        icon: <SiSocketdotio className="text-black dark:text-white" />,
      },
      {
        title: "Jest",
        icon: <SiJest className="text-red-500" />,
      },
      {
        title: "Postman",
        icon: <SiPostman className="text-orange-500" />,
      },
      {
        title: "Expo",
        icon: <SiExpo className="text-indigo-500" />,
      },
    ],
  },
];

// Container Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// Category Card Variants
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

// Skill Item Variants
const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <motion.div
      className="container mx-auto px-4 py-4 h-full max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 group">
            <SiJavascript
              className="
          text-yellow-400 
          text-xl 
          transition-transform 
          group-hover:scale-110
        "
            />
            <span className="text-sm sm:text-base font-bold text-neutral-700 dark:text-neutral-300 group-hover:text-yellow-500 transition-colors">
              JavaScript
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <SiTypescript
              className="
          text-blue-500 
          text-xl 
          transition-transform 
          group-hover:scale-110
        "
            />
            <span className="text-sm sm:text-base font-bold text-neutral-700 dark:text-neutral-300 group-hover:text-blue-500 transition-colors">
              TypeScript
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.category}
            className={`
                bg-white dark:bg-neutral-800 
                rounded-xl 
                shadow-md 
                p-6 
                transition-all 
                duration-300
                relative
                ${
                  activeCategory === category.category
                    ? "ring-2 ring-blue-500"
                    : "hover:ring-1 hover:ring-blue-300"
                }
              `}
            variants={cardVariants}
            whileHover="hover"
            onClick={() =>
              setActiveCategory(
                activeCategory === category.category ? null : category.category
              )
            }
          >
            <motion.h3
              className="text-xl font-semibold mb-4 border-b pb-2 
                dark:border-neutral-700 
                flex justify-center items-center"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {category.category}
            </motion.h3>

            <AnimatePresence>
              {(activeCategory === category.category || !activeCategory) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  className="grid grid-cols-2 gap-4"
                >
                  {category.skills.map((feature) => (
                    <motion.div
                      key={feature.title}
                      className="
                      flex 
                      items-center 
                      space-x-2 
                      sm:space-x-3 
                      p-1 
                      sm:p-2 
                      rounded-lg 
                      hover:bg-neutral-100 
                      dark:hover:bg-neutral-700 
                      transition-colors 
                      group
                      w-full
                      overflow-visible"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="
                        text-base 
                        sm:text-lg 
                        md:text-xl 
                        lg:text-2xl 
                        text-neutral-600 
                        dark:text-neutral-300 
                        group-hover:text-blue-500 
                        transition-colors
                        flex-shrink-0"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: -10 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h4
                        className="
                        text-xs 
                        sm:text-sm 
                        md:text-sm 
                        lg:text-md 
                        xl:text-md 
                        2xl:text-md
                        font-medium 
                        text-neutral-800 
                        dark:text-neutral-200 
                        whitespace-normal
                        break-words
                        flex-grow
                        min-w-0"
                      >
                        {feature.title}
                      </h4>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsPage;
