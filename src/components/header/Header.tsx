import { useEffect, useState } from "react";
import LuckyDevLogo from "../logos/LuckyDevLogo";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 bg-transparent ${
        isScrolled
          ? "bg-white/10 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:container md:mx-auto md:px-20  px-5 transition-all duration-150">
        <LuckyDevLogo />
        <NavigationMenu />
      </div>
    </header>
  );
}
