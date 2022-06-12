import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon';
import FileIcon from '@mui/icons-material/InsertDriveFile';

import {filesResponseSelector, loadFilesAction} from '../../api/requests/files';

const Files = ({ appId }: { appId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFiles = useSelector(filesResponseSelector);
  const appFiles = appId ? allFiles(appId) : [];

  useEffect(() => {
    if (appId) {
      dispatch(loadFilesAction(appId));
    }
  }, [dispatch, appId]);

  return <List disablePadding={true}>
    {appFiles.map((file) =>
      <ListItem>
        <ListItemIcon>
          <FileIcon />
        </ListItemIcon>
        <ListItemButton>
          <ListItemText primary={`${file.path}`} />
        </ListItemButton>
      </ListItem>
    )}
  </List>;
};

export default Files;
