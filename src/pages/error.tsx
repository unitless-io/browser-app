import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../router/constants';

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.APPLICATIONS);
  }, [navigate]);

  return null;
}
