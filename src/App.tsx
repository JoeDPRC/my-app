import React from 'react';
//import logo from './logo.svg';
import './App.css';

function paragraph(copy: string) {
  return (    <p>
    {copy}
  </p>)
  }

const copy = "Press ME!";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="buttonClass">
          {paragraph(copy)}
        </button>
      </header>
    </div>
  );
}

export default App;
