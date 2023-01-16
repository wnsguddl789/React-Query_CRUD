import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignInSchema = yup
  .object({
    email: yup.string().email('Invalid email format').required('Mail is required'),
    password: yup.string().min(8).required('password must be 8 characters'),
  })
  .required();

const SignUpSchema = yup
  .object({
    email: yup.string().email('Invalid email format').required('Mail is required'),
    password: yup.string().min(8).required('password must be 8 characters'),
  })
  .required();

const resolver = {
  signIn: yupResolver(SignInSchema),
  signUp: yupResolver(SignUpSchema),
};

export default resolver;
