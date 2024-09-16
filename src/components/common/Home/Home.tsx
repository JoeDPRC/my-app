import React from 'react';
import './Home.css';
import { Props, State } from './Type';
import Button from '../Button/Button';
import {Redirect} from "react-router-dom";
import PATHS from "../Route/Paths";
import { connect } from 'react-redux';
import { authType } from '../../../store/reducers/Type/Type';
import store from '../../../store/store';
import {logoutAction} from '../../../store/actions/auth/LogoutAction';

const mapStateToProps = (state: authType) => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps) (class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e: Event):void {
    e.preventDefault()

    store.dispatch(logoutAction())
  }

  render() {
    return (
      <>
        {!this.props.loggedIn ? <Redirect to={PATHS.login}/> :
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
})