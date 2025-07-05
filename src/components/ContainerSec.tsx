import { twJoin } from "tailwind-merge";
import { Section } from "@radix-ui/themes";

interface IContainer {
  className?: string;
  id: string;
  children: React.ReactNode;
}

export default function ContainerSec({ className, id, children }: IContainer) {
  return (
    <Section
      id={id}
      className={twJoin("flex flex-col items-center", className)}
    >
      {children}
    </Section>
  );
}
