"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        // Get the height of the parent container
        const parentHeight = containerRef.current.getBoundingClientRect().height;
        setParentHeight(parentHeight);
      }
    };

    calculateHeight();
    
    const resizeHandler = () => {
      setTimeout(calculateHeight, 100);
    };
    
    window.addEventListener('resize', resizeHandler);
    
    // Also listen for image loads to recalculate
    const images = containerRef.current?.querySelectorAll('img');
    images?.forEach(img => {
      img.addEventListener('load', calculateHeight);
    });
    
    return () => {
      window.removeEventListener('resize', resizeHandler);
      images?.forEach(img => {
        img.removeEventListener('load', calculateHeight);
      });
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, parentHeight] // Use parentHeight instead of containerHeight
  );

  const opacityTransform = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.9, 1], 
    [0, 1, 1, 0]
  );

  const gradientColorTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      'rgba(168, 85, 247, 0)',
      'rgba(168, 85, 247, 1)',
      'rgba(168, 85, 247, 0)'
    ]
  );

  return (
    <div ref={containerRef} className="relative">
      <div 
        ref={timelineRef}
        className="relative max-w-7xl mx-auto pb-20 -z-1"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-16"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black dark:text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-600">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        <div
          style={{
            height: `${parentHeight}px`,
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              backgroundColor: gradientColorTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};