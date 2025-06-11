import { Code, Zap, Palette } from "lucide-react";
import { Heading, Text, Container } from "@radix-ui/themes";

import FeatureCard from "./FeatureCard";
import ContainerSec from "../ContainerSec";

export default function About() {
  return (
    <ContainerSec className="justify-center">
      <Heading className="text-3xl font-bold  mb-5">About Me</Heading>
      <Text as="p" className="text-lg">
        I'm a frontend developer with a strong focus on building responsive,
        user-friendly interfaces using modern web technologies like React,
        JavaScript, and Tailwind CSS. Over the past year, I've been committed to
        learning, building real-world projects, and writing clean, maintainable
        code. I also explore backend development with Node.js and PostgreSQL to
        deepen my full-stack skills.
      </Text>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
        <FeatureCard
          icon={<Code className="w-7 md:8 aspect-square  text-white" />}
          title="Clean Code"
          text="Writing maintainable, scalable, and efficient code following best
          practices."
        />
        <FeatureCard
          icon={<Palette className="w-7 md:8 aspect-square text-white" />}
          title="UI/UX Design"
          text="Creating intuitive and beautiful user interfaces with attention to detail."
        />
        <FeatureCard
          icon={<Zap className="w-7 md:8 aspect-square text-white" />}
          title="Performance"
          text="Optimizing applications for speed and delivering exceptional user experiences."
        />
      </div>
      <FeatureCard
        title="My Journey"
        text={`As a passionate frontend developer with 1 year of hands-on experience, I've spent my time honing skills in building responsive, accessible, and modern user interfaces using technologies like JavaScript, HTML, CSS, React, and Tailwind CSS. I also have experience with testing using Jest and a foundational understanding of backend development using Node.js, Express, and PostgreSQL. While I'm currently seeking employment, I continuously challenge myself by working on personal projects, contributing to open-source code, and learning new tools to sharpen my development workflow. I believe that consistent growth and curiosity are key to becoming a great developer.`}
        className="mt-25  text-left px-5"
      >
        <div className="flex flex-col gap-5 text-center">
          <Text as="p">
            💼 <strong>Projects Completed</strong>
            <br /> 10+ personal and collaborative
          </Text>
          <Text as="p">
            ⏳ <strong>Years of Experience:</strong> <br /> 1+
          </Text>
          <Text as="p">
            🛠️ <strong>Tech Stack:</strong> <br /> React, Tailwind, Node.js,
            PostgreSQL, Jest
          </Text>
        </div>
      </FeatureCard>
    </ContainerSec>
  );
}
