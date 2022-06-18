import { useSelector } from 'react-redux';

import { userResponseSelector } from '../api/requests/user';
import Main from '../components/Main';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useRedirectToSignIn } from '../hooks/use-redirect-to-sign-in';

export default function Layout(props: any) {
  useRedirectToSignIn();

  const user = useSelector(userResponseSelector);

  if (!user) {
    return null;
  }

  return (
    <>
      <ResponsiveAppBar />
      { props.children }
    </>
  );
}
