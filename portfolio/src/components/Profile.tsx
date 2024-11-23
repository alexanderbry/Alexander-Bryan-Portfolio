import React from "react";
import Image from "next/image";
import MeImage from "../assets/Me.png";

const ProfileBackground = () => {
  return (
<div className="relative w-full h-full">
  <Image
    src={MeImage}
    alt="Profile Photo"
    width={500}
    height={500}
    className="w-[100%] h-[330px] object-cover object-top transition-all duration-300 hover:scale-105 -translate-x-28 opacity-50 "
  />
</div>
  );
};

export default ProfileBackground;
