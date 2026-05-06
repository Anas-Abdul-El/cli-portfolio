import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import runCommand from './runCommand';
import { run } from 'node:test';

describe('runCommand', () => {
  it('returns help output for "help" command', () => {
    const result = runCommand('help');
    expect(result.output).toMatch(/Available commands:/i);
  });

  it('returns command not found message for unknown command', () => {
    const result = runCommand('unknown');
    expect(result.output).toMatch(/command not found: unknown/i);
  });
});
