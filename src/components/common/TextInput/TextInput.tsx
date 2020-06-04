import React from 'react';
import './TextInput.css';
import { Props } from './Type';



// class TextInput extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       onInput: props.onInput,
//       label: props.label,
//       className: props.className,
//       type: props.type,
//   ...props
//     }
//   }
// }


const TextInput = ({
  onChangeHandler,
  className,
  id,
  type,
  errorMessage,
  error,
  ...props
}:Props) => (
  <React.Fragment>
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
  