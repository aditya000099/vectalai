import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Logo from "../../../public/next.svg";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CombinedNavbar = () => {
  // Scroll-aware Navbar Logic
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  // Sliding Tabs Logic
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Tab Component (moved inside to avoid passing props around)
  const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="block relative z-10 py-2.5 px-3 text-xs text-white cursor-pointer md:py-2 md:px-5 md:text-base mix-blend-difference"
      >
        {children}
      </li>
    );
  };

  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{
          ...position,
        }}
        className="absolute z-0 h-7 bg-glass-gradient bg-transparent rounded-full md:h-10  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-filter"
      />
    );
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          y: -150,
          opacity: 1,
        }}
        animate={{
          y: visible ? -50 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="fixed z-[99999] inset-x-0 mt-20 hidden w-full px-24 text-sm md:flex"
      >
        {/* Sliding Tabs Content */}
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="flex relative items-center py-3 px-5 mx-auto text-sm text-gray-200 bg-gradient-to-tr to-transparent rounded-full border-2 w-fit border-white/5 from-zinc-300/5 via-gray-400/5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-filter"
        >
          <Link href={"/"} className="flex items-start mr-4 opacity-50 h-fit">
            <Image src={Logo} alt="Supermemory logo" width={40} height={40} />
          </Link>

          <Tab key={0} setPosition={setPosition}>
            <Link className="w-full h-full" href={"/home"}>
              Home
            </Link>
          </Tab>
          <Tab setPosition={setPosition}>
            <Link className="w-full h-full" href={"/#use-cases"}>
              Use Cases
            </Link>
          </Tab>
          <Tab setPosition={setPosition}>
            <Link className="w-full h-full" href={"/#features"}>
              Features
            </Link>
          </Tab>

          <Link
            href="https://www.youtube.com/watch?v=bNlGhOuQ8ls"
            className="inline-flex gap-x-2 justify-start items-start py-3 px-5 ml-3 w-full rounded-3xl border duration-200 sm:w-auto group bg-page-gradient border-white/30 text-md font-geistSans hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100"
          >
            Youtube
            <div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
              <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
              <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>

          <Cursor position={position} />
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default CombinedNavbar;
