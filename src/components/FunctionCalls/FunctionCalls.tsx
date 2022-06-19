import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import prop from 'ramda/src/prop';
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { functionCallsResponseSelector, loadFunctionCallsAction } from '../../api/requests/function-calls';
import FunctionCallModal from './sub-components/FunctionCallModal/FunctionCallModal';

const columns: GridColDef[] = [
  { field: 'args', headerName: 'Arguments', flex: 4 },
  { field: 'result', headerName: 'Returned', flex: 2 },
  {
    field: 'button',
    headerName: '',
    align: "center",
    renderCell: (params: GridRenderCellParams) => (
      <Link to={`/function/${params.row.functionId}?callId=${params.row._id}`} style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
        >
          View
        </Button>
      </Link>
    ),
  },
];

const getCallId = prop('_id');

const Toolbar = () => (
  <Stack direction="row" justifyContent="flex-end" sx={{ margin: 2 }}>
    <Button variant="outlined" size="small" onClick={() => alert('downloaded')} endIcon={<FileDownloadIcon />}>
      Download unit tests
    </Button>
  </Stack>)
;

const FunctionCalls = ({ funcId }: { funcId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFunctionsCalls = useSelector(functionCallsResponseSelector);
  const functionCalls = funcId ? allFunctionsCalls(funcId) : [];

  useEffect(() => {
    if (funcId) {
      dispatch(loadFunctionCallsAction(funcId));
    }
  }, [dispatch, funcId]);

  return <div>
    <DataGrid
    components={{ Toolbar }}
    columns={columns}
    rows={functionCalls}
    getRowId={getCallId}
    autoHeight
    checkboxSelection
    disableSelectionOnClick />
    <FunctionCallModal funcId={funcId} />
  </div>;
};

export default FunctionCalls;
