import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Function from '../pages/function';
import Error from '../pages/error';
import { ROUTES } from './constants';
import Layout from '../layout';

const Router: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.FUNCTION} element={<Function />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
};

export default Router;
