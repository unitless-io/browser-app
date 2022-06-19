import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import prop from 'ramda/src/prop';

import { functionCallsResponseSelector, loadFunctionCallsAction } from '../../api/requests/function-calls';

const columns: GridColDef[] = [
  { field: 'args', headerName: 'Arguments', flex: 3 },
  { field: 'result', headerName: 'Returned', flex: 1 },
];

const FunctionCalls = ({ funcId }: { funcId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFunctionsCalls = useSelector(functionCallsResponseSelector);
  const functionCalls = funcId ? allFunctionsCalls(funcId) : [];

  useEffect(() => {
    if (funcId) {
      dispatch(loadFunctionCallsAction(funcId));
    }
  }, [dispatch, funcId]);

  return <DataGrid columns={columns} rows={functionCalls} getRowId={prop('_id')} autoHeight checkboxSelection />;
};

export default FunctionCalls;
