"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const techStack = [
  {
    category: "Frontend",
    tools: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Bootstrap", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    tools: ["Node.js", "Express.js", "Laravel", "PHP", "Socket.io"],
  },
  {
    category: "Database",
    tools: ["MySQL", "MariaDB"],
  },
  {
    category: "Cloud & Deployment",
    tools: ["Supabase", "Firebase", "Vercel", "Netlify"],
  },
  {
    category: "Design",
    tools: ["Figma", "Framer", "Canva"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="w-full bg-white py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-20"
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
              className="text-5xl font-geist font-black uppercase tracking-tighter text-zinc-950 sm:text-6xl lg:text-7xl leading-none"
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
              <span className="text-zinc-950 font-semibold">frontend and backend development</span>,
              while continuously refining my design intuition to create meaningful work.
            </motion.p>
          </div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="flex flex-col gap-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Tech Stack
            </h3>

            <div className="flex flex-col gap-8 divide-y divide-zinc-100">
              {techStack.map((group, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 pt-8 first:pt-0">
                  {/* Label Kategori */}
                  <div className="w-full sm:w-44 shrink-0">
                    <span className="text-sm font-semibold text-zinc-950 tracking-tight">
                      {group.category}
                    </span>
                  </div>

                  {/* Daftar Tech */}
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border border-zinc-200 text-zinc-700 bg-zinc-50 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
