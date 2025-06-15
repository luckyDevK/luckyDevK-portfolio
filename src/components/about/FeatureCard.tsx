import { twMerge } from "tailwind-merge";
import { Heading, Text, Flex } from "@radix-ui/themes";
import { JSX, ReactNode } from "react";

import Card from "../UI/Card";

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
    <Card centered cardRole="about" className={twMerge("py-8 px-3", className)}>
      {icon && (
        <Flex
          align="center"
          justify="center"
          className="gradient-dark-blue text-white w-12 aspect-square rounded-full"
        >
          {icon}
        </Flex>
      )}
      <Heading as="h2" weight="bold" size="5">
        {title}
      </Heading>
      <Text as="p" size="3" className="text-balance">
        {text}
      </Text>
      {children && (
        <Flex direction="column" gap="5" width="100%" className="text-white">
          {children}
        </Flex>
      )}
    </Card>
  );
}
