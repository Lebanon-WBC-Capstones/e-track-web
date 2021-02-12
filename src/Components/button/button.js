import React from "react";
import './button.css'
function Button (props) {
   
      return (
        <button  type="button" onClick={props.fct} className="bg-green-400 hover:bg-green-700 text-white font-bold py-3 px-7 rounded-full " >
        {props.text}
        </button>
      );
    
  }
  export default Button;
