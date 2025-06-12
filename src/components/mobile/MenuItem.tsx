import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { animate, motion } from "framer-motion"; // corrected import
import { useState } from "react";
import { Link } from "react-router-dom";

interface ItemProps {
  menu: string;
  to: string; // add the link target path or section
}

const MotionLink = motion(Link);

export default function MenuItem({ menu, to }: ItemProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <DropDownMenu.Item
      className={clsx(
        "relative group cursor-pointer overflow-hidden w-full hover:outline-0 pl-4 pr-2 rounded-md py-2",
        "hover:bg-white/10"
      )}
      asChild
    >
      <MotionLink
        to={to}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative w-full inline-block capitalize text-left bg-transparent border-none cursor-pointer text-inherit no-underline"
      >
        <motion.div
          animate={{ scaleY: isHover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 h-full w-1 gradient-dark-blue origin-top"
        />
        {menu}
      </MotionLink>
    </DropDownMenu.Item>
  );
}
