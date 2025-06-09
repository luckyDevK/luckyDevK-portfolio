import { X, Menu } from "lucide-react";

interface ToggleMenuBarProps {
  isOpen: boolean;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ToggleMenuBar({
  isOpen,
  ...props
}: ToggleMenuBarProps) {
  return (
    <button
      {...props}
      aria-label={isOpen ? "Close menu" : "Toggle menu"}
      className="outline-0 border-0 cursor-pointer"
    >
      {isOpen ? (
        <X
          className="text-white"
          strokeWidth={3}
          aria-hidden="true"
          focusable="false"
        />
      ) : (
        <Menu
          className="text-white"
          strokeWidth={3}
          aria-hidden="true"
          focusable="false"
        />
      )}
    </button>
  );
}
