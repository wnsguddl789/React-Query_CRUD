import { useForm } from 'react-hook-form';

import { AuthResolver } from '@models';

import { withAuth } from '@helper';
import { SignUpInputs, AuthProps } from '@types';

interface Props extends AuthProps {}

export const SignUpPage = withAuth(({ auth }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({ resolver: AuthResolver.default.signUp });

  const onSubmit = async (input: SignUpInputs) => {
    if (!auth) return;
    const res = await auth.signUpAction(input);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', { required: true })} type="email" />
        <p>{errors.email?.message}</p>
        <input {...register('password')} type="password" />
        <p>{errors.password?.message}</p>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </button>
      </form>
    </div>
  );
});
