"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card"; 
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import {
  SiReactnative,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiGraphql,
  SiAmazonaws,
  SiRedis,
  SiExpress,
  SiPostgresql,
  SiSpotify,
  SiGooglecloud,
} from "react-icons/si";

// Project Data Type
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
  date: string;
  fullDescription?: string;
}

// Project Data
const projectsData: Project[] = [
  {
    title: "Sipelit",
    description: "Mobile finance app for split bills with receipt scanning and sharing.",
    technologies: ["React Native", "Apollo Client", "MongoDB", "GraphQL", "AWS", "Redis"],
    githubLink: "https://github.com/yourusername/sipelit",
    liveLink: "https://sipelit-app.com",
    image: "/path/to/sipelit-screenshot.png",
    date: "November 2024"
  },
  {
    title: "Kedebook",
    description: "Mobile social media app (Facebook Clone) with comprehensive features.",
    technologies: ["React Native", "Apollo Client", "MongoDB", "GraphQL", "AWS", "Redis"],
    githubLink: "https://github.com/yourusername/kedebook",
    liveLink: "https://kedebook-app.com",
    image: "/path/to/kedebook-screenshot.png",
    date: "October 2024"
  },
  {
    title: "Hmm",
    description: "Web-based e-commerce application (H&M Clone) with infinite scroll.",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Vercel"],
    githubLink: "https://github.com/yourusername/hmm-ecommerce",
    liveLink: "https://hmm-ecommerce.vercel.app",
    image: "/path/to/hmm-screenshot.png",
    date: "October 2024"
  },
  {
    title: "BeatBuddy",
    description: "Web-based social media app for sharing music with Spotify integration.",
    technologies: ["React", "Express", "Redux", "PostgreSQL", "Spotify API"],
    githubLink: "https://github.com/yourusername/beatbuddy",
    liveLink: "https://beatbuddy.app",
    image: "/../../assets/BeatBuddyHome.jpg",
    date: "September 2024"
  },
  {
    title: "Belakangan",
    description: "Real-time chat web application with robust communication features.",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
    githubLink: "https://github.com/yourusername/belakangan",
    liveLink: "https://belakangan-chat.com",
    image: "/path/to/belakangan-screenshot.png",
    date: "September 2024"
  }
];

// Technology Icon Mapping
const TechIcons: { [key: string]: React.ElementType } = {
  "React Native": SiReactnative,
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "MongoDB": SiMongodb,
  "GraphQL": SiGraphql,
  "AWS": SiAmazonaws,
  "Redis": SiRedis,
  "Express": SiExpress,
  "PostgreSQL": SiPostgresql,
  "Spotify API": SiSpotify,
  "Socket.io": SiGooglecloud,
  "Vercel": SiNextdotjs,
  "Apollo Client": SiGraphql,
  "Apollo Server": SiGraphql,
  "Expo": SiReactnative,
  "Google Vision OCR": SiGooglecloud,
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
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden"
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
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                {project.date}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex space-x-2 mb-2">
                {project.technologies.map((tech) => {
                  const TechIcon = TechIcons[tech];
                  return TechIcon ? (
                    <TechIcon 
                      key={tech} 
                      className="text-xl text-neutral-600 dark:text-neutral-300" 
                      title={tech}
                    />
                  ) : null;
                })}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-blue-500"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
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
                <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
                <div className="flex space-x-2 mb-4">
                  {selectedProject.technologies.map((tech) => {
                    const TechIcon = TechIcons[tech];
                    return TechIcon ? (
                      <TechIcon 
                        key={tech} 
                        className="text-xl text-neutral-600 dark:text-neutral-300" 
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
                  { selectedProject.liveLink && (
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