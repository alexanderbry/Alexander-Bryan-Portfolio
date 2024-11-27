"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello!",
  "¡Hola!",
  "Halo!",
  "Bonjour!",
  "こんにちは!",
  "你好!",
  "Ciao!",
  "Olá!",
  "Namaste!",
  "Kamusta!",
];

const colors = [
  "#1E90FF", // Hello! - Dodger Blue
  "#FF4500", // ¡Hola! - Orange Red
  "#32CD32", // Halo! - Lime Green
  "#FFD700", // Bonjour! - Gold
  "#FF69B4", // Kon'nichiwa! - Hot Pink
  "#8A2BE2", // Nǐ hǎo! - Blue Violet
  "#FF6347", // Ciao! - Tomato
  "#FF8C00", // Olá! - Dark Orange
  "#6A5ACD", // Namaste! - Slate Blue
  "#20B2AA", // Kamusta! - Light Sea Green
];

const TextTransitionProfile: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(greetings[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentRole((prev) => {
          const nextIndex = (greetings.indexOf(prev) + 1) % greetings.length;
          setCurrentColor(colors[nextIndex]);
          return greetings[nextIndex];
        });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentRole}
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -15, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-start pl-4 sm:pl-32 md:pl-14 mb-2"
      style={{ color: currentColor }}
    >
      {currentRole}
    </motion.div>
  );
};

export default TextTransitionProfile;
