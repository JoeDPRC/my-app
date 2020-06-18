import React from 'react';
import './Button.css';
import {Props} from './Type';


const Button = ({
  onClickHandler,
  className,
  displayError,
  onMessage,
  ...props
}:Props) => ( 
  <>

    <button 
      className={`comp-button ${className}`}
      onClick={(
        e:React.MouseEvent<HTMLButtonElement,MouseEvent>
        ):void => {onClickHandler(e)}}
      {...props}
    >{props.children}</button>

    <p className={`onMessage hide ${displayError ? 'show' : ''}`}>{onMessage}</p>
  </> 
)
  
export default Button;
