"use client";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { EventClicks } from "./eventClicks";

export const IndexGsap = () => {
  const container = useRef(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".box", {
          rotate: 360,
          duration: 2,
        })
        .to(".greenBox", {
          x: 100,
          display: "block",

          rotate: 360,
          duration: 1,
        });
    },
    { scope: container }
  );

  return (
    <div className="mx-auto my-14">
      <h2 className="font-semibold text-3xl text-green-400">GSAP</h2>

      <div ref={container} className="p-20">
        <div className="box text-xl">Hello</div>
        <div className="mt-20 w-20 h-20 bg-green-400 rounded-2xl greenBox hidden"></div>
        <EventClicks />
      </div>
    </div>
  );
};
