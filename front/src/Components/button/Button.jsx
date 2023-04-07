import React from 'react';
import './button.css';

const Button = ({className, children, onClick }) => {
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