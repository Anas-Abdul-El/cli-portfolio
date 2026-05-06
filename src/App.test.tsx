import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const label = screen.getByText(/Anas-Abdul-El >/i);
    expect(label).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('handles input and displays output', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    const user = userEvent.setup();
    await user.type(input, 'help');
    expect(input).toHaveValue('help');

    await user.keyboard('{Enter}');
    expect(input).toHaveValue('');

    const helpOutput = screen.getByText(/Available commands:/i);
    expect(helpOutput).toBeInTheDocument();
  });
});
