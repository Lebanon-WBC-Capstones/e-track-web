import React from 'react';

function Button({ text, onClick, theme = 'primary' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shadow-md bg-${theme} hover:bg-gray-100 hover:text-${theme} text-white font-bold py-3 px-7 rounded-full`}
    >
      {text}
    </button>
  );
}
export default Button;
