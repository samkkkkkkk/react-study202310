import React from 'react';
// import './Button.css';
import styled from 'styled-components';

const Button = styled.button`
 
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: aqua;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover,
    &:active {
      background: #ac0e77;
      border-color: #ac0e77;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
  }
`;

// const Button = ({ type, onClick, children }) => {
//   // children은 button이 감싸고 있는 텍스트
//   return (
//     <button
//       type={type}
//       className="button"
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

export default Button;
