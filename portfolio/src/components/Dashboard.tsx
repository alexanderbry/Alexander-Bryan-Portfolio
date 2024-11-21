"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconCode,
  IconDevices,
  IconMail,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlobeDemo } from "./Globe";
import MeImage from "../assets/Me.png";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiSequelize,
  SiPostman,
  SiExpo,
  SiAmazon,
  SiFirebase,
} from "react-icons/si";
import { SparklesCore } from "./ui/sparkles";
import { Ellipsis } from "lucide-react";

export function HomeDashboard() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
          background={item.background}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Image src={MeImage} alt="avatar" height="200" width="200" />
    </motion.div>
  );
};
const features = [
  {
    title: "Javascript",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    title: "React.js",
    icon: <SiReact className="text-blue-400" />,
  },
  {
    title: "React Native",
    icon: <SiReact className="text-black dark:text-white" />,
  },
  {
    title: "React Router",
    icon: <SiReactrouter className="text-red-500" />,
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    title: "Express.js",
    icon: <SiExpress className="text-gray-700" />,
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-600" />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    title: "GraphQL",
    icon: <SiGraphql className="text-pink-500" />,
  },
  {
    title: "Sequelize",
    icon: <SiSequelize className="text-blue-400" />,
  },
  {
    title: "Postman",
    icon: <SiPostman className="text-orange-500" />,
  },
  {
    title: "Expo",
    icon: <SiExpo className="text-indigo-500" />,
  },
  {
    title: "AWS",
    icon: <SiAmazon className="text-yellow-400" />,
  },
  {
    title: "Firebase",
    icon: <SiFirebase className="text-orange-500" />,
  },
  {
    title: "and many more",
    icon: <Ellipsis className="text-black dark:text-white" />, 
  },
];
const SkeletonTwo = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      

      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 p-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              {React.cloneElement(feature.icon, {
                className: `w-8 h-8 ${feature.icon.props.className || ""}`,
              })}
            </div>
            <p
              className="
                text-xs 
                sm:text-sm 
                text-neutral-800 
                dark:text-neutral-200 
                text-center 
                font-medium 
                tracking-wider 
                opacity-80 
                dark:opacity-90
              "
            >
              {feature.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl relative overflow-hidden group"
      >
        {/* Background Image */}
        <Image
          src="https://i.pinimg.com/736x/31/26/e8/3126e89cf1d447263897b0745648ca28.jpg"
          alt="background"
          fill
          className="absolute inset-0 object-cover z-0 group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-4">
          <Image
            src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 z-30"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4 z-30">
            Just code in Vanilla Javascript
          </p>
          <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4 z-30">
            Delusional
          </p>
        </div>
      </motion.div>

      <motion.div
        className="h-full w-1/3 rounded-2xl relative overflow-hidden group"
      >
        {/* Background Image */}
        <Image
          src="https://i.pinimg.com/736x/66/bb/b1/66bbb1fef4a2bdf34a21682eac937134.jpg"
          alt="background"
          fill
          className="absolute inset-0 object-cover z-0 group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-4">
          <Image
            src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 z-30"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4 z-30">
            Tailwind CSS is cool, you know
          </p>
          <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4 z-30">
            Sensible
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl relative overflow-hidden group"
      >
        {/* Background Image */}
        <Image
          src="https://i.pinimg.com/736x/09/36/c9/0936c9bbcb4d7bd89315cd0fed9c921d.jpg"
          alt="background"
          fill
          className="absolute inset-0 object-cover z-0 group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-4">
          <Image
            src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 z-30"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4 z-30">
            I love angular, RSC, and Redux.
          </p>
          <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4 z-30">
            Helpless
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <GlobeDemo />
    </motion.div>
  );
};
const items = [
  {
    title: "My Profile",
    description: "Professional overview and personal details",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconUser  className="h-8 w-8 text-neutral-500" />,
    background: "/images/projects-bg.jpg", // Add your background image path
  },
  {
    title: "Tech Stacks",
    description: "Technologies and tools I work with",
    header: <SkeletonTwo />,
    className: "md:col-span-2",
    icon: <IconDevices className="h-8 w-8 text-neutral-500" />,
    background: <SparklesCore
      id="tech-stack-sparkles"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={150}
      className="w-full h-full"
      particleColor="#6366f1"
    />, // Add your background component
  },
  {
    title: "Projects",
    className: "md:col-span-2",
    description: "Showcase of recent development work",
    header: <SkeletonFour />,
    icon: <IconCode className="h-8 w-8 text-neutral-500" />,
    background: "/images/projects-bg.jpg", // Add your background image path
  },
  {
    title: "Contact Me",
    description: "Ways to get in touch",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconMail className="h-8 w-8 text-neutral-500" />,
    background: "/images/contact-bg.jpg", // Add your background image path
  },
];

