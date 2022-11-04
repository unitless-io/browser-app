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
    <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={onClick}>
      Delete all calls
    </Button>
  );
};

export default memo(RemoveAllCallsButton);
