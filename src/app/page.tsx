import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Preloader />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
