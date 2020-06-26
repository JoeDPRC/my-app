export type Props = {
  className: string,
  formTitle: string,
  loggedIn: boolean
}

export type State = {
  usernameError: boolean;
  passwordError: boolean;
  displayButtonError: boolean;
  username: string,
  password: string,
  buttonDisabled: boolean
}

export type Response = {
  success: string,
  message: string,
  data: object,
  status: string
}