"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-24 md:py-44 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          className="flex flex-col gap-16 md:gap-20"
        >
          {/* Header */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <motion.span
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400"
            >
              01 — About Me
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-geist font-black uppercase tracking-tighter text-zinc-950 sm:text-6xl lg:text-7xl leading-none"
            >
              Crafting ideas into digital experiences.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-zinc-500 md:text-lg"
            >
              I&apos;m Sadewa — a UI/UX Designer and Fullstack Developer based in Indonesia.
              I believe that great design isn&apos;t just about aesthetics, but also about how
              a product feels and functions for its users.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-zinc-500 md:text-lg"
            >
              I&apos;m currently actively learning to grow my skills in{" "}
              <span className="text-zinc-950 font-semibold">backend development</span>,
              while continuously refining my design intuition to create meaningful work.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}