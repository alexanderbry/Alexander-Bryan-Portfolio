"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGoogle,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Import all your project images
import Kedebook from "../../assets/Kedebook.png";
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

// Updated Project Data Type
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  images: StaticImageData[];
  date: string;
  fullDescription?: string;
}

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

// Project Carousel Component
const ProjectImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Project image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 
            bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 
            bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
          >
            <FaChevronRight className="text-white" />
          </button>
        </>
      )}

      {/* Image Indicator */}
      {images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 
        flex space-x-2 z-10"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full 
              ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Updated Project Data with Multiple Images
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
    githubLink: "https://github.com/Sipelit",
    liveLink: "https://expo.dev/preview/update?message=Trying%20to%20deploy&updateRuntimeVersion=1.0.0&createdAt=2024-11-06T08%3A02%3A04.909Z&slug=exp&projectId=4d04b731-30a4-4209-9f40-c96014e178cc&group=e53cd7c6-8b92-48b4-a211-44e1466cba62",
    images: [Sipelit],
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
    githubLink: "https://github.com/alexanderbry/kedebook",
    liveLink: "https://expo.dev/preview/update?message=Feat%20Follow%20user&updateRuntimeVersion=1.0.0&createdAt=2024-10-20T09%3A10%3A04.526Z&slug=exp&projectId=d665d112-6e13-4699-a324-4472175f7c0d&group=515fcd22-72c3-4e49-b76e-d6871252aed8",
    images: [Kedebook],
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
    githubLink: "https://github.com/H8-FSJS-P3S6/gc02-alexanderbry",
    liveLink: "https://hmm-nu.vercel.app/",
    images: [HmmHome, HmmProducts, HmmDetail],
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
    githubLink: "https://github.com/alexanderbry/BeatBuddy",
    liveLink: "https://beatbuddy-social.web.app/",
    images: [BeatBuddyHome, BeatBuddyLogin],
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
    githubLink: "https://github.com/AlamSundaGrup",
    liveLink: "https://chat-belakangan.web.app/home",
    images: [BelakanganLogin],
    date: "September 2024",
    fullDescription:
      "A robust real-time communication platform with advanced messaging features and seamless user interactions.",
  },
];

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
                src={project.images[0]}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white dark:bg-neutral-900 rounded-xl max-w-4xl w-full mx-auto my-8 shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Header with Close Button */}
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 text-red-400"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Project Image Carousel */}
              <ProjectImageCarousel images={selectedProject.images} />

              {/* Content Area */}
              <div className="p-8 space-y-6">
                {/* Title and Metadata */}
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-neutral-600 dark:text-neutral-400">
                    <div className="flex space-x-2">
                      {selectedProject.technologies.map((tech) => {
                        const TechIcon = TechIcons[tech]?.icon;
                        const colorClass = TechIcons[tech]?.color;
                        return TechIcon ? (
                          <TechIcon
                            key={tech}
                            className={`text-lg ${colorClass} dark:text-neutral-300`}
                            title={tech}
                          />
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {selectedProject.fullDescription ||
                      selectedProject.description}
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 justify-center">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-500"
                    >
                      <FaGithub size={24} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-500"
                    >
                      <FaExternalLinkAlt size={24} />
                      <span>Live Site</span>
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
