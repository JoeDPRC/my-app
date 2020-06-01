import React from 'react';
import './text-input.css';



function input(type: string) {
    return ( <input className="textInput" type={type}></input>)
    }
  
  const type = "text";
  const label = "Input text here: "
  const formTitle = "Form"

  function textInput() {
    return (
        <form>
          <legend>{formTitle}</legend>
            <label>
                {label} {input(type)}
            </label>
          </form>
    );
  }
  
  export default textInput;
  