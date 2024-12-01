import React from "react";
import Image from "next/image";
import MeImage from "../assets/Memoji.png";
import { motion } from "framer-motion";

const ProfileBackground = () => {
  return (
<div className="grid place-items-center w-full h-full md:my-10 lg:my-2">
  <div className="flex flex-col items-center">
    <Image
      src={MeImage}
      alt="Profile Photo"
      width={400}
      height={400}
      className="w-[190px] h-[190px] sm:w-[190px] sm:h-[190px] lg:w-[210px] lg:h-[210px] xl:w-[230px] xl:h-[230px] object-cover object-top transition-all duration-300 hover:scale-105"
    />
    <div className="text-2xl md:text-xl lg:text-2xl font-sans font-bold text-neutral-800 dark:text-neutral-100 leading-tight mt-2 text-center">
      Hello! I&apos;m Bryan
    </div>
    <div className="text-lg md:text-sm lg:text-lg leading-tight text-center hover:scale-105">
      <Highlight className="text-white dark:text-white">
        Click here to get to know me!
      </Highlight>
    </div>
  </div>
</div>
  );
};

export default ProfileBackground;

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
        `relative inline-block py-1 px-2 md:px-5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-500 dark:from-indigo-500 dark:to-purple-500`,
        className!
      )}
    >
      {children}
    </motion.span>
  );
};
