import { Button } from "@radix-ui/themes";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface SocialMediaButtonProps {
  icon: JSX.Element;
  ariaLabel: string;
  className?: string;
}

export default function SocialMediaButton({
  icon,
  ariaLabel,
  className = "",
}: SocialMediaButtonProps) {
  return (
    <Button
      variant="outline"
      className={twMerge(
        `border rounded-md w-10 aspect-square flex items-center justify-center border-blue-400 bg-blue-900/50 text-blue-400 hover:text-white hover:border-blue-300 hover:bg-blue-800/70 backdrop-blur-sm cursor-pointer `,
        className
      )}
      aria-label={ariaLabel}
    >
      {icon}
    </Button>
  );
}
