import { create } from 'zustand';
import { SignInInputs, SignUpInputs, SignUpResponseType } from '@types';
import { api } from '@config/api';

import { AxiosResponse } from 'axios';

interface State {
  isLoggedIn: boolean;
  token: SignUpResponseType['token'] | null;

  setLoggedIn: () => void;
  setLoggedOut: () => void;
  setToken: (token: SignUpResponseType['token']) => void;

  signInAction: (input: SignInInputs) => Promise<AxiosResponse<any, any>>;
  signUpAction: (input: SignUpInputs) => Promise<AxiosResponse<any, any>>;
}

const useAuthStore = create<State>((set, get) => ({
  // state
  isLoggedIn: false,
  token: null,

  // getState
  getLoggedIn: () => get().isLoggedIn,
  getToken: () => get().token,

  // setState
  setLoggedIn: () => set(() => ({ isLoggedIn: true })),
  setLoggedOut: () => set(() => ({ isLoggedIn: false })),

  setToken: (token) => set(() => ({ token })),

  // actions
  signInAction: async (input) => {
    return await api.post('/users/login', input);
  },
  signUpAction: async (input) => {
    return await api.post('/users/create', input);
  },
}));

export default useAuthStore;
