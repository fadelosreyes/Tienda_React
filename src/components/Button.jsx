import React from 'react';

const Button = ({ text, onClick, href }) => {
  return (
    <button onClick={onClick}>
      {href ? <a href={href} target="_blank" rel="noopener noreferrer">{text}</a> : text}
    </button>
  );
};

export default Button;
