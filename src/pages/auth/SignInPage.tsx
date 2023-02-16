import { useForm } from "react-hook-form";

import { AuthResolver } from "@models";

import { withAuth } from "@hocs";
import { useSignInMutation } from "@hooks";
import { SignInInputs, AuthProps } from "@types";

interface Props extends AuthProps {}

export const SignInPage = withAuth(({}: Props) => {
  const { signInMutate } = useSignInMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({ resolver: AuthResolver.signIn });

  const onSubmit = handleSubmit((input: SignInInputs) => {
    signInMutate.mutate(input);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input {...register("email", { required: true })} type="email" />
        <p>{errors.email?.message}</p>
        <input {...register("password")} type="password" />
        <p>{errors.password?.message}</p>
        <button type="submit" onClick={onSubmit}>
          로그인
        </button>
      </form>
    </div>
  );
});
