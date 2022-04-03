import { memo, FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import SignIn from '../pages/sign-in';

const Router: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            Loading...<Link to="/sign-in">sign in</Link>
          </div>
        }
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/app" element={<div>App</div>} />
    </Routes>
  );
};

export default memo(Router);
