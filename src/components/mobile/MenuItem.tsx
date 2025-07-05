import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { motion } from "framer-motion"; // corrected import

interface ItemProps {
  item: string;
}

export default function MenuItem({ item }: ItemProps) {
  const navigateToPage = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <DropDownMenu.Item
      className={clsx(
        "relative group cursor-pointer overflow-hidden w-full hover:outline-0 pl-4 pr-2 rounded-md py-2 ",
        "hover:bg-white/10"
      )}
      asChild
    >
      <motion.button
        onClick={() => navigateToPage(item)}
        type="button"
        whileHover="hover"
        initial="initial"
        className="relative w-full capitalize text-left bg-transparent border-none cursor-pointer"
      >
        <motion.div
          variants={{
            initial: { scaleY: 0 },
            hover: {
              scaleY: 1,
              transition: { duration: 0.3 },
            },
          }}
          className="absolute left-0 top-0 h-full w-1 origin-top gradient-dark-blue"
        />
        {item}
      </motion.button>
    </DropDownMenu.Item>
  );
}
