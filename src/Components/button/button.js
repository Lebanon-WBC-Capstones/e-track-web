import React from 'react';

function Button({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shadow-md bg-primary hover:bg-gray-100 hover:text-primary text-white font-bold py-3 px-7 rounded-full "
    >
      {text}
    </button>
  );
}
export default Button;
