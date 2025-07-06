import { Heading, Text, Grid, Flex } from "@radix-ui/themes";

import { icons } from "../../util/skillIcons";
import TechCard from "./TechCard";
import ContainerSec from "../ContainerSec";

export default function Skills() {
  return (
    <Flex direction="column" align="center" id="skills" className="w-full">
      <Heading size="7" weight="bold" highContrast>
        My{" "}
        <Text className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skills
        </Text>
      </Heading>

      <Text as="p" wrap="balance" className="pt-5" size="5">
        Technologies and tools I work with to bring ideas to life
      </Text>

      <Grid
        aria-label="Technology skills grid"
        columns="repeat(auto-fill, minmax(9.5rem, 1fr))"
        width="100%"
        maxWidth={"55rem"}
        gap="5"
        pt="6"
      >
        {icons.map((icon) => {
          const IconComp = icon.Icon;

          return (
            <TechCard
              key={icon.name}
              label={icon.name}
              hoverColor={icon.hoverClass}
              tooltipBg={icon.tooltipBg}
              svgIcon={<IconComp className="w-full h-full" />}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
