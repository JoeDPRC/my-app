import React from 'react';
import './Label.css';
import { Props } from './Type';

const Label = ({
  className,
  id,
  ...props
}:Props) => (
  <label
    className={`comp-label ${className}`}
    {...id}
    {...props}>
  {props.children} 
  </label>
);

export default Label;
