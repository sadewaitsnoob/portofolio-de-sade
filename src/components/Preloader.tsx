"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Menggunakan motion value untuk animasi angka yang sangat mulus (60fps)
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // Nonaktifkan scroll restoration bawaan browser agar selalu kembali ke atas saat reload/restart
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      // Pastikan tetap di paling atas setelah rendering awal selesai
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 50);

      const handleBeforeUnload = () => {
        window.scrollTo(0, 0);
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  useEffect(() => {
    // Animasikan dari 0 ke 100 selama 2.5 detik dengan efek ease custom (memutar cepat lalu melambat di akhir)
    const controls = animate(count, 100, {
      duration: 2.5,
      ease: [0.33, 1, 0.68, 1], 
      onComplete: () => {
        // Tahan sedikit di 100% sebelum transisi keluar dan pastikan posisi tetap di atas
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }, 600);
      }
    });

    return () => controls.stop();
  }, [count]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white text-zinc-950"
        >
          <div className="text-5xl md:text-7xl font-bold tracking-tighter flex items-baseline">
            <motion.span>{rounded}</motion.span>
            <span className="text-2xl md:text-4xl">%</span>
          </div>
          <div className="absolute bottom-10 left-10 text-sm tracking-widest uppercase opacity-50">
            Loading Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
