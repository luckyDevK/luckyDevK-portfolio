import { Section } from "@radix-ui/themes";

import Header from "../components/header/Header";
import Hero from "../components/hero/HeroSection";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/my-projects/Projects";
import Contact from "../components/contact/Contact";

export default function Index() {
  return (
    <>
      <Section pt="0" className="relative z-10">
        <Header />
        <div className="flex items-center justify-center gap-30 flex-col text-center text-slate-100 md:container md:mx-auto px-6">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Section>
    </>
  );
}
