import React from "react";
import { DefaultHeader, DefaultFooter } from "./index";
import { Outlet as CurrentPageComponent } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const Layout = () => {
  return (
    <React.Fragment>
      <DefaultHeader />
      <main className="mt-10 max-h-screen">
        <CurrentPageComponent />
      </main>
      <DefaultFooter />
    </React.Fragment>
  );
};

export default Layout;
