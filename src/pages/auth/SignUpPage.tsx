import { useForm } from "react-hook-form";

import { AuthResolver } from "@models";

import { withAuth } from "@hocs";
import { SignUpInputs, AuthProps } from "@types";
import { useSignUp } from "@hooks";

interface Props extends AuthProps {}

export const SignUpPage = withAuth(({}: Props) => {
  const { data, error, isError, isSuccess, mutate: signUpAction } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({ resolver: AuthResolver.signUp });

  const onSubmit = async (input: SignUpInputs) => {
    signUpAction(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} type="email" />
        <p>{errors.email?.message}</p>
        <input {...register("password")} type="password" />
        <p>{errors.password?.message}</p>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </button>
      </form>
    </div>
  );
});
