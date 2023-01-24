import { useForm } from "react-hook-form";

import { AuthResolver } from "@models";

import { withAuth } from "@hocs";
import { SignUpInputs, AuthProps } from "@types";
import { useSignUpMutation } from "@hooks";

interface Props extends AuthProps {}

export const SignUpPage = withAuth(({}: Props) => {
  const { signUpMutation } = useSignUpMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({ resolver: AuthResolver.signUp });

  const onSubmit = handleSubmit((input: SignUpInputs) => {
    signUpMutation.mutate(input);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input {...register("email", { required: true })} type="email" />
        <p>{errors.email?.message}</p>
        <input {...register("password")} type="password" />
        <p>{errors.password?.message}</p>
        <button type="submit" onClick={onSubmit}>
          회원가입
        </button>
      </form>
    </div>
  );
});
