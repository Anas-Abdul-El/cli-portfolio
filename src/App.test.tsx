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

  it('handles clear command', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    const user = userEvent.setup();
    await user.type(input, 'clear');
    expect(input).toHaveValue('clear');

    await user.keyboard('{Enter}');
    expect(input).toHaveValue('');

    const historyItems = screen.queryAllByText(/Anas-Abdul-El >/i);
    expect(historyItems.length).toBe(1);
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

  it('handles multiple commands with &&', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    const user = userEvent.setup();
    await user.type(input, 'whoami && whatisthis');
    expect(input).toHaveValue('whoami && whatisthis');

    await user.keyboard('{Enter}');
    expect(input).toHaveValue('');

    const whoAmIOutput = screen.getByText(
      /Anas Abdul El, a passionate software developer/i
    );
    const whatIsThisOutput = screen.getByText(
      /This is a cli protofolio project built using React and TypeScript/i
    );

    expect(whoAmIOutput).toBeInTheDocument();
    expect(whatIsThisOutput).toBeInTheDocument();
  });
});
