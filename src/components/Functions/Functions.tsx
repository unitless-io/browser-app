import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {functionsResponseSelector, loadFunctionsAction} from '../../api/requests/functions';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CodeIcon from '@mui/icons-material/Code';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

interface FunctionsProps {
  appId: string | undefined;
  fileId: string | undefined;
}

const Functions = ({ appId, fileId }: FunctionsProps) => {
  const dispatch = useDispatch();
  const allFunctions = useSelector(functionsResponseSelector);
  const functions = appId && fileId ? allFunctions({ appId, fileId }) : [];

  useEffect(() => {
    if (appId && fileId) {
      dispatch(loadFunctionsAction({ appId, fileId }));
    }
  }, [dispatch, appId, fileId]);

  return <List disablePadding={true}>
    {functions.map((func) =>
      <div key={func._id}>
        <ListItem>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemButton>
            <ListItemText primary={`${func.name}`} />
          </ListItemButton>
        </ListItem>
      </div>)}
  </List>;
};

export default Functions;
