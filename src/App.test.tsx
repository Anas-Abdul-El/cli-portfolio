import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const label = screen.getByText(/Anas-Abdul-El >/i);
    expect(label).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('handles input and displays output', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    // Simulate user typing 'help' and pressing Enter
    input.value = 'help';
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    // Check if the output for 'help' command is displayed
    const helpOutput = screen.getByText(/Available commands:/i);
    expect(helpOutput).toBeInTheDocument();
  });
});
