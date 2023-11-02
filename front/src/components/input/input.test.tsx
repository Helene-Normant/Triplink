import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from './input';

describe('Input', () => {
  it('should render a small input with the given placeholder', () => {
    render(<Input className="small" type="text" placeholder="Small Input" size="small" value="" name="inputName" onChange={() => { }} />);

    const inputElement = screen.getByPlaceholderText('Small Input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('input input--small');
  });

  it('should render a medium input with the given placeholder and required attribute', () => {
    render(<Input className="medium" type="text" placeholder="Medium Input" size="medium" value="" name="inputName" required onChange={() => { }} />);

    const inputElement = screen.getByPlaceholderText('Medium Input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('input input--medium');
    expect(inputElement).toHaveAttribute('required');
  });

  it('should render a large input with the given value', () => {
    render(<Input className="large" type="text" placeholder="Large Input" size="large" value="Initial Value" name="inputName" onChange={() => { }} />);

    const inputElement = screen.getByDisplayValue('Initial Value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('input input--large');
  });

  it('should handle input change', () => {
    let inputValue = '';
    const handleChange = (event) => {
      inputValue = event.target.value;
    };

    render(<Input className="medium" type="text" placeholder="Medium Input" size="medium" value="" name="inputName" onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText('Medium Input');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(inputValue).toBe('New Value');
  });
});
