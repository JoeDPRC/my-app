export type Props = {
  className: string,
  formTitle: string,
}

export type State = {
  usernameError: boolean;
  passwordError: boolean;
  displayButtonError: boolean;
  username: string,
  password: string,
  loggedIn: boolean,
  resStatus: string
}

export type Response = {
  success: string,
  message: string,
  data: object,
  status: string
}