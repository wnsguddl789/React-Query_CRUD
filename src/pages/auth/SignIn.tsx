import { useForm } from 'react-hook-form';

import { AuthResolver } from '@models';

import { withAuth } from '@helper';
import { useSignIn } from '@hooks';
import { SignInInputs, AuthProps } from '@types';

interface Props extends AuthProps {}

export const SignInPage = withAuth(({}: Props) => {
  const { data, error, isError, isSuccess, mutate } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({ resolver: AuthResolver.default.signIn });

  const onSubmit = async (input: SignInInputs) => {
    try {
      const res = mutate(input);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', { required: true })} type="email" />
        <p>{errors.email?.message}</p>
        <input {...register('password')} type="password" />
        <p>{errors.password?.message}</p>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          로그인
        </button>
      </form>
    </div>
  );
});
