import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./templates";
import { SignInPage, HomePage, SignUpPage, TodoListPage } from "@pages";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth/signIn" element={<SignInPage />} />
        <Route path="/auth/signUp" element={<SignUpPage />} />
        <Route path="/todos" element={<TodoListPage />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
