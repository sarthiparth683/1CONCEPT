// CustomButton.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomButton from './Components/CustomButton';

describe('CustomButton', () => {
  test('renders with correct label', () => {
    render(<CustomButton label="Click Me" onClick={() => {}} style={{}} />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton label="Click Me" onClick={handleClick} style={{}} />);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies the correct style', () => {
    const style = { backgroundColor: 'red' };
    render(<CustomButton label="Click Me" onClick={() => {}} style={style} />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveStyle('background-color: red');
  });
});
