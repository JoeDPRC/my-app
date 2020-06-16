import React from 'react';
import './App.css';
// import LoggedInPage from './containers/common/LoggedInPage/LoggedInPageRouter';
import {getRoutes} from './components/common/Route/Route'


type Props = {
}

type State = {
}

export default class App extends React.Component<Props, State> {

  render() {
    return (
        <div className="App"> {getRoutes()}
  
      </div>
    );
  }
}
