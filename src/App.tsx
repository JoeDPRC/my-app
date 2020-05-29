import React from 'react';
import './App.css';


function input(type: string) {
  return ( <input className="textInput" type={type}></input>)
  }

const type = "text";
const label = "Input text here: "
const formTitle = "Form"

function App() {
  return (
    <div className="App">
        <form>
          <legend>{formTitle}</legend>
          <label>
            {label} 
              {input(type)}
          </label>
        </form>
    </div>
  );
}

export default App;
