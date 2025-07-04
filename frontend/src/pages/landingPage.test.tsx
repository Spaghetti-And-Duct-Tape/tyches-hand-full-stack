import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import LandingPage from './landingPage';

describe('LandingPage', () => {
  it('should render the title', () => {
    render(<LandingPage />);

    const T = screen.getAllByText("T")[1];
    const y = screen.getAllByText("y")[1];
    const c = screen.getAllByText("c")[1];
    const h = screen.getAllByText("h")[1];
    const e = screen.getAllByText("e's")[1];
    const a = screen.getAllByText("a")[1];
    const n = screen.getAllByText("n")[1];
    const d = screen.getAllByText("d")[1];

    expect(T).toBeInTheDocument();
  });
})