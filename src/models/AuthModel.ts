import { SignInInputs, SignUpInputs } from '@types';
import { api } from '@config/api';

export default class AuthModel {
  constructor() {}
  static createInstance = () => new AuthModel();

  signInAction = async (input: SignInInputs) => {
    return await api.post('/users/login', input);
  };

  signUpAction = async (input: SignUpInputs) => {};
}
