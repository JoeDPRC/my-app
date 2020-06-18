import React from 'react';
import './Login.css';
import { Props, State, Response } from './Type';
import TextInputBox from '../TextInput/TextInput';
import Button from '../Button/Button';
import { requestService } from '../../../service/LoginRequest';
import {Redirect} from "react-router-dom";
import PATHS from "../Route/Paths";
import {usernameAndPasswordAreValid, buttonErrorMessageSwitch} from '../Utils/Utils'

const requestConfig = {
  method: 'Post', 
  url: 'http://localhost:5000/api/v1/auth'};
                 
const responseConfig = {dataTransformation: (res: Response) => 
  res.data
}

const errorConfig = {throwError: (error: Event) => {
  throw(error)
}}


export default class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      usernameError: false,
      passwordError: false,
      username: '',
      password: '',
      displayButtonError: false,
      loggedIn: false,
      resStatus: '',
    };

    this.usernameErrorHandler = this.usernameErrorHandler.bind(this);
    this.passwordErrorHandler = this.passwordErrorHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  usernameErrorHandler(value: string):void {

    if (!value) {
      this.setState({
        usernameError: true,
        username: value,
        displayButtonError: false
      })
    }
    else {
      this.setState({
        usernameError: false,
        username: value,
        displayButtonError: false
      })
    }
  }

  passwordErrorHandler(value: string):void {

    if (!value) {
      this.setState({
        passwordError: true,
        password: value,
        displayButtonError: false
      })
    }
    else {
      this.setState({
        passwordError: false,
        password: value,
        displayButtonError: false
      })
    }
  }
  
  clickHandler(e: React.FormEvent<HTMLFormElement>):void {
    
    const {
      passwordError,
      usernameError,
      username,
      password } = this.state;
    
    e.preventDefault()

    if (usernameAndPasswordAreValid(passwordError, usernameError, password, username)) {
      requestService(requestConfig, responseConfig.dataTransformation, errorConfig.throwError)
      .then((res)=>{
        if (res.status === '200') {
          this.setState({
            loggedIn: true,
            displayButtonError: false,
            resStatus: res.status
          })
        }
      })
    } else {
      this.setState({
        displayButtonError: true,
      })
    }
  }

  
  render() {
    return(
      <>
      {this.state.loggedIn ? <Redirect to={PATHS.homepage}/> :
        <form 
          className={this.props.className}
          onSubmit={this.clickHandler}>

          <legend>{this.props.formTitle}</legend>

          <TextInputBox
            labelEnabled={true}
            labelText={'Username: '}
            labelClass={'label'}
            className={'usernameTextInput'}
            id={'usernameTextInput'}
            placeholder={'Username...'}
            type={'text'}
            onChangeHandler={this.usernameErrorHandler}
            errorMessage={'You must enter a username'}
            error={this.state.usernameError}/>

          <TextInputBox
            labelEnabled={true}
            labelText={'Password: '}
            labelClass={'label'}
            className={'passwordTextInput'}
            id={'passwordTextInput'}
            placeholder={'Password...'}
            type={'password'}
            onChangeHandler={this.passwordErrorHandler}
            errorMessage={'password must contain an upper, lower, numeric and special character'}
            error={this.state.passwordError}/>

          <Button
            displayError={this.state.displayButtonError}
            className={`buttonClass`}
            onClickHandler={() => {}}
            children={'Login'}
            onMessage={buttonErrorMessageSwitch(
              this.state.username, 
              this.state.password)}/>

        </form>}
      </>
    )}

}
