import { useSelector } from 'react-redux';

import { userResponseSelector } from '../api/requests/user';

export default function Home() {
  const user = useSelector(userResponseSelector);

  if (!user) {
    return null;
  }

  return <div>App</div>;
}
