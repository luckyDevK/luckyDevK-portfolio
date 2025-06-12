import * as DropDownMenu from "@radix-ui/react-dropdown-menu";

import ToggleMenuBar from "./ToggleMenuBar";
import MenuItem from "./MenuItem";
import { usePortFolioContext } from "../../context/PortfolioContext";

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = usePortFolioContext();

  const menuItems = [
    { path: "/home", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/skills", text: "Skills" },
    { path: "/projects", text: "Projects" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <DropDownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropDownMenu.Trigger asChild>
        <ToggleMenuBar isOpen={isMenuOpen} />
      </DropDownMenu.Trigger>

      <DropDownMenu.Portal>
        <DropDownMenu.Content className="rounded-2xl mr-10 font-semibold text-slate-300 backdrop-blur-md pr-2 pl-5 py-4 bg-black/20 border border-white/10 w-50">
          {menuItems.map((item) => (
            <MenuItem key={item.path} menu={item.text} to={item.path} />
          ))}
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
}
