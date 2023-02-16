import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

type withRouterType = (Component: React.ReactNode) => (props: any) => React.ReactNode | void;

const withRouter: withRouterType = (Component) => (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  // return <div></div>;
};

export default withRouter;
