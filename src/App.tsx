import React from 'react';
import './App.css';
import Button from './components/common/Button/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button  
        className={`buttonClass`} 
        onClickHandler={(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=> console.log(e)}
        children={'Press Me!'}
        ></Button>
      </header>
    </div>
  );
}

export default App;
