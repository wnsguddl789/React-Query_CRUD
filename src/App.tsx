import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignInPage, HomePage, SignUpPage } from '@pages';

const App = () => {
  const router = createBrowserRouter([
    { element: <HomePage />, path: '/' },
    { element: <SignInPage />, path: '/auth/signIn' },
    { element: <SignUpPage />, path: '/auth/signUp' },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
