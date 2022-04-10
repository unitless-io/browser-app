import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userResponseSelector } from '../api/requests/user';
import { ROUTES } from '../router/constants';

export const useRedirectToHome = () => {
  const user = useSelector(userResponseSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ROUTES.HOME);
    }
  }, [navigate, user]);
};
