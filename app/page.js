"use client";
import Hero from "./components/Hero";
import BackgroundPlus from "./components/GridPattern";
import CombinedNavbar from "./components/Headers/header";
import YouTubeVideo from "./components/youtubeVideo";
import { Spotlight } from "@/components/ui/spotlight-new";
import Features from "./components/features";

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

export default function Home() {
  return (
    <>
      <BackgroundPlus />

      <main className="flex overflow-x-hidden relative flex-col items-center px-2 min-h-screen md:px-0 font-geistSans font-[family-name:var(--font-geist-sans)]">
        {/* <div className="absolute top-0 -z-10 min-h-screen w-screen overflow-hidden bg-inherit  bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 21.46%, hsla(30, 100%, 85%, .08) 0, hsla(30, 100%, 55%, .02) 50%, hsla(30, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(30, 100%, 85%, .06) 0, hsla(30, 100%, 55%, .02) 80%, transparent 100%)"
        />

        <CombinedNavbar />

        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <div className="overflow-x-hidden">
            <div
              className="absolute left-0 h-32 w-[95%] overflow-x-hidden bg-[#ff69332c] bg-opacity-70 blur-[337.4px]" // Changed to dark orange
              style={{ transform: "rotate(-30deg)" }}
            />
          </div>
        </div>
        <Hero />
        <div className="w-[45rem] h-full">
          <YouTubeVideo />
        </div>
        <Features />
      </main>
    </>
  );
}
