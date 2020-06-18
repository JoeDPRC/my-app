
export const usernameAndPasswordAreValid = (passwordError: boolean, usernameError: boolean, username: string, password: string) => 
  !passwordError && 
  !usernameError && 
  username && 
  password


export const buttonErrorMessageSwitch = (username: string, password: string) => {
  
  switch(username) {

    case (''):
      return (password ? 
        'Username is empty, please enter a valid value before trying to login. ' : 
        'Username and Password both are empty, please enter a valid username and password before trying to login.')
    
    default:
      return (password ? 
        '' : 
        'Password is empty, please enter a valid value before trying to login.')
  }
}

// export const buttonErrorMessage = (username: string, password: string) => {

//   if(!username && !password){
//     return 'Username and Password both are empty, please enter a valid username and password before trying to login.'
//   } 
//   else if (!username) {
//     return 'Username is empty, please enter a valid value before trying to login.'
//   }
//   else if (!password) {
//     return 'Password is empty, please enter a valid value before trying to login.'
//   }
//   else{
//     return ''
//   }
// }

// export const passwordValidator = (password: string) => {
// let regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[:;!@#$%^&*/])")
//   return !(regEx.test(password))
// }
