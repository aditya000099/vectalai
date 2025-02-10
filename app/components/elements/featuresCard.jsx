"use client";

import { cn } from "../../../lib/utils";
import { useRef } from "react";
import { MessageSquare, ListChecks, BrainCircuit } from "lucide-react"; // Replace with your desired icons

export const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare className="w-5 h-5" />, // You can choose different icons here
      title: "Intelligent AI Assistant",
      desc: "Get instant answers, generate ideas, and brainstorm solutions with our powerful AI agent.Insightful support on the spot.",
    },
    {
      icon: <ListChecks className="w-5 h-5" />, // You can choose different icons here
      title: "Integrated Tasks",
      desc: "Seamlessly organize your tasks, projects, and deadlines in a flexible, integrated planner. Stay focused and track your progress effortlessly.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />, // You can choose different icons here
      title: "Smart Knowledge Organization",
      desc: "Create a central hub for all your notes, documents, and resources. Connect ideas, build relationships, and gain deeper insights into your work.",
    },
  ];

  const GlareCard = ({ children, className }) => {
    const isPointerInside = useRef(false);
    const refElement = useRef(null);
    const state = useRef({
      glare: {
        x: 50,
        y: 50,
      },
      background: {
        x: 50,
        y: 50,
      },
      rotate: {
        x: 0,
        y: 0,
      },
    });
    const containerStyle = {
      "--m-x": "50%",
      "--m-y": "50%",
      "--r-x": "0deg",
      "--r-y": "0deg",
      "--bg-x": "50%",
      "--bg-y": "50%",
      "--duration": "300ms",
      "--foil-size": "100%",
      "--opacity": "0",
      "--radius": "23px",
      "--easing": "ease",
      "--transition": "var(--duration) var(--easing)",
    };

    const backgroundStyle = {
      "--step": "5%",
      "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
      "--pattern": "var(--foil-svg) center/100% no-repeat",
      "--rainbow":
        "repeating-linear-gradient( 0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat",
      "--diagonal":
        "repeating-linear-gradient( 128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12% ) var(--bg-x) var(--bg-y)/300% no-repeat",
      "--shade":
        "radial-gradient( farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",
      "--hero-gradient":
        "radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, 0.1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(120, 119, 198, 0.15),transparent)",

      backgroundBlendMode: "hue, hue, hue, overlay",
    };

    const updateStyles = () => {
      if (refElement.current) {
        console.log(state.current);
        const { background, rotate, glare } = state.current;
        refElement.current?.style.setProperty("--m-x", `${glare.x}%`);
        refElement.current?.style.setProperty("--m-y", `${glare.y}%`);
        refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
        refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
        refElement.current?.style.setProperty("--bg-x", `${background.x}%`);
        refElement.current?.style.setProperty("--bg-y", `${background.y}%`);
      }
    };
    return (
      <div
        style={containerStyle}
        className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-full h-full"
        ref={refElement}
        onPointerMove={(event) => {
          const rotateFactor = 0.4;
          const rect = event.currentTarget.getBoundingClientRect();
          const position = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          };
          const percentage = {
            x: (100 / rect.width) * position.x,
            y: (100 / rect.height) * position.y,
          };
          const delta = {
            x: percentage.x - 50,
            y: percentage.y - 50,
          };

          const { background, rotate, glare } = state.current;
          background.x = 50 + percentage.x / 4 - 12.5;
          background.y = 50 + percentage.y / 3 - 16.67;
          rotate.x = -(delta.x / 3.5);
          rotate.y = delta.y / 2;
          rotate.x *= rotateFactor;
          rotate.y *= rotateFactor;
          glare.x = percentage.x;
          glare.y = percentage.y;

          updateStyles();
        }}
        onPointerEnter={() => {
          isPointerInside.current = true;
          if (refElement.current) {
            setTimeout(() => {
              if (isPointerInside.current) {
                refElement.current?.style.setProperty("--duration", "0s");
              }
            }, 300);
          }
        }}
        onPointerLeave={() => {
          isPointerInside.current = false;
          if (refElement.current) {
            refElement.current.style.removeProperty("--duration");
            refElement.current?.style.setProperty("--r-x", `0deg`);
            refElement.current?.style.setProperty("--r-y", `0deg`);
          }
        }}
      >
        <div className="h-full Bg-transparent border-[0.1px] border-white/20 dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)]  hover:[--opacity:0.12] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden">
          <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
            <div className={cn("h-full w-full bg-hero-gradient", className)}>
              {children}
            </div>
          </div>
          <div className="w-full pb-10 bg-glass-gradient h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" />
          <div
            className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_hue_overlay] [background:var(--hero-gradient),_var(--rainbow),var(--diagonal),_var(--shade)] relative after:content-[''] after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-exclusion after:[background-size:var(--foil-size),_200%_400%,_800%,_200%] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]"
            style={{ ...backgroundStyle, opacity: "10%" }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="relative z-20 pb-14">
      <div className="px-4 mx-auto max-w-screen-xl text-gray-400 md:px-8 lg:px-0">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          {/* <div className="relative z-10">
            <h3 className="mt-4 text-3xl font-normal tracking-tighter text-gray-200 sm:text-4xl md:text-5xl font-geist">
              Vectal: AI-Powered Productivity
            </h3>
          </div>
          <div
            className="absolute inset-0 mx-auto max-w-xs h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div> */}
        </div>
        <div className="relative z-20 mt-[4rem]">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <GlareCard key={`l-${idx}`}>
                <li
                  key={idx}
                  className="z-20 transform-gpu space-y-3 rounded-xl border  border-white/10 bg-transparent/20 p-4 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
                >
                  <div className="w-fit transform-gpu rounded-full p-4 text-orange-600 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                    {item.icon}
                  </div>
                  <h4 className="text-[1.4rem] font-bold tracking-tighter text-gray-300 font-geist">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[1rem]">{item.desc}</p>
                </li>
              </GlareCard>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
