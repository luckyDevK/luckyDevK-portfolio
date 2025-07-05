import * as DropDownMenu from "@radix-ui/react-dropdown-menu";

import ToggleMenuBar from "./ToggleMenuBar";
import MenuItem from "./MenuItem";
import { usePortFolioContext } from "../../context/PortfolioContext";
import { menuItems } from "../../util/menuItems";

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = usePortFolioContext();

  return (
    <DropDownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropDownMenu.Trigger asChild>
        <ToggleMenuBar isOpen={isMenuOpen} />
      </DropDownMenu.Trigger>

      <DropDownMenu.Portal>
        <DropDownMenu.Content className="rounded-2xl mr-10 font-semibold text-slate-300 backdrop-blur-md pr-2 pl-5 py-4 bg-black/20 border border-white/10 w-50">
          {menuItems.map((item) => (
            <MenuItem key={item} item={item} />
          ))}
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
}
