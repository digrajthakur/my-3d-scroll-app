import Image from "next/image";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skill/Skills';
import Project from './components/Project/ProjectsSection';
import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="main-box flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <Hero />
       <About />
       <Skills />
       <Project />
       <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
