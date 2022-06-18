import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {functionsResponseSelector, loadFunctionsAction} from '../../api/requests/functions';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CodeIcon from '@mui/icons-material/Code';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import {Link} from 'react-router-dom';

const Functions = ({ fileId }: { fileId: string }) => {
  const dispatch = useDispatch();
  const allFunctions = useSelector(functionsResponseSelector);
  const functions = fileId ? allFunctions(fileId) : [];

  useEffect(() => {
    if (fileId) {
      dispatch(loadFunctionsAction(fileId));
    }
  }, [dispatch, fileId]);

  return <List disablePadding={true}>
    {functions.map((func) =>
      <div key={func._id}>
        <ListItem>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemButton
            component={Link}
            to={`/function/${func._id}`}
          >
            <ListItemText primary={`${func.name}`} />
          </ListItemButton>
        </ListItem>
      </div>)}
  </List>;
};

export default Functions;
