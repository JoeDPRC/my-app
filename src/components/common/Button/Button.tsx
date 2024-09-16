import React from 'react';
import './Button.css';
import {Props} from './Type';


const Button = ({
  onClickHandler,
  className,
  displayError,
  onMessage,
  disabled,
  ...props
}:Props) => ( 
  <>

    <button 
      className={`comp-button ${className}`}
      disabled={disabled}
      onClick={(
        e:React.MouseEvent<HTMLButtonElement,MouseEvent>
        ):void => {onClickHandler(e)}}
      {...props}
    >{props.children}</button>

    <p className={`onMessage hide ${displayError ? 'show' : ''}`}>{onMessage}</p>
  </> 
)
  
export default Button;
