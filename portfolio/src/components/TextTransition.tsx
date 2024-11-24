"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Front End Developer", "Back End Developer", "Mobile Developer"];

const TextTransition: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentRole((prev) => {
          const nextIndex = (roles.indexOf(prev) + 1) % roles.length;
          return roles[nextIndex];
        });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        key={currentRole}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-semibold text-blue-600 text-start"
      >
        {currentRole}
      </motion.div>
    </div>
  );
};

export default TextTransition;