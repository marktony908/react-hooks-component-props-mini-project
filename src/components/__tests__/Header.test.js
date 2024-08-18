import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders a <header> element", () => {
  render(<Header name="My Blog" />);
  expect(screen.getByText(/My Blog/)).toBeInTheDocument();
});
