import React from 'react';
import './button.css';

const Button = ({className, children, onClick, size }) => {
  let buttonClass = 'button';
  if (className === 'dark' &&  size === 'small') {
    buttonClass += ' button-dark-small';
  } else if (className === 'light' && size === 'small') {
    buttonClass += ' button-light-small';
  } else if (className === 'light') {
  buttonClass += ' button-light';
} else if (className === 'dark') {
  buttonClass += ' button-dark';
}
  if (className) {
    buttonClass += ` ${className}`;
  }
  return (
  <button
  className={buttonClass}
  onClick={onClick}
  children={children}
  />
  )
};
export default Button;