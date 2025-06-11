import { twMerge } from "tailwind-merge";
import { Heading, Text, Box } from "@radix-ui/themes";
import React, { JSX, ReactNode } from "react";

interface ICardProps {
  icon?: JSX.Element;
  title: string;
  text: string;
  className?: string;
  children?: ReactNode;
}

export default function FeatureCard({
  icon,
  text,
  title,
  className,
  children,
}: ICardProps) {
  return (
    <Box
      className={twMerge(
        `flex justify-center items-center max-w-96 gap-5 flex-col bg-white/10 backdrop-blur-md  py-8 border border-white/20 rounded-md hover:bg-white/20`,
        className
      )}
    >
      {icon && (
        <div className="md:w-15 w-13 aspect-square gradient-dark-blue rounded-full flex items-center justify-center">
          {icon}
        </div>
      )}
      <Heading as="h3" className="font-semibold text-xl">
        {title}
      </Heading>
      <Text as="p" className="text-balance ">
        {text}
      </Text>
      {children && <div className="text-white mt-4  ">{children}</div>}
    </Box>
  );
}
