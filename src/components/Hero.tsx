import Marquee from "./Marquee";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Marquee Lapis */}
      <div className="absolute inset-0 flex flex-col justify-center -space-y-12 sm:-space-y-24 opacity-100 pointer-events-none">
        <Marquee text="UI/UX DESIGNER • FRONTEND DEVELOPER •" />
        <Marquee text="CREATIVE • FRONTEND • BACKEND •" reverse />
      </div>

      {/* Foto + SADEWA */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="relative w-48 sm:w-56 md:w-64 aspect-3/4 rounded-lg bg-zinc-200 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
          <Image
            src="/photo_fixed.JPG"
            alt="Sadewa"
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            priority
          />
        </div>

        <h1 className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-geist font-black uppercase tracking-tighter text-zinc-950 text-center leading-none">
          SADEWA
        </h1>
      </div>
    </section>
  );
}