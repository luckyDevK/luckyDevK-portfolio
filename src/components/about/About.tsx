import { Heading, Text, Flex } from "@radix-ui/themes";
import DevJourneySection from "./DevJourneySection";

export default function About() {
  return (
    <Flex direction="column" align="center" id="about" className=" md:w-[90%]">
      <Heading size="7" className="pb-5">
        About{" "}
        <Text className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Me
        </Text>
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
    </Flex>
  );
}
