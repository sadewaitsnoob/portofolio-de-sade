"use client";

import { motion, type Variants } from "framer-motion";

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Social Link Component ────────────────────────────────────────────────────

interface SocialLinkProps {
  href: string;
  label: string;
}

function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-500 transition-colors duration-300 hover:text-zinc-950 py-1"
    >
      {label}
      {/* Russell Numo–style underline grow from left */}
      <span className="absolute left-0 bottom-0 h-px w-0 bg-zinc-950 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

// ─── Main Contact Component ───────────────────────────────────────────────────

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white overflow-hidden scroll-mt-20">
      {/* ── Top divider ── */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "200px" }}
        style={{ originX: 0 }}
        className="mx-auto max-w-7xl px-6 md:px-12"
      >
        <div className="h-px w-full bg-zinc-200" />
      </motion.div>

      {/* ── Contact Body ── */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 sm:py-24 md:py-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
          className="flex flex-col gap-10 sm:gap-16"
        >
          {/* Section label */}
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400"
          >
            03 — Contact
          </motion.span>

          {/* ── Big CTA Headline (Russell Numo–style: typographic-first, large) ── */}
          <div className="flex flex-col gap-0 overflow-hidden">
            <motion.h2
              variants={itemVariants}
              className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-geist font-black uppercase tracking-tighter text-zinc-950 leading-[0.9]"
            >
              Let&apos;s work
            </motion.h2>
            <motion.h2
              variants={itemVariants}
              className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-geist font-black uppercase tracking-tighter text-zinc-950 leading-[0.9]"
            >
              together.
            </motion.h2>
          </div>

          {/* ── Bottom row: description + email CTA ── */}
          <div className="flex flex-col gap-8 md:gap-10 md:flex-row md:items-end md:justify-between">
            {/* Left: short description */}
            <motion.p
              variants={itemVariants}
              className="max-w-sm text-sm sm:text-base leading-relaxed text-zinc-500 md:text-lg"
            >
              Have a project in mind or just want to say hello? My inbox is
              always open — feel free to reach out.
            </motion.p>

            {/* Right: email link — Russell Numo style large underline CTA */}
            <motion.a
              variants={itemVariants}
              href="mailto:saddewaaa1509@gmail.com"
              className="group relative inline-block text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-geist font-black uppercase tracking-tight text-zinc-950 break-all sm:break-normal"
            >
              saddewaaa1509@gmail.com
              {/* animated underline */}
              <span className="hidden sm:block absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-100 bg-zinc-950 transition-transform duration-500 group-hover:scale-x-0" />
              <span className="hidden sm:block absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 bg-zinc-400 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="sm:hidden block h-[2px] w-full bg-zinc-950 mt-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "200px" }}
        style={{ originX: 0 }}
        className="mx-auto max-w-7xl px-6 md:px-12"
      >
        <div className="h-px w-full bg-zinc-200" />
      </motion.div>

      {/* ── Footer / Bottom bar — mirrors Russell Numo's meta bottom bar ── */}
      <footer className="mx-auto max-w-7xl px-6 md:px-12 py-8 md:py-10 pb-16 sm:pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Left: Social links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <SocialLink href="https://github.com/" label="GitHub" />
            <SocialLink href="https://linkedin.com/" label="LinkedIn" />
            <SocialLink href="https://instagram.com/" label="Instagram" />
            <SocialLink href="https://behance.net/" label="Behance" />
          </motion.div>

          {/* Right: "Open to work" pulsing dot + copyright */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between gap-6 sm:justify-end"
          >
            {/* Pulsing "Open to work" — exact Russell Numo detail */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Open to work
              </span>
            </div>

            {/* Copyright */}
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              © {new Date().getFullYear()} Sadewa
            </span>
          </motion.div>
        </motion.div>
      </footer>
    </section>
  );
}
