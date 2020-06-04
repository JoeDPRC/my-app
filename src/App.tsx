import React from 'react';
import './App.css';
import TextInputBox from './components/common/TextInput/TextInput';
//import Label from './components/common/Label/Label';

interface IProps {
}

interface IState {
  error: boolean;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {error: false};
    this.errorHandler = this.errorHandler.bind(this);
  }

//const label = "some text as the label: ";
//const formTitle = "Form Title";


 errorHandler(value: string) {
  let currentComponent = this;
  console.log(value);
  if (value.length < 5) {
    currentComponent.setState({
      error: true
    })
  }
  else {
    currentComponent.setState({
      error: false
    })
  }
}

  render() {
    return (
      <div className="App">
        <form>
          {/* <legend>{this.formTitle}</legend> */}
            {/* <Label 
            className={'labelClass'}
            id={'labelId'}
            children={label}></Label> */}
            <TextInputBox 
              className={'textInput'}
              id={'textInput'}
              type={'text'}
              onChangeHandler={this.errorHandler}
              errorMessage={'error message'}
              error={this.state.error}/>
        </form>
      </div>
    );
  }
}
