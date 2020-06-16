import React from 'react';
import LoggedInPage from './loggedInPage';




type Props = {
}

type State = {
}

export default class LoggedInPageRouter extends React.Component<Props, State> {

  render() {
    return (
        <div className="LoggedInPage">
          <LoggedInPage></LoggedInPage>
      </div>
    );
  }
}