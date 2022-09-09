import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Function from '../pages/function';
import LoginError from '../pages/login-error';
import SignIn from '../pages/sign-in';
import PrivacyPolicy from '../pages/privacy-policy';
import Terms from '../pages/terms';
import Error from '../pages/error';
import { ROUTES } from './constants';
import Layout from '../layout';
import Payments from '../pages/payments';

const Router: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.LOGIN_ERROR} element={<LoginError />} />
        <Route path={ROUTES.FUNCTION} element={<Function />} />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route path={ROUTES.TERMS} element={<Terms />} />
        <Route path={ROUTES.PAYMENTS} element={<Payments />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
};

export default Router;
