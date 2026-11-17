"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  placeholderColor: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "project-1",
    number: "01",
    title: "E-Commerce",
    category: "Fullstack Web Application",
    year: "2025",
    placeholderColor: "bg-zinc-900",
  },
  {
    id: "project-2",
    number: "02",
    title: "SaaS Analytics",
    category: "Product Design",
    year: "2024",
    placeholderColor: "bg-stone-900",
  },
  {
    id: "project-3",
    number: "03",
    title: "Creative Agency",
    category: "Interactive Experience",
    year: "2024",
    placeholderColor: "bg-neutral-900",
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

  // EXTREME Parallax values
  // Gambar akan bergerak sangat jauh ke bawah/atas (dari -35% ke +35%)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-35%", "35%"]);
  // Teks judul akan bergerak berlawanan arah dengan ekstrem
  const textY = useTransform(scrollYProgress, [0, 1], ["60%", "-60%"]);
  // Nomor urut bergerak sedikit lebih lambat
  const numberY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  const isEven = index % 2 === 1;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col lg:items-center gap-12 lg:gap-24 ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:justify-between py-20 lg:py-40 min-h-[80vh] overflow-visible`}
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

      {/* Visual Container with Extreme Window Parallax */}
      <div className="w-full lg:w-[55%] relative z-10">
        <div className="group relative w-full aspect-[4/3] overflow-hidden bg-zinc-200">
          {/* 
            Container gambar dibuat sangat tinggi (170%) agar punya ruang 
            untuk digeser -35% ke +35% tanpa terpotong ujungnya.
          */}
          <motion.div
            style={{ y: imageY }}
            className={`absolute top-[-35%] left-0 w-full h-[170%] flex items-center justify-center ${project.placeholderColor}`}
          >
            {/* Tekstur/Placeholder Minimalist Brutal */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:24px_24px] mix-blend-overlay" />
            <div className="relative flex flex-col items-center justify-center opacity-30 text-white">
              <span className="text-2xl font-geist font-light tracking-[0.5em] uppercase mb-4">
                Preview
              </span>
              <span className="text-6xl font-geist font-black tracking-widest">
                {project.id}
              </span>
            </div>
          </motion.div>
          
          {/* Overlay Hover Effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
        </div>
      </div>

      {/* Extreme Parallax Typography */}
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

          <h3 className="text-5xl sm:text-6xl lg:text-7xl font-geist font-black uppercase tracking-tight text-zinc-950 leading-[0.9] hover:text-zinc-600 transition-colors duration-500 cursor-pointer">
            {project.title}
          </h3>

          <div className="mt-8">
            <a
              href={`#${project.id}`}
              onClick={(e) => e.preventDefault()}
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
        <div className="flex flex-col gap-4 mb-32">
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
