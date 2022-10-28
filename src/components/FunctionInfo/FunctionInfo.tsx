import {useDispatch, useSelector} from 'react-redux';
import {useMemo, useEffect, memo} from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { FunctionId } from '../../types/api/queryParams';
import { loadFunctionAction, functionResponseSelector } from '../../api/requests';

const FunctionInfo = ({ fileId, funcName }: Partial<FunctionId>) => {
  const dispatch = useDispatch();

  const functionId: FunctionId | null = useMemo(() => fileId && funcName ? { fileId, funcName } : null, [fileId, funcName]);
  const allFunctions = useSelector(functionResponseSelector);
  const func = functionId ? allFunctions(functionId) : null;

  useEffect(() => {
    if (functionId) {
      dispatch(loadFunctionAction(functionId));
    }
  }, [dispatch, functionId]);

  return func ? <Paper sx={{ margin: 2, padding: 2 }}>
    <Box>
      <Typography component="span" variant="h4" sx={{ fontWeight: 700 }}>{ func?.name }</Typography>
      <Typography component="span" variant="h5"> function</Typography>
    </Box>
    <Box>
      <Typography variant="body1">{ func ? `Last updated: ${new Date(func.contentChangedAt).toLocaleString()}` : null }</Typography>
    </Box>
  </Paper> : null;
};

export default memo(FunctionInfo);
