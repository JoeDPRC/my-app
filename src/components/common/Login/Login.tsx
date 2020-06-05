import React from 'react';
import './Login.css';
import { Props } from './Type';
import TextInputBox from '../TextInput/TextInput';


type State = {
  usernameError: boolean;
  passwordError: boolean;
}

export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      usernameError: false,
      passwordError: false
    };
    this.usernameErrorHandler = this.usernameErrorHandler.bind(this);
    this.passwordErrorHandler = this.passwordErrorHandler.bind(this);
  }

  usernameErrorHandler(value: string) {
    let currentComponent = this;
    console.log(value);
    if (value.length < 5) {
      currentComponent.setState({
        usernameError: true
      })
    }
    else {
      currentComponent.setState({
        usernameError: false
      })
    }
  }

  passwordErrorHandler(value: string) {
    let currentComponent = this;
    console.log(value);
    if (value.length < 5) {
      currentComponent.setState({
        passwordError: true
      })
    }
    else {
      currentComponent.setState({
        passwordError: false
      })
    }
  }

  render() {
    return(
    <>
      <form className={this.props.className}>
        <legend>{this.props.formTitle}</legend>
          <TextInputBox
            labelEnabled={true}
            labelText={'Username: '}
            labelClass={'label'}
            className={'usernameTextInput'}
            id={'textInput'}
            type={'text'}
            onChangeHandler={this.usernameErrorHandler}
            errorMessage={'username must be longer the 5 characters'}
            error={this.state.usernameError}/>
            <br/>
            <TextInputBox
            labelEnabled={true}
            labelText={'Password: '}
            labelClass={'label'}
            className={'passwordTextInput'}
            id={'textInput'}
            type={'password'}
            onChangeHandler={this.passwordErrorHandler}
            errorMessage={'password must be longer the 5 characters'}
            error={this.state.passwordError}/>
      </form>
    </>


    )
  }

}
