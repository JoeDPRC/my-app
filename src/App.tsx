import React from 'react';
import './App.css';
// import LoggedInPage from './containers/common/LoggedInPage/LoggedInPageRouter';
import {getRoutes} from './components/common/Route/Route'
import store from './store/store'
import { Provider } from 'react-redux'

const App = () =>
  <Provider store={store}>
    <div className="App"> {getRoutes()}</div>
  </Provider>

export default App