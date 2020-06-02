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
  oninput,
  className,
  id,
  type,
  ...props
}:Props) => (
  <input
    type={type ? '${type}' : 'text'}
    className={'comp-textInput ${className}'}
    id={'${id}'}
    oninput={(
      input:React.HTMLProps<InputEvent>
      ):any => {oninput(input)}}
    {...props}>
  </input>
);

  

  export default TextInput;
  