import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Marquee Lapis */}
      <div className="absolute inset-0 flex flex-col justify-center -space-y-12 sm:-space-y-24 opacity-100 pointer-events-none">
        <Marquee text="UI/UX DESIGNER • FULLSTACK DEVELOPER •" />
        <Marquee text="CREATIVE • FRONTEND • BACKEND •" reverse />
      </div>

      {/* Konten Utama di Depan */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-7xl font-geist font-black uppercase tracking-tighter text-zinc-950 sm:text-9xl lg:text-[10rem] xl:text-[12rem] mt-12">
          SADEWA
        </h1>
        

      </div>
    </section>
  );
}
