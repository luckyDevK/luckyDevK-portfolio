import { render, screen } from "@testing-library/react";
import HeroSection from "../hero/HeroSection";

describe("Hero tests", () => {
  test("render content correctly", async () => {
    render(<HeroSection />);

    const longText =
      "I'm a frontend developer with a strong foundation in building responsive and modern web applications using React, Tailwind CSS, JavaScript, HTML, and CSS. I also explore backend technologies like Node.js, Express, and PostgreSQL, and enjoy writing tests with Jest. Although I'm early in my journey with 1 year of hands-on experience, I'm always learning, building, and pushing myself to grow as a developer.";

    expect(screen.getByText("Hi, I'm Very Lucky")).toBeInTheDocument();
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  test("renders social media buttons", async () => {
    render(<HeroSection />);

    const socialMediaBtns = await screen.findAllByRole("button");
    expect(socialMediaBtns.length).toBeGreaterThanOrEqual(3);
  });
});
