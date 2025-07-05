import { twMerge } from "tailwind-merge";
import { motion, MotionProps } from "motion/react";
import { Flex } from "@radix-ui/themes";
import { ReactNode, ComponentPropsWithoutRef } from "react";

interface ICardProps {
  children: ReactNode;
  cardRole?: string;
  centered: boolean;
  className?: string;
  direction: "column" | "row";
}

type MotionFlexProps = ComponentPropsWithoutRef<typeof Flex> & MotionProps;

export default function Card({
  className,
  children,
  cardRole,
  centered,
  direction,
}: ICardProps) {
  const MotionFlex = motion.create(Flex) as React.FC<MotionFlexProps>;

  return (
    <MotionFlex
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      role={cardRole}
      justify={centered ? "center" : undefined}
      align={centered ? "center" : undefined}
      gap="20px"
      direction={direction}
      className={twMerge(
        ` bg-white/10 backdrop-blur-md border border-white/20 rounded-md hover:bg-white/20 overflow-hidden`,
        className
      )}
    >
      {children}
    </MotionFlex>
  );
}
