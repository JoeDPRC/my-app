import React from 'react';
import './App.css';
// import LoggedInPage from './containers/common/LoggedInPage/LoggedInPageRouter';
import {getRoutes} from './components/common/Route/Route'

const App = () => 
  <div className="App"> {getRoutes()}</div>

export default App