import React from 'react';
import './LoginPage.css';
import { Props, State } from './Type';
import Login from '../../../components/common/Login/Login';


export default class LoginPage extends React.Component<Props, State> {

  render() {
    return (
      <div className="App">
        <Login
          className={'formClass'}
          formTitle={'Login Page'}
          />
      </div>
    );
  }
}