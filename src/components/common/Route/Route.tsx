import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
  Redirect} from "react-router-dom";
import PATHS from "./Paths";
import LoginPage from '../../../containers/common/LoginPage/LoginPage';
import LoggedInPage from '../../../containers/common/LoggedInPage/loggedInPage';



//put all the routes inside the paths.tsx as an enum and import it here as an arg for the getRoutes function
export function getRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={PATHS.login} component={LoginPage}/>
        <Route path={PATHS.homepage} component={LoggedInPage}/>
        <Redirect to={PATHS.login}/>
      </Switch>
    </Router>
  )
}