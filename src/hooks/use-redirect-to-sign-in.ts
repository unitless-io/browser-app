import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { isLoadedUserSelector, userResponseSelector } from '../api/requests/user';
import { ROUTES } from '../router/constants';

export const useRedirectToSignIn = () => {
  const user = useSelector(userResponseSelector);
  const isLoadedUser = useSelector(isLoadedUserSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoadedUser && !user) {
      navigate(ROUTES.SIGN_IN);
    }
  }, [navigate, user, isLoadedUser]);
};
