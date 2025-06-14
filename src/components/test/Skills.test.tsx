import { screen, render, within } from "@testing-library/react";
import Skills from "../skills/Skills";

describe("Skills pages test", () => {
  test("title test", () => {
    render(<Skills />);

    const descText =
      "Technologies and tools I work with to bring ideas to life";

    expect(screen.getByText(/my skills/i)).toBeInTheDocument();
    expect(screen.getByText(descText)).toBeInTheDocument();
  });

  test("renders skill cards", () => {
    render(<Skills />);

    const gridTech = screen.getByLabelText(/Technology skills grid/i);
    const techCard = within(gridTech).getAllByRole("skill");

    expect(techCard).toHaveLength(14);
  });
});
