import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Text, Button } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import Card from "../UI/Card";

interface Thumbnail {
  src: string;
  alt: string;
}

interface ProjectCardProps extends Thumbnail {
  title: string;
  desc: string;
  techs: string[];
  projectUrl: string;
}

type ProjectLinkProps = Pick<ProjectCardProps, "projectUrl">;

//https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"

function ProjectLink({ projectUrl }: ProjectLinkProps) {
  return (
    <Flex gap="5" className="py-4">
      <a
        href="https://github.com/your-repo"
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
        className="w-1/2 gradient-dark-blue text-white rounded-md py-2 px-4 font-semibold flex items-center justify-center gap-2 transition-all hover:brightness-110  shadow-md"
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
}: ProjectCardProps) {
  return (
    <Card centered={false} className="w-full" cardRole="show-projects">
      <Avatar.Root className="w-full">
        <Avatar.Image
          alt="Projects"
          src={src}
          className="size-full max-h-70 object-cover"
        />
        <Avatar.Fallback
          className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
          delayMs={600}
        >
          {alt}
        </Avatar.Fallback>
      </Avatar.Root>
      <div className="px-5">
        <Heading as="h3" weight="bold" size="5" align="left">
          {title}
        </Heading>
        <Text className="pt-5" as="p" align="left" wrap="balance">
          {desc}
        </Text>
        <Flex gap="3" wrap="wrap" className="py-5">
          {techs.map((tech) => (
            <button className="text-blue-100 bg-blue-500/20 px-4 py-1.5 rounded-full font-medium tracking-wide shadow-sm transition-all duration-300 hover:bg-blue-500/30 hover:text-white hover:shadow-md">
              {tech}
            </button>
          ))}
        </Flex>
        <ProjectLink projectUrl={projectUrl} />
      </div>
    </Card>
  );
}
