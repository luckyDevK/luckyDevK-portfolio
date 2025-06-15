import { Flex } from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Flex
      wrap="wrap"
      className="w-full"
      direction={{ md: "row", initial: "column" }}
      gap="4"
    >
      <ProjectCard />
    </Flex>
  );
}
