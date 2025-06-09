import { createContext, useContext } from "react";

interface PortfolioContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: React.SetStateAction<boolean>) => void;
}

export const PortfolioContext = createContext<null | PortfolioContextType>(
  null
);

export function usePortFolioContext() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      "usePortfolioContext must be used within a PortfolioProvider"
    );
  }

  return context;
}
