"use client";
import React, { useState, useEffect, Suspense } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  IconBrandTabler,
  IconSun,
  IconMoon,
  IconFiles,
  IconCode,
  IconToggleLeft,
  IconToggleRight,
  IconUser,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import IconLogo from "../assets/IconLogo.png";
import Image from "next/image";

// Enhanced Loading Spinner Component
const LoadingMemoji = () => {
  const [dots, setDots] = useState(3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev % 3) + 1);
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) clearInterval(progressInterval);
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(dotInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
      bg-gradient-to-br from-blue-50 via-white to-blue-100 
      dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 
      overflow-hidden"
    >
      {/* Animated Background Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200/50 dark:bg-neutral-700/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main Loading Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center text-center"
      >
        {/* Animated Logo/Emoji */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[8rem] md:text-[12rem] mb-4"
        >
          💻
        </motion.div>

        {/* Progress Text */}
        <div className="text-2xl font-bold text-neutral-700 dark:text-neutral-300 mb-4">
          Loading{".".repeat(dots)}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
            className="h-full bg-blue-500 dark:bg-blue-400"
          />
        </div>

        {/* Percentage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-neutral-600 dark:text-neutral-400"
        >
          {progress}% Loaded
        </motion.div>

        {/* Inspirational Loading Messages */}
        <motion.div
          key={Math.floor(progress / 25)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-4 text-sm text-neutral-500 dark:text-neutral-500 max-w-md px-4"
        >
          {progress < 25
            ? "Initializing awesome experience..."
            : progress < 50
            ? "Loading incredible details..."
            : progress < 75
            ? "Almost there, preparing magic..."
            : "Final touches incoming..."}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Theme Detection and Setting with 3-second timeout
  useEffect(() => {
    // Theme Detection
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(loadingTimer);
  }, []);

  // Apply Theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="text-neutral-600 dark:text-neutral-300 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUser className="text-neutral-600 dark:text-neutral-300 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Skills",
      href: "/skills",
      icon: (
        <IconCode className="text-neutral-600 dark:text-neutral-300 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "/projects",
      icon: (
        <IconFiles className="text-neutral-600 dark:text-neutral-300 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Contact Me",
      href: "/contactme",
      icon: (
        <IconMail className="text-neutral-600 dark:text-neutral-300 h-6 w-6 flex-shrink-0" />
      ),
    },
  ];

  if (isLoading) {
    return <LoadingMemoji />;
  }

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-white dark:bg-neutral-900 w-full flex-1 mx-auto shadow-2xl dark:shadow-neutral-800/50 overflow-hidden",
        "w-full md:h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10 relative">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-4 md:mt-8 flex flex-col space-y-2 text-center">
              <AnimatePresence>
                {links.map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: 100,
                      x: 0,
                    }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: idx * 0.15 }}
                  >
                    <SidebarLink link={link} className={""} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <ThemeToggleSection
            theme={theme}
            toggleTheme={toggleTheme}
            open={open}
          />
        </SidebarBody>
      </Sidebar>

      <Suspense fallback={<LoadingMemoji />}>
        <div
          className={cn(
            "flex flex-1 p-4 md:p-8",
            theme === "dark" ? "dark" : ""
          )}
        >
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 w-full space-y-6 overflow-auto">
            {children}
          </div>
        </div>
      </Suspense>
    </div>
  );
}

const Logo = () => {
  const { open, animate } = useSidebar();
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{
        opacity: 100,
        x: 0,
      }}
      transition={{ delay: 0 * 0.15 }}
    >
      <Link
        href="/"
        className={cn(
          "md:mt-4 flex items-center justify-start gap-2 group/sidebar py-2"
        )}
      >
        <Image
          src={IconLogo}
          alt="Logo"
          width={50}
          height={50}
          className="text-neutral-600 dark:text-neutral-300 h-7 w-7 flex-shrink-0 -mt-1"
        />

        <motion.span
          animate={{
            display: animate
              ? open
                ? "inline-block"
                : "none"
              : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className="text-neutral-700 dark:text-neutral-200 text-md group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 font-bold"
        >
          Alexander Briyan
        </motion.span>
      </Link>
    </motion.div>
  );
};

const ThemeToggleSection = ({
  theme,
  toggleTheme,
  open,
}: {
  theme: "dark" | "light";
  toggleTheme: () => void;
  open: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="w-full"
    onClick={toggleTheme}
  >
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{
        opacity: 100,
        x: 0,
      }}
      transition={{ delay: 0.45 }}
      className={cn(
        "flex items-center cursor-pointer rounded-lg mb-2 transition-colors",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800"
      )}
    >
      {open ? (
        <div className="flex items-center space-x-3 w-full">
          {theme === "dark" ? (
            <IconSun className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          ) : (
            <IconMoon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          )}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-neutral-600 dark:text-neutral-300 flex-shrink-0"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </motion.span>
          {theme === "dark" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconToggleRight className="ml-auto h-6 w-6 text-blue-500" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconToggleLeft className="ml-auto h-6 w-6 text-neutral-400" />
            </motion.div>
          )}
        </div>
      ) : (
        <div className="w-full flex justify-center">
          {theme === "dark" ? (
            <IconSun className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          ) : (
            <IconMoon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          )}
        </div>
      )}
    </motion.div>
  </motion.div>
);
