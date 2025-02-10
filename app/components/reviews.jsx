"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FeaturesSection } from "./elements/featuresCard";
import { CardStackDemo, Highlight } from "./elements/reviewCards";

export default function Reviews() {
  const [tab, setTab] = useState(0);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  function handleClickIndex(tab) {
    setTab(tab);
  }

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section
      id="features"
      className="overflow-hidden relative w-full max-lg:after:hidden"
    >
      {/* <BackgroundGradientAnimation interactive={true}> */}
      <AuroraBackground>
        <div className="relative h-screen w-full bg-zinc-900 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-zinc-800 via-zinc-900 to-black opacity-50"></div>

          {/* Fading Light Streak (from top, starting black) */}
          <div className="absolute top-0 left-0 w-[200px] h-[500px] bg-gradient-to-b from-black to-transparent blur-3xl transform rotate-[-20deg] origin-top-left opacity-75"></div>

          {/* Content with Increased Contrast */}
          <div className="relative z-10 flex items-center justify-center h-full text-white text-2xl">
            <div className="relative">
              <div className="flex relative flex-col px-4 mx-auto max-w-screen-xl md:px-0">
                <div className="relative mx-auto mb-5 space-y-4 max-w-3xl text-center">
                  <h2 className="pt-16 text-4xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-orange-400 to-white md:text-5xl lg:text-6xl font-nomral font-geist">
                    {/* Improved text color and Vectal Text*/} People love to
                    use vectal.ai
                  </h2>

                  <p className="text-zinc-400">
                    Vectal offers all the essential tools to transform how you
                    work. Supercharge productivity within your team or friends!
                  </p>
                </div>
                <CardStackDemo />
                <div className="overflow-x-hidden overflow-y-hidden">
                  <div
                    className="absolute left-0 top-[60%] h-32 w-[90%] overflow-x-hidden bg-[rgb(217,75,56)] bg-opacity-20  blur-[337.4px]"
                    style={{ transform: "rotate(-30deg)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </BackgroundGradientAnimation> */}
        {/* </AuroraBackground> */}
      </AuroraBackground>
    </section>
  );
}
