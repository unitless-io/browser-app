import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';

import { functionCallsResponseSelector, loadFunctionCallsAction } from '../../api/requests/function-calls';

const FunctionCalls = ({ funcId }: { funcId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFunctionsCalls = useSelector(functionCallsResponseSelector);
  const functionCalls = funcId ? allFunctionsCalls(funcId) : [];

  useEffect(() => {
    if (funcId) {
      dispatch(loadFunctionCallsAction(funcId));
    }
  }, [dispatch, funcId]);

  return <List disablePadding={true}>
    {functionCalls.map((call) =>
      <div key={call._id}>
        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary={`Args: ${call.args}, result: ${call.result}`} />
        </ListItem>
      </div>
    )}
  </List>;
};

export default FunctionCalls;
