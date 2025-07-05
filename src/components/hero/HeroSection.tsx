import { Text, Heading, Flex } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import myProfile from "../../assets/WhatsApp Image 2025-07-05 at 19.22.58 (1).png";

import HeroDetails from "./HeroDetails";

export default function HeroSection() {
  return (
    <Flex direction="column" align="center" id="hero" className="mt-15">
      <Avatar.Root className="relative w-48 h-48 p-[4px] rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-white/10 shadow-xl mb-5">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Avatar.Image
            src={myProfile}
            alt="Profile image"
            className="w-full h-full object-cover"
          />
          <Avatar.Fallback className="absolute inset-0 flex items-center justify-center bg-sky-600 text-white text-xl font-semibold">
            Very Lucky
          </Avatar.Fallback>
        </div>
      </Avatar.Root>

      <Heading as="h1" weight="bold" align="right" className="pb-5">
        Hi, I'm{" "}
        <Text className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Very Lucky
        </Text>
      </Heading>

      <Text as="p" size="5" className="text-slate-200">
        I'm a frontend developer with a strong foundation in building responsive
        and modern web applications using React, Tailwind CSS, JavaScript, HTML,
        and CSS. I also explore backend technologies like Node.js, Express, and
        PostgreSQL, and enjoy writing tests with Jest. Although I'm early in my
        journey with 1 year of hands-on experience, I'm always learning,
        building, and pushing myself to grow as a developer.
      </Text>

      <HeroDetails />
    </Flex>
  );
}
