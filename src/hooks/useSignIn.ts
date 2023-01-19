import { SignInInputs } from '@types';

import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@models';

export default function useSignUp() {
  const authModel = useAuthStore((state) => state);

  const { data, error, isError, isSuccess, mutate } = useMutation((input: SignInInputs) => authModel.signInAction(input), {
    onSuccess: (data) => {
      authModel.setLoggedIn();
    },
    onError: () => {},
  });

  return { data, error, isError, isSuccess, mutate };
}
