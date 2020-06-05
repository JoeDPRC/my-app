import React from 'react';
import './Login.css';
import { Props } from './Type';
import TextInputBox from '../TextInput/TextInput';
import Button from '../Button/Button';



type State = {
  usernameError: boolean;
  passwordError: boolean;
  switchedOn: boolean;
}

export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      usernameError: false,
      passwordError: false,
      switchedOn: false,
    };
    this.usernameErrorHandler = this.usernameErrorHandler.bind(this);
    this.passwordErrorHandler = this.passwordErrorHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  usernameErrorHandler(value: string) {
    let currentComponent = this;
    if (value.length < 5) {
      currentComponent.setState({
        usernameError: true,
        switchedOn: false
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
    if (value.length < 5) {
      currentComponent.setState({
        passwordError: true,
        switchedOn: false
      })
    }
    else {
      currentComponent.setState({
        passwordError: false
      })
    }
  }

  clickHandler(e: Event) {
    e.preventDefault()
    let currentComponent = this;
    console.log(this.state.passwordError)
    console.log(this.state.usernameError)
    if (this.state.passwordError===false && this.state.usernameError===false) {
      currentComponent.setState({
        switchedOn: true
      })
    } else {
      currentComponent.setState({
        switchedOn: false
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
            id={'usernameTextInput'}
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
              id={'passwordTextInput'}
              type={'password'}
              onChangeHandler={this.passwordErrorHandler}
              errorMessage={'password must be longer the 5 characters'}
              error={this.state.passwordError}/>
            <br/>
            <Button
              switchedOn={this.state.switchedOn}
              className={`buttonClass`} 
              onClickHandler={this.clickHandler}
              children={'Login'}
              onMessage={'succesfully entered username and password'}/>
      </form>
    </>


    )
  }

}
