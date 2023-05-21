import React from 'react';
import './input.css';

type InputProps = {
  className: 'small' | 'large' | 'input input--small' | 'input input--large';
  type: 'text' | 'checkbox' | 'date';
  placeholder: string;
  size: 'small' | 'large';
};

const Input = ({ className, type, placeholder, size }: InputProps) => {
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