// __tests__/MobileMenu.test.tsx
import { render, screen } from "@testing-library/react";
import App from "../../App";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

// Mock the real context module

describe("App Integration Tests", () => {
  test("render all main sections", () => {
    render(<App />);

    expect(screen.getByText(/Hi, I'm Very Lucky/i)).toBeInTheDocument();
    expect(screen.getByText(/About me/i)).toBeInTheDocument();
  });

  test("allows navigation between sections", async () => {
    const mockScrollIntoView = jest.fn();

    jest.spyOn(document, "getElementById").mockReturnValue({
      scrollIntoView: mockScrollIntoView,
    } as Partial<HTMLElement> as HTMLElement);

    render(<App />);

    const toggleBtn = screen.getByRole("button", { name: /toggle menu/i });

    await userEvent.click(toggleBtn);

    const aboutButtonNav = screen.getByText("about");

    await userEvent.click(aboutButtonNav);

    expect(document.getElementById).toHaveBeenCalledWith("about");
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
