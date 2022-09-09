import { useCallback } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { doPaymentAction } from '../api/requests/payment';

const Payments = (props: any) => {
  const dispatch = useDispatch();

  const onPay = useCallback(() => {
    dispatch(doPaymentAction());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Typography variant="h5" sx={{ margin: 1 }}>
        Payments
      </Typography>
      <Button variant="outlined" size="small" onClick={onPay}>
        Test Pay
      </Button>
    </Container>
  );
};

export default Payments;
