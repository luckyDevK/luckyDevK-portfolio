import { twJoin } from "tailwind-merge";
import React from "react";

interface IContainer {
  className?: string;
  children: React.ReactNode;
}

export default function ContainerSec({ className, children }: IContainer) {
  return (
    <section className={twJoin("flex flex-col items-center", className)}>
      {children}
    </section>
  );
}
