import { Text, Heading, Section, Flex } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import myProfile from "../../assets/WhatsApp Image 2025-07-05 at 19.22.58 (1).png";
import HeroDetails from "./HeroDetails";

export default function HeroSection() {
  return (
    <Section
      id="home"
      className="md:mt-20 md:w-[90%] mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      {/* Left: Text Content */}
      <Flex direction="column" gap={"5"} className="text-center md:text-left">
        <Heading as="h1" size="8" className="text-white font-bold">
          Hi, I'm{" "}
          <Text className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Very Lucky
          </Text>{" "}
          👋
        </Heading>

        <Text
          as="p"
          size="5"
          className="text-slate-300 leading-relaxed md:pr-40"
        >
          I'm a frontend developer with a strong foundation in building
          responsive and modern web applications using React, Tailwind CSS,
          TypeScript, and JavaScript. I also explore backend tools like Node.js
          and Express, and enjoy writing tests with Jest. I'm always learning
          and building to grow as a developer.
        </Text>

        <HeroDetails />
      </Flex>

      {/* Right: Profile Avatar */}
      <div className="relative w-45 aspect-square md:w-65 shrink-0">
        <div className="absolute md:-right-6 md:-bottom-6 md:scale-100 scale-x-125  top-5  w-full h-full rounded-2xl bg-white/10" />
        <Avatar.Root className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
          <Avatar.Image
            src={myProfile}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl"
          />
          <Avatar.Fallback className="absolute inset-0 flex items-center justify-center bg-sky-600 text-white text-xl font-semibold">
            Very Lucky
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </Section>
  );
}
