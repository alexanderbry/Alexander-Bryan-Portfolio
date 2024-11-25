import React from "react";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export const GlobeSpin = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative mt-10">
      <Globe className="absolute -right-16 sm:-right-48 lg:-right-24 -bottom-36 sm:-bottom-48 lg:-bottom-48" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = localStorage.getItem("theme");
  const darkMode = theme === "dark";

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: darkMode ? 2 : 10,
      baseColor: [0.5, 0.7, 1],
      markerColor: [0.3, 0.5, 0.8],
      glowColor: [0.8, 0.9, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Slower rotation
        state.phi = phi;
        phi += 0.005; // Decrease the increment for slower rotation
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
