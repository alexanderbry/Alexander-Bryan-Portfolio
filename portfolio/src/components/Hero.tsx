import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import TextTransition from "./TextTransition";

export default function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center w-full">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white flex flex-row justify-center gap-3">
              A <TextTransition /> you need.
            </div>
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem] font-bold mt-2 leading-none text-center">
              Alexander Briyan
            </h1>
          </div>
        }
      >
        <Image
          src={`https://i.pinimg.com/originals/f5/36/01/f53601133f236d1cb167ac19f05a3d60.gif`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-screen object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}