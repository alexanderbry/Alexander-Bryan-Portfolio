"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconCode, IconFiles, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
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
import ProfileBackground from "./Profile";
import { GlobeSpin } from "./GlobeSpin";
import Kedebook from "../assets/Kedebook.png";
import Sipelit from "../assets/Sipelit.png";
import HmmHome from "../assets/HmmHome.jpg";

export function HomeDashboard() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg] flex-shrink-0", item.className)}
          icon={item.icon}
          background={item.background}
          linkTo={item.linkTo}
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
      className="w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
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
    title: "more",
    icon: <Ellipsis className="text-black dark:text-white" />,
  },
];
const SkeletonTwo = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full h-full absolute inset-0 flex flex-wrap justify-center items-center gap-4 px-4 pb-4">
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
// const SkeletonThree = () => {
//   const variants = {
//     initial: {
//       backgroundPosition: "0 50%",
//     },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variants}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
//       style={{
//         background:
//           "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       <motion.div className="h-full w-full rounded-lg"></motion.div>
//     </motion.div>
//   );
// };
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
          src={Kedebook}
          alt="Kedebook"
          width={1920}
          height={1080}
          className="pt-6 absolute inset-0 object-cover z-0 group-hover:scale-110 transition-transform duration-300"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 
          bg-gradient-to-t 
          from-black/90 
          to-black/20
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300 
          z-10 
          flex items-end pb-6 px-4"
        >
          <div className="text-white">
            <h3
              className="text-xl font-bold mb-1 
              text-white 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            >
              Kedebook
            </h3>
            <p
              className="text-sm font-medium text-white/80 
              tracking-wide 
              leading-relaxed
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            >
              A mobile social media app (Facebook Clone).
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div className="h-full w-1/3 rounded-2xl relative overflow-hidden group">
        <Image
          src={HmmHome}
          alt="Hmm"
          fill
          className="absolute inset-0 object-cover z-10 group-hover:scale-110 transition-transform duration-300"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 
          bg-gradient-to-t 
          from-black/90 
          to-black/20
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300 
          z-10 
          flex items-end pb-6 px-4"
        >
          <div className="text-white">
            <h3
              className="text-xl font-bold mb-1 
              text-white 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            >
              Hmm
            </h3>
            <p
              className="text-sm font-medium text-white/80 
              tracking-wide 
              leading-relaxed
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            >
              A web-based e-commerce app (H&M Clone) with infinite scroll.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl relative overflow-hidden group"
      >
        {/* Background Image */}
        <Image
          src={Sipelit}
          width={1920}
          height={1080}
          alt="Sipelit"
          className="pt-6 absolute inset-0 object-cover z-0 group-hover:scale-110 transition-transform duration-300"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 
          bg-gradient-to-t 
          from-black/90 
          to-black/20
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300 
          z-10 
          flex items-end pb-6 px-4"
        >
          <div className="text-white">
            <h3
              className="text-xl font-bold mb-1 
              text-white 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            >
              Sipelit
            </h3>
            <p
              className="text-sm font-medium text-white/80 
              tracking-wide 
              leading-relaxed
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            >
              Mobile finance app for split bills, scan and share receipt.
            </p>
          </div>
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
      {/* <GlobeDemo /> */}
      <GlobeSpin />
    </motion.div>
  );
};
const items = [
  {
    // title: "Hello!",
    // description: "Click here to get to know me",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    // icon: <IconUser className="h-8 w-8 text-neutral-500" />,
    background: <ProfileBackground />,
    linkTo: "/profile",
  },
  {
    title: "Skills",
    description: "Technologies and tools I work with",
    header: <SkeletonTwo />,
    className: "md:col-span-2",
    icon: <IconCode className="h-8 w-8 text-neutral-500" />,
    background: (
      <SparklesCore
        id="tech-stack-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={150}
        className="w-full h-full"
        particleColor="#6366f1"
      />
    ),
    linkTo: "/skills",
  },
  {
    title: "Projects",
    className: "md:col-span-2",
    description: "Showcase of recent development work",
    header: <SkeletonFour />,
    icon: <IconFiles className="h-8 w-8 text-neutral-500" />,
    background: "",
    linkTo: "/projects",
  },
  {
    title: "Contact Me",
    description: "Willing to work globally.",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconMail className="h-8 w-8 text-neutral-500" />,
    background: "",
    linkTo: "/contactme",
  },
];
