import { SignInInputs } from '@types';

import { useMutation } from '@tanstack/react-query';
import { AuthModel } from '@models';

export default function useSignU() {
  const { data, error, isError, isSuccess, mutate } = useMutation((input: SignInInputs) => {
    const auth = AuthModel.createInstance();
    return auth.signInAction(input);
  });

  return { data, error, isError, isSuccess, mutate };
}
