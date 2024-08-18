import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../About";
import logo from "../../assets/logo"; // Ensure this path is correct

test("renders a <aside> element", () => {
  render(
    <About
      image={logo}
      about="This is a blog about various topics."
    />
  );
  expect(screen.getByAltText(/blog logo/)).toBeInTheDocument();
  expect(screen.getByText(/This is a blog about various topics./)).toBeInTheDocument();
});
