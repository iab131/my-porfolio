"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function Box() {
  return (
    <div className=" w-full  flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      {/* Prevent text from being highlighted on hover */}
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20 cursor-default select-none")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 cursor-default select-none">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}
