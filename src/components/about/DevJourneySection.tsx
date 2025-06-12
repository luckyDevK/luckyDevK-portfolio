import { Code, Zap, Palette } from "lucide-react";
import { Text } from "@radix-ui/themes";

import FeatureCard from "./FeatureCard";

interface ICareerStats {
  label: string;
  value: string;
  color: string;
}

export default function DevJourneySection() {
  const careerStats: ICareerStats[] = [
    { label: "Projects Completed", value: "25+", color: "text-purple-400" },
    { label: "Experience", value: "1+ years", color: "text-pink-400" },
    { label: "Tech Tools Used", value: "10+", color: "text-blue-400" },
  ];
  return (
    <>
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
        {careerStats.map((career) => (
          <Text
            as="p"
            key={career.label}
            className="flex justify-between font-semibold"
          >
            {career.label}
            <span className={`font-bold text-xl ${career.color}`}>
              {career.value}
            </span>
          </Text>
        ))}
      </FeatureCard>
    </>
  );
}
