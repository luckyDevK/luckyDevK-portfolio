import { Heading, Text, Container } from "@radix-ui/themes";
import DevJourneySection from "./DevJourneySection";

import ContainerSec from "../ContainerSec";

export default function About() {
  return (
    <ContainerSec id="about" className="justify-center">
      <Heading size="7" className="pb-5">
        About Me
      </Heading>
      <Text as="p" size="5" className="pb-10">
        I'm a frontend developer with a strong focus on building responsive,
        user-friendly interfaces using modern web technologies like React,
        JavaScript, and Tailwind CSS. Over the past year, I've been committed to
        learning, building real-world projects, and writing clean, maintainable
        code. I also explore backend development with Node.js and PostgreSQL to
        deepen my full-stack skills.
      </Text>
      <DevJourneySection />
    </ContainerSec>
  );
}
