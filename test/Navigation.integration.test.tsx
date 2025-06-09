// __tests__/MobileMenu.test.tsx
import { render, screen } from "@testing-library/react";
import MobileMenu from "../src/components/mobile/MobileMenu";

// Mock the real context module

jest.mock("../src/context/PortfolioContext", () => ({
  usePortFolioContext: jest.fn(),
}));

import { usePortFolioContext } from "../src/context/PortfolioContext";

describe("MobileMenu", () => {
  it("renders menu items when open", () => {
    (usePortFolioContext as jest.Mock).mockReturnValue({
      isMenuOpen: true,
      setIsMenuOpen: jest.fn(),
    });

    render(<MobileMenu />);
    const toggleBtn = screen.getByLabelText(/close menu/i);
    expect(toggleBtn).toBeInTheDocument();

    const items = ["Home", "About", "Skills", "Projects", "Contact"];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("does NOT render menu items when menu is closed", () => {
    (usePortFolioContext as jest.Mock).mockReturnValue({
      isMenuOpen: false,
      setIsMenuOpen: jest.fn(),
    });

    render(<MobileMenu />);
    const items = ["Home", "About", "Skills", "Projects", "Contact"];
    items.forEach((item) => {
      expect(screen.queryByText(item)).toBeNull();
    });

    const toggleBtn = screen.getByLabelText(/toggle menu/i);
    expect(toggleBtn).toBeInTheDocument(); // This time it’s “Toggle menu” instead of “Close menu”
  });
});
