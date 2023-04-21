import React from 'react';
import './button.css';

type ButtonProps = {
  className: 'dark' | 'light' | 'button button-dark' | 'button button-light';
  children: string;
  onClick: () => void;
}


const Button = ({className, children, onClick }: ButtonProps) => {
    let buttonClass = 'button';
    if (className === 'dark') {
      buttonClass += ' button-dark';
    } else if (className === 'light') {
      buttonClass += ' button-light';
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