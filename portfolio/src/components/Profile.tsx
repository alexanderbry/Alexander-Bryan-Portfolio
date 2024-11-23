import React from "react";
import Image from "next/image";
import MeImage from "../assets/Me.png";

const ProfileBackground = () => {
  return (
<div className="relative w-full h-full">
  <Image
    src={MeImage}
    alt="Profile Photo"
    width={300}
    height={400}
    priority
    className="w-full h-[380px] object-cover object-top transition-all duration-300 hover:scale-105"
  />
</div>
  );
};

export default ProfileBackground;
