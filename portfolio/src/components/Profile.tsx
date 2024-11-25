import React from "react";
import Image from "next/image";
import MeImage from "../assets/Memoji.png";

const ProfileBackground = () => {
  return (
    <div className="relative w-full h-full my-2 md:my-10 lg:my-2">
      <Image
        src={MeImage}
        alt="Profile Photo"
        width={400}
        height={400}
        className="w-[190px] h-[190px] sm:w-[190px] sm:h-[190px] lg:w-[210px] lg:h-[210px] xl:w-[230px] xl:h-[230px] object-cover object-top transition-all duration-300 hover:scale-105 justify-self-center"
      />
      <div className="text-2xl md:text-xl lg:text-2xl font-sans font-bold text-neutral-800 dark:text-neutral-100 leading-tight mt-2 text-center">
        Hello! I&apos;m Bryan
      </div>
      <div className="text-lg md:text-sm lg:text-lg font-sans text-neutral-700 dark:text-neutral-200 leading-tight text-center -m-1">
        Click here to get to know me!
      </div>
    </div>
  );
};

export default ProfileBackground;
