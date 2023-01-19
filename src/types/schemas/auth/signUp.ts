export interface SignUpInputs {
  email: string;
  password: string;
  name: string;
  passwordRepeat: string;
}

export interface SignUpResponseType {
  message: string;
  token: string;
}
