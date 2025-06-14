import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Text, Button } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";

import Card from "../UI/Card";

export default function Projects() {
  return (
    <Flex
      wrap="wrap"
      className="w-full"
      direction={{ md: "row", initial: "column" }}
      gap="4"
    ></Flex>
  );
}
