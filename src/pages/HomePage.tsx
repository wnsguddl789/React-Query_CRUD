import { AuthProps } from "../types";

import { withAuth } from "@hocs";

interface Props extends AuthProps {}

export const HomePage = withAuth(({}: Props) => {
  return (
    <div className="w-screen bg-black">
      <p className="text-2xl text-blue-400">Hello world!</p>
    </div>
  );
});
