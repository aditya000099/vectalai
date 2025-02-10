"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import YouTubeVideo from "./youtubeVideo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export default function Hero() {
  return (
    <section className="flex relative flex-col gap-5 justify-center items-center mt-24 max-w-xl md:mt-32 md:max-w-2xl lg:max-w-3xl">
      <motion.h1
        {...{
          ...slap,
          transition: { ...slap.transition, delay: 0.2 },
        }}
        className="text-center  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter  sm:text-5xl text-transparent md:text-6xl lg:text-7xl"
      >
        Unlock Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-300 from-zinc-300">
          Peak Productivity
        </span>{" "}
        with vectal.ai
      </motion.h1>
      <motion.p
        {...{
          ...slap,
          transition: { ...slap.transition, delay: 0.3 },
        }}
        className="text-lg text-center text-soft-foreground-text"
      >
        Vectal is an AI-powered productivity app that will transform the way you
        work. Our AI Agents, fueled by cutting-edge models like o3-mini, are
        designed to help you work faster, smarter, and achieve more.
      </motion.p>
      <Link
        href="/signin"
        className="inline-flex text-lg gap-x-2 mt-2 backdrop-blur-md text-white justify-center items-center py-3 px-5 w-fit rounded-3xl border duration-200 group bg-page-gradient border-white/30 text-md font-geistSans hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100"
      >
        It's free. Sign up now
        <div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
          <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
          <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
      </Link>
      <a
        href="https://www.producthunt.com/posts/supermemory?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-supermemory"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=472686&theme=dark&period=daily"
          alt="Supermemory - AI&#0032;second&#0032;brain&#0032;for&#0032;all&#0032;your&#0032;saved&#0032;stuff | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
    </section>
  );
}
