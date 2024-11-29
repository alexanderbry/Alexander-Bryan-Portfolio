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
import MeImage from "../../assets/meSquare.jpg";
import TextTransitionProfile from "@/components/TextTransitionProfile";
import { motion } from "framer-motion";

const Profile = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem("theme") as "dark" | "light";

    // Validate and set theme
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);

      // Apply theme to html element for Tailwind dark mode
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Default to dark theme if no valid theme is stored
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
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
        linkedin: "text-blue-500 hover:text-blue-400",
      },
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
        linkedin: "text-blue-600 dark:text-blue-400",
      },
    },
  };

  const currentTheme = themeColors[theme];

  return (
    <div className={`w-full h-full`}>
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 h-full">
        {/* Sidebar */}
        <div className="flex items-center justify-center mt-8 md:mt-0">
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <div
                className={`w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-500,
`}
              >
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
              <h1
                className={`text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100`}
              >
                Alexander Briyan
              </h1>
              <p className={`text-md md:text-lg text-neutral-800 dark:text-neutral-200`}>
                Fullstack Software Developer
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-1 md:space-y-2 text-center">
              <div
                className={`flex items-center justify-center space-x-2 text-neutral-800 dark:text-neutral-200`}
              >
                <FaMapMarkerAlt />
                <span className="text-md md:text-lg">West Java, Indonesia</span>
              </div>
              <div
                className={`flex items-center justify-center space-x-2 text-neutral-800 dark:text-neutral-200`}
              >
                <FaPhone />
                <a
                  href="https://wa.me/6285156386466"
                  className="hover:text-blue-600 text-md md:text-lg"
                >
                  +62 851-5638-6466
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="mailto:alexunderbrain@gmail.com"
                className={`hover:scale-110 transition-transform ${currentTheme.socialIcons.email}`}
              >
                <FaEnvelope size={26} />
              </a>
              <a
                href="https://github.com/alexanderbry"
                className={`hover:scale-110 transition-transform ${currentTheme.socialIcons.github}`}
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://linkedin.com/in/alexanderbriyan"
                className={`hover:scale-110 transition-transform ${currentTheme.socialIcons.linkedin}`}
              >
                <FaLinkedin size={26} />
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
            {/* Get to know me */}
            <section>
              <div className="max-w-2xl mx-auto p-6 gap-8 -m-6">
                <TextTransitionProfile />
                <p className="text-center text-neutral-800 dark:text-neutral-200 text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed mb-10 pl-12 md:pl-14 font-bold">
                  My name is{" "}
                  
                    Bryan.
                </p>
                <p className="text-justify text-neutral-800 dark:text-neutral-200 text-sm md:text-md lg:text-lg leading-relaxed mb-8">
                  I&apos;m passionate about building user-centric web and mobile
                  applications. I&apos;ve sharpened my skills in modern development
                  frameworks and technologies through the Hacktiv8 bootcamp.
                </p>
                <p className="text-justify text-neutral-800 dark:text-neutral-200 text-sm md:text-md lg:text-lg leading-relaxed mb-8">
                  My journey to becoming a developer was fueled by a genuine
                  love for learning and pushing the boundaries of what&apos;s
                  possible in software development.
                </p>
                <p className="text-justify text-neutral-800 dark:text-neutral-200 text-sm md:text-md lg:text-lg leading-relaxed mb-8">
                  I&apos;m always eager to learn new things and work on challenging
                  projects that allow me to grow as a developer. I&apos;m excited to
                  bring my skills and enthusiasm to your team!
                </p>
                <p className="text-center text-neutral-800 dark:text-neutral-200 text-md md:text-lg lg:text-xl leading-relaxed my-12">
                  <span className="italic">
                    &quot;The only way to do great work is to love what you
                    do.&quot;
                  </span>{" "}
                  - <span className="font-semibold">Steve Jobs</span>
                </p>
              </div>
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

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block py-1 px-2 md:px-5 rounded-lg bg-gradient-to-r from-gray-700 to-gray-700 dark:from-indigo-500 dark:to-purple-500`,
        className!
      )}
    >
      {children}
    </motion.span>
  );
};
