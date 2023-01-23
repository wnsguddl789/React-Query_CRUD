import { SignUpInputs } from '@types';

import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@models';

export default function useSignUp() {
  const authModel = useAuthStore((state) => state);

  const { data, error, isError, isSuccess, mutate } = useMutation((input: SignUpInputs) => authModel.signUpAction(input), {
    onSuccess: ({ data: { token } }) => {
      localStorage.setItem('token', token);
      authModel.setLoggedIn();
      authModel.setToken(token);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { data, error, isError, isSuccess, mutate };
}
