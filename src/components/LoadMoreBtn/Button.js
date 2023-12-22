import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      Load more
    </button>
  );
};

export default Button;