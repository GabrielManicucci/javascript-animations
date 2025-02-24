"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const EventClicks = () => {
  const clickContainer = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: clickContainer });

  const onClickAniamtion = contextSafe(
    ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
      gsap.to(currentTarget, {
        scale: 1.5,
        rotate: "+=360",
      });
    }
  );

  return (
    <div className="mx-auto my-14" ref={clickContainer}>
      <div
        onClick={onClickAniamtion}
        className="w-20 h-20 flex items-center justify-center bg-blue-300 rounded-2xl boxClick text-black hover:cursor-pointer"
      >
        <p>Click me!</p>
      </div>
    </div>
  );
};
