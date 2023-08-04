import React from 'react';
import './button.css';

type ButtonProps = {
  className: 'dark' | 'light' | 'button button-dark' | 'button button-light' | 'dark-small' | 'light-small' | 'button button-dark-small' | 'button button-light-small';
  children: string;
  onClick?: () => void;
  role: string;
  type?: 'submit' | 'button';
}

const Button = ({ className, children, role, onClick, type = 'button' }: ButtonProps) => {
  let buttonClass = 'button';
  if (className === 'dark') {
    buttonClass += ' button-dark';
  } else if (className === 'light') {
    buttonClass += ' button-light';
  } else if (className === 'dark-small') {
    buttonClass += ' button-dark-small';
  } else if (className === 'light-small') {
    buttonClass += ' button-light-small';
  }
  if (className) {
    buttonClass += ` ${className}`;
  }
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      children={children}
      role={role}
      type={type}

    />
  )
};

export default Button;
