import React from "react";
import Image from "next/image";
import MeImage from "../assets/Me.png";

const ProfileBackground = () => {
  return (
    <div className="relative w-full h-full -z-0">

        {/* Add negative margin and z-index */}
        <Image
          src={MeImage}
          alt="Profile Photo"
          width={300}
          height={400}
          priority
          className="object-cover w-full h-[400px] 
      shadow-2xl transition-all duration-300 hover:scale-105"
        />
    </div>
  );
};

export default ProfileBackground;
