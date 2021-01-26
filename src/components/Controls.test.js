import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Controls from './Controls';

afterEach(() => {
  cleanup();
});

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<Controls />);
  });
  // (Method 1): Test if a function has run by using booleans.
  it('clicking the strike button runs the strike function', () => {
    let clicked = false;
    const { getByText } = render(<Controls strike={() => { clicked = true; }}/>);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true);
  });
  // (Method 2): Test if a function has run by using Jest mock functions.
  it('clicking the strike button runs the strike function', () => {
    const mockFunction = jest.fn(() => {});
    const { getByText } = render(<Controls strike={mockFunction}/>);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    // expect(mockFunction).toBeCalled();
    expect(mockFunction.mock.calls.length).toBe(1);
  });
  it('clicking the ball button runs the ball function', () => {
    const mockFunction = jest.fn(() => {});
    const { getByText } = render(<Controls ball={mockFunction}/>);
    const ballButton = getByText(/ball/i);
    fireEvent.click(ballButton);
    // expect(mockFunction).toBeCalled();
    expect(mockFunction.mock.calls.length).toBe(1);
  });
  it('clicking the foul button runs the foul function', () => {
    const mockFunction = jest.fn(() => {});
    const { getByText } = render(<Controls foul={mockFunction}/>);
    const foulButton = getByText(/foul/i);
    fireEvent.click(foulButton);
    // expect(mockFunction).toBeCalled();
    expect(mockFunction.mock.calls.length).toBe(1);
  });
  it('clicking the hit button runs the hit function', () => {
    const mockFunction = jest.fn(() => {});
    const { getByText } = render(<Controls hit={mockFunction}/>);
    const hitButton = getByText(/hit/i);
    fireEvent.click(hitButton);
    // expect(mockFunction).toBeCalled();
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
