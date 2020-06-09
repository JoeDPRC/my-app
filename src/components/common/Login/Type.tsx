export type Props = {
    className: string,
    formTitle: string,
}

export type State = {
    usernameError: boolean;
    passwordError: boolean;
    switchedOn: boolean;
    username: string,
    password: string
  }