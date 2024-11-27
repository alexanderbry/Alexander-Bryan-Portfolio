"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FaGithub, FaExternalLinkAlt, FaGoogle } from "react-icons/fa";

import Sipelit from "../../assets/Sipelit.png";
import HmmDetail from "../../assets/HmmDetail.jpg";
import HmmProducts from "../../assets/HmmProducts.jpg";
import HmmHome from "../../assets/HmmHome.jpg";
import BelakanganLogin from "../../assets/BelakanganLogin.jpg";
import BeatBuddyLogin from "../../assets/BeatBuddyLogin.jpg";
import BeatBuddyHome from "../../assets/BeatBuddyHome.jpg";
import Image, { StaticImageData } from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiGraphql,
  SiAmazon,
  SiRedis,
  SiExpress,
  SiPostgresql,
  SiSpotify,
  SiGooglecloud,
  SiApollographql,
  SiVercel,
  SiSequelize,
  SiAxios,
  SiExpo,
  SiFirebase,
} from "react-icons/si";

// Project Data Type
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: StaticImageData | string;
  date: string;
  fullDescription?: string;
}

// Project Data
const projectsData: Project[] = [
  {
    title: "Sipelit",
    description: "Mobile finance app for split bills, scan and share receipt.",
    technologies: [
      "React Native",
      "Apollo Server",
      "Expo",
      "MongoDB",
      "GraphQL",
      "AWS",
      "Redis",
      "Google Vision OCR",
      "React Native View Shot",
    ],
    githubLink: "https://github.com/yourusername/sipelit",
    liveLink: "https://sipelit-app.com",
    image: "",
    date: "November 2024",
    fullDescription:
      "A comprehensive mobile finance application that enables users to split bills, scan receipts, and share expenses seamlessly using cutting-edge mobile technologies.",
  },
  {
    title: "Kedebook",
    description: "A mobile social media app (Facebook Clone).",
    technologies: [
      "React Native",
      "Apollo Server",
      "Expo",
      "MongoDB",
      "GraphQL",
      "AWS",
      "Redis",
    ],
    githubLink: "https://github.com/yourusername/kedebook",
    liveLink: "https://kedebook-app.com",
    image: "",
    date: "October 2024",
    fullDescription:
      "A feature-rich mobile social media application replicating core Facebook functionalities with modern mobile development practices.",
  },
  {
    title: "Hmm",
    description: "A web-based e-commerce app (H&M Clone) with infinite scroll.",
    technologies: [
      "Next.js",
      "GraphQL",
      "MongoDB",
      "Infinite Scroll",
      "Vercel",
    ],
    githubLink: "https://github.com/yourusername/hmm-ecommerce",
    liveLink: "https://hmm-ecommerce.vercel.app",
    image: HmmHome,
    date: "October 2024",
    fullDescription:
      "An e-commerce web application mimicking H&M's design and functionality, featuring smooth infinite scrolling and modern web technologies.",
  },
  {
    title: "BeatBuddy",
    description:
      "A web-based social media app for sharing music with Spotify integration.",
    technologies: [
      "React",
      "Express",
      "Redux",
      "PostgreSQL",
      "Sequelize",
      "Axios",
      "Spotify API",
      "Google OAuth",
      "Gemini AI",
      "Firebase",
    ],
    githubLink: "https://github.com/yourusername/beatbuddy",
    liveLink: "https://beatbuddy.app",
    image: BeatBuddyHome,
    date: "September 2024",
    fullDescription:
      "A music-centric social media platform that integrates Spotify, allows music sharing, and leverages AI-powered recommendations.",
  },
  {
    title: "Belakangan",
    description: "A web-based real-time chat application.",
    technologies: [
      "React",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Socket.io",
      "Axios",
      "Firebase",
    ],
    githubLink: "https://github.com/yourusername/belakangan",
    liveLink: "https://belakangan-chat.com",
    image: BelakanganLogin,
    date: "September 2024",
    fullDescription:
      "A robust real-time communication platform with advanced messaging features and seamless user interactions.",
  },
];

// Technology Icon Mapping
const TechIcons: { [key: string]: { icon: React.ElementType; color: string } } =
  {
    "React Native": { icon: SiReact, color: "text-blue-400" },
    "Next.js": { icon: SiNextdotjs, color: "text-black dark:text-white" },
    React: { icon: SiReact, color: "text-blue-500" },
    MongoDB: { icon: SiMongodb, color: "text-green-600" },
    GraphQL: { icon: SiGraphql, color: "text-pink-500" },
    AWS: { icon: SiAmazon, color: "text-yellow-500" },
    Redis: { icon: SiRedis, color: "text-red-500" },
    Express: { icon: SiExpress, color: "text-gray-700" },
    PostgreSQL: { icon: SiPostgresql, color: "text-blue-600" },
    "Spotify API": { icon: SiSpotify, color: "text-green-500" },
    "Socket.io": { icon: SiGooglecloud, color: "text-blue-400" },
    Vercel: { icon: SiVercel, color: "text-black dark:text-white" },
    "Apollo Client": { icon: SiApollographql, color: "text-gray-700" },
    "Apollo Server": { icon: SiApollographql, color: "text-gray-700" },
    Expo: { icon: SiExpo, color: "text-indigo-500" },
    "Google Vision OCR": { icon: SiGooglecloud, color: "text-blue-400" },
    "Google OAuth": { icon: FaGoogle, color: "text-blue-400" },
    "Gemini AI": { icon: SiGooglecloud, color: "text-blue-400" },
    Sequelize: { icon: SiSequelize, color: "text-blue-700" },
    Axios: { icon: SiAxios, color: "text-purple-500" },
    Firebase: { icon: SiFirebase, color: "text-orange-500" },
  };

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => {
    setSelectedProject(null);
  });

  return (
    <motion.div
      className="container mx-auto px-4 py-8 max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Recent Projects
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute flex top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-100 hover:text-blue-300"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-100 hover:text-blue-300"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 h-12">
                {project.description}
              </p>
              <div className="flex flex-wrap space-x-3 mb-2">
                {project.technologies.map((tech) => {
                  const TechIcon = TechIcons[tech]?.icon;
                  const colorClass = TechIcons[tech]?.color;
                  return TechIcon ? (
                    <TechIcon
                      key={tech}
                      className={`text-xl ${colorClass} dark:text-neutral-300`}
                      title={tech}
                    />
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white dark:bg-neutral-800 rounded-xl max-w-2xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-neutral-600 hover:text-red-500"
              >
                Close
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {selectedProject.fullDescription ||
                    selectedProject.description}
                </p>
                <div className="flex space-x-2 mb-4">
                  {selectedProject.technologies.map((tech) => {
                    const TechIcon = TechIcons[tech]?.icon;
                    const colorClass = TechIcons[tech]?.color;
                    return TechIcon ? (
                      <TechIcon
                        key={tech}
                        className={`text-xl ${colorClass} dark:text-neutral-300`}
                        title={tech}
                      />
                    ) : null;
                  })}
                </div>
                <div className="flex justify-between">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-blue-500"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-blue-500"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsPage;
