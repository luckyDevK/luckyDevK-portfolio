import { IconButton } from "@radix-ui/themes";
import { JSX } from "react";

interface SocialMediaButtonProps {
  icon: JSX.Element;
  ariaLabel: string;
  onClickIcon: () => void;
  className?: string;
}

export default function SocialMediaButton({
  icon,
  ariaLabel,
  onClickIcon,
}: SocialMediaButtonProps) {
  return (
    <IconButton
      onClick={onClickIcon}
      size="3"
      radius="medium"
      aria-label={ariaLabel}
    >
      {icon}
    </IconButton>
  );
}
