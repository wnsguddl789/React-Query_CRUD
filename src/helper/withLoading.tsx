import React, { ComponentType, FunctionComponent, ReactNode } from 'react';

interface WithLoadingProps {
  loading: boolean;
}

const LoadingSpinner = () => {
  return <div>loading...</div>;
};

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <LoadingSpinner /> : <Component {...(props as P)} />;
    }
  };
};

export default withLoading;
