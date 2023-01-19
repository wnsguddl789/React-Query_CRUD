import { useEffect } from 'react';
import { ComponentType } from 'react';
import { useAuthStore } from '@models';

import { useRouter } from '@hooks';

const PATHNAME = {
  signUp: '/auth/signup',
  signIn: '/auth/signin',
};

function withAuth(Component: ComponentType) {
  return () => {
    const { isLoggedIn, setLoggedIn, setToken } = useAuthStore((state) => state);
    const { location, navigate } = useRouter();

    const needRedirect = isLoggedIn && Object.values(PATHNAME).includes(location.pathname);

    useEffect(() => {
      if (needRedirect) navigate('/');
    }, [needRedirect]);

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) return;

      setLoggedIn();
      setToken(token);
    }, [isLoggedIn]);

    return <Component />;
  };
}

export default withAuth;
