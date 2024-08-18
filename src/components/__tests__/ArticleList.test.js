// src/__tests__/ArticleList.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../ArticleList";

const posts = [
  { id: 1, title: "Test Post 1", date: "January 1, 2021", preview: "Preview text for post 1" },
  { id: 2, title: "Test Post 2", date: "February 1, 2021", preview: "Preview text for post 2" },
];

test("renders ArticleList component", () => {
  render(<ArticleList posts={posts} />);
  const postTitle = screen.getByText("Test Post 1");
  expect(postTitle).toBeInTheDocument();
});
