import { Link } from "react-router-dom";

type Route = {
  path: string;
  name: string;
};

const DefaultHeader = () => {
  const routes: Route[] = [
    { path: "/", name: "Home" },
    { path: "/auth/signIn", name: "SignIn" },
    { path: "/auth/signUp", name: "SignUp" },
    { path: "/todos", name: "Todo List" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-10 shadow-lg flex items-center px-5">
      <ul className="flex gap-8">
        {routes?.map((route, index) => (
          <li key={`route-${index}`}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default DefaultHeader;
