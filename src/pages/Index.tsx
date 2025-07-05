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
      <Header />
      <Section
        pt="0"
        px="5"
        size="4"
        className="flex items-center justify-center flex-col text-center text-slate-100"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Section>
    </>
  );
}
