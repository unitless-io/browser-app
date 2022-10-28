import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import type { FunctionId } from '../../../../types/api/queryParams';
import { downloadUnitTestsFileAction } from '../../../../api/requests';

const FunctionCallsToolbar = ({ fileId, funcName, callIds }: FunctionId & { callIds: Set<string> }) => {
  const dispatch = useDispatch();
  const onDownloadClick = useCallback(
    () => dispatch(downloadUnitTestsFileAction({ fileId, funcName, callIds: Array.from(callIds) })),
    [dispatch, fileId, funcName, callIds]
  );
  const disabledDownloadUnitTests = callIds.size === 0;

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ margin: 2 }}>
      <Tooltip title={disabledDownloadUnitTests ? 'Select any calls' : ''}>
        <span>
          <Button
            disabled={disabledDownloadUnitTests}
            variant="outlined"
            size="small"
            onClick={onDownloadClick}
            endIcon={<FileDownloadIcon />}
          >
            Download unit tests
          </Button>
        </span>
      </Tooltip>
    </Stack>
  );
};

export default FunctionCallsToolbar;
