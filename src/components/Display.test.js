import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Display from './Display';

afterEach(() => {
  cleanup();
});

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });

  it('displays the props that are passed in', () => {
    const display = render(<Display balls={2} strikes={3}/>);
    // Does this display visually correctly on the screen?
    // expect(display.getByText(/Balls: 2/)).toBeInTheDocument();
    display.getByText(/Balls: 2/);
    display.getByText(/Strikes: 3/);
  });
  it('displays the props that are passed in', () => {
    const display = render(<Display balls={1} strikes={2}/>);
    display.getByText(/Balls: 1/);
    display.getByText(/Strikes: 2/);
  });
  it('ensures that the component is dumb', () => {
    const display = render(<Display balls={-2} strikes={4000}/>);
    expect(display.getByText(/Balls: -2/));
    display.getByText(/Strikes: 4000/);
  });
});
