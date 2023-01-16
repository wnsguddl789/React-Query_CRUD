import { ComponentType } from 'react';
import { AuthModel } from '@models';

function withAuth<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    const auth = AuthModel.createInstance();

    return <Component {...(hocProps as T)} auth={auth} />;
  };
}

export default withAuth;
