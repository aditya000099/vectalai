import React, { useState } from "react";
import { motion } from "framer-motion";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/default"; // Make sure these are imported
// import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

const YouTubeVideo = () => {
  const [error, setError] = useState(null);
  const videoUrl = "https://www.youtube.com/watch?v=bNlGhOuQ8ls"; // Hardcoded video ID

  const slap = {
    initial: {
      opacity: 0,
      scale: 1.1,
    },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
    viewport: { once: true },
  };

  return (
    <div className="mt-64 w-full min-h-screen">
      {" "}
      {/* Reduced top margin */}
      <h2 className=" mb-4 text-center  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter  sm:text-5xl text-transparent md:text-6xl lg:text-6xl">
        Vectal.ai Overview
      </h2>
      {error ? (
        <div className="text-red-500 text-center p-4">{error}</div>
      ) : (
        <div
          className="z-40 h-full max-w-[85vw] mx-auto md:w-full select-none !rounded-4xl" // Increased max-width
          style={{
            borderRadius: "20px",
          }}
        >
          <MediaPlayer
            className="rounded-2xl"
            title="Vectal Product Overview"
            src={videoUrl} // Use hardcoded video URL
          >
            <MediaProvider />
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
