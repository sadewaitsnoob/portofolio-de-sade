import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Marquee Lapis */}
      <div className="absolute inset-0 flex flex-col justify-center -space-y-12 sm:-space-y-24 opacity-100 pointer-events-none">
        <Marquee text="UI/UX DESIGNER • FULLSTACK DEVELOPER •" />
        <Marquee text="CREATIVE • FRONTEND • BACKEND •" reverse />
      </div>

      {/* Foto Placeholder + SADEWA — teks menimpa bagian bawah placeholder */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="w-48 sm:w-56 md:w-64 aspect-[3/4] rounded-lg bg-zinc-200 flex items-center justify-center">
          <span className="text-sm font-medium text-zinc-500 tracking-wide">
            Photo here
          </span>
        </div>

        <h1 className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-geist font-black uppercase tracking-tighter text-zinc-950 text-center leading-none">
          SADEWA
        </h1>
      </div>
    </section>
  );
}