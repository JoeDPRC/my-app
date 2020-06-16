
export const usernameAndPasswordAreValid = (passwordError: boolean, usernameError: boolean, username: string, password: string) => 
  !passwordError && 
  !usernameError && 
  username && 
  password

export const buttonErrorMessage = (passwordError: boolean, usernameError: boolean, username: string, password: string, resStatus: string) => {
  if(!username && !password){
    return 'Username and Password both are empty, please enter a valid username and password before trying to login.'
  } 
  else if (!username) {
    return 'Username is empty, please enter a valid value before trying to login.'
  }
  else if (!password) {
    return 'Password is empty, please enter a valid value befre trying to login.'
  }
  else if(passwordError) {
    return 'Password does not match minimum criteria. It must contain an uppercase, lowercase, numeric and special character. '+
    ' Please enter a valid value before trying to login'
  }
  else if(resStatus !== '200'){
    return 'The request failed, this may be due to the server being down. Please try again and contact us if this does not change.'
  }
  else{
    return ''
  }
}

export const passwordValidator = (password: string) => {
let regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[:;!@#$%^&*/])")
  return !(regEx.test(password))
}