import { render, screen } from '@testing-library/react';
import App from './App';
const assert = require("assert");

describe("App home", () => {
  test('renders Roman numerals converter', () => {
    render(<App />);
    const linkElement = screen.getByText(/Roman numerals converter/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders Roman Numeral:', () => {
    render(<App />);
    const linkElement = screen.getByText(/Roman Numeral:/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders Number:', () => {
    render(<App />);
    const linkElement = screen.getByText(/Number:/i);
    expect(linkElement).toBeInTheDocument();
  });
});