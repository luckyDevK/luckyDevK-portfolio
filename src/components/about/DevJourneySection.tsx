import { Code, Zap, Palette } from "lucide-react";
import { Text, Flex, Heading } from "@radix-ui/themes";
import Card from "../UI/Card";

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
      <Flex
        aria-label="region"
        direction={{ md: "row", initial: "column" }}
        gap="5"
        className="mt-10 w-full"
      >
        <FeatureCard
          icon={<Code />}
          title="Clean Code"
          text="Writing maintainable, scalable, and efficient code following best
          practices."
        />
        <FeatureCard
          icon={<Palette />}
          title="UI/UX Design"
          text="Creating intuitive and beautiful user interfaces with attention to detail."
        />
        <FeatureCard
          icon={<Zap />}
          title="Performance"
          text="Optimizing applications for speed and delivering exceptional user experiences."
        />
      </Flex>
      <Card
        centered={false}
        direction="column"
        className=" md:px-10 px-6 py-8 w-full mt-10"
      >
        <Heading
          weight={"bold"}
          align={{ md: "left", initial: "center" }}
          size={"5"}
        >
          My Journey
        </Heading>
        <Flex
          direction={{ md: "row", initial: "column" }}
          justify={"between"}
          gap={"5"}
        >
          <Flex
            direction={"column"}
            className="max-w-xl"
            gap={{ md: "7", initial: "5" }}
          >
            <Text align={{ md: "left", initial: "center" }}>
              With several years of experience in web development, I've worked
              on diverse projects ranging from small business websites to
              large-scale applications. I'm constantly learning and adapting to
              new technologies to stay at the forefront of web development.
            </Text>
            <Text align={{ md: "left", initial: "center" }}>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community.
            </Text>
          </Flex>

          <Flex direction="column" gap="4" className="w-full lg:max-w-md">
            {careerStats.map((stat, index) => (
              <Flex
                key={index}
                justify="between"
                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Text className="font-medium flex items-center">
                  {stat.label}
                </Text>
                <Text weight="bold" className={`${stat.color} text-xl`}>
                  {stat.value}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
