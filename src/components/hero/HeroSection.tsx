import { Text, Heading } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";

import HeroDetails from "./HeroDetails";
import ContainerSec from "../ContainerSec";

export default function HeroSection() {
  return (
    <ContainerSec id="hero" className="min-h-dvh">
      {/* <AnimatedBg /> */}

      <Avatar.Root className=" mb-10 relative w-50 aspect-square self-center rounded-2xl border-4 border-gray-200 shadow-xl overflow-hidden">
        <Avatar.Image
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          alt="profile img"
          className="w-full h-full object-cover"
        />
        <Avatar.Fallback className="absolute inset-0 flex items-center justify-center text-2xl bg-sky-600 text-white font-medium">
          Photo profile
        </Avatar.Fallback>
      </Avatar.Root>

      <Heading as="h1" weight="bold" align="right" className="pb-5">
        Hi, I'm Very Lucky
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
    </ContainerSec>
  );
}
