import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Preloader />
      <Hero />
    </div>
  );
}
