import React from 'react';
import './LoginPage.css';
import Login from '../../../components/common/Login/Login';


const LoginPage = () =>
  <div className="App">
    <Login
      className={'formClass'}
      formTitle={'Login Page'}/>
  </div>

  export default LoginPage