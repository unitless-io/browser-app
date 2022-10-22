import { useLocation } from 'react-router-dom';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useRedirectToSignIn } from '../hooks/use-redirect-to-sign-in';
import { NO_APP_LAYOUT_ROUTES } from '../router/constants';

export default function Layout(props: any) {
  const location = useLocation();

  useRedirectToSignIn();

  if (NO_APP_LAYOUT_ROUTES.has(location.pathname)) {
    return <>{props.children}</>;
  }

  return (
    <>
      <ResponsiveAppBar />
      {props.children}
    </>
  );
}
