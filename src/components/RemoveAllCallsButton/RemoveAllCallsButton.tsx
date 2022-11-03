import { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteAllCallsAction } from '@app/api/requests';

const RemoveAllCallsButton = () => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(deleteAllCallsAction());
  }, [dispatch]);

  return (
    <Button variant="outlined" color="inherit" startIcon={<DeleteIcon />} onClick={onClick}>
      Remove all calls
    </Button>
  );
};

export default memo(RemoveAllCallsButton);
