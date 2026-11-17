"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "npc-quester",
    number: "01",
    title: "NPC Quester",
    category: "Fullstack Add-On",
    year: "2025",
    image: "/npc-quester.png",
    link: "https://github.com/sadewaitsnoob/npc_quester",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Smooth Parallax values
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  const isEven = index % 2 === 1;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col lg:items-center gap-12 lg:gap-24 ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:justify-between py-16 lg:py-32 min-h-[70vh] overflow-visible`}
    >
      {/* Background Parallax Number */}
      <motion.div 
        style={{ y: numberY }}
        className={`absolute hidden lg:block text-[20vw] font-geist font-black font-bold text-zinc-100 z-0 select-none ${
          isEven ? "left-0" : "right-0"
        } opacity-50`}
      >
        {project.number}
      </motion.div>

      {/* Visual Container with Interactive Thumbnail Link (Full 16:9, No Crop) */}
      <motion.div 
        style={{ y: imageY }}
        className="w-full lg:w-[55%] relative z-10"
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative w-full overflow-hidden rounded-2xl bg-zinc-950 shadow-2xl border border-zinc-200/60 cursor-pointer"
        >
          {/* Full Image Preview - Exactly 2560x1440, No Crop */}
          <Image
            src={project.image}
            alt={project.title}
            width={2560}
            height={1440}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
          
          {/* Hover Overlay & Interactive Badge */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 text-zinc-950 font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-md transform translate-y-2 group-hover:translate-y-0">
              View on GitHub ↗
            </span>
          </div>
        </a>
      </motion.div>

      {/* Parallax Typography */}
      <motion.div
        style={{ y: textY }}
        className="w-full lg:w-[40%] flex flex-col justify-center relative z-20 px-4 sm:px-0"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 text-zinc-400 text-sm font-semibold uppercase tracking-[0.3em]">
            <span>{project.category}</span>
            <span>—</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-geist font-black uppercase tracking-tight text-zinc-950 leading-[0.9] hover:text-zinc-600 transition-colors duration-500">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </h3>

          <div className="mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-950"
            >
              <span className="border-b-2 border-transparent group-hover:border-zinc-950 transition-colors pb-1">
                Explore Project
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 group-hover:bg-zinc-950 group-hover:text-white transition-all duration-300">
                ↗
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white py-24 sm:py-36 overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Minimalist Brutal Header */}
        <div className="flex flex-col gap-4 mb-20 lg:mb-32">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
            02 — Selected Works
          </span>
          <h2 className="text-6xl sm:text-8xl lg:text-[9rem] font-geist font-black uppercase tracking-tighter text-zinc-950 leading-[0.85]">
            Featured <br /> Projects
          </h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
