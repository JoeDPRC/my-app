import React from 'react';
import './Login.css';
import { Props, State } from './Type';
import TextInputBox from '../TextInput/TextInput';
import Button from '../Button/Button';
import { requestService } from '../../../service/LoginRequest';
import {
  useHistory
} from "react-router-dom";

// type response = {
//   success: string,
//   message: string,
//   data: object,
//   status: string
// }


const requestConfig = {method: 'Post', 
               url: 'http://localhost:5000/api/v1/auth'};
               
// const responseConfig = {dataTransformation: (res: response) => {
//   res.data;
// }}

export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      usernameError: false,
      passwordError: false,
      username: '',
      password: '',
      switchedOn: false,
    };
    this.usernameErrorHandler = this.usernameErrorHandler.bind(this);
    this.passwordErrorHandler = this.passwordErrorHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  usernameErrorHandler(value: string) {
    this.setState({
      username: value
    })
    if (value.length < 5) {
      this.setState({
        usernameError: true,
        switchedOn: false
      })
    }
    else {
      this.setState({
        usernameError: false
      })
    }
  }

  passwordErrorHandler(value: string) {
    this.setState({
      password: value
    })
    if (value.length < 5) {
      this.setState({
        passwordError: true,
        switchedOn: false
      })
    }
    else {
      this.setState({
        passwordError: false
      })
    }
  }


  clickHandler(e: Event) {
    e.preventDefault()

    const history = useHistory();

    if (this.state.passwordError===false && this.state.usernameError===false) {
      requestService(requestConfig).then((res)=>{
      if (res.status === 200) {
        history.push("../../containers/common/LoggedInPage/loggedInPage");
        this.setState({
          switchedOn: true
        })
        } else {
          this.setState({
            switchedOn: false
          })
        }
      })
    } else {
        this.setState({
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
            <Button
              switchedOn={this.state.switchedOn}
              className={`buttonClass`}
              onClickHandler={this.clickHandler}
              // onClickHandler={this.loginRequest.doRequest()}
              children={'Login'}
              onMessage={'succesfully entered username and password'}/>
      </form>
    </>


    )
  }

}
