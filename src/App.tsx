import React from 'react';
import './App.css';
import Button from './components/common/Button/Button';

type Props = {
}

type State = {
  switchedOn: boolean;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {switchedOn: false};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let currentComponent = this;
    if (currentComponent.state.switchedOn) {
      currentComponent.setState({
        switchedOn: false
      })
    } else {
      currentComponent.setState({
        switchedOn: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button  
          className={`buttonClass`} 
          onClickHandler={this.clickHandler}
          switchedOn={this.state.switchedOn}
          children={'Press Me!'}
          onMessage={'the button is switched on'}
          ></Button>
        </header>
      </div>
    );
}
}

