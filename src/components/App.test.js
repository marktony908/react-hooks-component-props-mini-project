import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing for using custom matchers
import App from '../components/App'; // Adjust based on your file structure

test('renders App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/My Blog/i);
  expect(headerElement).toBeInTheDocument();
});
