import { useState, type ReactNode } from "react";

import { PortfolioContext } from "./PortfolioContext";

interface PortfolioProviderProps {
  children: ReactNode;
}

export default function PortfolioContextProvider({
  children,
}: PortfolioProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ctxValues = {
    isMenuOpen,
    setIsMenuOpen,
  };

  return <PortfolioContext value={ctxValues}>{children}</PortfolioContext>;
}
