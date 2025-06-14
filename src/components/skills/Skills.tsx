import { Heading, Text, Grid } from "@radix-ui/themes";

import { icons } from "../../util/skillIcons";
import TechCard from "./TechCard";
import ContainerSec from "../ContainerSec";

export default function Skills() {
  return (
    <ContainerSec id="skills">
      <Heading size="7" weight="bold" highContrast>
        My Skills
      </Heading>
      <Text as="p" wrap="balance" className="pt-5" size="5">
        Technologies and tools I work with to bring ideas to life
      </Text>

      <Grid
        aria-label="Technology skills grid"
        columns="repeat(auto-fill, minmax(9.5rem, 1fr))"
        width="100%"
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
    </ContainerSec>
  );
}
