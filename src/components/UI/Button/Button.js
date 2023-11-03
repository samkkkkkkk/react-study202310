import React from 'react';
import './Button.css';

const Button = ({ type, onClick, children }) => {
  // children은 button이 감싸고 있는 텍스트
  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
