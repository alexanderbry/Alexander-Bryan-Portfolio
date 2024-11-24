"use client";
import { CertificationsSection } from "@/components/ui/CertificationsSection";
import { CoreCompetenciesSection } from "@/components/ui/CoreCompetenciesSection";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const WebDeveloperProfile = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
  }, []);

  const themeColors = {
    dark: {
      background: "bg-transparent",
      text: "text-white",
      secondaryText: "text-slate-300",
      border: "border-slate-700",
      skillBg: "bg-[#334155]",
      skillHover: "hover:bg-[#475569]",
      scrollbar: "scrollbar-dark",
    },
    light: {
      background: "bg-transparent",
      text: "text-black",
      secondaryText: "text-gray-700",
      border: "border-gray-300",
      skillBg: "bg-gray-200",
      skillHover: "hover:bg-gray-300",
      scrollbar: "scrollbar-light",
    },
  };

  const currentTheme = themeColors[theme];

  return (
    <div className={`w-full h-full ${currentTheme.background}`}>
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 h-full">
        {/* Sidebar */}
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-4">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-600">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h1 className={`text-2xl font-bold ${currentTheme.text}`}>
                Alexander Briyan
              </h1>
              <p className={`text-sm ${currentTheme.secondaryText}`}>
                Fullstack Software Developer
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-center">
              <div
                className={`flex items-center justify-center space-x-2 ${currentTheme.secondaryText}`}
              >
                <FaMapMarkerAlt />
                <span>Depok, Indonesia</span>
              </div>
              <div
                className={`flex items-center justify-center space-x-2 ${currentTheme.secondaryText}`}
              >
                <FaPhone />
                <span>+6285156386466</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="mailto:alexunderbrain@gmail.com"
                className={`hover:scale-110 transition-transform ${currentTheme.secondaryText} hover:text-blue-500`}
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://github.com/yourusername"
                className={`hover:scale-110 transition-transform ${currentTheme.secondaryText} hover:text-blue-500`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className={`hover:scale-110 transition-transform ${currentTheme.secondaryText} hover:text-blue-500`}
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
            ${currentTheme.scrollbar}
          `}
        >
          <div className="space-y-6">
            {/* Professional Summary */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 ${currentTheme.text}`}
              >
                Professional Profile
              </h2>
              <p
                className={`leading-relaxed text-justify ${currentTheme.secondaryText}`}
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
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 ${currentTheme.text}`}
              >
                Key Competencies
              </h2>
              <CoreCompetenciesSection />
            </section>
            {/* Professional Highlights */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 ${currentTheme.text}`}
              >
                Professional Highlights
              </h2>
              <ul
                className={`list-disc list-inside space-y-2 ${currentTheme.secondaryText}`}
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

            {/* Quick Certifications */}
            <section>
              <h2
                className={`text-xl font-semibold border-b ${currentTheme.border} pb-2 mb-4 ${currentTheme.text}`}
              >
                Certifications
              </h2>
<CertificationsSection/>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDeveloperProfile;
