"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-zinc-300">
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
    </section>
  );
}
