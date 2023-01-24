import { SignUpInputs } from "@types";

import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@models";

export default function useSignUpMutation() {
  const { signUpAction, setLoggedIn, setToken } = useAuthStore();

  const signUpMutation = useMutation(
    (input: SignUpInputs) => {
      return signUpAction(input);
    },
    {
      onSuccess: ({ data: { token } }) => {
        localStorage.setItem("token", token);
        setLoggedIn();
        setToken(token);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { signUpMutation };
}
