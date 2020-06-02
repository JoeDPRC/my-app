import React from 'react';
import './App.css';
import TextInputBox from './components/common/TextInput/TextInput';
//import Label from './components/common/Label/Label';

let error = false;

//const label = "some text as the label: ";
const formTitle = "Form Title";
const myChangeHandler = function(value: string) {
  console.log(value);
  if (value.length < 5){
    error=true;
  }
}

function App() {
  return (
    <div className="App">
      <form>
        <legend>{formTitle}</legend>
          {/* <Label 
          className={'labelClass'}
          id={'labelId'}
          children={label}></Label> */}
          <TextInputBox 
            className={'textInput'}
            id={'textInput'}
            type={'text'}
            onChangeHandler={myChangeHandler}
            errorMessage={'error message'}
            error={error}/>
      </form>
    </div>
  );
}

export default App;
