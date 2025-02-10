"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import BackgroundPlus from "./components/GridPattern";
import { Navbar } from "./components/Navbar";
import { SlideNavTabs } from "./components/Headers/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex overflow-x-hidden relative flex-col items-center px-2 min-h-screen md:px-0 font-geistSans bg-hero-gradient">
        <div className="absolute top-0 -z-10 min-h-screen w-screen overflow-hidden bg-inherit  bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <SlideNavTabs />

        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <div className="overflow-x-hidden">
            <div
              className="absolute left-0 h-32 w-[95%] overflow-x-hidden bg-[#369DFD] bg-opacity-70 blur-[337.4px]"
              style={{ transform: "rotate(-30deg)" }}
            />
          </div>

          {/* a blue gradient line that's slightly tilted with blur (a lotof blur)*/}
          {/* <div className="overflow-x-hidden overflow-y-hidden">
          <div
            className="absolute left-0 top-[100%] h-32 w-[90%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-40 blur-[337.4px]"
            style={{ transform: "rotate(-30deg)" }}
          />
        </div> */}

          {/* <div className="overflow-x-hidden overflow-y-hidden">
          <div className="absolute right-0 top-[145%] h-40 w-[17%] overflow-x-hidden bg-[#369DFD] bg-opacity-20 blur-[110px]" />
        </div> */}
        </div>
      </main>
      {/* <SlideNavTabs /> */}
      <BackgroundPlus />
      {/* <Navbar /> */}
      <Hero />
    </div>
  );
}
