import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import Card from "../UI/Card";

interface Thumbnail {
  src: string;
  alt: string;
}

export interface ProjectCardProps extends Thumbnail {
  title: string;
  desc: string;
  techs: string[];
  githubLink: string;
  projectUrl: string;
}

type ProjectLinkProps = Pick<ProjectCardProps, "projectUrl" | "githubLink">;

function ProjectLink({ projectUrl, githubLink }: ProjectLinkProps) {
  return (
    <Flex gap="5" className="pt-4">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 bg-[#24292F] text-white rounded-md py-2 px-4 font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[#1b1f23] shadow-md"
      >
        <GitHubLogoIcon width="1.3rem" height="1.5rem" />
        Code
      </a>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 gradient-dark-blue text-white rounded-md py-2 px-4 font-semibold flex items-center justify-center gap-2 transition-all hover:brightness-110 shadow-md"
      >
        <ExternalLink width="1.3rem" height="1.5rem" />
        Live Demo
      </a>
    </Flex>
  );
}

export default function ProjectCard({
  src,
  alt,
  title,
  desc,
  projectUrl,
  techs,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card
      direction="column"
      centered={false}
      className="max-w-96 flex flex-col justify-between"
      cardRole="show-projects"
    >
      <Avatar.Root className="w-full">
        <Avatar.Image
          alt={alt}
          src={src}
          className="object-cover w-full h-48 rounded-md"
        />
        <Avatar.Fallback
          className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
          delayMs={600}
        >
          {alt}
        </Avatar.Fallback>
      </Avatar.Root>

      <Flex
        direction="column"
        justify="between"
        className="flex-1 px-5 pb-5 pt-4"
      >
        <div>
          <Heading as="h3" weight="bold" size="5" align="left">
            {title}
          </Heading>
          <Text className="pt-3" as="p" align="left" wrap="balance">
            {desc}
          </Text>
          <Flex gap="3" wrap="wrap" className="py-4">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-blue-100 capitalize bg-blue-500/20 px-4 py-1.5 rounded-full font-medium tracking-wide shadow-sm transition-all duration-300 hover:bg-blue-500/30 hover:text-white hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </Flex>
        </div>

        <ProjectLink projectUrl={projectUrl} githubLink={githubLink} />
      </Flex>
    </Card>
  );
}
