import LuckyDevLogo from "../logos/LuckyDevLogo";
import MobileMenu from "../mobile/MobileMenu";

export default function Navigation() {
  return (
    <nav className="flex justify-between px-5 py-4">
      <LuckyDevLogo />
      <MobileMenu />
    </nav>
  );
}
