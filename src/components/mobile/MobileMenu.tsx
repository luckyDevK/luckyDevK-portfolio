import * as DropDownMenu from "@radix-ui/react-dropdown-menu";

import ToggleMenuBar from "./ToggleMenuBar";
import MenuItem from "./MenuItem";
import { usePortFolioContext } from "../../context/PortfolioContext";

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = usePortFolioContext();

  const navMenu = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <DropDownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropDownMenu.Trigger asChild>
        <ToggleMenuBar isOpen={isMenuOpen} />
      </DropDownMenu.Trigger>

      <DropDownMenu.Portal>
        <DropDownMenu.Content className="rounded-2xl mr-10 font-semibold text-slate-300 backdrop-blur-md pr-2 pl-5 py-4 bg-black/20 border border-white/10 w-50">
          {navMenu.map((menu) => (
            <MenuItem key={menu} menu={menu} />
          ))}
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
}
