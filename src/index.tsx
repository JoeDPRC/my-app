import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
type props = { 
  text: string
}

const element = function(props: props) {
  return (<h1>props.text</h1>);
}

const paragraph = function(text: string) {
  <p>text</p>
}
*/
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

