import { twJoin } from "tailwind-merge";
import React from "react";

interface IContainer {
  className?: string;
  id: string;
  children: React.ReactNode;
}

export default function ContainerSec({ className, id, children }: IContainer) {
  return (
    <section
      id={id}
      className={twJoin("flex flex-col items-center", className)}
    >
      {children}
    </section>
  );
}
