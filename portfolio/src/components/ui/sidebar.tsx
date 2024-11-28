"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconBrandGithub, IconBrandTwitter, IconMenu2 } from "@tabler/icons-react";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
    className,
    children,
    ...props
  }: React.ComponentProps<"div">) => {
    const { open, setOpen } = useSidebar();
    return (
      <>
        <div
          className={cn(
            "md:hidden fixed top-0 left-0 w-full z-50",
            "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md",
            "border-b border-neutral-200 dark:border-neutral-800",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center space-x-2">
              {/* <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                className="text-neutral-800 dark:text-neutral-200"
              >
                <path 
                  fill="currentColor" 
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                />
              </svg>
              <span className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Alexander Briyan
              </span> */}
            </div>
            
            <button 
              onClick={() => setOpen(!open)}
              className="p-2 rounded-full 
                hover:bg-neutral-100 dark:hover:bg-neutral-800 
                transition group"
            >
              <motion.div
                animate={{ 
                  rotate: open ? 90 : 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                }}
              >
                <IconMenu2 
                  className={cn(
                    "text-neutral-600 dark:text-neutral-300",
                    "transition duration-300"
                  )} 
                  size={24} 
                />
              </motion.div>
            </button>
          </div>
  
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 300
                  }
                }}
                exit={{ 
                  x: "-100%", 
                  opacity: 0,
                  transition: {
                    duration: 0.2
                  }
                }}
                className={cn(
                  "fixed inset-0 bg-white dark:bg-neutral-900 z-[100] flex flex-col",
                  "overflow-y-auto overscroll-contain",
                  className
                )}
              >
                <div className="flex-grow overflow-y-auto px-4 space-y-2">
                  {React.Children.map(children, (child, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.3
                        }
                      }}
                      className="py-2 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
                    >
                      {child}
                    </motion.div>
                  ))}
                </div>
  
                <div className="sticky bottom-0 
                  bg-white/90 dark:bg-neutral-900/90 
                  backdrop-blur-md 
                  border-t border-neutral-200 dark:border-neutral-800"
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      © 2024 Your Company
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href="#" 
                        className="text-neutral-600 dark:text-neutral-400 
                          hover:text-neutral-900 dark:hover:text-neutral-100 
                          transition"
                      >
                        <IconBrandGithub size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="text-neutral-600 dark:text-neutral-400 
                          hover:text-neutral-900 dark:hover:text-neutral-100 
                          transition"
                      >
                        <IconBrandTwitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  };

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
