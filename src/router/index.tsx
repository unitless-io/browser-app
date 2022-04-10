import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import LoginError from '../pages/login-error';
import SignIn from '../pages/sign-in';
import Error from '../pages/error';
import { ROUTES } from './constants';

const Router: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.LOGIN_ERROR} element={<LoginError />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
