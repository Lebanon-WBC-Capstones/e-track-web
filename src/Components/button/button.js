import React from "react";
import './button.css'
function Button ({ text, onClick }) {
   
      return (
        <button  type="button" onClick={onClick} className="bg-primary hover:bg-green-700 text-white font-bold py-3 px-7 rounded-full " >
        {text}
        </button>
      );
    
  }
  export default Button;
