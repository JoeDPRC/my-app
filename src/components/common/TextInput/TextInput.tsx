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
  placeholder,
  ...props
}:Props) => (
  <>
    <label 
      className={`${labelClass} ${labelEnabled ? '' : 'hide'}`}
      id={labelID}>{labelText}</label>
      
    <input
      type={type ? type : 'text'}
      className={`comp-textInput ${className}`}
      id={id}
      placeholder={placeholder ? placeholder : ''}
      onChange={(
        e:React.ChangeEvent<HTMLInputElement>
        ):any => {e.persist();onChangeHandler(e.currentTarget.value)}}
      {...props}/>
      
    <p className={`errorMessage hide ${error ? 'show' : ''}`}>{errorMessage}</p>
  </>
);

export default TextInput;
  