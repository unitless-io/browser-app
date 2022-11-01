import { useEffect, useMemo, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import prop from 'ramda/src/prop';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { FunctionId } from '@app/types/api/queryParams';
import { GettingStarted } from '@app/components/GettingStarted';
import {
  unitTestsFileResponseSelector,
  functionCallsResponseSelector,
  loadFunctionCallsAction,
} from '@app/api/requests';

import FunctionCallModal from './sub-components/FunctionCallModal/FunctionCallModal';
import FunctionCallsToolbar from './sub-components/FunctionCallsToolbar';

const columns: GridColDef[] = [
  { field: 'args', headerName: 'Arguments', flex: 4 },
  { field: 'result', headerName: 'Returned', flex: 2 },
  {
    field: 'button',
    headerName: '',
    align: 'center',
    renderCell: (params: GridRenderCellParams) => (
      <Link to={`${window.location.pathname}?callId=${params.row._id}`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small" style={{ marginLeft: 16 }} tabIndex={params.hasFocus ? 0 : -1}>
          View
        </Button>
      </Link>
    ),
  },
];

const getCallId = prop('_id');

const FunctionCalls = ({ fileId, funcName }: Partial<FunctionId>) => {
  const dispatch = useDispatch();

  const functionId: FunctionId | null = useMemo(
    () => (fileId && funcName ? { fileId, funcName } : null),
    [fileId, funcName]
  );
  const allFunctionsCalls = useSelector(functionCallsResponseSelector);
  const functionCalls = functionId ? allFunctionsCalls(functionId) : [];
  const [selectedCallIds, updateSelection] = useState(new Set<string>());
  const allFiles = useSelector(unitTestsFileResponseSelector);
  const { file = '', fileName = 'unit-tests.js' } = functionId
    ? allFiles({ ...functionId, callIds: Array.from(selectedCallIds) }) || {}
    : {};

  useEffect(() => {
    if (functionId) {
      dispatch(loadFunctionCallsAction(functionId));
    }
  }, [dispatch, functionId]);

  return functionCalls.length > 0 ? (
    <div>
      <DataGrid
        components={{ Toolbar: FunctionCallsToolbar }}
        componentsProps={{ toolbar: { ...functionId, callIds: selectedCallIds } }}
        columns={columns}
        rows={functionCalls}
        getRowId={getCallId}
        onSelectionModelChange={(ids) => updateSelection(new Set(ids as string[]))}
        autoHeight
        checkboxSelection
        disableSelectionOnClick
      />
      <FunctionCallModal fileId={fileId} funcName={funcName} />
      <a id="file-download" style={{ display: 'none' }} href={file} download={fileName}>
        Tests file
      </a>
    </div>
  ) : (
    <GettingStarted title="This function hasn't been called yet. Follow the guide below to get started:" />
  );
};

export default memo(FunctionCalls);
