import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <LoadingScreen />
      <Navbar />
      <Hero />
      {/* This wrapper ensures all sections after Hero scroll OVER the sticky Hero */}
      <div className="relative z-10">
        <About />
        <div className="bg-[#0A0A0B]">
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}