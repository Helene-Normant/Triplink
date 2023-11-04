import React from 'react';
import './input.css';

type InputProps = {
  className: 'small' | 'medium' | 'large' | 'input input--small' | 'input input--medium' | 'input input--large';
  type: 'text' | 'checkbox' | 'date' | 'email' | 'password';
  name: string;
  placeholder: string;
  size: 'small' | 'medium' | 'large';
  value: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ className, type, placeholder, size, value, name, required, onChange }: InputProps) => {
  let inputClass = 'input';
  if (size === 'small') {
    inputClass += ' input--small';
  } else if (size === 'medium') {
    inputClass += ' input--medium';
  }
  else if (size === 'large') {
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
      value={value}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;