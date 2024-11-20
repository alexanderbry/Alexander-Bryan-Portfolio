"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconSun,
  IconMoon,
  IconToggleLeft,
  IconToggleRight
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HomeDashboard } from "@/components/Dashboard";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [open, setOpen] = useState(false);

  // Persist theme in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

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
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-600 dark:text-neutral-300 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-600 dark:text-neutral-300 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-600 dark:text-neutral-300 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-600 dark:text-neutral-300 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-white dark:bg-neutral-900 w-full flex-1 mx-auto shadow-2xl dark:shadow-neutral-800/50 overflow-hidden",
        "lg:h-screen md:h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10 relative">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col space-y-2">
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: 100,
                    x: 0,
                  }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <SidebarLink link={link} className={""} />
                </motion.div>
              ))}
            </div>
          </div>
          <ThemeToggleSection 
            theme={theme} 
            toggleTheme={toggleTheme} 
            open={open} 
          />
        </SidebarBody>
      </Sidebar>
      <Dashboard theme={theme} />
    </div>
  );
}

const Logo = () => (
  <Link
    href="#"
    className="group flex space-x-3 items-center text-sm py-2 px-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
  >
    <div className="h-6 w-7 bg-gradient-to-br from-black to-neutral-700 dark:from-white dark:to-neutral-200 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors"
    >
      Acet Labs
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link
    href="#"
    className="group flex justify-center items-center text-sm py-2 px-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
  >
    <div className="h-6 w-7 bg-gradient-to-br from-black to-neutral-700 dark:from-white dark:to-neutral-200 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
  </Link>
);

const ThemeToggleSection = ({ 
  theme, 
  toggleTheme, 
  open 
}: { 
  theme: "dark" | "light", 
  toggleTheme: () => void,
  open: boolean 
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

const Dashboard = ({ theme }: { theme: "dark" | "light" }) => {
  return (
    <div
      className={cn("flex flex-1 p-4 md:p-8", theme === "dark" ? "dark" : "")}
    >
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 w-full space-y-6">
        <HomeDashboard />
      </div>
    </div>
  );
};