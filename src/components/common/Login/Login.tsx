import React from 'react';
import './Login.css';
import { Props, State, Response } from './Type';
import TextInputBox from '../TextInput/TextInput';
import Button from '../Button/Button';
import { requestService } from '../../../service/LoginRequest';
import {Redirect} from "react-router-dom";
import PATHS from "../Route/Paths";
import {usernameAndPasswordAreValid, buttonErrorMessage, passwordValidator} from '../utils/Utils'

export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      usernameError: false,
      passwordError: false,
      username: '',
      password: '',
      enabled: false,
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
        enabled: false,
        username: value
      })
    }
    else {
      this.setState({
        usernameError: false,
        username: value
      })
    }
  }

  passwordErrorHandler(value: string):void {
  
    if (passwordValidator(value)) {
      this.setState({
        passwordError: true,
        enabled: false,
        password: value
      })
    }
    else {
      this.setState({
        passwordError: false,
        password: value
      })
    }
  }
  
  
  
  requestConfig = {method: 'Post', 
                 url: 'http://localhost:5000/api/v1/auth'};
                 
  responseConfig = {dataTransformation: (res: Response) => {
    return res.data;
  }}

  errorConfig = {throwError: (error: Event) => {
    throw(error)
  }}

  
  clickHandler(e: React.FormEvent<HTMLFormElement>):void {
    const {
      passwordError,
      usernameError,
      username,
      password } = this.state;
    
    e.preventDefault()

    if (usernameAndPasswordAreValid(passwordError, usernameError, password, username)) {
      requestService(this.requestConfig, this.responseConfig.dataTransformation, this.errorConfig.throwError)
      .then((res)=>{
        if (res.status === '200') {
          this.setState({
            loggedIn: true,
            enabled: false,
            resStatus: res.status
          })
          }
          else{
            this.setState({
              enabled: true,
              resStatus: res.status
            })
          } 
        })
    } else {
        this.setState({
          enabled: true
        })
      }
  }

  
  render() {
    return(
    <>
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
              type={'password'}
              onChangeHandler={this.passwordErrorHandler}
              errorMessage={'password must contain an upper, lower, numeric and special character'}
              error={this.state.passwordError}/>
            <Button
              switchedOn={this.state.enabled}
              className={`buttonClass`}
              onClickHandler={() => {}}
              children={'Login'}
              onMessage={buttonErrorMessage(this.state.passwordError, 
                                            this.state.usernameError, 
                                            this.state.username, 
                                            this.state.password, 
                                            this.state.resStatus)}/>
      </form>
      {this.state.loggedIn ? <Redirect to={PATHS.homepage}/> : <></>}

    </>


    )}

}
