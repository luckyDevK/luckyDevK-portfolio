import LuckyDevLogo from "../logos/LuckyDevLogo";
import MobileMenu from "../mobile/MobileMenu";

export default function Header() {
  return (
    <header className="md:container md:mx-auto flex justify-between px-10 py-4">
      <LuckyDevLogo />
      <MobileMenu />
    </header>
  );
}
