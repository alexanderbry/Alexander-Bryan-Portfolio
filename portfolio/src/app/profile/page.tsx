"use client";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CoreCompetenciesSection } from "@/components/CoreCompetenciesSection";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import MeImage from "../../assets/meSquare.jpg"

const Profile = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem("theme") as 'dark' | 'light';
    
    // Validate and set theme
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
      
      // Apply theme to html element for Tailwind dark mode
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      // Default to dark theme if no valid theme is stored
      setTheme('dark');
      localStorage.setItem("theme", 'dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const themeColors = {
    dark: {
      background: "bg-[#121212]", 
      border: "border-slate-700", 
      skillBg: "bg-[#1E293B]", 
      skillHover: "hover:bg-[#334155]",
      scrollbar: "scrollbar-dark",
      socialIcons: {
        email: "text-gray-400 hover:text-white",
        github: "text-gray-400 hover:text-white",
        linkedin: "text-blue-500 hover:text-blue-400"
      }
    },
    light: {
      background: "bg-gray-50", 
      border: "border-gray-300", 
      skillBg: "bg-gray-200", 
      skillHover: "hover:bg-gray-300",
      scrollbar: "scrollbar-light",
      profileBorder: "border-gray-300",
      socialIcons: {
        email: "text-gray-700 dark:text-gray-300",
        github: "text-gray-700 dark:text-gray-300",
        linkedin: "text-blue-600 dark:text-blue-400"
      }
    },
  };

  const currentTheme = themeColors[theme];

  return (
    <div className={`w-full h-full`}>
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 h-full">
        {/* Sidebar */}
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-4">
            {/* Profile Image */}
            <div className="relative">
              <div className={`w-40 h-40 rounded-full overflow-hidden border-4 border-slate-500,
`}>
                <Image
                  src={MeImage}
                  alt="Profile"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h1 className={`text-2xl font-bold text-neutral-900 dark:text-neutral-100`}>
                Alexander Briyan
              </h1>
              <p className={`text-sm text-neutral-800 dark:text-neutral-200`}>
                Fullstack Software Developer
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-center">
              <div
                className={`flex items-center justify-center space-x-2 text-neutral-800 dark:text-neutral-200`}
              >
                <FaMapMarkerAlt />
                <span>West Java, Indonesia</span>
              </div>
              <div
                className={`flex items-center justify-center space-x-2 text-neutral-800 dark:text-neutral-200`}
              >
                <FaPhone />
                <a href="https://wa.me/6285156386466" className="hover:text-blue-600">+62 851-5638-6466</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="mailto:alexunderbrain@gmail.com"
                className={`hover:scale-110 transition-transform ${currentTheme.socialIcons.email}`}
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://github.com/yourusername"
                className={`hover:scale-110 transition-transform ${currentTheme.socialIcons.github}`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className={`hover:scale-110 transition-transform ${currentTheme.socialIcons.linkedin}`}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className={`
            h-full 
            overflow-y-auto 
            pr-4
            py-16 
            ${currentTheme.scrollbar}
          `}
        >
          <div className="space-y-16">
            {/* Professional Summary */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 text-neutral-900 dark:text-neutral-100`}
              >
                Professional Profile
              </h2>
              <p
                className={`leading-relaxed text-justify text-neutral-800 dark:text-neutral-200`}
              >
                A dedicated Full Stack JavaScript developer with a proven track
                record of building innovative web and mobile applications.
                Skilled in creating scalable solutions using modern
                technologies, with a strong foundation in front-end and back-end
                development.
              </p>
            </section>

            {/* Core Competencies */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 text-neutral-900 dark:text-neutral-100`}
              >
                Key Competencies
              </h2>
              <CoreCompetenciesSection />
            </section>
            {/* Professional Highlights */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 text-neutral-900 dark:text-neutral-100`}
              >
                Professional Highlights
              </h2>
              <ul
                className={`list-disc list-inside space-y-2 text-neutral-800 dark:text-neutral-200`}
              >
                <li>
                  Graduated from Hacktiv8 Full Stack JavaScript Immersive
                  Program
                </li>
                <li>Developed multiple full-stack and mobile applications</li>
                <li>
                  Experienced in project management and cross-functional
                  collaboration
                </li>
                <li>
                  Proficient in modern web development technologies and
                  methodologies
                </li>
              </ul>
            </section>

            {/* Work Experience */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 text-neutral-900 dark:text-neutral-100`}
              >
                Work Experience and Education
              </h2>
              <WorkExperienceSection />
            </section>

            {/* Quick Certifications */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 text-neutral-900 dark:text-neutral-100`}
              >
                Certifications
              </h2>
              <CertificationsSection />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
