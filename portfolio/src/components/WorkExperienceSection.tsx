import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import TVOne from "../assets/TVOne.jpg";
import Hacktiv1 from "../assets/Hacktiv8-1.jpg";
import Hacktiv2 from "../assets/Hacktiv8-2.jpg";
import KAI1 from "../assets/KAI-1.jpg";
import KAI2 from "../assets/KAI-2.jpg";
import STIKOM1 from "../assets/STIKOM-1.jpg";
import STIKOM2 from "../assets/STIKOM-2.jpg";

export function WorkExperienceSection() {
  const data = [
    {
      title: "2016",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4">
            <FaBriefcase className="inline-block mr-2 w-4 h-4" />
            Floor Director | PT. Lativi Mediakarya (tvOne), Jakarta
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-6">
            Coordinated live and pre-recorded studio broadcasts, ensuring
            seamless production flow and clear communication between on-screen
            talent and the technical crew.
          </p>
          <div className="grid">
            <div className="aspect-video transform transition-transform duration-300 ease-in-out relative">
              <Image
                src={TVOne}
                alt="Broadcast Coordination"
                fill
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4">
            <FaUserGraduate className="inline-block mr-2 w-4 h-4" />
            Broadcasting | STIKOM Interstudi, Jakarta
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-6">
            Developed a strong foundation in communication studies with a focus
            on modern technologies, including media production, broadcasting
            techniques, public relations, and effective communication strategies
            for various platforms.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video transform -rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
              <Image
                src={STIKOM1}
                alt="Academic Journey"
                fill
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="aspect-video transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
              <Image
                src={STIKOM2}
                alt="University Life"
                fill
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4">
            <FaBriefcase className="inline-block mr-2 w-4 h-4" />
            Project Administrator | PT. Karya Adji Indonusa, Jakarta
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-6">
            Managed the administration of a 20-billion-rupiah construction
            project, overseeing the preparation of comprehensive tender
            documents, ensuring compliance with industry regulations, and
            maintaining accuracy throughout the process.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video transform -rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
              <Image
                src={KAI1}
                alt="Project Management"
                fill
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="aspect-video transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
              <Image
                src={KAI2}
                alt="Construction Oversight"
                fill
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4">
            <FaUserGraduate className="inline-block mr-2 w-4 h-4" />
            Full-Stack JavaScript Program | Hacktiv8, Jakarta
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-6">
            Completed an intensive program focusing on web and mobile
            development, mastering modern JavaScript frameworks and
            technologies, including React, React Native, Node.js, Next.js, and
            GraphQL. Gained expertise in building full-stack applications,
            implementing RESTful and GraphQL APIs, and developing scalable,
            high-performance solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video transform -rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
              <Image
                src={Hacktiv1}
                alt="Hacktiv8 Bootcamp"
                fill
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="aspect-video transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
              <Image
                src={Hacktiv2}
                alt="Coding Bootcamp"
                fill
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
