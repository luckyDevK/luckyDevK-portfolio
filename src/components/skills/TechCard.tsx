import { Box } from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import { twJoin } from "tailwind-merge";
import { clsx } from "clsx";

import { tailwindColorFromClass } from "../../util/skillIcons";
import Card from "../UI/Card";

interface ITechCard {
  svgIcon: React.ReactNode;
  label: string;
  hoverColor: string;
  tooltipBg: string;
}

export default function TechCard({
  svgIcon,
  label,
  hoverColor,
  tooltipBg,
}: ITechCard) {
  return (
    <Card direction="column" centered cardRole="skill" className="h-38">
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Box
              className={twJoin(
                `w-15 h-15 flex items-center justify-center bg-white/10 backdrop-blur-md p-1.5 rounded-md transition-shadow duration-300 shadow-lg `,
                hoverColor
              )}
            >
              {svgIcon}
            </Box>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={twJoin(
                clsx(
                  " px-3 py-1 text-base font-bold rounded shadow-md select-none leading-none",
                  tooltipBg,
                  tooltipBg === "bg-white" || tooltipBg === "bg-neutral-100"
                    ? "text-black"
                    : "text-white"
                )
              )}
              sideOffset={5}
            >
              {label}
              <Tooltip.Arrow
                style={{ fill: tailwindColorFromClass(tooltipBg) }}
              />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Card>
  );
}
