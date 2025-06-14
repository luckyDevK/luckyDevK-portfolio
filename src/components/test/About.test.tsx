import { screen, render, within } from "@testing-library/react";
import About from "../about/About";

describe("Unit Tests About", () => {
  test("render content correctly", () => {
    render(<About />);

    const longText =
      "I'm a frontend developer with a strong focus on building responsive, user-friendly interfaces using modern web technologies like React, JavaScript, and Tailwind CSS. Over the past year, I've been committed to learning, building real-world projects, and writing clean, maintainable code. I also explore backend development with Node.js and PostgreSQL to deepen my full-stack skills.";

    expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  test("render feature cards", () => {
    render(<About />);

    const region = screen.getByLabelText("region");
    const cards = within(region).getAllByRole("about");

    expect(cards).toHaveLength(3);

    expect(within(cards[0]).getByText("Clean Code")).toBeInTheDocument();
    expect(within(cards[1]).getByText("UI/UX Design")).toBeInTheDocument();
    expect(within(cards[2]).getByText("Performance")).toBeInTheDocument();
  });
});
