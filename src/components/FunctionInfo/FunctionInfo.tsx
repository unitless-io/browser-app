import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { loadFunctionAction, functionResponseSelector } from '../../api/requests/function';
import Typography from '@mui/material/Typography';

const FunctionInfo = ({ funcId }: { funcId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFunctions = useSelector(functionResponseSelector);
  const func = funcId ? allFunctions(funcId) : null;

  useEffect(() => {
    if (funcId) {
      dispatch(loadFunctionAction(funcId));
    }
  }, [dispatch, funcId]);

  return func ? <Paper sx={{ margin: 2, padding: 2 }}>
    <Box>
      <Typography component="span" variant="h4" sx={{ fontWeight: 700 }}>{ func?.name }</Typography>
      <Typography component="span" variant="h5"> function</Typography>
    </Box>
    <Box>
      <Typography variant="body1">{ func ? `Last called: ${new Date(func.updatedAt).toLocaleString()}` : null }</Typography>
    </Box>
  </Paper> : null;
};

export default FunctionInfo;
