import { SignUpInputs } from '@types';

import { useMutation } from '@tanstack/react-query';
import { AuthModel } from '@models';

export default function useSignUp() {
  const { data, error, isError, isSuccess, mutate } = useMutation((input: SignUpInputs) => {
    const auth = AuthModel.createInstance();
    return auth.signUpAction(input);
  });

  return { data, error, isError, isSuccess, mutate };
}
