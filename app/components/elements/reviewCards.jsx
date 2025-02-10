"use client";
import { CardStack } from "../../../components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-amber-700/[0.2] text-amber-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sarah L.",
    designation: "Project Manager",
    content: (
      <p>
        Vectal has completely transformed my workflow.{" "}
        <Highlight>I'm now able to manage projects with ease</Highlight> and
        keep my team aligned. The integrated AI assistant is a game-changer!
      </p>
    ),
  },
  {
    id: 1,
    name: "David K.",
    designation: "Software Developer",
    content: (
      <p>
        I used to spend hours searching for information. Now, with Vectal's AI
        Agent, <Highlight>I get instant answers</Highlight> and can focus on
        coding. It's like having a super-smart research assistant built right
        in!
      </p>
    ),
  },
  {
    id: 2,
    name: "Emily R.",
    designation: "Marketing Specialist",
    content: (
      <p>
        Vectal helps me stay organized and focused.{" "}
        <Highlight>The integrated task planner</Highlight> and AI-driven
        prioritization help me conquer my to-do list without feeling
        overwhelmed. My productivity has skyrocketed!
      </p>
    ),
  },
  {
    id: 3,
    name: "Michael B.",
    designation: "Founder & CEO",
    content: (
      <p>
        As a founder, time is my most valuable asset. Vectal lets me and my team
        save time, reduce stress, and{" "}
        <Highlight>unlock peak productivity</Highlight>, it's like an all-in-one
        assistant.
      </p>
    ),
  },
];
