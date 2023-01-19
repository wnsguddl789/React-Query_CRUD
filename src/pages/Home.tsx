import { AuthProps } from '../types';

import { withAuth } from '@helper';

interface Props extends AuthProps {}

export const HomePage = withAuth(({}: Props) => {
  return <div>홈</div>;
});
