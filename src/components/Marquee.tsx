"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

export default function Marquee({ text, reverse = false }: MarqueeProps) {
  return (
    <div className="relative flex w-full overflow-hidden whitespace-nowrap py-2 select-none">
      <motion.div
        className="flex whitespace-nowrap text-[6rem] sm:text-[10rem] md:text-[14rem] font-display uppercase tracking-wider text-zinc-100"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
      </motion.div>
    </div>
  );
}
