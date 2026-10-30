"use client";

import Marquee from "react-fast-marquee";
import type { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export default function InfiniteMarquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  return (
    <Marquee
      speed={speed}
      direction={direction}
      pauseOnHover={pauseOnHover}
      autoFill
      gradient={false}
    >
      {children}
    </Marquee>
  );
}