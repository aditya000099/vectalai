"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Features() {
  const [tab, setTab] = useState(0);

  const tabs = useRef < HTMLDivElement > null;

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
      className="overflow-hidden relative w-full max-lg:after:hidden mt-10"
    >
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
                  {/* Improved text color and Vectal Text*/} Unlock peak
                  productivity for you and your team
                </h2>

                <p className="text-zinc-400">
                  Vectal offers all the essential tools to transform how you
                  work. Supercharge productivity within your team or friends!
                </p>
                <Link
                  href="/signin"
                  className="mx-auto flex gap-2 justify-center items-center py-2 px-10 mt-4 text-lg tracking-tighter text-center bg-gradient-to-br rounded-[0.5rem] ring-2 ring-offset-1 transition-all hover:ring-transparent group w-fit font-geist bg-page-gradient text-md from-zinc-400 to-zinc-700 text-zinc-50 ring-zinc-500/50 ring-offset-zinc-950/5 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70"
                >
                  Get Started
                  <div className="overflow-hidden relative ml-1 w-5 h-5">
                    <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
                    <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </Link>
              </div>
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
    </section>
  );
}
