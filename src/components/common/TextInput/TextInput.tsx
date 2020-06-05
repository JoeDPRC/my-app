import React from 'react';
import './TextInput.css';
import { Props } from './Type';


const TextInput = ({
  onChangeHandler,
  className,
  id,
  type,
  errorMessage,
  error,
  labelEnabled,
  labelText,
  labelClass,
  labelID,
  ...props
}:Props) => (
  <React.Fragment>
    <label 
      className={`${labelClass} ${labelEnabled ? '' : 'hide'}`}
      id={labelID}
      children={labelText}></label>
    <input
      type={type ? type : 'text'}
      className={`comp-textInput ${className}`}
      id={id}
      onChange={(
        e:React.ChangeEvent<HTMLInputElement>
        ):any => {e.persist();onChangeHandler(e.currentTarget.value)}}
      {...props}/>
      
      <p className={`errorMessage hide ${error ? 'show' : ''}`}>{errorMessage}</p>
  </React.Fragment>
);

  

  export default TextInput;
  