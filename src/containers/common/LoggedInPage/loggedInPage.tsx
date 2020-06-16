import React from 'react';
import './LoggedInPage.css';
import { Props, State } from './Type';
import Button from '../../../components/common/Button/Button';
import {Redirect} from "react-router-dom";
import PATHS from "../../../components/common/Route/Paths";



export default class LoggedInpage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      loggedIn: true,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  //loggedInText = 'Hello you are logged in'

  clickHandler(e: Event):void {
    e.preventDefault()

    this.setState({
      loggedIn: false,
    })
  }

  render() {
    return (
      <>
        <h1>LoggedInPage</h1>
        <Button switchedOn={true}
          className={`buttonClass`}
          onClickHandler={this.clickHandler}
          children={'Logout'}
          onMessage={'succesfully entered username and password'}/>
        {this.state.loggedIn ? <></> : <Redirect to={PATHS.login}/>}
      </>
    )
  }
}