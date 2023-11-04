import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  it('should render a default button with provided text', () => {
    render(<Button className="dark" children="Click me" role="button" type="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click me');
  });

  it('should apply the "dark" class to the button', () => {
    render(<Button className="dark" children="Dark Button" role="button" type="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button-dark');
  });

  it('should apply the "light" class to the button', () => {
    render(<Button className="light" children="Light Button" role="button" type="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button-light');
  });

  it('should apply the "dark-small" class to the button', () => {
    render(<Button className="dark-small" children="Light Button" role="button" type="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button-dark-small');
  });

  it('should apply the "light-small" class to the button', () => {
    render(<Button className="light-small" children="Light Button" role="button" type="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button-light-small');
  });

  it('should handle click event', () => {
    const onClickMock = jest.fn();
    render(<Button className="dark" children="Click me" role="button" type="button" onClick={onClickMock} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should have a specific role', () => {
    render(<Button className="dark" children="Custom Role" role="custom" type="button" />);
    const buttonElement = screen.getByRole('custom');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should have a "submit" type', () => {
    render(<Button className="dark" children="Submit" role="button" type="submit" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});