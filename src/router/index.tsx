import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Function from '../pages/function';
import LoginError from '../pages/login-error';
import SignIn from '../pages/sign-in';
import Error from '../pages/error';
import { ROUTES } from './constants';
import Layout from '../layout/Layout';

const Router: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.LOGIN_ERROR} element={<LoginError />} />
        <Route path={ROUTES.FUNCTION} element={<Function />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
};

export default Router;
