import {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import prop from 'ramda/src/prop';
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import {downloadUnitTestsFileAction, unitTestsFileResponseSelector} from '../../api/requests/unit-tests-file';
import { functionCallsResponseSelector, loadFunctionCallsAction } from '../../api/requests/function-calls';
import FunctionCallModal from './sub-components/FunctionCallModal/FunctionCallModal';
import {GettingStarted} from '../GettingStarted';

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

const Toolbar = ({ funcId, callIds }: { funcId: string, callIds: Set<string> }) => {
  const dispatch = useDispatch();
  const onDownloadClick = useCallback(() => dispatch(downloadUnitTestsFileAction({ funcId, callIds: Array.from(callIds) })), [dispatch, funcId, callIds]);

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ margin: 2 }}>
      <Button variant="outlined" size="small" onClick={onDownloadClick} endIcon={<FileDownloadIcon />}>
        Download unit tests
      </Button>
    </Stack>
  );
}

const FunctionCalls = ({ funcId }: { funcId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFunctionsCalls = useSelector(functionCallsResponseSelector);
  const functionCalls = funcId ? allFunctionsCalls(funcId) : [];
  const [selectedCallIds, updateSelection] = useState(new Set<string>());
  const allFiles = useSelector(unitTestsFileResponseSelector);
  const { file = '', fileName = 'unit-tests.js' } = funcId ? allFiles({ funcId, callIds: Array.from(selectedCallIds) }) || {} : {};

  useEffect(() => {
    if (funcId) {
      dispatch(loadFunctionCallsAction(funcId));
    }
  }, [dispatch, funcId]);

  return functionCalls.length > 0 ? <div>
    <DataGrid
    components={{ Toolbar }}
    componentsProps={{ toolbar: { funcId, callIds: selectedCallIds } }}
    columns={columns}
    rows={functionCalls}
    getRowId={getCallId}
    onSelectionModelChange={(ids) => updateSelection(new Set(ids as string[]))}
    autoHeight
    checkboxSelection
    disableSelectionOnClick />
    <FunctionCallModal funcId={funcId} />
    <a id="file-download" style={{ display: 'none' }} href={file} download={fileName}>Tests file</a>
  </div> : <GettingStarted title="This function hasn't been called yet. Follow the guide below to get started:" />;
};

export default FunctionCalls;
