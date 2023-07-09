import React, { Attributes } from 'react';
import './input.css';

type InputProps = {
  className: 'small' | 'large' | 'xlarge' | 'input input--small' | 'input input--large' | 'input input--xlarge';
  type: 'text' | 'checkbox' | 'date' | 'email' | 'password' ;
  name: string;
  placeholder: string;
  size: 'small' | 'large' | 'xlarge';
  value: string;
  required?: boolean; 
  onChange: (event: any) => void;
};

const Input = ({ className, type, placeholder, size, value, name, required, onChange }: InputProps) => {
  let inputClass = 'input';
  if (size === 'small') {
    inputClass += ' input--small';
  } else if (size === 'large') {
    inputClass += ' input--large';
  }
  else if (size === 'xlarge') {
    inputClass += ' input--xlarge';
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