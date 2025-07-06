import { Flex, Heading, Text } from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";
import hangmanPreview from "../../assets/project-img-preview/Screenshot from 2025-07-05 13-58-30.png";
import mealFinderPreview from "../../assets/project-img-preview/Screenshot from 2025-07-05 13-58-56.png";
import wanderSpacePreview from "../../assets/project-img-preview/Screenshot from 2025-07-05 13-57-03.png";
import type { ProjectCardProps } from "./ProjectCard";

const projectS: ProjectCardProps[] = [
  {
    title: "WanderSpace Fullstack App",
    alt: "WanderSpace",
    desc: "A fullstack photo-sharing platform inspired by Unsplash. Users can explore, download, and manage images. Built with React, Node.js, Express, TypeScript, and MongoDB.",
    projectUrl: "https://wander-space-client.vercel.app/",
    src: wanderSpacePreview,
    techs: ["typescript", "react", "tailwind", "mongodb", "nodejs", "express"],
    githubLink: "https://github.com/luckyDevK/WanderSpace",
  },
  {
    title: "Hangman Game (React)",
    alt: "Hangman-Game",
    desc: "A classic Hangman word-guessing game built with React and Tailwind CSS. Features dynamic UI, responsive design, and smooth game logic. best for u",
    projectUrl: "https://hangman-game-react-js-lilac.vercel.app/",
    src: hangmanPreview,
    techs: ["html", "javascript", "react", "tailwind"],
    githubLink: "https://github.com/luckyDevK/Hangman-Game-React-js",
  },
  {
    title: "Meal Finder (React)",
    alt: "Meal-Finder",
    desc: "A meal recipe search app powered by TheMealDB API. Users can search meals by name and view recipe details. Built with React and Tailwind.",
    projectUrl: "https://meal-finder-react-js.vercel.app/",
    src: mealFinderPreview,
    techs: ["html", "javascript", "react", "tailwind"],
    githubLink: "https://github.com/luckyDevK/meal-finder-react-js",
  },
];

export default function Projects() {
  return (
    <Flex
      direction="column"
      align="center"
      gap="5"
      id="projects"
      className="md:w-[95%]"
    >
      <Heading size="7">Featured Projects</Heading>
      <Text size="4">A showcase of my recent work and personal projects</Text>
      <Flex className="mt-8" gap="7" justify={"center"} wrap={"wrap"}>
        {projectS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Flex>
    </Flex>
  );
}
