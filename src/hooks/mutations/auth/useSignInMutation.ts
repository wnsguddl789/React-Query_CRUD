import { SignInInputs } from "@types";

import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@models";

export default function useSignInMutation() {
  const { signInAction, setLoggedIn } = useAuthStore((state) => state);

  const signInMutate = useMutation(
    (input: SignInInputs) => {
      return signInAction(input);
    },
    {
      onSuccess: (data) => {
        setLoggedIn();
      },
      onError: () => {},
    }
  );

  return { signInMutate };
}
