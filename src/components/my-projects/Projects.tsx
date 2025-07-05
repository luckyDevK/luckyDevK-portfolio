import { Flex } from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";
import hangmanPreview from "../../assets/project-img-preview/Screenshot from 2025-07-05 13-58-30.png";
import mealFinderPreview from "../../assets/project-img-preview/Screenshot from 2025-07-05 13-58-56.png";
import wanderSpacePreview from "../../assets/project-img-preview/Screenshot from 2025-07-05 13-57-03.png";
import type { ProjectCardProps } from "./ProjectCard";

const projectS: ProjectCardProps[] = [
  {
    title: "WanderSpace fullstack app",
    alt: "WanderSpace",
    desc: "SW",
    projectUrl: "https://wander-space-client.vercel.app/",
    src: wanderSpacePreview,
    techs: ["javascript", "react", "tailwind", "html"],
    githubLink: "https://github.com/luckyDevK/WanderSpace",
  },
  {
    title: "Hangman-Game-React-js",
    alt: "Hangman-Game",
    desc: "SW",
    projectUrl: "https://hangman-game-react-js-lilac.vercel.app/",
    src: hangmanPreview,
    techs: ["javascript", "react", "tailwind", "html"],
    githubLink: "https://github.com/luckyDevK/Hangman-Game-React-js",
  },
  {
    title: "Meal-finder-React-js",
    alt: "Meal-Finder",
    desc: "SW",
    projectUrl: "https://meal-finder-react-js.vercel.app/",
    src: mealFinderPreview,
    techs: ["javascript", "react", "tailwind", "html"],
    githubLink: "https://github.com/luckyDevK/meal-finder-react-js",
  },
];

export default function Projects() {
  return (
    <Flex
      wrap="wrap"
      className="w-full"
      direction={{ md: "row", initial: "column" }}
      gap="7"
    >
      {projectS.map((project) => (
        <ProjectCard
          alt={project.alt}
          desc={project.desc}
          projectUrl={project.projectUrl}
          src={project.src}
          techs={project.techs}
          title={project.title}
          githubLink={project.githubLink}
        />
      ))}
    </Flex>
  );
}
