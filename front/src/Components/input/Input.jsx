import React from 'react';
import './input.css';

const Input = ({ className, type, placeholder, size }) => {
  let inputClass = 'input';
  if (size === 'small') {
    inputClass += ' input--small';
  } else if (size === 'large') {
    inputClass += ' input--large';
  }
  if (className) {
    inputClass += ` ${className}`;
  }

  return (
    <input
      className={inputClass}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;