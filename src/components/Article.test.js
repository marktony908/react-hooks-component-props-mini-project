import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing for using custom matchers
import ArticleList from '../components/ArticleList'; // Adjust based on your file structure

test('renders ArticleList component', () => {
  render(<ArticleList />);
  
  const postTitle1 = screen.getByText(/Test Post 1/i);
  const postTitle2 = screen.getByText(/Test Post 2/i);

  expect(postTitle1).toBeInTheDocument();
  expect(postTitle2).toBeInTheDocument();
});
