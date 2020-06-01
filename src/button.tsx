import React from 'react';
import './button.css';

function paragraph(copy: string) {
    return (    <p>
      {copy}
    </p>)
    }
  
const copy = "Press ME!";

function button() {
    return(
        <button className="buttonClass">
            {paragraph(copy)}
        </button>
        )
}

export default button;
