import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { isLoadedUserSelector, userResponseSelector } from '../api/requests/user';
import { NO_AUTH_ROUTES, ROUTES } from '../router/constants';

export const useRedirectToSignIn = () => {
  const user = useSelector(userResponseSelector);
  const isLoadedUser = useSelector(isLoadedUserSelector);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoadedUser && !user && !NO_AUTH_ROUTES.has(location.pathname)) {
      navigate(ROUTES.SIGN_IN);
    }
  }, [navigate, user, isLoadedUser]);
};
