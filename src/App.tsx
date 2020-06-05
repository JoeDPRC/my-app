import React from 'react';
import './App.css';
import Login from './components/common/Login/Login';

type Props = {
}

type State = {
  error: boolean;
}

export default class App extends React.Component<Props, State> {


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
