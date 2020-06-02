import React from 'react';
import './App.css';
import TextInputBox from './components/common/TextInput/TextInput';
import Label from './components/common/Label/Label';


const label = "some text as the label: ";
const formTitle = "Form Title";

function App() {
  return (
    <div className="App">
      <form>
        <legend>{formTitle}</legend>
          <Label 
          className={'labelClass'}
          id={'labelId'}
          children={label}></Label>
          <TextInputBox 
            className={'textInput'}
            id={'textInput'}
            type={'text'}
            oninput={(value:React.HTMLProps<InputEvent>)=> console.log(value)}>
          </TextInputBox>
      </form>
    </div>
  );
}

export default App;
