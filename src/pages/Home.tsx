import { AuthProps } from '../types';

import { withAuth } from '@helper';

interface Props extends AuthProps {}

export const HomePage = withAuth(({ auth }: Props) => {
  return <div>홈</div>;
});
