import { motion } from "framer-motion";
import {
  IconCertificate,
  IconBrandHackerrank,
  IconCode,
  IconDatabase,
  IconBrandReact,
  IconExternalLink,
} from "@tabler/icons-react";
import { LinkPreview } from "./link-preview";
import certificatePreview from "../../assets/JSCertificate.png";

export function CertificationsSection() {
  const certifications = [
    {
      title: "JavaScript",
      provider: "HackerRank",
      icon: <IconCode className="w-6 h-6 text-green-500" />,
      link: "https://www.hackerrank.com/certificates/iframe/ac08862eab83",
      previewImage: certificatePreview,
    },
    {
      title: "React",
      provider: "HackerRank",
      icon: <IconBrandReact className="w-6 h-6 text-blue-500" />,
      link: "https://www.hackerrank.com/certificates/iframe/c79e21a9c172",
      previewImage: certificatePreview,
    },
    {
      title: "Problem Solving",
      provider: "HackerRank",
      icon: <IconCertificate className="w-6 h-6 text-purple-500" />,
      link: "https://www.hackerrank.com/certificates/iframe/5ff1bbcb4e25",
      previewImage: certificatePreview,
    },
    {
      title: "SQL",
      provider: "HackerRank",
      icon: <IconDatabase className="w-6 h-6 text-orange-500" />,
      link: "https://www.hackerrank.com/certificates/iframe/de5ce7d33e3f",
      previewImage: certificatePreview,
    },
    {
      title: "CSS",
      provider: "HackerRank",
      icon: <IconCode className="w-6 h-6 text-indigo-500" />,
      link: "https://www.hackerrank.com/certificates/iframe/d2610f5fd874",
      previewImage: certificatePreview,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
          className={`
            flex items-center justify-between 
            p-4 rounded-xl 
            border border-transparent
            hover:border-neutral-200 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-300
            group
          `}
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm">
              {cert.icon}
            </div>
            <div>
              <h3
                className="font-semibold text-neutral-800 dark:text-neutral-200 
                group-hover:text-blue-600 transition-colors"
              >
                {cert.title}
              </h3>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
                {cert.provider} <IconBrandHackerrank className="w-3 h-3 text-green-600" />
              </div>
            </div>
          </div>

          <div
            className="opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 
            flex items-center space-x-2"
          >
            <LinkPreview
              url={cert.link}
              isStatic={true}
              imageSrc={cert.previewImage}
              className="font-bold"
            >
              <span
                className="text-sm text-neutral-600 
                dark:text-neutral-400 
                group-hover:text-blue-600 
                transition-colors"
              >
                View Certificate
              </span>
            </LinkPreview>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <IconExternalLink
                className="w-5 h-5 text-neutral-500 
                group-hover:text-blue-600 
                transition-colors"
              />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
