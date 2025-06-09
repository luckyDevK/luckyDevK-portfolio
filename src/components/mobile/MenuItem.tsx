import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { motion } from "motion/react";

interface ItemProps {
  menu: string;
}

export default function MenuItem({ menu }: ItemProps) {
  return (
    <DropDownMenu.Item
      className={clsx(
        "relative hover:text-white group cursor-pointer overflow-hidden w-full hover:outline-0 pl-4 pr-2 rounded-md py-2",
        "hover:bg-[rgba(255,255,255,0.1)]"
      )}
      asChild
    >
      <motion.button
        type="button"
        whileHover="hover"
        initial="initial"
        className="relative w-full text-left bg-transparent border-none cursor-pointer"
      >
        <motion.div
          variants={{
            initial: { scaleY: 0 },
            hover: {
              scaleY: 1,
              transition: { duration: 0.3 },
            },
          }}
          className="absolute left-0 top-0 h-full w-1 gradient-dark-blue"
        />
        {menu}
      </motion.button>
    </DropDownMenu.Item>
  );
}
