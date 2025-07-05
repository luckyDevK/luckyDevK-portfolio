import { menuItems } from "../../util/menuItems";
import MobileMenu from "../mobile/MobileMenu";

export default function NavigationMenu() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex flex-wrap gap-3">
          {menuItems.map((item, index) => (
            <li
              onClick={() => scrollToSection(item)}
              className="text-slate-300 font-medium px-4 py-2 hover:bg-white/10 rounded-md capitalize transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 cursor-pointer active:ring-cyan-400"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <MobileMenu />
    </>
  );
}
