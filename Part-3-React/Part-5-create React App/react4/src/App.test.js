// CustomButton.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomButton from './component/CustomButton';

describe('CustomButton', () => {
  test('renders with the correct label', () => {
    const label = 'Click Me';
    render(<CustomButton label={label} onClick={() => { }} style={{}} />);

    // Check if the button is rendered with the correct label
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton label="Click Me" onClick={handleClick} style={{}} />);

    // Click the button
    fireEvent.click(screen.getByText('Click Me'));

    // Check if the handleClick function is called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies the correct style', () => {
    const style = { backgroundColor: 'blue' };
    render(<CustomButton label="Click Me" onClick={() => { }} style={style} />);

    // Check if the button has the correct style
    const button = screen.getByText('Click Me');
    expect(button).toHaveStyle('background-color: blue');
  });
});
