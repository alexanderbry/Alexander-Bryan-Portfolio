// app/ClientLayout.tsx
"use client";
import React, { useState, useEffect } from "react";
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
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconLogo from "../assets/IconLogo.png";
import Image from "next/image";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [open, setOpen] = useState(false);

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
            <Logo />
            <div className="mt-4 md:mt-8 flex flex-col space-y-2 text-center">
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
      <div
        className={cn("flex flex-1 p-4 md:p-8", theme === "dark" ? "dark" : "")}
      >
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 w-full space-y-6 overflow-auto">
          {children}
        </div>
      </div>
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
