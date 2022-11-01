import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CodeIcon from '@mui/icons-material/Code';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';

import { functionsResponseSelector, loadFunctionsAction } from '@app/api/requests/functions';

const Functions = ({ fileId }: { fileId: string }) => {
  const dispatch = useDispatch();
  const allFunctions = useSelector(functionsResponseSelector);
  const functions = fileId ? allFunctions(fileId) : [];

  useEffect(() => {
    if (fileId) {
      dispatch(loadFunctionsAction(fileId));
    }
  }, [dispatch, fileId]);

  return (
    <List disablePadding={true}>
      {functions.map((func) => (
        <div key={func.name}>
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemButton component={Link} to={`/file/${fileId}/function/${func.name}`}>
              <ListItemText primary={`${func.name}`} />
            </ListItemButton>
          </ListItem>
        </div>
      ))}
    </List>
  );
};

export default Functions;
