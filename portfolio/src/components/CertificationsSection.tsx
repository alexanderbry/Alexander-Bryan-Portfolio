import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiCss3,
  SiHackerrank,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { FaCertificate } from "react-icons/fa";
import { LinkPreview } from "./ui/link-preview";
import certificatePreview from "../assets/JSCertificate.png";

export function CertificationsSection() {
  const certifications = [
    {
      title: "JavaScript",
      provider: "HackerRank",
      icon: <SiJavascript className="w-6 h-6 text-yellow-400" />,
      link: "https://www.hackerrank.com/certificates/iframe/ac08862eab83",
      previewImage: certificatePreview,
    },
    {
      title: "React",
      provider: "HackerRank",
      icon: <SiReact className="w-6 h-6 text-blue-500" />,
      link: "https://www.hackerrank.com/certificates/iframe/c79e21a9c172",
      previewImage: certificatePreview,
    },
    {
      title: "Problem Solving",
      provider: "HackerRank",
      icon: <FaCertificate className="w-6 h-6 text-purple-500" />,
      link: "https://www.hackerrank.com/certificates/iframe/5ff1bbcb4e25",
      previewImage: certificatePreview,
    },
    {
      title: "SQL",
      provider: "HackerRank",
      icon: <SiPostgresql className="w-6 h-6 text-blue-600" />,
      link: "https://www.hackerrank.com/certificates/iframe/de5ce7d33e3f",
      previewImage: certificatePreview,
    },
    {
      title: "CSS",
      provider: "HackerRank",
      icon: <SiCss3 className="w-6 h-6 text-blue-500" />,
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
            <div className="p-2">
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
                {cert.provider}{" "}
                <SiHackerrank className="w-3 h-3 text-green-600" />
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
              <FiExternalLink
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
