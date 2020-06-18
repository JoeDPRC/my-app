import React from 'react';
import './Home.css';
import { Props, State } from './Type';
import Button from '../Button/Button';
import {Redirect} from "react-router-dom";
import PATHS from "../Route/Paths";



export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      loggedIn: true,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e: Event):void {
    e.preventDefault()

    this.setState({
      loggedIn: false,
    })
  }

  render() {
    return (
      <>
        {!this.state.loggedIn ? <Redirect to={PATHS.login}/> :
          <>
            <h1>Home Page</h1>

            <Button 
              displayError={true}
              className={`buttonClass`}
              onClickHandler={this.clickHandler}
              children={'Logout'}
              onMessage={'succesfully entered username and password'}/>
          </>
        }
      </>
    )
  }
}