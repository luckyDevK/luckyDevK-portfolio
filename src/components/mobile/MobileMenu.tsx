import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { X, Menu } from "lucide-react";

import MenuItem from "./ MenuItem";
import { usePortFolioContext } from "../../context/PortfolioContext";

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = usePortFolioContext();

  const navMenu = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <DropDownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropDownMenu.Trigger asChild>
        <button className="outline-none">
          {isMenuOpen ? (
            <X className="text-white" strokeWidth={3} />
          ) : (
            <Menu className="text-white" strokeWidth={3} />
          )}
        </button>
      </DropDownMenu.Trigger>

      <DropDownMenu.Portal>
        <DropDownMenu.Content className="rounded-2xl font-semibold text-slate-300 mr-12  pr-2 pl-5 py-4 bg-black/20 border border-white/10 overflow-clip w-50">
          {navMenu.map((menu) => (
            <MenuItem key={menu} menu={menu} />
          ))}
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
}
