import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import propEq from 'ramda/src/propEq';
import toString from 'ramda/src/toString';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputIcon from '@mui/icons-material/Input';
import OutboxIcon from '@mui/icons-material/Outbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { functionCallsResponseSelector } from '../../../../api/requests/function-calls';

const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  maxHeight: '80%',
  transform: 'translate(-50%, 0)',
  overflowY: 'auto',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

const FunctionCallModal = ({ funcId }: { funcId: string | undefined }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const funcCallId = searchParams.get('callId');
  const onClose = useCallback(() => {
    searchParams.delete('callId');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const allFunctionsCalls = useSelector(functionCallsResponseSelector);
  const functionCalls = funcId ? allFunctionsCalls(funcId) : [];
  const functionCall = functionCalls.find(propEq('_id', funcCallId));
  const functionCallArgs: any[] = functionCall ? JSON.parse(functionCall.args) : [];

  return <Modal open={!!funcCallId} onClose={onClose} disableScrollLock>
    <Box sx={style}>
      <Stack justifyContent="center" alignItems="flex-start">
        <Typography variant="h5" sx={{ alignSelf: 'center' }}>Function call</Typography>
        <Typography variant="subtitle2" sx={{ alignSelf: 'center' }}>
          Time: {functionCall ? new Date(functionCall.updatedAt).toLocaleString() : null}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>Arguments</Typography>
        <List disablePadding={true}>
          { functionCallArgs.map((arg: any, index: number) => (
            <ListItem key={index}>
              <ListItemIcon>
                <InputIcon />
              </ListItemIcon>
              <ListItemText primary={toString(arg)} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h6">Result</Typography>
        <ListItem>
          <ListItemIcon>
            <OutboxIcon />
          </ListItemIcon>
          <ListItemText primary={functionCall?.result} />
        </ListItem>
      </Stack>
    </Box>
  </Modal>;
};

export default FunctionCallModal;
