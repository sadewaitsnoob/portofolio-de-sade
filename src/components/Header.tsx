"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 mix-blend-difference text-white"
    >
      <div className="text-xl font-bold uppercase tracking-widest">
        SDW
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
        <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </nav>
      <button className="md:hidden uppercase text-sm font-bold tracking-widest">
        Menu
      </button>
    </motion.header>
  );
}
