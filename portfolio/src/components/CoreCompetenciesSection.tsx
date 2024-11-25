import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  IconCode,
  IconBrandJavascript,
  IconApi,
  IconDatabase,
  IconGitBranch,
  IconBuildingSkyscraper ,
  IconPuzzle,
  IconDevices
} from "@tabler/icons-react";

export function CoreCompetenciesSection() {
  const competencies = [
    {
      title: "Full-Stack Development",
      description: "Proficient in end-to-end web application development",
      icon: <IconCode className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      title: "Cross-Platform Development",
      description: "Building seamless applications across multiple platforms",
      icon: <IconDevices className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      title: "JavaScript Ecosystem",
      description: "Expert in modern JavaScript frameworks and libraries",
      icon: <IconBrandJavascript className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      title: "REST and GraphQL APIs",
      description: "Designing and implementing robust API architectures",
      icon: <IconApi className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      title: "Database Management",
      description: "Advanced database design and optimization skills",
      icon: <IconDatabase className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      title: "Version Control System",
      description: "Proficient in Git and collaborative development workflows",
      icon: <IconGitBranch className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      title: "Clean Code and Architecture",
      description: "Emphasizing maintainable and scalable code structures",
      icon: <IconBuildingSkyscraper  className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      title: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
      icon: <IconPuzzle className="w-8 h-8 md:w-10 md:h-10" />,
    },
  ];

  return (
    <section className="w-full py-3 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {competencies.map((competency, index) => (
            <Competency key={competency.title} {...competency} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Competency = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05 
      }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "bg-white dark:bg-neutral-800/70 rounded-2xl shadow-sm hover:shadow-md",
        "flex flex-col p-4 sm:p-5 md:p-6 space-y-3 md:space-y-4",
        "border border-neutral-100 dark:border-neutral-700/50",
        "transition-all duration-300 ease-in-out transform",
        "group overflow-hidden relative"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-blue-500 dark:text-blue-400 mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
      </div>
      <div className="space-y-2 flex-grow">
        <h3 className="text-base md:text-md font-semibold text-neutral-800 dark:text-neutral-100 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};