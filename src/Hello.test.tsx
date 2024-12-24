import { render, screen } from '@testing-library/react';
import Hello from './Hello';
import { describe, expect, it } from 'vitest';

describe('Hello', () => {
  it('renders correctly', () => {
    render(<Hello name='Waka' />);
    expect(screen.getByText('Hello, Waka!')).toBeInTheDocument();
  });
});