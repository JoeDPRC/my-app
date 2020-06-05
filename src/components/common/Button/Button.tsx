import React from 'react';
import './Button.css';
import {Props} from './Type';


const Button = ({
    onClickHandler,
    className,
    switchedOn,
    onMessage,
    ...props
  }:Props) => 
    ( 
      <React.Fragment>
        <button 
          className={`comp-button ${className}`}
          onClick={(
            e:React.MouseEvent<HTMLButtonElement,MouseEvent>
            ):any => {onClickHandler(switchedOn)}}
          {...props}
        >
            {props.children}
        </button>
        <p className={`onMessage hide ${switchedOn ? 'show' : ''}`}>{onMessage}</p>
      </React.Fragment> )
  
  export default Button;
