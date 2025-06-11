// __tests__/MobileMenu.test.tsx
import { render, screen } from "@testing-library/react";
import MobileMenu from "../src/components/mobile/MobileMenu";
import userEvent from "@testing-library/user-event";

// Mock the real context module
jest.mock("../src/context/PortfolioContext", () => ({
  usePortFolioContext: jest.fn(),
}));

import { usePortFolioContext } from "../src/context/PortfolioContext";

describe("MobileMenu", () => {
  test("renders menu items when menu is open", () => {
    (usePortFolioContext as jest.Mock).mockReturnValue({
      isMenuOpen: true,
      setIsMenuOpen: jest.fn(),
    });

    render(<MobileMenu />);
    const toggleBtn = screen.getByLabelText(/close menu/i);
    const items = ["Home", "About", "Skills", "Projects", "Contact"];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
    expect(toggleBtn).toBeInTheDocument();
  });

  test("does NOT render menu items when menu is closed", () => {
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
    expect(toggleBtn).toBeInTheDocument();
  });

  test("click Home go hero section", async () => {
    render(<MobileMenu />);

    // await userEvent.click()

    const openButton = screen.getByLabelText(/Toggle menu/i);

    await userEvent.click(openButton);
  });
});
