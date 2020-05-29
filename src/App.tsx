import React from 'react';
import logo from './logo.svg';
import './App.css';

function paragraph(copy: string) {
  return (    <p>
    {copy}
  </p>)
  }

const copy = "Edit <code>src/App.tsx</code> and save to reload.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {paragraph(copy)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
