import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import TextTransition from "./TextTransition";

export default function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div>
            <div className="text-4xl font-semibold text-black dark:text-white flex flex-row w-full ml-48">
              Your professional <TextTransition />
            </div>
            <h1 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
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
          className="mx-auto rounded-2xl object-cover h-full object-center-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
