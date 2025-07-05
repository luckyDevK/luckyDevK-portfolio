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
        size="4"
        className="flex items-center justify-center gap-30 flex-col text-center text-slate-100 md:container md:mx-auto md:px-20 px-5"
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
