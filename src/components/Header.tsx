"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 mix-blend-difference text-white"
      >
        <a href="#" className="text-xl font-bold uppercase tracking-widest">
          SDW
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="md:hidden uppercase text-sm font-bold tracking-widest cursor-pointer py-1 px-2"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950 text-white flex flex-col justify-between px-8 py-24 md:hidden"
          >
            {/* Nav Links */}
            <nav className="flex flex-col gap-8 mt-8">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
                Navigation
              </span>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-4xl font-geist font-black uppercase tracking-tight hover:text-zinc-400 transition-colors"
              >
                01 About
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="text-4xl font-geist font-black uppercase tracking-tight hover:text-zinc-400 transition-colors"
              >
                02 Projects
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-4xl font-geist font-black uppercase tracking-tight hover:text-zinc-400 transition-colors text-white"
              >
                03 Contact
              </a>
            </nav>

            {/* Bottom Meta in Mobile Menu */}
            <div className="flex flex-col gap-4 border-t border-zinc-800 pt-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Open to work
                </span>
              </div>
              <a
                href="mailto:saddewaaa1509@gmail.com"
                className="text-sm font-semibold text-zinc-300 break-all"
              >
                saddewaaa1509@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
