import { IconButton } from "@radix-ui/themes";
import { JSX } from "react";

interface SocialMediaButtonProps {
  icon: JSX.Element;
  ariaLabel: string;
  className?: string;
}

export default function SocialMediaButton({
  icon,
  ariaLabel,
}: SocialMediaButtonProps) {
  return (
    <IconButton
      size="3"
      radius="medium"
      aria-label={ariaLabel}
      className="cursor-pointer"
    >
      {icon}
    </IconButton>
  );
}
